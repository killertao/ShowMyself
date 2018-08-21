import Axios from "axios"

class Ajax extends Axios {
  constructor() {
    super();
  }

  static post(url,pms) {
    return Axios.post(url,pms).then(res => {
      return res.data;

    }).catch(error => {

    })
  }

  static get(url,pms) {
    return Axios.get(url,{
      params:pms
    }).then(res => {
      return res.data;
    });
  }
  static postJson(url,pms) {
    return Axios.post(url,pms,{"Content-Type": "application/json"})
  }
}

export default Ajax;
