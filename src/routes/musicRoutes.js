const express = require('express');
const musicController = require('../controllers/musicController');
const Music = require('../models/music');
const router = express.Router();

// Récupérer toutes les musiques
router.get('/', musicController.getAllMusics);

// Récupérer toutes les musiques
router.get('/artists', musicController.getAllArtists);

// Rechercher des musiques par artiste
router.get('/search', async (req, res) => {
    try {
        const artist = req.query.artist;
        const musics = await Music.find({ artist: new RegExp(artist, 'i') });
        res.json(musics);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Récupérer une musique spécifique par ID
router.get('/:id', musicController.getMusic);

// Ajouter une nouvelle musique
router.post('/', musicController.addMusic);

// Mettre à jour une musique
router.put('/:id', musicController.updateMusic);

// Supprimer une musique
router.delete('/:id', musicController.deleteMusic);

module.exports = router;
