import {TableList,CRUD,Ajax} from "@/elementui_extend/index"

class Birthday extends CRUD {
  constructor() {
    super();
    this.api = {
      getPage: "/birthday/list",
      edit: "",
      del: "",
      add: "/birthday/add",
    };
    this.tableList = new TableList(this.api.getPage);
    this.tableList.columns={name:"标题",birthday:"生日"};
  }
}

export default Birthday;
