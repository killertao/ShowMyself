/*
生日api
* */
const result = require("../data_model/response");
const express = require("express");
const db = require("../schema_model/index");
const router = express.Router();
let rPath = "/birthday/";
router.post("/birthday/add", function (req, res) {
  db.Birthday.insertMany([req.body]).then((data) => {
    console.log(data);
    res.send({success: true});
  }).catch(e => {
    res.send({success: false, errMg: e});
    throw  e;
  })
});
router.get(rPath + "list", function (req, res) {
  let data = db.Birthday.find();
  let totalAgg = db.Birthday.aggregate([ { $count: "total" }]);
  Promise.all([data, totalAgg]).then(([data, count]) => {
    res.send(new result.ResponsePageList({data,total:count[0].total}));
  }).catch(res => {
    res.send(new result.ResponseError(res));
  });
});
module.exports = router;
