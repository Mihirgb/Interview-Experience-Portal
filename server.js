 const express=require('express');
 const dotenv=require(`dotenv`);
 const morgan=require(`morgan`);
 const bodyparser=require(`body-parser`); 
 const bcrypt=require('bcrypt')
 const User =require('./server/model/user')
 const path=require(`Path`);
 const session = require('express-session');
 var expressValidator = require('express-validator');
 const connectDB = require('./server/database/connection');
 const app =express();
 dotenv.config({path:`config.env`})
 const PORT =process.env.PORT||8080
app.use(bodyparser.json())
app.use(session({ secret: 'melody hensley is my spirit animal' }));
app.use(expressValidator()); 
 app.use(morgan(`tiny`));
 connectDB();
 app.use(bodyparser.urlencoded({extended: true}))
 app.set("view engine","ejs")
 app.engine('html', require('ejs').renderFile);
 app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
app.use('/',require('./server/routes/router'));
 app.listen(PORT,()=>{console.log(`Server is running onn http://localhost:${PORT}`)} );






//loginsignup trial
 app.get('/brandnewlogin', (req, res) => {
    if (req.session.user) {
      return res.redirect('/dashboard');
    }
    res.render('newlogin');
  });

  // GET: Signup Page
app.get('/signup', (req, res) => {
    res.render('signup');
  });
  
  // POST: Signup Logic
  app.post('/signup', async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.send('Passwords do not match!');
    }
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });
  
    try {
      await newUser.save();
      // res.send({ status: "ok" });
      res.redirect('/newlogin');
    } catch (err) {
      res.send('Error creating user: ' + err.message);
    }
  });
  
  // POST: Login Logic
  app.post('/newlogin', async (req, res) => {
    const { email, password } = req.body;
  
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.send('User not found');
    }
  
    // Compare passwords
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.send('Incorrect password');
    }
  
    // Save session and redirect
    req.session.user = user;
    res.redirect('/dashboard');
  });
  
  // GET: Dashboard (Protected Route)
  app.get('/dashboard', (req, res) => {
    if (!req.session.user) {
      return res.redirect('/');
    }
    res.render('dashboard', { email: req.session.user.email });
  });
  
  // GET: Logout
  app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
  });
