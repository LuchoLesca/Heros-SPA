const herosCtrl = {};

const db = require('../db_functions');

herosCtrl.getAllHeros = async (req, res) => {
    const house = req.query.house || ""
    const name = req.query.name || ""
    const heros = await db.find(house, name)
    res.send(heros)
}

herosCtrl.getHeroById = async (req, res) => {
    const id = req.params.id || 'putWhatEverYouWantHere'
    const response = await db.findById(id)
    res.send(response)
}


herosCtrl.addHero = async (req, res) => {
    const hero = req.body || {}
    if (hero) {
        await db.insert(hero)
        console.log("agregado")
    }else{
        console.log("no agregado")
    }
}


herosCtrl.updateHero = async (req, res) => {
    const id = req.params.id || 0
    const hero = req.body || {}
    await db.update(id, hero)
    res.send("Hero updated")
}


herosCtrl.deleteHero = async (req, res) => {
    const id = req.params.id || 0
    await db.delete(id)
    res.send("Hero deleted")
}




module.exports = herosCtrl;