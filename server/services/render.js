const axios = require('axios');
exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('newindex', { users :response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.resume = (req, res) => {
    axios.get('http://localhost:3001')
        .then(function(response){
            res.render('newindex', { users :response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.main = (req, res) =>{
    res.render('site');
}
exports.resources = (req, res) =>{
    res.render('resources');
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}
exports.codeditor =(req,res)=>{
    res.render('codeditor');
}
exports.codesite =(req,res)=>{
    res.render('codesite');
}
exports.profile =(req,res)=>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
    .then(function(userdata){
        res.render("profile", { user : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}
exports.about =(req,res)=>{
    res.render('about');
}
exports.features =(req,res)=>{
    res.render('features');
}
exports.loginapp =(req,res)=>{
    res.render('loginapp');
}
exports.register =(req,res)=>{
    res.render('register');
}
exports.login =(req,res)=>{
    res.render('login');
}
exports.username =(req,res)=>{
    res.render('username');
}
exports.password =(req,res)=>{
    res.render('password');
}
exports.google =(req,res)=>{
    res.render('companies/google');
}
exports.amazon =(req,res)=>{
    res.render('companies/amazon');
}
exports.wallmart =(req,res)=>{
    res.render('companies/wallmart');
}
exports.microsoft =(req,res)=>{
    res.render('companies/microsoft');
}
exports.rtips =(req,res)=>{
    res.render('resumetips');
}
exports.newlogin =(req,res)=>{
    res.render('newlogin');
}
exports.forums =(req,res)=>{
    res.render('main page/forums');
}
exports.posts =(req,res)=>{
    res.render('main page/posts');
}
exports.detail =(req,res)=>{
    res.render('main page/detail');
}
exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })


}
exports.signup=(req,res)=>{
    res.render('signup');
}