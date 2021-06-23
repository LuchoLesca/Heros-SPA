const { MongoClient, ObjectID } = require("mongodb");
const data = require('../data/heros.json')

// Constants
// const HOST_NAME = "localhost"
const HOST_NAME = "mongo-db"
const PORT = 27017
const URI = `mongodb://${HOST_NAME}:${PORT}`
const DB_NAME = "herosdb"
const COLLECTION_NAME =  "heros"

// Mongodb options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10,
    bufferMaxEntries: 0
  };


const connection = async() => {
    // Return connection with collection to work
    try{
        const client = new MongoClient(URI, options);

        await client.connect()
        const db = client.db(DB_NAME)
        const collection = db.collection(COLLECTION_NAME)
        return collection
    } catch(e){
        console.error(e);
    }
}


const uploadInitHeros = async() => {
    const db = await connection()
    await db.insertMany(data)
}

uploadInitHeros()

const db_functions = {}

db_functions.find = async(houseToSearch, nameToSearch) => {
    try{
        const db = await connection()
        if (houseToSearch === ""){
            const cursor = await db.find({name: {$regex: nameToSearch}}).sort({name: 1})
            const results = await cursor.toArray()
            if (results.length > 0) {
                return results.map(result => result);
            }
            return []

        }else{
            const cursor = await db.find({
                house: houseToSearch,
                name: {$regex: nameToSearch}
            }).sort({name: 1})
            const results = await cursor.toArray()
            if (results.length > 0) {
                return results.map(result => result);
            }
            return []
        }

    } catch(e){
        console.error(e);
    }
}

db_functions.findById = async(id) => {
    try{
        const db = await connection()
        const response = await db.findOne({_id: ObjectID(id)})
        if (response) {
            return response
        }
        return []
    } catch(e){
        console.error(e);
    }
}

db_functions.insert = async(hero) => {
    try{
        const db = await connection()
        const response = await db.insertOne(hero)
        return response
    } catch(e){
        console.error(e);
    }
}

db_functions.delete = async(id) => {
    try{
        const db = await connection()
        const response = await db.deleteOne({_id: ObjectID(id)})
        return response
    } catch(e){
        console.error(e);
    }
}

db_functions.update = async(id, hero) => {
    try{
        const db = await connection()
        const response = await db.updateOne({_id: ObjectID(id)}, {$set: {...hero}})
        return response
    } catch(e){
        console.error(e);
    }
}


module.exports = db_functions
