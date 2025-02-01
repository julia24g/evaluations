const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); // Allows requests from your React frontend
app.use(express.json()); // Parses JSON request bodies

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express API' });
});

// Get categories

// Get answers

// Update answer


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
