import deleteHero from './deleteHero';
import saveHero from './saveHero';
import updateHero from './updateHero';

import axios from 'axios';

const getHeros = async({house="", name=""}) => {
    const response = await axios.get("http://localhost:4000/api/heros", {params:{name, house}})
    return response
}

const getHero = async(id=0) => {
    const response = await axios.get(`http://localhost:4000/api/hero/${id}`)
    return response
}

const saveHero = async(hero={}) => {
    await axios.post("http://localhost:4000/api/hero", hero)
}


export { deleteHero, getHero, getHeros, saveHero, updateHero }