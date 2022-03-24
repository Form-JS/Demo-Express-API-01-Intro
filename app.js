const express = require('express');
const router = require('./routes');

// Loading env file
require('dotenv-flow').config();

// Config variable
const { PORT, NODE_ENV } = process.env;

// Init serv
const app = express();

// Add routing
app.use('/api/v1', router);

// Start serv
app.listen(PORT, () => {
    console.log(`Server API up on port ${PORT} [${NODE_ENV}]`);
});