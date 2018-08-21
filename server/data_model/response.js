let codeStatus = {
  success: 200,//成功
  fail: 0,//失败
};

class resonseBase {
  constructor(res) {
    this.code = codeStatus.success;
  }
}

class ResponsePageList extends resonseBase {
  constructor(res) {
    super(res);
    this.data = res.data;
    this.total = res.total;
  }
}

class ResponseCommon extends resonseBase {
  constructor(res) {
    super(res);
    this.data = res.data;
  }
}

class ResponseError extends resonseBase {
  constructor(res) {
    super(res);
    this.code = codeStatus.fail;
    this.msg = res;
  }
}
module.exports={ResponsePageList,ResponseError,ResponseCommon};




