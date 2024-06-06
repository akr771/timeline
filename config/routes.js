const express= require('express')
const route=express.Router();
const usercontrole=require("../controller/usercontrole");

route.get('/',usercontrole)

module.exports=route;