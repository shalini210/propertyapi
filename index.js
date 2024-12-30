const express = require("express")
const app  = express()
const dbconfig = require("./config/dbconfig")
const userRouter = require("./routers/userRouter")
const cors = require("cors")
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/user",userRouter)

app.get("/",(req,res)=>
{
    res.send("This is property api ")

})
app.listen(8080,console.log("server running"))