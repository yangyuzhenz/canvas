//引入db文件
let db=require('./db');

//插入用户
exports.insert=function(data,cb){
  let query='insert into users set ?';

  //密码处理
  data.pass=db.md5(data.pass);
  db.query(query,data,(err)=>{
    console.log(err);
    if(err){
      return cb(err);
    }
    cb(null);
  });
}
//登录认证
exports.auth=function(email,password,cb){
  let query='select * from users where email = ?';
  
  db.query(query,email,(err,rows)=>{
    if(err){
      return cb(err);
    }
    if(rows[0].pass==db.md5(password)){
      return cb(null,rows[0]);
      console.log(2);  
    }
    cb({msg:'用户邮箱或密码错误'});
  })
}

