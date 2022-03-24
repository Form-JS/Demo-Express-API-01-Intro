const express = require('express');

// Loading env file
require('dotenv-flow').config();

// Config variable
const { PORT, NODE_ENV } = process.env;

// Init serv
const app = express();

// ...

// Start serv
app.listen(PORT, () => { console.log(`Server API up on port ${PORT} [${NODE_ENV}]`); });