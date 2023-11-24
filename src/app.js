const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware CORS pour gérer les problèmes de cross-origin
app.use(cors());

// Middleware pour traiter le corps des requêtes au format JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur votre API !');
});

// Routes de l'API
app.use('/api', require('./routes/api'));

// Gestion des erreurs 404 (Not Found)
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Gestion des erreurs générales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});







// const express = require('express');
// const app = express();
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: 'localhost', // ou l'adresse de votre serveur MySQL
//     user: 'root',
//     password: '',
//     database: 'spotify'
//   });
  
//   connection.connect(err => {
//     if (err) {
//       console.error('Erreur de connexion: ' + err.stack);
//       return;
//     }
  
//     console.log('Connecté à la base de données MySQL.');
//   });
  
//   // Exemple d'une requête SELECT
//   connection.query('SELECT * FROM utilisateur', (err, results, fields) => {
//       if (err) throw err;
//       console.log(results);
//     });
    
    
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });