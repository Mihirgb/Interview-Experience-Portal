const express = require('express');
const route = express.Router()
const services = require('../services/render');
const controller = require('../controller/controller');

// route.get('/', services.homeRoutes);
route.get('/', services.main);
route.get('/homeRoutes', services.homeRoutes);
route.get('/about',services.about);
route.get('/features',services.features);
route.get('/profile',services.profile);
route.get('/loginapp',services.loginapp);
route.get('/register',services.register);
route.get('/login',services.login);
route.get('/username',services.username);
route.get('/password',services.password);
route.get('/resources',services.resources);
route.get('/google',services.google);
route.get('/amazon',services.amazon);
route.get('/wallmart',services.wallmart);
route.get('/microsoft',services.microsoft);
route.get('/rtips',services.rtips);
route.get('/forums',services.forums);
route.get('/detail',services.detail);
route.get('/posts',services.posts);
route.get('/newlogin',services.newlogin);
route.get('/signup',services.signup);


route.get('/resume',services.resume)
route.get('/add-user', services.add_user)
route.get('/update-user', services.update_user)
route.get('/codeditor',services.codeditor)
route.get('/codesite',services.codesite)
// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);

module.exports = route