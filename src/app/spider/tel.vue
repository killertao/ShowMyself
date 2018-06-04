<template>
    <div>
        <el-button @click="start">开始查找</el-button>
        <el-button @click="end">结束</el-button>
        <div>
            <ul>
                <li v-for="tel of  telList">tel</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Ajax from "axios";
export default {
  data() {
    return {
      telList: [],
      search: {
        callback: 'jsonp_queryMoreNums',
        provinceCode: 97,
        cityCode: 973,
        monthFeeLimit: 0,
        groupKey: 49236584,
        searchCategory: 3,
        net: '01',
        amounts: 200,
        qryType: '02',
        goodsNet: 4,
        _: 1527670039294
      },
      searchEnd: false
    };
  },
  methods: {
    start() {
      this.searchEnd = false;
      let search = () => {
        Ajax.get("https://m.10010.com//NumApp/NumberCenter/qryNum",this.search).then(
          res => {
            var telArr = res.numArray;
            telArr = e.numArray.filter(item => {
              return /1314\d*520/.test(item);
            });
            this.telList.concat(telArr);
            window.localStorage.setItem("tel", JSON.stringify(this.telList));
            if (!this.searchEnd) {
                setTimeout(() => {
                    this.searchEnd._++;
                    search();
                }, 1000*30);
            }
          }
        ).catch(error=>{
            console.log(error);
        })
        
      };
      search();
    },
    end(){
        this.searchEnd=true;
    }
    
  }
};
</script>
