const Playlist = require('../models/playlist');

exports.getAllPlaylist = async (req, res) => {
    try {
        const playlists = await Playlist.find().populate('artist').populate('music');
        res.json(playlists);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Modifiez la fonction getPlaylist dans votre contrôleur
exports.getPlaylist = async (req, res) => {
    try {
        // Utilisez populate pour inclure les détails de l'artiste et des musiques associées
        const playlist = await Playlist.findById(req.params.id)
            .populate({
                path: 'music'
            })
            .populate({
                path: 'artist'
            });

        if (!playlist) {
            return res.status(404).json({ message: 'Playlist non trouvé' });
        }

        res.json(playlist);
    } catch (error) {
        res.status(500).send(error.message);
    }
};



exports.addPlaylist = async (req, res) => {
    // Logique pour ajouter un nouvel playlist
    try {
        const newPlaylist = new Playlist(req.body);
        await newPlaylist.save();
        res.json(newPlaylist);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updatePlaylist = async (req, res) => {
    // Logique pour mettre à jour un playlist par ID
    try {
        const updatedPlaylist = await Playlist.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPlaylist);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deletePlaylist = async (req, res) => {
    // Logique pour supprimer un playlist par ID
    try {
        const deletedPlaylist = await Playlist.findByIdAndDelete(req.params.id);
        res.json(deletedPlaylist);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
