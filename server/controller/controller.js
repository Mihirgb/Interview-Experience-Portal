const { nextTick } = require('async');
var Userdb = require('../model/model');
const ApiFeatures = require('../utils/apifeatures');
const ErrorHandler = require('../utils/errorhandler');
var user =require('../model/user')
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }
    //new user
    const user = new Userdb({
        name : req.body.name,
        username : req.body.username,
        password : req.body.password,
        company : req.body.company,
        experience : req.body.experience,
        inttype : req.body.inttype,
        requirements : req.body.requirements,
        questions : req.body.questions,
        process : req.body.process,
        
    })

    //save user
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/add-user');

        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving user with id " + id})
            })

    }else{
        const apiFeatures =new ApiFeatures(Userdb.find(),req.query).search().filter();
        // Userdb.find()
        apiFeatures.query
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
                // return next(new ErrorHandler("Product not found",404));
            
            })
    }

    
}

exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

