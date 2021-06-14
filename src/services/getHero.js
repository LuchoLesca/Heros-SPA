import getHeros from "./getHeros";

const getHero = (name) => {
    const hero = getHeros({heroName:name})[0]
    return hero
}

export default getHero;