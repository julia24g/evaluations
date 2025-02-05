const express = require('express');
const pool = require('../db'); // Import the database connection
const router = express.Router();

// Get all answers for a given assessment
router.get('/:id/answers', async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || isNaN(id)) {
            return res.status(400).json({ message: "Invalid or missing assessmentID" });
        }

        const query = 'SELECT assessmentAnswers FROM assessment WHERE assessmentId = $1';
        const result = await pool.query(query, [id]);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Create a new assessment
router.post('/', async (req, res) => {
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

// ✅ Update an assessment
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { assessmentAnswers } = req.body;

        const query = `UPDATE assessment SET assessmentAnswers = $1 WHERE assessmentId = $2`;
        const result = await pool.query(query, [assessmentAnswers, id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Assessment not found' });
        }

        res.json({ message: 'Assessment updated successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// ✅ Delete an assessment
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM assessment WHERE assessmentId = $1', [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Assessment not found' });
        }

        res.json({ message: 'Assessment deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get all assessment data available to a user (manager/director/individual contributor)
router.get('/', async (req, res) => {
    try {
        const { userId } = req.query;

        if (!userId || isNaN(userId)) {
            return res.status(400).json({ message: "Invalid or missing userId" });
        }

        const query = `
            WITH RECURSIVE subordinates AS (
                SELECT userId FROM users WHERE userId = $1
                UNION ALL
                SELECT u.userId FROM users u
                INNER JOIN subordinates s ON u.managerId = s.userId
            )
            SELECT a.assessmentId, a.userId, a.status, a.date
            FROM assessment a
            JOIN subordinates s ON a.userId = s.userId;
        `;

        const { rows } = await pool.query(query, [userId]);

        res.status(200).json(rows);

    } catch (err) {
        console.error("Error fetching assessment data:", err.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;