const {getDatabases, getAllHeros} = require('../db_functions')

const herosCtrl = {};

herosCtrl.getHeros = async (req, res) => {
    const heros = await getAllHeros()
    res.send(heros)
}



module.exports = herosCtrl;