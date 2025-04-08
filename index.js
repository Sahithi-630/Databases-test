const express = require ("express");

const userSchema = require ("./schema");

const mongoose = require ("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const Port = 8080;
app.use(express.js);

MONGODB_URL = process.env.MONGODB_URL;

try {
    app.get("/library",async(req,res)=>{
        return res.status(200).send({message:"Connected successfully",library});
    }) 
    
    app.get("/book",async(req,res)=>{
        return res.stutus(200).send({message:"Successfull",books});
    })
} catch (error) {
    return res.status(500).send({message:"Something went wrong"});
}


app.listen(Port,()=>{
    console.log("Server connected successfully");
})

