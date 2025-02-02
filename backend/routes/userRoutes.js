const express = require('express');
const pool = require('../db');
const router = express.Router();

// Get all managers
router.get('/managers', async (req, res) => {
    try {
        const query = 'SELECT userId, firstName, lastName, email FROM users WHERE individualContributor = false';
        const result = await pool.query(query);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("Error fetching managers:", err.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// User Signup
router.post('/signup', async (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        const query = `
            INSERT INTO users (email, password, firstName, lastName)
            VALUES ($1, $2, $3, $4) RETURNING *`;
        const values = [email, password, firstName, lastName];

        const result = await pool.query(query, values);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
