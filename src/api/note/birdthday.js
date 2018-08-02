import  axios from "axios"
class  Birthday {
   constructor(){
     this.api={
       getAll:"",
       getPage:"",
       edit:"",
       del:"",
       add:"/birthday/add",
     };
   }
   getALL(){
     return  axios.get(this.api.getPage)
   }
   edit(data){
    return   axios.post(this.api.edit,data);
   }
   del(data){
     return axios.post(this.api.del,data);
   }
   add(data){
     return axios.post(this.api.add,data);
   }

}

export default  Birthday;
