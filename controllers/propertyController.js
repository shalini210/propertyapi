const propertyModel = require("../models/propertyModel")
exports.insertproperty=async (u)=>
{
    let newproperty = new propertyModel(
        {
            propertyname: u.propertyname,
        city: u.city,
         location:u.location,
         contact:u.contact,
        price:u.price,
        type:u.type,
        img:u.img,
        })
        let i="fail";
         await newproperty.save()
        .then(()=>i="success")
        return i ;  
}
exports.getAll = async()=>
{
    let data = await propertyModel.find()
    return data;
}
exports.deleteAll = async()=>
{
    let data = await propertyModel.deleteMany();
    return data;
}