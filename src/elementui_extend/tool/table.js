import Ajax from "./ajax"

class TableList {
  constructor(api, ops) {
    this.$apiList = api;
    this.search = {};//查询参数
    this.dataList = [];
    this.convertData = undefined;//对数据的处理
    this.dataTotal = 0;//总共多条数据
    this.pagination = false; //是否分页
    this.pageSize = 10;//每页多少条
    this.currentPage = 1;//当前页数
    if (ops) {
      for (let [key, val] of ops) {
        this[key] = val;
      }
    }
  }

  getData() {
    this.pagination=true;
    let pms = {};

    Object.assign(pms, {currentPage: this.currentPage, pageSize: this.pageSize});
    Object.assign(pms, this.search);
    return Ajax.get(this.$apiList, pms).then(data => {
      this.pagination = !(data instanceof Array && data.total);
      if (this.convertData && this.convertData.apply) {
        this.convertData(data);
      }
      return data;
    })
  }

  load() {
    this.getData().then(data => {
      if (this.pagination) {
        this.dataList = data.data;
        this.dataTotal = data.total;
      }
      else {
        this.dataList = data;
      }
    })
  }

  next() {
    this.currentPage++;
    this.load();
  }

  prev() {
    this.currentPage--;
    this.load();
  }
}

export default TableList;
