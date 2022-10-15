const express=require('express');
var mysql=require('mysql');
const multer=require('multer')
const database=require('./dbconnection')
const postdetails=require("./controllers/postdetails");
const updated=require("./controllers/findingletterewitha");
const changeddata=require("./controllers/modification");
//set multer storage
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,date.now(),file.originalname)
    }
})
//database connection
var con =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Nanda@22127',
    database:'blogs'
})
con.connect(function(err){
    if(err) {return console.log(err)};
    console.log('connected!');
})


const app=express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.listen((8006),console.log('port started at 8006'))

//creating blog
app.post('/create',(req,res)=>{
    var con =mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'Nanda@22127',
        database:'blogs'
    })
    con.connect(function(err){
        if(err) {return console.log(err)};
      
    
    let sql=`INSERT INTO frejun2 (ID,TITLE,DATA,CATEOGORY) VALUES=?`;
    console.log(req.body)
    let values=[req.body.id,req.body.title,req.body.data,req.body.cateogory]
    let query=con.query(sql,[values],(err,result)=>{
        if(err) throw err
        res.status(500).send(req.body)

    })
})
})

//middleware
app.use("/",postdetails);
app.use("/post",updated);
app.use("/change",changeddata)