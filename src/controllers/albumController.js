const Album = require('../models/album');

exports.getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find();
        res.json(albums);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getAlbum = async (req, res) => {
    // Logique pour récupérer un albume par ID
};

exports.addAlbum = async (req, res) => {
    // Logique pour ajouter un nouvel albume
};

exports.updateAlbum = async (req, res) => {
    // Logique pour mettre à jour un albume par ID
};

exports.deleteAlbum = async (req, res) => {
    // Logique pour supprimer un albume par ID
};
