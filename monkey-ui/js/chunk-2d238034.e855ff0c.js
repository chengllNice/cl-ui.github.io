(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238034"],{fe21:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dev-table"},[a("p",[e._v("基础--无数据")]),a("Table",{attrs:{columns:e.columns,data:e.data,stripe:"",border:"",height:"400px"},on:{select:e.selectChange,"select-all":e.selectAllChange,"cancel-select-all":e.cancelSelectAllChange,"cancel-select":e.cancelSelectChange,"selection-change":e.selectionChange},scopedSlots:e._u([{key:"operation",fn:function(t){return[a("Button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.delClick(t)}}},[e._v("DEL")])]}}])}),a("h4",[e._v("基础")]),a("Table",{attrs:{columns:e.columnsBase,data:e.dataBase,"row-class-name":e.setRowClassName,stripe:"",height:"400px"},on:{"row-click":e.rowClick,"cell-click":e.cellClick,"row-dbclick":e.rowDbClick,"cell-dbclick":e.cellDbClick,"head-click":e.headClick,"filter-change":e.filterChange,select:e.selectChange,"select-all":e.selectAllChange,"cancel-select-all":e.cancelSelectAllChange,"cancel-select":e.cancelSelectChange,"selection-change":e.selectionChange},scopedSlots:e._u([{key:"operation",fn:function(t){return[a("Button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.delClick(t)}}},[e._v("DEL")])]}},{key:"operationHead",fn:function(t){return[e._v("\n            "+e._s(t.column.title)+"\n        ")]}},{key:"expand",fn:function(t){return[e._v("\n            "+e._s(t)+"\n            "),a("List",{attrs:{split:!1}},[a("ListItem",[e._v(e._s(t.row.id))]),a("ListItem",[e._v(e._s(t.row.name))]),a("ListItem",[e._v(e._s(t.row.age))]),a("ListItem",[e._v(e._s(t.row.grade))])],1)]}}])}),a("h4",[e._v("多行多列")]),a("Table",{attrs:{data:e.spanMethodData,columns:e.spanMethodColumns,border:"","span-method":e.spanMethod}})],1)},n=[],c={data:function(){return{dataBaseEmpty:[],columnsBase:[{type:"expand",key:"expand"},{type:"index",key:"index"},{type:"selection",key:"selection"},{key:"id",title:"id"},{key:"name",title:"name"},{key:"age",title:"age"},{key:"grade",title:"grade"},{key:"company",title:"company"},{key:"operation",title:"operation",slot:"operation"}],dataBase:[],columns:[{key:"name",title:"姓名"},{key:"email",title:"邮箱"},{key:"phone",title:"手机号"},{key:"create_date",title:"创建日期",ellipsis:!0}],data:[],filterDate:"",filterColumns:[{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"email",title:"邮箱"},{key:"phone",title:"手机号"},{key:"department",title:"部门"},{key:"address",title:"地址"},{key:"create_date",title:"创建日期",filterSlot:"date",placement:"bottom-end"}],filterData:[],filterAllData:[],spanMethodData:[{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"}],spanMethodColumns:[{title:"Date",key:"date"},{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"}]}},mounted:function(){this.setDataBase(),this.data=[];for(var e=0;e<20;e++)this.data.push({name:"Name"+e,email:"Email"+e,phone:"Phone"+e,create_date:"2018-01-"+e});this.filterDataInit()},methods:{spanMethod:function(e){e.row,e.column;var t=e.rowIndex,a=e.columnIndex;return 0===t&&0===a?[1,2]:0===t&&1===a?[0,0]:2===t&&0===a?{rowspan:2,colspan:1}:3===t&&0===a?{rowspan:0,colspan:0}:void 0},filterDataInit:function(){this.filterData=[],this.filterAllData=[];for(var e=["前端部","运维部","测试部","数据库研发中心"],t=0;t<5;t++){var a=new Date;a.setDate(t),this.filterAllData.push({name:"Name"+t,age:20+parseInt(t),email:"Email"+t,phone:"Phone"+t,department:"业务平台部/研发部/"+e[t%4],address:"北京市海淀区上地三街西口",performance:"10000"+t,create_date:a.toDateString()})}this.filterData=this.filterAllData},filterDateChange:function(e){if(e){var t=new Date(e);this.filterData=this.filterAllData.filter((function(e){var a=new Date(e.create_date);return a.getTime()===t.getTime()}))}else this.filterData=this.filterAllData},handleClear:function(){this.filterDate=""},setDataBase:function(){for(var e=0;e<20;e++)this.dataBase.push({id:e,name:"name"+e,age:"age"+e,grade:"grade1"+e,grade1:"grade1-children1"+e,grade2:"grade1-children2"+e,grade3:"grade1-children3"+e,isChecked:1===e,isDisabled:1===e})},selectionChange:function(e){console.log("selectionChange",e)},selectChange:function(e,t){console.log("selectChange",e,t)},cancelSelectChange:function(e,t){console.log("cancelSelectChange",e,t)},selectAllChange:function(e){console.log("selectAllChange",e)},cancelSelectAllChange:function(e){console.log("cancelSelectAllChange",e)},delClick:function(e){console.log(e,"ddd")},filterChange:function(e,t,a){console.log(e,t,a,"filterChange")},rowClick:function(e,t){console.log(e,t,"rowClick")},cellClick:function(e,t){console.log(e,t,"cellClick")},rowDbClick:function(e,t){console.log(e,t,"rowDbClick")},cellDbClick:function(e,t){console.log(e,t,"cellDbClick")},headClick:function(e){console.log(e,"headClick")},setRowClassName:function(e,t){return 1===t?"bbb":""}}},i=c,o=a("9ca4"),s=Object(o["a"])(i,l,n,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d238034.e855ff0c.js.map