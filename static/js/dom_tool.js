class domTool {
  constructor(){

  }
  static init(){
    let methods = {
      outerHeigh: function () {
        let outerHeight = this.offsetHeight;
        if (this.style.marginTop) {
          outerHeight += this.style.marginTop.match(/\d+/)[0] | 0;
        }
        if (this.style.marginBottom) {
          outerHeight += this.style.marginBottom.match(/\d+/)[0] | 0;
        }
        return outerHeight;
      }
    };
    Object.assign(window.HTMLElement.prototype, methods)
  }
}
export  default domTool;
