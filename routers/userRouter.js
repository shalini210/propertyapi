const express = require("express")
const userController = require("../controllers/userController")
const router = express.Router();

router.post("/",async (req,res)=>
{
    console.log(req.body)
    let i = await userController.insertUser(req.body);
    res.send(i);
})
router.post("/login",async (req,res)=>
{
    let r = await userController.checkLogin(req.body);
    res.send(r)
})
router.get("/",async(req,res)=>
{
    let d = await userController.getAll();
    res.send(d)
})
router.get("/deleteall",async(req,res)=>
{
    let d = await userController.deleteAll();
    res.send(d);
})
module.exports = router