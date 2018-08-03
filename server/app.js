const express = require("express");
const bodyParser = require('body-parser'); //请求数据后台解析组件  applicaiton/json||x-www-form-urleacoded
//const multer = require('multer');//  解析 multipart/form-data
require("./dbconfig"); //存储全局db
const routers = require("./router");
//const  path=require("path");
const app = new express();//创建一个后台服务
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
//app.use(multer()); // for parsing multipart/form-data
//会把解析的数据填充到req.body
//注入路由
routers.forEach(router => {
  app.use(router);
});
app.set("trust proxy", 1);//设置....
//对某个接口进行监听
app.listen(5200, function () {
  console.log("访问地址为localhost:5200");
});
