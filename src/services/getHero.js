const herosData = require('data/herosData.json')

const getHero = (name) => {
    const hero = herosData.find(hero => (hero.name.trim().toLowerCase() === name.trim().toLowerCase()))
    return hero
}

export default getHero;