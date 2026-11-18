require('dotenv').config()

const path = require('path')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT;
const mongodbHost = process.env.MONGODB_URL_MOVIES;
const mongoUser = process.env.MONGO_USER;
const mongoPwd = process.env.MONGO_PASSWORD;
const mongodbURL = `mongodb://${mongoUser}:${mongoPwd}@${mongodbHost}`;

// Middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// Rutas de la API
app.use('/api/auth', require('./routes/auth-api'))
app.use('/api/servicios', require('./routes/servicios-api'))

// Conexión a MongoDB: el servidor solo arranca si la conexión funciona
async function start() {
  try {
    // Evitamos aceptar peticiones hasta que MongoDB este disponible
    await mongoose.connect(mongodbURL)
    app.listen(PORT, () => {
      console.log(`Servidor alojado en http://localhost:${PORT}`);
      console.log(`Conectado a MongoDB en ${mongodbHost}`);
    })
  } catch (error) {
    console.error('ERROR: No se ha podido conectar a MongoDB:', error.message)
    process.exit(1)
  }
}

start()