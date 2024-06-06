const express= require('express')
const routes=require('./config/routes')
const app=express()

//app.use("/public", express.static("public"))
app.set("view engine", "ejs")
app.use(routes);
app.listen(5000,()=>{
    console.log("halooo  2000")

})

// const express = require("express")
// const routes = require("./config/routes")
// console.log('hakl haka')

// const app = express()
// const PORT = 1000

// app.use("/public", express.static("public"))
// app.set("view engine", "ejs");
// app.use(routes)
// app.listen(PORT, () => console.log(`App is listening on ${PORT}`))