import axios from 'axios';

const getHeros = async({house="", name=""}) => {
    try{
        const response = await axios.get("http://localhost:4000/api/heros", {params:{name, house}})
        return response
    }catch(e){
        return null
    }
}

const getHero = async(id) => {
    try{
        const response = await axios.get(`http://localhost:4000/api/hero/${id}`)
        return response
    }catch(e){
        return null
    }
}

const saveHero = async(hero={}) => {
    try{
        await axios.post("http://localhost:4000/api/hero", hero)
    }catch(e){
        console.error("Save Error")
    }
}

const deleteHero = async(id) => {
    try{
        await axios.delete(`http://localhost:4000/api/hero/${id}`)
    }catch(e){
        console.error("Delete Error")
    }
}

const updateHero = async(hero={}) => {
    try{
        await axios.put(`http://localhost:4000/api/hero`, hero)
    }catch(e){
        console.error("Update Error")
    }
}

export { deleteHero, getHero, getHeros, saveHero, updateHero }