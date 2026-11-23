const path = require('path')
const express = require('express')

const router = express.Router()

// Página de inicio
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})
// Página de login
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'login.html'))
})
// Página de registro
router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'registro.html'))
})
// Página de mis reservas
router.get('/mis-reservas', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'mis-reservas.html'))
})
// Página de reservas
router.get('/reservas', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'reservar.html'))
})
// Página de detalle de un servicio
router.get('/servicios/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'servicio.html'))
})
// Si no se introduce el id del servicio redireccionamos a los servicios de home
router.get('/servicios', (req, res) => {
  res.redirect('/#servicios')
})
// Página de admin
router.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'admin.html'))
})
// Página de error
router.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'error.html'))
})
// Redireccionar a home si no existe la ruta
router.use((req, res) => {
  res.redirect('/')
});

module.exports = router