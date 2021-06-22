const { Router } = require('express');
const router = Router();

const { getAllHeros, getHeroById, addHero, updateHero, deleteHero } = require('../controllers/heros.controller')

router.route('/heros')
    .get(getAllHeros)

router.route('/hero')
    .post(addHero)
    .put(updateHero)

router.route('/hero/:id')
    .get(getHeroById)
    .delete(deleteHero)


module.exports = router;