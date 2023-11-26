const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db'); // Assurez-vous que ce chemin est correct
const musicRoutes = require('./src/routes/musicRoutes'); // Assurez-vous que ce chemin est correct

// Connexion à la base de données
connectDB();

const app = express();

// Middleware pour le JSON
app.use(express.json());

// Middleware pour gérer CORS
app.use(cors());

// Utilisation des routes de l'API
app.use('/api/musics', musicRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
