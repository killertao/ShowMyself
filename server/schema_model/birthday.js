const  mongoose=global.mongoose;
//生日主表
const  Birthday=new mongoose.Schema({
   name:String,
   date:Date,
   remark:String
});
module.exports=mongoose.model("Birthday",Birthday);
