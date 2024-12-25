const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

eobj = express();
const port = 6700;

eobj.use(cors());
eobj.use(express.json());

const URL = "mongodb://localhost:27017";
const client = new MongoClient(URL);

function StartServer()
{
    console.log("Server is running ON port number 6700...");
}
eobj.listen(port,StartServer);

async function GetConnection()
{
    let result = await client.connect();
    let data = result.db("MarvellousData");
    return data.collection("BatchesData");
}

// Read the data from database
async function ReadData(req,res)
{
    let collection = await GetConnection();
    let data = await collection.find().toArray();
    res.json(data);
}
eobj.get('/getbatches',ReadData);

// Insert data into database
async function InsertData(req,res)
{   
    const {Name, Duration, Fees} = req.body;
    let collection = await GetConnection();
    let result = await collection.insertOne({Name, Duration, Fees});

    let data = await collection.find().toArray();
    res.json(data);
}
eobj.post('/insertdata',InsertData);

// Update data from database
async function UpdateData(req,res)
{
    const {Name, selectData, changeData} = req.body;

    let collection = await GetConnection();
    let result = await collection.updateOne({"Name" : Name},{$set : {[selectData] : changeData}});

    let data = await collection.find().toArray();
    res.json(data);
}
eobj.post('/updatedata',UpdateData);

// Delete data from database
async function DeleteData(req,res)
{
    const {BatchName} = req.body;

    let collection = await GetConnection();
    let result = await collection.deleteOne({"Name" : BatchName});
    
    let data = await collection.find().toArray();
    res.json(data);
}

eobj.post('/deletedata',DeleteData)