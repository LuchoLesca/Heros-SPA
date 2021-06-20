// Aqui definimos las distintas direciones y pasamos la función a ejecutar.
// Las funciones se crean en controllers
const { Router } = require('express');
const router = Router();

const { getAllHeros, getHeroById, addHero, updateHero, deleteHero } = require('../controllers/heros.controller')

// '/' Hace referencia a la ruta principal que lo usa, en este cas, hace referencia a /api/notes

router.route('/heros')
    .get(getAllHeros)

router.route('/hero')
    .post(addHero)

router.route('/hero/:id')
    .get(getHeroById)
    .put(updateHero)
    .delete(deleteHero)


module.exports = router;