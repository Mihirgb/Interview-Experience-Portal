const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : [{
        type : String,required:true,
    }],
    // username: { type: String, required: true, unique: true },
	// password: { type: String, required: true },
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
// var loginschema = new mongoose.Schema({
    
    
    
// },
// );


const Userdb = mongoose.model('userdb', schema);
// const Loginschema=mongoose.model('loginschema',schema);
module.exports = Userdb;
// module.exports=Loginschema;