/*
用户api
* */

const express=require("express");
const db=require("../schema_model/index");
const router=express.Router();

router.post("/user/login",function (req,res) {
   req.send({success:true});
});

router.post("/user/add",function (req,res) {
  db.User.insert(req.body);
  req.send({success:true});
});
module.exports=router;
