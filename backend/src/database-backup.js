const { MongoClient, ObjectID } = require("mongodb");

const DB_NAME = "herosdb"
const COLLECTION =  "heros"
const URI = "mongodb://localhost:27017"

const client = new MongoClient(URI, {useUnifiedTopology:true});

const db_functions = {}

async function main() {
    try{
        await client.connect()
    } catch(e){
        console.error(e);
    } finally {
        await client.close();
    }
}

db_functions.getDatabases = async() => {
    try{
        await client.connect()
        const databasesList = await client.db().admin().listDatabases()
        if(databasesList){
            return databasesList.databases.map(db => db.name)
        }
        return []
    } catch(e){
        console.error(e);
    } finally {
        await client.close();
    }
}



module.exports = db_functions

// main().catch(console.error);

// <<<<<<<<<<<    INSERCIONES
// Insert one document
// eslint-disable-next-line
async function insertDocument(client, newDocument){
    const response = await client.db(DB_NAME).collection(COLLECTION).insertOne(newDocument)
    console.log(`New document created with de following id: ${response.insertedId}`); 
}

// Insert many documents
// eslint-disable-next-line
async function insertMultipleDocuments(client, documentsArray){
    const response = await client.db(DB_NAME).collection(COLLECTION).insertMany(documentsArray)
    console.log(`${response.insertedCount} new documents created with the following ids`);
    console.log(response.insertedIds);
}


// <<<<<<<<<<<    LECTURAS

//Find one document by name in all houses
// eslint-disable-next-line
async function findDocumentById(client, id){
    const idToCompare = ObjectID(id)
    const response = await client.db(DB_NAME).collection(COLLECTION).findOne({_id: idToCompare})

    if (response) {
        console.log(`Document founded`);
        console.log(response);
    }else{
        console.log(`Document dont founded`);
    }
}

//Find one document by name in all houses
// eslint-disable-next-line
async function findOneDocumentByName(client, nameToSearch){
    const response = await client.db(DB_NAME).collection(COLLECTION).findOne({name: nameToSearch})

    if (response) {
        console.log(`Document founded`);
        console.log(response._id.toString());
    }else{
        console.log(`Document dont founded`);
    }
}

// find all documents in both houses
// eslint-disable-next-line
async function findDocumentsByName(client, nameToSearch){
    const cursor = await client.db(DB_NAME).collection(COLLECTION).find({name: {$regex: nameToSearch}}).sort({name: 1})

    const results = await cursor.toArray()

    if (results.length > 0) {
        console.log(`Found heros that match with name ${nameToSearch}`);
        results.forEach((result, i) => {
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   house: ${result.house}`);
            console.log();
        });
    } else {
        console.log(`No heros matching with ${nameToSearch} founded`);
    }
}

// find all documents in house
// eslint-disable-next-line
async function findDocumentsByHouse(client, houseToSearch){
    const cursor = await client.db(DB_NAME).collection(COLLECTION).find({house: houseToSearch}).sort({name: 1})

    const results = await cursor.toArray()

    if (results.length > 0) {
        console.log(`Found heros with house ${houseToSearch}`);
        results.forEach((result, i) => {
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
            console.log();
        });
    } else {
        console.log(`No heros from ${houseToSearch} founded`);
    }
}

// find all documents that match with name in gived house
// eslint-disable-next-line
async function findDocumentsByNameAndHouse(client, {nameToSearch="", houseToSearch=""}){
    const cursor = await client.db(DB_NAME).collection(COLLECTION).find({
        house: houseToSearch,
        name: {$regex: nameToSearch}
    }).sort({name: 1})

    const results = await cursor.toArray()

    if (results.length > 0) {
        console.log(`Found heros with house ${houseToSearch} and name ${nameToSearch}`);
        results.forEach((result, i) => {
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
            console.log()
        });
    } else {
        console.log(`No heros from ${houseToSearch} founded`);
    }
}

// List all Databases
// eslint-disable-next-line
async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases()

    console.log("Databses list:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}


// <<<<<<<<<<<    ACTUALIZACIONES

// Update single document
// eslint-disable-next-line
async function updateOneDocumentByName(client, nameToSearch, updatedDocument){
    const result = await client.db(DB_NAME).collection(COLLECTION).updateOne({name: nameToSearch}, {$set: updatedDocument})

    console.log(`${result.matchedCount} document(s) matched the query criteria`)
    console.log(`${result.modifiedCount} document(s) was/where updated`)
}


// <<<<<<<<<<<    DELETE

// Delete single document
// eslint-disable-next-line
async function deleteDocumentByName(client, nameToDelete){
    const response = await client.db(DB_NAME).collection(COLLECTION).deleteOne({ name: nameToDelete })
    console.log(response)
}

// eslint-disable-next-line
async function deleteDocumentById(client, id){
    const idToCompare = ObjectID(id)
    const response = await client.db(DB_NAME).collection(COLLECTION).deleteOne({ _id: idToCompare })
    console.log(response)

}
