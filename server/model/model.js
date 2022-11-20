const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : [{
        type : String,
    }],
    gender : String,
    company : String,
    experience : String,
    inttype : String,
    requirements: String,
    questions: String,
    process: String,

},
// { typeKey: '$type' }

);

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;