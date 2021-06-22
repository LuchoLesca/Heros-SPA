import axios from 'axios';

// const URL = "http://backend"
const PORT = 4000
const URL = "http://localhost"

const getHeros = async({house="", name=""}) => {
    try{
        const response = await axios.get(`${URL}:${PORT}/api/heros`, {params:{name, house}})
        return response
    }catch(e){
        return null
    }
}

const getHero = async(id) => {
    try{
        const response = await axios.get(`${URL}:${PORT}/api/hero/${id}`)
        return response
    }catch(e){
        return null
    }
}

const saveHero = async(hero={}) => {
    try{
        await axios.post(`${URL}:${PORT}/api/hero`, hero)
    }catch(e){
        console.error("Save Error")
    }
}

const deleteHero = async(id) => {
    try{
        await axios.delete(`${URL}:${PORT}/api/hero/${id}`)
    }catch(e){
        console.error("Delete Error")
    }
}

const updateHero = async(hero={}) => {
    try{
        await axios.put(`${URL}:${PORT}/api/hero`, hero)
    }catch(e){
        console.error("Update Error")
    }
}

export { deleteHero, getHero, getHeros, saveHero, updateHero }