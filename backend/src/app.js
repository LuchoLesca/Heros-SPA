// Es el encargado de tener tan solo el código del servidor, en este caso, código de framework
// Aqui no se iniciará, solo se definirá

const express = require('express');
const cors = require('cors');  // Nos permitirá intercambiar datos entre servidores (front y back), sin errores

// Create objects
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);


// Middlewares
app.use(cors());
app.use(express.json())  // para que el servidor pueda entender formatos json y ciertos strings


// Routes (definimos las urls que la app de react podrá visitar/solicitar/acceder)

app.use('/api/heros', require('./routes/heros'))


module.exports = app;