const { MongoClient } = require("mongodb");

// Connection URI
/* 
const uri =
  "mongodb+srv://sample-hostname:27017/?poolSize=20&writeConcern=majority";
   */
const DB_NAME = "herosdb"
const COLLECTION =  "heros"

// Create a new MongoClient
// const client = new MongoClient(uri);
async function main() {
    const uri = "mongodb://localhost:27017"
    // Create client
    const client = new MongoClient(uri, {useUnifiedTopology:true});
    try{
        // Connect the client to the server
        await client.connect();

        // List databases in server
        // await listDatabases(client)

        // Insert document
        /*
        await insertDocument(client, {
            name: "crazy hero",
            alter: "reloco Manly"
        })
        */

        // Insert documents
        /*
        await insertMultipleDocuments(client, [
            {
                name: "crazy hero",
                alter: "reloco Manly"
            },
            {
                name: "metastasis",
                alter: "Fel Rodriguez",
                year: 1923
            }
        ])
        */

        // Read (find) one document for name
        // await findOneDocumentByName(client, "batman")

        // Find documents with match with name passes, in both houses
        // await findDocumentsByName(client, "b")

        // Find documents by house
        // await findDocumentsByHouse(client, "marvel")

        // Find document for house and name
        // await findDocumentsByNameAndHouse(client, {nameToSearch:"b", houseToSearch:"dc"})


    } catch(e){
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);

// <<<<<<<<<<<    INSERCIONES
// Insert one document
async function insertDocument(client, newDocument){
    const response = await client.db(DB_NAME).collection(COLLECTION).insertOne(newDocument)
    console.log(`New document created with de following id: ${response.insertedId}`); 
}

// Insert many documents
async function insertMultipleDocuments(client, documentsArray){
    const response = await client.db(DB_NAME).collection(COLLECTION).insertMany(documentsArray)
    console.log(`${response.insertedCount} new documents created with the following ids`);
    console.log(response.insertedIds);
}


// <<<<<<<<<<<    LECTURAS
//Find one document by name in all houses
async function findOneDocumentByName(client, nameToSearch){
    const response = await client.db(DB_NAME).collection(COLLECTION).findOne({name: nameToSearch})

    if (response) {
        console.log(`Document founded`);
        console.log(response);
    }else{
        console.log(`Document dont founded`);
    }
}

// find all documents in both houses
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
async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases()

    console.log("Databses list:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}


// <<<<<<<<<<<    ACTUALIZACIONES