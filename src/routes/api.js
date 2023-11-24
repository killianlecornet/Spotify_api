// src/routes/api.js
const express = require('express');
const router = express.Router();

// Exemple de route
router.get('/exemple', (req, res) => {
  res.json({ message: 'Exemple de route API' });
  console.log('test');
});

module.exports = router;
