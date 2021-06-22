const herosCtrl = {};

const db = require('../database');

herosCtrl.getAllHeros = async (req, res) => {
    const house = req.query.house || ""
    const name = req.query.name || ""
    const heros = await db.find(house, name)
    res.send(heros)
}

herosCtrl.getHeroById = async (req, res) => {
    const id = req.params.id || '000000000000'
    const response = await db.findById(id)
    res.send(response)
}


herosCtrl.addHero = async (req, res) => {
    const hero = req.body || {}
    if (hero) {
        const response = await db.insert(hero)
        res.send(response)
    }else{
        res.send({data: "Hero dont added"})
    }
}


herosCtrl.deleteHero = async (req, res) => {
    const id = req.params.id || '000000000000'
    const response = await db.delete(id)
    if (response){
        res.send(response)
    }else{
        res.send({data: "Hero dont deleted"})
    }
}


herosCtrl.updateHero = async (req, res) => {
    const hero = req.body || {}
    const id = hero._id || '000000000000'
    delete hero._id
    const response = await db.update(id, hero)
    if (response){
        res.send(response)
    }else{
        res.send({data: "Hero dont updated"})
    }
}


module.exports = herosCtrl;