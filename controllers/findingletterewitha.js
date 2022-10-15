const express=require("express");
const app=express();
const databases=require("../dbconnection")
const dtaaextraction=require("../utilitys/findingarray")
app.get("/array",(req,res)=>{
    databases.connect(function(err){
        if(err) throw err;
    var p=`SELECT (data)FROM frejun2 WHERE ID= ? `;
    console.log(req.body)
    databases.query(p,[req.body.id],(err,result)=>{
        if(err) return res.status(503).send(err);
        let arr=result[0].data.split(" ");
        let arr1=dtaaextraction(arr)
        res.status(200).send(arr1)
    })
})
})

module.exports=app;