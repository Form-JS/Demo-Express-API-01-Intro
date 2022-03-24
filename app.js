const express = require('express');
const router = require('./routes');

// Loading env file
require('dotenv-flow').config();

// Config variable
const { PORT, NODE_ENV } = process.env;

// Initialisation du serveur
const app = express();

// Ajout d'un Middleware pour gérer les données JSON reçu
app.use(express.json());

// Ajout du system de routing
app.use('/api/v1', router);

// Demarrage du serveur API
app.listen(PORT, () => {
    console.log(`Server API up on port ${PORT} [${NODE_ENV}]`);
});