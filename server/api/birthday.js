/*
生日api
* */

const express=require("express");
const db=require("../schema_model/index");
const router=express.Router();

router.post("/birthday/add",function (req,res) {
  db.Birthday.insertMany([req.body]).then((data)=>{
    console.log(data);
    res.send({success:true});
  }).catch(e=>{
    res.send({success:false,errMg:e});
    throw  e;
  })
});
module.exports=router;
