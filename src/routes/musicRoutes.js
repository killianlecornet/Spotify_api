const express = require('express');
const musicController = require('../controllers/musicController');
const Music = require('../models/music');
const router = express.Router();

// Récupérer toutes les musiques
router.get('/', musicController.getAllMusics);

// Récupérer toutes les musiques
router.get('/artists', musicController.getAllArtists);

// Récupérer une musique spécifique par ID
router.get('/:id', musicController.getMusic);

// Ajouter une nouvelle musique
router.post('/', musicController.addMusic);

// Mettre à jour une musique
router.put('/:id', musicController.updateMusic);

// Supprimer une musique
router.delete('/:id', musicController.deleteMusic);

module.exports = router;
