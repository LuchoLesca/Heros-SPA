const herosCtrl = {};

const { getDatabases, findAll, findMultiByHouseAndName, findByHouse, findByName, findById, insertHero, updateHero, deleteHero } = require('../db_functions');

herosCtrl.getAllHeros = async (req, res) => {
    const heros = await findAll()
    res.send(heros)
}

herosCtrl.getMarvelHeros = async (req, res) => {
    const heros = await findByHouse("marvel")
    res.send(heros)
}

herosCtrl.getDcHeros = async (req, res) => {
    const heros = await findByHouse("dc")
    res.send(heros)
}

herosCtrl.getHeroByName = async (req, res) => {
    const hero = await findByName(name)
    res.send("")
}

herosCtrl.addHero = async (req, res) => {
    await insertHero(hero)
    res.send("")
}

herosCtrl.updateHero = async (req, res) => {
    await updateHero(id, hero)
    res.send("")
}

herosCtrl.deleteHero = async (req, res) => {
    await deleteHero(id)
    res.send("")
}




module.exports = herosCtrl;