 const express=require('express');
 const dotenv=require(`dotenv`);
 const morgan=require(`morgan`);
 const bodyparser=require(`body-parser`); 
 const path=require(`Path`);
 const session = require('express-session');
 var expressValidator = require('express-validator');
 
 const connectDB = require('./server/database/connection');
 const app =express();
 dotenv.config({path:`config.env`})
 const PORT =process.env.PORT||8080
 const User = require('./server/model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'
const passport=require('passport');
const { Passport } = require('passport');
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

// app.post('/api/register', async (req, res) => {
// 	const { name, username, password: plainTextPassword } = req.body

// 	if (!username || typeof username !== 'string') {
// 		return res.json({ status: 'error', error: 'Invalid username' })
// 	}

// 	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
// 		return res.json({ status: 'error', error: 'Invalid password' })
// 	}

// 	if (plainTextPassword.length < 5) {
// 		return res.json({
// 			status: 'error',
// 			error: 'Password too small. Should be atleast 6 characters'
// 		})
// 	}

// 	const password = await bcrypt.hash(plainTextPassword, 10)

// 	try {
// 		const response = await User.create({
//             name,
// 			username,
// 			password
// 		})
// 		console.log('User created successfully: ', response)
// 	} catch (error) {
// 		if (error.code === 11000) {
// 			// duplicate key
// 			return res.json({ status: 'error', error: 'Username already in use' })
// 		}
// 		throw error
// 	}

// 	res.json({ status: 'ok' })
// })
// app.post('/api/login', async (req, res) => {
// 	const { username, password } = req.body
// 	const user = await User.findOne({ username }).lean()

// 	if (!user) {
// 		return res.json({ status: 'error', error: 'Invalid username/password' })
// 	}

// 	if (await bcrypt.compare(password, user.password)) {
// 		// the username, password combination is successful

// 		const token = jwt.sign(
// 			{
// 				id: user._id,
// 				username: user.username
// 			},
// 			JWT_SECRET
// 		)

// 		return res.json({ status: 'ok', data: token })
// 	}

// 	res.json({ status: 'error', error: 'Invalid username/password' })
// })

//initializiig routes
// const users=require('./server/routes/users')

//passport config and middleware
// require('./extras/passport')(passport);
// app.use(passport.initialize());
// app.use(passport.session());

// app.get('*',function(req,res,next){
// 	res.locals.user =req.user||null;
// 	next();
// })
app.use('/',require('./server/routes/router'));
// app.use('/users',users)
 app.listen(PORT,()=>{console.log(`Server is running onn http://localhost:${PORT}`)} );


