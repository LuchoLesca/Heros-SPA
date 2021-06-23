const express = require('express');
const cors = require('cors');
const herosRoutes = require('./routes/heros')

// Create objects
const app = express();

// Settings
app.set('port', 4000);


// Middlewares
app.use(cors());
app.use(express.json())


// Routes

app.use('/api', herosRoutes)


module.exports = app;