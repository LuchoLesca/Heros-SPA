const herosData = require("data/herosData.json");

const getHeros = ({heroName, heroHouse}) => {
    if (!heroHouse) {
        heroHouse = "dc/marvel"
    }
    if(!heroName){
        return herosData.filter(hero => heroHouse.includes(hero.house.toLowerCase()))
    }else{
        return herosData.filter(hero => (heroHouse.toLowerCase().includes(hero.house) && hero.name.includes(heroName.trim().toLowerCase())))
    }
}

export default getHeros;