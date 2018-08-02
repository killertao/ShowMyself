const  mongoose=require("mongoose");
const  connStr="mongodb://showmyself:0101@localhost/showmyself";
  mongoose.connect(connStr).then(()=>{
    console.log("连接db成功");
  }).catch(e=>{
    console.log("连接db失败");
   throw  e;
 });
global.mongoose=mongoose;//共用一个连接

