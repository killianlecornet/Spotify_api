// src/routes/api.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Exemple de route
router.get('/exemple', (req, res) => {
  res.json({ message: 'Exemple de route API' });
});

// Exemple de route
router.get('/exemple', (req, res) => {
    res.json({ message: 'Exemple de route API' });
});

// Route pour récupérer tous les utilisateurs
router.get('/users', userController.getAllUsers);

module.exports = router;
