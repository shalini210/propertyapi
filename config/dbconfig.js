const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/propertydb")
.then(()=>console.log("connected"))
.catch(()=>console.log("db not connected"))
