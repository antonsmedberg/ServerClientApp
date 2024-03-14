const express = require('express');
const { setupServer } = require('../controllers/serverController');

const router = express.Router();

// Route to setup WebSocket server
router.post('/setup', setupServer);

module.exports = router;
