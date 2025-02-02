const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });


//** GET REQUESTS **//

// Get all question data
app.get('/api/questions', async (res) => {
    try {
      const result = await pool.query('SELECT * FROM question');
      res.json(result.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

// Get all answers
app.get('/api/answers', async (req, res) => {
    try {
        const { assessmentID } = req.query;

        // Ensure assessmentID is a valid number
        if (!assessmentID || isNaN(assessmentID)) {
            return res.status(400).json({ message: "Invalid or missing assessmentID" });
        }

        const query = 'SELECT * FROM assessment WHERE assessmentId = $1';
        const params = [assessmentID];

        const result = await pool.query(query, params);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get comments for a given question and assessment
app.get('/api/comments/:assessmentId/:questionId', async (req, res) => {
    try {
        const { assessmentId, questionId } = req.params;

        if (Number.isNaN(Number(assessmentId)) || Number.isNaN(Number(questionId))) {
            return res.status(400).json({ message: "Invalid assessmentId or questionId" });
        }

        const query = 'SELECT * FROM comment WHERE assessmentId = $1 AND questionId = $2 ORDER BY date DESC';
        const params = [assessmentId, questionId];

        const result = await pool.query(query, params);

        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




//** POST REQUESTS **//

// Create a new assessment for a user
app.post('/api/assessments', async (req, res) => {
    try {
        const { userId } = req.body;
        const query = 'INSERT INTO assessment (userId) VALUES ($1) RETURNING *';
        const values = [userId];

        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Create a new comment
app.post('/api/comments/:assessmentId/:questionId', async (req, res) => {
    try {
        const { assessmentId, questionId } = req.params;
        const { userId, commentText } = req.body;

        // Ensure assessmentId and questionId are valid numbers
        if (isNaN(assessmentId) || isNaN(questionId)) {
            return res.status(400).json({ message: "Invalid assessmentId or questionId" });
        }

        const query = `
            INSERT INTO comment (questionId, assessmentId, userId, commentText) 
            VALUES ($1, $2, $3, $4)`;
        const values = [questionId, assessmentId, userId, commentText];

        await pool.query(query, values);

        res.status(201).json({ message: "Comment added successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



//** PUT REQUESTS **/

// Update the answers of an assessment
app.put('/api/assessments/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { assessmentAnswers } = req.body;

        const query = `
            UPDATE assessment 
            SET assessmentAnswers = $1 
            WHERE assessmentId = $2`;
        const values = [assessmentAnswers, id];

        const result = await pool.query(query, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Assessment not found' });
        }

        res.json({ message: 'Assessment updated successfully', updatedAssessment: result.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Edit a comment if you are the user who created it
app.put('/api/comments/:commentId', async (req, res) => {
    try {
        const { commentId } = req.params;
        const { userId, commentText } = req.body;

        if (isNaN(commentId)) {
            return res.status(400).json({ message: "Invalid commentId" });
        }

        const query = `
            UPDATE comment
            SET commentText = $1
            WHERE commentId = $2
            AND userId = $3`;
        const values = [commentText, commentId, userId];

        await pool.query(query, values);

        res.status(201).json({ message: "Comment updated successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



//** DELETE REQUESTS **/

// Delete an assessment
app.delete('/api/assessments/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const query = 'DELETE FROM assessment WHERE assessmentId = $1';
        const values = [id];

        const result = await pool.query(query, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Assessment not found' });
        }

        res.json({ message: 'Assessment deleted successfully', deletedAssessment: result.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Delete a comment
app.delete('/api/comments/:commentId', async (req, res) => {
    try {
        const { commentId } = req.params;
        const { userId, commentText } = req.body;

        if (isNaN(commentId)) {
            return res.status(400).json({ message: "Invalid commentId" });
        }

        const query = `
            DELETE FROM comment
            WHERE commentId = $1
            AND userId = $2`;
        const values = [commentId, userId];

        await pool.query(query, values);

        res.status(201).json({ message: "Comment updated successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
