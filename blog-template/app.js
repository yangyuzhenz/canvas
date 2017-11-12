let express=require('express');

let bodyParser=require('body-parser');

let session = require('express-session');

let app=express();

app.listen(3000);

app.set('view engine','xtpl');

app.set('views','./views');

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
  secret:'fad',
  resave:false,
  saveUninitialized:false
}));

app.use('/admin',(req,res,next)=>{
  if(!req.session.loginfo && req.url!='/login'){
    return res.redirect('/login');
  }
  next();
})

let admin=require('./routes/admin.js');
let home=require('./routes/home.js');

app.use('/admin',admin);
app.use('/',home);

