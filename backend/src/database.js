const { MongoClient, ObjectID } = require("mongodb");

const DB_NAME = "herosdb"
const COLLECTION =  "heros"
const URI = "mongodb://localhost:27017"
// const URI = "mongodb://mongo:27017"

const client = new MongoClient(URI, { 
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db_functions = {}

const main = async() => {
    try{
        await client.connect()
    } catch(e){
        console.error(e);
    }
}

main()

db_functions.find = async(houseToSearch="", nameToSearch="") => {
    try{
        if (houseToSearch === ""){
            const cursor = await client.db(DB_NAME).collection(COLLECTION).find({name: {$regex: nameToSearch}}).sort({name: 1})
            const results = await cursor.toArray()
            if (results.length > 0) {
                return results.map(result => result);
            }
            return []

        }else{
            const cursor = await client.db(DB_NAME).collection(COLLECTION).find({
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

db_functions.findById = async(id=0) => {
    try{
        const response = await client.db(DB_NAME).collection(COLLECTION).findOne({_id: ObjectID(id)})
        if (response) {
            return response
        }
        return []
    } catch(e){
        console.error(e);
    }
}

db_functions.insert = async(hero={}) => {
    try{
        const response = await client.db(DB_NAME).collection(COLLECTION).insertOne(hero)
        return response
    } catch(e){
        console.error(e);
    }
}

db_functions.delete = async(id=0) => {
    try{
        const response = await client.db(DB_NAME).collection(COLLECTION).deleteOne({_id: ObjectID(id)})
        return response
    } catch(e){
        console.error(e);
    }
}

db_functions.update = async(id, hero={}) => {
    try{
        const response = await client.db(DB_NAME).collection(COLLECTION).updateOne({_id: ObjectID(id)}, {$set: {...hero}})
        return response
    } catch(e){
        console.error(e);
    }
}


module.exports = db_functions