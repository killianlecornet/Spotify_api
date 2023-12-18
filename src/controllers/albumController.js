const Album = require('../models/album');

exports.getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find().populate('artist').populate('music');
        res.json(albums);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Modifiez la fonction getAlbum dans votre contrôleur
exports.getAlbum = async (req, res) => {
    try {
        // Utilisez populate pour inclure les détails de l'artiste et des musiques associées
        const album = await Album.findById(req.params.id)
            .populate({
                path: 'music',
                populate: {
                    path: 'artist',
                    model: 'Artist'
                }
            });

        if (!album) {
            return res.status(404).json({ message: 'Album non trouvé' });
        }

        res.json(album);
    } catch (error) {
        res.status(500).send(error.message);
    }
};



exports.addAlbum = async (req, res) => {
    // Logique pour ajouter un nouvel album
    try {
        const newAlbum = new Album(req.body);
        await newAlbum.save();
        res.json(newAlbum);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateAlbum = async (req, res) => {
    // Logique pour mettre à jour un album par ID
    try {
        const updatedAlbum = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedAlbum);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteAlbum = async (req, res) => {
    // Logique pour supprimer un album par ID
    try {
        const deletedAlbum = await Album.findByIdAndDelete(req.params.id);
        res.json(deletedAlbum);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
