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


route.get('/add-user', services.add_user)
route.get('/update-user', services.update_user)
route.get('/codeditor',services.codeditor)
route.get('/codesite',services.codesite)
// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);

module.exports = route