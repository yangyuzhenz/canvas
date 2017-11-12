let express=require('express');

let home=express.Router();

//处理用户数据
let user=require('../models/user');

home.get('/',(req,res)=>{
  // res.send('前台的a');
  res.render('home/index',{});
});

home.get('/article',(req,res)=>{
  // res.send('前台的a');
  res.render('home/article',{});
});
home.get('/login',(req,res)=>{
  // res.send('前台的a');
  res.render('home/login',{});
});
home.get('/register',(req,res)=>{
  // res.send('前台的a');
  res.render('home/register',{});
});

//注册
home.post('/register',(req,res)=>{
  //调用insert函数
  user.insert(req.body,(err)=>{
   
    if(!err){
      res.json({
        code:10000,
        msg:'添加成功'
      })
    }
  })
})

//登录
home.post('/login',(req,res)=>{
  console.log(req.body);

  user.auth(req.body.email,req.body.pass,(err,row)=>{
    // if(err){
    //   console.log(1);
    // }
    if(!err){
      req.session.loginfo = row;

      res.json({
        code:10000,
        msg:'登录成功'
      })
    }
  })
})


module.exports=home;