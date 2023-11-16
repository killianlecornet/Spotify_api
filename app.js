const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost', // ou l'adresse de votre serveur MySQL
    user: 'root',
    password: '',
    database: 'spotify'
  });
  
  connection.connect(err => {
    if (err) {
      console.error('Erreur de connexion: ' + err.stack);
      return;
    }
  
    console.log('Connecté à la base de données MySQL.');
  });
  
  // Exemple d'une requête SELECT
  connection.query('SELECT * FROM utilisateur', (err, results, fields) => {
      if (err) throw err;
      console.log(results);
    });
    
    
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



