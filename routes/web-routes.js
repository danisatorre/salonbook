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
// Página de admin
router.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'admin.html'))
})
// Página de error
router.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'error.html'))
})

module.exports = router