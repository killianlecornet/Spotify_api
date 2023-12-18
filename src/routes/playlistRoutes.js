// playlistRoutes.js
const express = require('express');
const playlistController = require('../controllers/playlistController');
const router = express.Router();

// Récupérer tous les playlist
router.get('/', playlistController.getAllPlaylist);

// Récupérer un playlist spécifique par ID
router.get('/:id', playlistController.getPlaylist);

// Ajouter un nouvel playlist
router.post('/', playlistController.addPlaylist);

// Mettre à jour un playlist
router.put('/:id', playlistController.updatePlaylist);

// Supprimer un playlist
router.delete('/:id', playlistController.deletePlaylist);

module.exports = router;
