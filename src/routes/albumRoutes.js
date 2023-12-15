// albumRoutes.js
const express = require('express');
const albumController = require('../controllers/albumController');
const Album = require('../models/album');
const router = express.Router();

// Récupérer tous les albumes
router.get('/', albumController.getAllAlbums);

// Récupérer un albume spécifique par ID
router.get('/:id', albumController.getAlbum);

// Ajouter un nouvel albume
router.post('/', albumController.addAlbum);

// Mettre à jour un albume
router.put('/:id', albumController.updateAlbum);

// Supprimer un albume
router.delete('/:id', albumController.deleteAlbum);

module.exports = router;
