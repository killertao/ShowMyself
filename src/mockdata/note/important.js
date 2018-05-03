import  Mock  from 'mockjs'
Mock.mock(hostname.concat("/Information/ImportantList"),{
     'list|6-10':[
       {
         'name':'@cword(2,7)',
         'pwd':'@word(6,12)'
       }
     ]
});
