const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : [{
        type : String,required:true,
    }],
    gender : String,
    company : String,
    experience : String,
    inttype : String,
    requirements: String,
    questions: String,
    process: String,

},
);

const Userdb = mongoose.model('userdb', schema);
module.exports = Userdb;