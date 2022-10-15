// database connection 
const mysql=require('mysql');
var con =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Nanda@22127',
    database:'blogs'
})
module.exports=con