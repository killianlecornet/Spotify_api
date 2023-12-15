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
};

exports.addArtist = async (req, res) => {
    // Logique pour ajouter un nouvel artiste
};

exports.updateArtist = async (req, res) => {
    // Logique pour mettre à jour un artiste par ID
};

exports.deleteArtist = async (req, res) => {
    // Logique pour supprimer un artiste par ID
};
