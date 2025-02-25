const express = require("express");
const multer = require("multer");
const { Pool } = require("pg");

const router = express.Router();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Multer configuration (Store file in memory before inserting into DB)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage, limits: { fileSize: 2 * 1024 * 1024 } }); // Limit file size to 2MB

// Peer feedback creation
router.post("/", upload.single("file"), async (req, res) => {
    try {
      const { assessmentId, peerName } = req.body;
  
      if (!assessmentId) {
        return res.status(400).json({ message: "Assessment ID is required" });
      }
  
      let image = null;
  
      if (req.file) {
        const { mimetype, buffer } = req.file;
        const uniqueFileName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
        const imageQuery = `
          INSERT INTO images (name, data, mimetype) 
          VALUES ($1, $2, $3) RETURNING imageId, data, mimetype;
        `;
        const imageResult = await pool.query(imageQuery, [
          uniqueFileName,
          buffer,
          mimetype
        ]);
        image = imageResult.rows[0];
        image.data = image.data.toString('base64');
      }
  
      const feedbackQuery = `
        INSERT INTO peerFeedback (assessmentId, peerName, imageId)
        VALUES ($1, $2, $3) RETURNING id;
      `;
      const feedbackResult = await pool.query(feedbackQuery, [
        assessmentId,
        peerName || null,
        image ? image.imageid : null
      ]);
  
      res.status(201).json({
        feedbackId: feedbackResult.rows[0].id,
        assessmentId,
        peerName,
        image
      });
    } catch (error) {
      console.error("Error uploading file and saving feedback:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });  


// Peer Feedback Retrieval
router.get('/:assessId', async (req, res) => {
    try {
        const { assessId } = req.params;
        const query = `
            SELECT p.id AS feedbackId, p.assessmentId, p.peerName, 
                   i.imageId, i.mimetype, i.data
            FROM peerFeedback p
            LEFT JOIN images i ON p.imageId = i.imageId
            WHERE p.assessmentId = $1;
        `;

        const result = await pool.query(query, [assessId]);

        const feedback = result.rows.map(row => ({
            feedbackId: row.feedbackid,
            assessmentId: row.assessmentid,
            peerName: row.peername,
            image: row.imageid ? {
                imageId: row.imageid,
                mimetype: row.mimetype,
                data: row.data.toString('base64')
            } : null
        }));

        res.status(200).json(feedback);
    } catch (error) {
        console.error("Error retrieving peer feedback:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Delete peer feedback
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM peerFeedback WHERE id = $1', [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Feedback not found' });
        }

        res.json({ message: 'Feedback deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;
