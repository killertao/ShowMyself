import {Ajax} from "@/elementui_extend/index"
class CRUD {
  del(data) {
    return Ajax.get(this.api.del,data);
  }
  add(data) {
    return Ajax.get(this.api.del,data);
  }
  edit(data) {
    return Ajax.get(this.api.del,data);
  }
}
export default  CRUD;
