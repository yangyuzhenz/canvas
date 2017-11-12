//该文件是用来连接数据库的

//引入数据库
let mysql=require('mysql');

let md5=require('md5');
//创建连接
let db=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'blog'
});


//暴露
db.md5=md5;

module.exports=db;