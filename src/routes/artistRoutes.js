// artistRoutes.js
const express = require('express');
const artistController = require('../controllers/artistController');
const Artist = require('../models/artist');
const router = express.Router();

// Récupérer tous les artistes
router.get('/', artistController.getAllArtists);

// Récupérer un artiste spécifique par ID
router.get('/:id', artistController.getArtist);

// Ajouter un nouvel artiste
router.post('/', artistController.addArtist);

// Mettre à jour un artiste
router.put('/:id', artistController.updateArtist);

// Supprimer un artiste
router.delete('/:id', artistController.deleteArtist);

module.exports = router;
