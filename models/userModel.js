const mongoose = require("mongoose")

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
         pwd: String,
         email:String,
         contact:String,
        verified:Boolean 
});
// Compile model from schema
var userModel = mongoose.model('user', userSchema );
module.exports = userModel;