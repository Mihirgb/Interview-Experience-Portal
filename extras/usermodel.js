const mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name : [{
        type : String,required:true,
    }],
    // email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
    // password2: { type: String, required: true },
    username: { type: String, required: true },
    
},
{
    collection: 'user'
}
);

 var User = mongoose.model('User', userschema);
// const Loginschema=mongoose.model('loginschema',schema);
module.exports = User;
// module.exports=Loginschema;