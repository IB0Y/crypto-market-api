// NPM Packages
const express = require('express');

// Router
const router = express.Router();

// Controller modules
const { bySymbol } = require('../controllers');
// routes
router.route('/symbol/:symbol').get(bySymbol);

module.exports = router;
   
