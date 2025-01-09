const express = require("express")
const propertyController = require("../controllers/propertyController")
const router = express.Router();
const upload = require("../forMulter")
router.post('/', upload.single('img'), function (req, res) {
    console.log(req.body)
    res.send("saved");
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})
// router.post("/",async (req,res)=>
// {
//     console.log(req.body)
//     let i = await propertyController.insertproperty(req.body);
//     res.send(i);
// })
router.post("/login",async (req,res)=>
{
    let r = await propertyController.checkLogin(req.body);
    res.send(r)
})
router.get("/",async(req,res)=>
{
    let d = await propertyController.getAll();
    res.send(d)
})
router.get("/deleteall",async(req,res)=>
{
    let d = await propertyController.deleteAll();
    res.send(d);
})
module.exports = router