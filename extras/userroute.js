const express = require("express");
var router=express.Router();
var passport=require('passport');
var expressValidator = require('express-validator');
var bcrypt=require('bcryptjs')
var User=require('../server/model/usermodel');
const { Router } = require("express");
const { rejectSeries } = require("async");
router.use(expressValidator());
router.get('/register',function(req,res){
  res.render('register',{
    title:'Register'
  })
})
router.post('/register',function(req,res){
  var name=req.body.name;
  var email=req.body.email;
  var username=req.body.username;
  var password=req.body.password;
  // var password2=req.body.password2;

  req.checkBody('name','name is required').notEmpty();
  req.checkBody('email','email is required').isEmail();
  req.checkBody('username','username is required').notEmpty();
  req.checkBody('password','password is required').notEmpty();
  // req.checkBody('password2','passwords do not match').equals(password);  

  var errors=req.validationErrors();
  if(errors){
    res.render('register',{
      errors:errors,
      title: 'Register'
    })
  }
  else{
    User.findOne({username: username}, function(err, user){
      if(user){
        req.flash('danger','Username exists choose another')
        res.redirect('/users/register')
      }
      else{
        var user=new User({
          name: name,
          email:email,
          username:username,
          password:password,
          // admin:
        });
        bcrypt.genSalt(10, function(err, salt){
          bcrypt.hash(user.password,salt,function(err, hash){
            if(err) console.log(err);
            user.password=hash;
            user.save(function(err){
              if(err){
                console.log(err);
              }
              else{
                req.flash('success', 'You are now registered')
                res.redirect('/users/login')
              }
            })
          })
        })
      }
    })
  }

})

module.exports=router;