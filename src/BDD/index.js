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
  
  // Exemple d'une requête INSERT
  connection.query('INSERT INTO utilisateur (email, password, pseuso) VALUES (mat@gmail.com, Test123, mat)', (err, results, fields) => {
    if (err) throw err;
    // Traiter les résultats
  });
  