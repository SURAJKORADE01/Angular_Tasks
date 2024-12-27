const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

eobj = express();
port = 5500;

eobj.use(cors());

const URL = "mongodb://localhost:27017";
const client = new MongoClient(URL);
    
async function GetConnection()
{
    let result = await client.connect();
    let db = result.db("Batchdetails");
    return db.collection("BatchMarvellous");
}

async function GetBatchData(req,res)
{
    let collection = await GetConnection();
    let data = await collection.find().toArray();
    res.json(data);
}
eobj.get('/getBatches',GetBatchData);

function ListenServer()
{
    console.log("Server is running ON port number 5500...");
}
eobj.listen(port,ListenServer);