const mysql=require('mysql');
const express=require("express");
const app=express();
const basedb=require("../dbconnection")

//utilitie requirement
const datawrite=require("../utilitys/updatingdb");

app.post("/update",(req,res)=>{
basedb.connect(function(err){
    if(err) throw err
    var sq=`SELECT (DATA) FROM frejun2 WHERE ID= ? `;
    basedb.query(sq,[req.body.id],async(err,result)=>{
if(err) throw err
var array=await result[0].DATA.split(" ");
var modifieddata=await datawrite(array);
var z=`UPDATE frejun2 SET DATA="${modifieddata}" WHERE ID=?`

basedb.query(z,[req.body.id],(err,ddata)=>{
if(err) throw err;
res.status(200).send(ddata)
})
res.status(204).send(modifieddata)
})

    })
})

module.exports=app;