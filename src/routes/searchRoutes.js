const express = require('express');
const router = express.Router();
const Artist = require('../models/artist'); // Import your Artist model
const Album = require('../models/album'); // Import your Album model
const Music = require('../models/music'); // Import your Music model
const Playlist = require('../models/playlist'); // Import your Playlist model

router.get('/', async (req, res) => {
  try {
    const query = req.query.query;
    
    // Search for artists
    const artists = await Artist.find({ name: new RegExp(query, 'i') });

    // Search for albums
    const albums = await Album.find({ title: new RegExp(query, 'i') });

    // Search for musics
    const musics = await Music.find({ title: new RegExp(query, 'i') });

    // Search for playlists
    const playlists = await Playlist.find({ title: new RegExp(query, 'i') });

    // Combine the results
    const searchResults = [
      ...artists.map((artist) => ({ ...artist.toObject(), type: 'artist' })),
      ...albums.map((album) => ({ ...album.toObject(), type: 'album' })),
      ...musics.map((music) => ({ ...music.toObject(), type: 'music' })),
      ...playlists.map((playlist) => ({ ...playlist.toObject(), type: 'playlist' })),
    ];

    res.json(searchResults);
  } catch (error) {
    console.error('Error during search:', error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
