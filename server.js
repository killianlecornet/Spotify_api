const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./src/config/db');

// Importation des routes
const musicRoutes = require('./src/routes/musicRoutes'); 
const artistRoutes = require('./src/routes/artistRoutes');
const albumRoutes = require('./src/routes/albumRoutes');
const playlistRoutes = require('./src/routes/playlistRoutes');
const searchRoutes = require('./src/routes/searchRoutes');

// Connexion à la base de données
connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "https://spotify-front-liard.vercel.app", // Remplacez par l'URL de votre front-end
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

// Middleware pour le JSON
app.use(express.json());

// Middleware pour gérer CORS
app.use(cors());

// Utilisation des routes de l'API
app.use('/api/musics', musicRoutes);
app.use('/api/artist', artistRoutes);
app.use('/api/album', albumRoutes);
app.use('/api/playlist', playlistRoutes);
app.use('/api/search', searchRoutes);

// État global de la lecture
let currentTrack = null; // L'ID ou les détails de la musique actuellement jouée
let playbackState = { currentTime: 0 }; // L'état de lecture actuel (position de la musique)

// Gestion des connexions WebSocket
io.on('connection', (socket) => {

    // Envoyer l'état actuel de la musique et de lecture au client qui vient de se connecter
    if (currentTrack) {
        socket.emit('musicChange', currentTrack);
    }
    socket.emit('playbackUpdate', playbackState);

    socket.on('play', () => {
        io.emit('play');
    });

    socket.on('pause', () => {
        io.emit('pause');
    });

    socket.on('changeMusic', (track) => {
        currentTrack = track; // Mettre à jour la musique actuellement jouée
        io.emit('musicChange', currentTrack); // Informer tous les clients
    });

    socket.on('updatePlayback', (state) => {
        playbackState = state;
        socket.broadcast.emit('playbackUpdate', playbackState); // Informer les autres clients
    });

    socket.on('disconnect', () => {
    });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT);
