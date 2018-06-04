import Mock from 'mockjs'
import config from '../config'

//==================笔记api=================
//获取左边导航条
Mock.mock(config.apiUrl('/note/getOutline'), {
  success: true,
  data: [{
      lable: 'es6',
      children: [{
        lable: '箭头函数',
        id: 1
      }, {
        lable: 'map的学习',
        id: 2
      }, {
        lable: 'promise',
        id: 3
      }, {
        lable: 'async异步'
      }]
    },
    {
      lable: 'webpack常用命令'
    },
    {
      lable: 'git'
    }
  ]
})

//获取一条笔记
Mock.mock(/\/note\/getNote\?id=\d/i,{
   success:true,
   data:{
     id:'@guid',
     content:'@cparagraph'
   }
})

//保存一条笔记
Mock.mock(config.apiUrl('/note/saveNote'),'post',{
  success:true
})

//===============信息api==================
Mock.mock(config.apiUrl('/information/getAccountList'),{
  success:true,
  'data|10':[{
      name:'@cname',
      pwd:'@word(8,11)'
  }],
  total:60,
})

