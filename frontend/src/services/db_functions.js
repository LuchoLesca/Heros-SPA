import axios from 'axios';

const URI = `http://localhost:4000/api`

const getHeros = async({house="", name=""}) => {
    try{
        const response = await axios.get(`${URI}/heros`, {params:{name, house}})
        return response
    }catch(e){
        return null
    }
}

const getHero = async(id) => {
    try{
        const response = await axios.get(`${URI}/hero/${id}`)
        return response
    }catch(e){
        return null
    }
}

const saveHero = async(hero={}) => {
    try{
        await axios.post(`${URI}/hero`, hero)
    }catch(e){
        console.error("Save Error")
    }
}

const deleteHero = async(id) => {
    try{
        await axios.delete(`${URI}/hero/${id}`)
    }catch(e){
        console.error("Delete Error")
    }
}

const updateHero = async(hero={}) => {
    try{
        await axios.put(`${URI}/hero`, hero)
    }catch(e){
        console.error("Update Error")
    }
}

export { deleteHero, getHero, getHeros, saveHero, updateHero }