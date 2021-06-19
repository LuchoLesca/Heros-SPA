// Aqui definimos las distintas direciones y pasamos la función a ejecutar.
// Las funciones se crean en controllers
const { Router } = require('express');
const router = Router();

// const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notes.controller')
const { getHeros } = require('../controllers/heros.controller')

// '/' Hace referencia a la ruta principal que lo usa, en este cas, hace referencia a /api/notes

router.route('/')
    .get(getHeros)


/*
router.route('/')
    .get(getNotes)
    .post(createNote)

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)
*/

module.exports = router;