// Aqui definimos las distintas direciones y pasamos la función a ejecutar.
// Las funciones se crean en controllers
const { Router } = require('express');
const router = Router();

const { getAllHeros, getMarvelHeros, getDcHeros, getHeroByName, addHero, updateHero, deleteHero } = require('../controllers/heros.controller')

// '/' Hace referencia a la ruta principal que lo usa, en este cas, hace referencia a /api/notes

router.route('/')
    .get(getAllHeros)

router.route('/marvel')
    .get(getMarvelHeros)

router.route('/dc')
    .get(getDcHeros)

router.route('/hero/:name')
    .get(getHeroByName)
    .post(updateHero)
    .delete(deleteHero)

router.route('/add')
    .post(addHero)


module.exports = router;