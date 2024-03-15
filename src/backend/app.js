

const express = require('express');
const serverRoutes = require('./routes/serverRoutes');

const app = express();

app.use(express.json());
app.use('/api/server', serverRoutes);

// Existing app setup...
