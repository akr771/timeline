const express= require('express')
const mongoose=require('mongoose')
const bodyParser = require('body-parser');
const dbURI= 'mongodb+srv://akram:akramakr@cluster0.hwa3hi8.mongodb.net/'
const routes=require('./config/routes')
 
const app=express()

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(dbURI)
.catch((arr)=>console.log(arr))

//app.use("/public", express.static("public"))
app.set("view engine", "ejs")
app.use(routes);



    app.listen(2000,()=>{
      console.log("halooo  1000")
  
  })

