const express= require('express')
const route=express.Router();
const usercontrole=require("../controller/usercontrole");

  route.post('/submit',usercontrole.submit)
  route.get('/',usercontrole.home)
 

module.exports=route;