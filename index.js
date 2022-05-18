// NPM Packages
require('dotenv').config();
const express = require('express');

// Consts
const app = express();
const port = process.env.PORT;

// middlewares
app.use(express.json());

// routes
app.use('/api/v1/data', require('./routes'));

// Server => Listener
const server = app.listen(port, () => console.log(`Crypto api server running on port ${port}`));
