const userModel = require("../models/userModel")
exports.insertUser=async (u)=>
{
    let newuser = new userModel(
        {
            username: u.username,
            pwd: u.pwd,
            email:u.email,
            contact:u.contact,
           verified:u.verified 
        })
        let i="fail";
         await newuser.save()
        .then(()=>i="success")
        return i ;  
}
exports.checkLogin = async( u )=>
{
    let condition ={email:u.email,pwd:u.pwd};
    let result =false;
    await userModel.find(condition)
    .then((d)=>
    {
        if(d.length>0)
        {
            result = true
        }
    })
    .catch((e)=>console.log(e))
    return result;
}
exports.getAll = async()=>
{
    let data = await userModel.find()
    return data;
}