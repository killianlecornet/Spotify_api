const Music = require('../models/music');

// Récupérer toutes les musiques
exports.getAllMusics = async (req, res) => {
    try {
        const musics = await Music.find({});
        res.json(musics);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getAllArtists = async (req, res) => {
    try {
        const musics = await Music.find({}).distinct('artist');
        res.json(musics);
    } catch (error) {
        res.status(500).send("Erreur lors de la récupération des artistes : " + error.message);
    }
}

// Récupérer une musique spécifique par ID
exports.getMusic = async (req, res) => {
    try {
        const music = await Music.findById(req.params.id);
        if (!music) {
            return res.status(404).send('Musique non trouvée');
        }
        res.json(music);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Ajouter une nouvelle musique
exports.addMusic = async (req, res) => {
    try {
        const newMusic = new Music({
            title: req.body.title,
            artist: req.body.artist,
            genre: req.body.genre,
            url: req.body.url
        });
        await newMusic.save();
        res.status(201).json(newMusic);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Mettre à jour une musique
exports.updateMusic = async (req, res) => {
    try {
        const music = await Music.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!music) {
            return res.status(404).send('Musique non trouvée');
        }
        res.json(music);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Supprimer une musique
exports.deleteMusic = async (req, res) => {
    try {
        const music = await Music.findByIdAndDelete(req.params.id);
        if (!music) {
            return res.status(404).send('Musique non trouvée');
        }
        res.send('Musique supprimée avec succès');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
