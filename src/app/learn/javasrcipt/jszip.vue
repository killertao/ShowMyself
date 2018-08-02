<template>
    <div>
        <button @click="down">下载zip</button>
    </div>
</template>
<script>
import JSZip from "jszip";
import saveAs from "jszip/vendor/FileSaver";
export default {
  data() {
    return {};
  },
  methods: {
    down() {
      this.getBase64Image3().then(imgData => {
        var zip = new JSZip();
        zip.file("Hello.txt", "Hello World\n");
        var img = zip.folder("images");
        img.file("smile.gif", imgData, { base64: true });
        zip.generateAsync({ type: "blob" }).then(function(content) {
          // see FileSaver.js
          saveAs(content, "example.zip");
        });
      });
    },
    getBase64Image(imgUrl) {
      return new Promise(function(res, error) {
        window.URL = window.URL || window.webkitURL;
        var xhr = new XMLHttpRequest();
        xhr.open("get", imgUrl, true);
        // 至关重要
        xhr.responseType = "blob";
        xhr.onload = function() {
          if (this.status == 200) {
            //得到一个blob对象
            var blob = this.response;
            console.log("blob", blob);
            // 至关重要
            let oFileReader = new FileReader();
            oFileReader.onloadend = function(e) {
              let base64 = e.target.result;
              res(base64);
            };
          }
        };
        xhr.send();
      });
    },
    getBase64Image2() {

      return new Promise(function(r, e) {
        let image = new Image();
        image.src =
          "http://c2.xinstatic.com/f1/20170413/1559/58ef2fe4601f1835091.png";
        //  image.crossOrigin = '';
        image.setAttribute("crossOrigin", "anonymous");
        image.onload = function() {
          let img =this;
          var canvas = document.createElement("canvas");
          canvas.width = img.width;
          console.log(img);
          canvas.height = img.height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, img.width, img.height);
          var ext = img.src
            .substring(img.src.lastIndexOf(".") + 1)
            .toLowerCase();
          console.log(canvas);
          var dataURL = canvas.toDataURL("image/jpeg");
          r(dataURL);
        };
      });
    },
    getBase64Image3(){
      return new Promise(function(r,e){
          r("R0lGODdhBQAFAIACAAAAAP/eACwAAAAABQAFAAACCIwPkWerClIBADs=")
      })
    }
  }
};
</script>
