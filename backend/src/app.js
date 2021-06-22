const express = require('express');
const cors = require('cors');

// Create objects
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);


// Middlewares
app.use(cors());
app.use(express.json())

// Routes

app.use('/api', require('./routes/heros'))


module.exports = app;