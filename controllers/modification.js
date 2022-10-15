const mysql=require('mysql');
const express=require("express");
const app=express();
const basedb=require("../dbconnection")

//utilitie requirement
const datawrite=require("../utilitys/updatingdb");

app.post("/update",(req,res)=>{
basedb.connect(function(err){
    if(err) throw err
    var sq=`SELECT (data) FROM frejun2 WHERE ID= ? `;
    basedb.query(sq,[req.body.id],(err,result)=>{
if(err) throw err
var array=result[0].data.split(" ");
var modifieddata=datawrite(array);
// var z=`UPDATE frujen2 SET data=$modifieddata WHERE ID=? `
// basedb.query(z,[req.body.id],(result,err)=>{
//     if(err) throw err
//     res.status(203).send()
res.status(204).send(modifieddata)
})

    })
})

module.exports=app;