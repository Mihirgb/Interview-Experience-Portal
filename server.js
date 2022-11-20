 const express=require('express');
 const dotenv=require(`dotenv`);
 const morgan=require(`morgan`);
 const bodyparser=require(`body-parser`); 
 const path=require(`Path`);
 const connectDB = require('./server/database/connection');

 const app =express();
 dotenv.config({path:`config.env`})
 const PORT =process.env.PORT||8080

 app.use(morgan(`tiny`));
 connectDB();

 app.use(bodyparser.urlencoded({extended: true}))
 app.set("view engine","ejs")

 app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
//  app.set("views")

//  app.get('/',(req,res)=>{
//     res.render('index.ejs');
    
//  } )

//  app.get('/add-user',(req,res)=>{
//    res.render('add_user');
   
// } )

// app.get('/update-user',(req,res)=>{
//    res.render('update_user');
   
// } )
app.use('/',require('./server/routes/router'));

 app.listen(PORT,()=>{console.log(`Server is running onn http://localhost:${PORT}`)} );


