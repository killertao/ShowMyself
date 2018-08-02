const  mongoose=global.mongoose;

//用户登陆模块
const  user=new mongoose.Schema({
    name:String,
  pwd:String,
});
module.exports=mongoose.model("User",user);
