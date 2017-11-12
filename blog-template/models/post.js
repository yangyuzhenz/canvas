let db=require('./db');

//插入数据
exports.insert=(data,cb)=>{
  //sql语句
  let query='insert into posts set ?';
  //执行sql语句
  db.query(query,data,(err)=>{
    if(err){
        return cb(err);
      
      }
      //成功回调
      cb(null);
    
  })
}

//查询所有
exports.findAll=(cb)=>{
  //sql语句
  let query='select * from posts';

  db.query(query,(err,rows)=>{
    if(err){
      return cb(err);
    }
    cb(null,rows);
  })
}

//删除
exports.delete=(id,cb)=>{
  //sql
  let query='delete from posts where id = ?';
  //执行sql语句
  db.query(query,id,(err)=>{
    if(err){
      //失败回调
      return cb(err);
    }
    //成功一样
    cb(null);
  })
}