const mongoose = require("mongoose")

var Schema = mongoose.Schema;

var propertySchema = new Schema({
    propertyname: String,
        city: String,
         location:String,
         contact:String,
        price:Number,
        type:String,
        img:String
});
// Compile model from schema
var propertyModel = mongoose.model('property', propertySchema );
module.exports = propertyModel;