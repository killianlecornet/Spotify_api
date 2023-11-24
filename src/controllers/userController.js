const User = require('../models/User');

// Exemple de contrôleur pour récupérer tous les utilisateurs
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error });
  }
};

module.exports = { getAllUsers };
