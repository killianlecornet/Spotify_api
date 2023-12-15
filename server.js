const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db'); 
const musicRoutes = require('./src/routes/musicRoutes'); 
const artistRoutes = require('./src/routes/artistRoutes'); 

// Connexion à la base de données
connectDB();

const app = express();

// Middleware pour le JSON
app.use(express.json());

// Middleware pour gérer CORS
app.use(cors());

// Utilisation des routes de l'API
app.use('/api/musics', musicRoutes);
app.use('/api/artist', artistRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
