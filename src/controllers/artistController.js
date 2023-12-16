const Artist = require('../models/artist');

exports.getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getArtist = async (req, res) => {
    // Logique pour récupérer un artiste par ID
    try {
        const artist = await Artist.findById(req.params.id);
        res.json(artist);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.addArtist = async (req, res) => {
    // Logique pour ajouter un nouvel artiste
    try {
        const newArtist = new Artist(req.body);
        await newArtist.save();
        res.json(newArtist);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateArtist = async (req, res) => {
    // Logique pour mettre à jour un artiste par ID
    try {
        const updatedArtist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedArtist);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteArtist = async (req, res) => {
    // Logique pour supprimer un artiste par ID
    try {
        const deletedArtist = await Artist.findByIdAndDelete(req.params.id);
        res.json(deletedArtist);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
