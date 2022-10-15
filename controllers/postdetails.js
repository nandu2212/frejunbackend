const connection=require("../dbconnection");
const express=require("express");
const app=express();

app.get("/details",(req,res)=>{
connection.connect(function(err){
    if(err) throw err;
var sql="SELECT *FROM frejun2";
connection.query(sql,(err,result)=>{
    if(err) throw err;
    res.status(200).json(result)
})
})
})
module.exports=app