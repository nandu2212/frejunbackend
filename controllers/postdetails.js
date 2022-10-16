const connection=require("../dbconnection");
const express=require("express");
const app=express();
//pagination
const pagination=require('../utilitys/pagination')
app.get("/details",(req,res)=>{
connection.connect(function(err){
    if(err) throw err;
var sql="SELECT *FROM frejun2";
connection.query(sql,async(err,result)=>{
    if(err) throw err;
    let { page, limit } = req.query
    if (!page) page = 1
    if (!limit) limit = 5
   
    const product =await pagination(result, page, limit)
    res.status(200).json(result)
})
})
})
module.exports=app