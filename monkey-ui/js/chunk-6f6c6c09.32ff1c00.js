(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f6c6c09"],{1821:function(e,l,a){},"6b1a":function(e,l,a){"use strict";var t=a("1821"),o=a.n(t);o.a},ba6a:function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",{staticClass:"dev-select"},[a("div",{staticClass:"dev-select-view"},[a("h2",[e._v("不同size")]),a("Select",{attrs:{size:"mini",option:e.optionBaseEmpty},on:{change:e.handlerChange},model:{value:e.selectValueBaseSize1,callback:function(l){e.selectValueBaseSize1=l},expression:"selectValueBaseSize1"}}),a("Select",{attrs:{size:"small",option:e.optionBaseEmpty},on:{change:e.handlerChange},model:{value:e.selectValueBaseSize2,callback:function(l){e.selectValueBaseSize2=l},expression:"selectValueBaseSize2"}}),a("Select",{attrs:{option:e.optionBaseEmpty},on:{change:e.handlerChange},model:{value:e.selectValueBaseSize3,callback:function(l){e.selectValueBaseSize3=l},expression:"selectValueBaseSize3"}}),a("Select",{attrs:{size:"large",option:e.optionBaseEmpty},on:{change:e.handlerChange},model:{value:e.selectValueBaseSize4,callback:function(l){e.selectValueBaseSize4=l},expression:"selectValueBaseSize4"}}),a("Select",{attrs:{size:"mini",multiple:"",valueLable:"",option:e.optionMultiple},on:{change:e.handlerChange},model:{value:e.selectValueMultipleSize1,callback:function(l){e.selectValueMultipleSize1=l},expression:"selectValueMultipleSize1"}}),a("Select",{attrs:{size:"small",multiple:"",valueLable:"",option:e.optionMultiple},on:{change:e.handlerChange},model:{value:e.selectValueMultipleSize2,callback:function(l){e.selectValueMultipleSize2=l},expression:"selectValueMultipleSize2"}}),a("Select",{attrs:{multiple:"",valueLable:"",option:e.optionMultiple},on:{change:e.handlerChange},model:{value:e.selectValueMultipleSize3,callback:function(l){e.selectValueMultipleSize3=l},expression:"selectValueMultipleSize3"}}),a("Select",{attrs:{size:"large",multiple:"",valueLable:"",option:e.optionMultiple},on:{change:e.handlerChange},model:{value:e.selectValueMultipleSize4,callback:function(l){e.selectValueMultipleSize4=l},expression:"selectValueMultipleSize4"}})],1),a("div",{staticClass:"dev-select-view"},[a("h2",[e._v("新建 props:option")]),a("Select",{attrs:{"allow-create":"",filterable:"",clearable:"",option:e.optionBaseCreate},on:{change:e.handlerChange},model:{value:e.selectValueCreate1,callback:function(l){e.selectValueCreate1=l},expression:"selectValueCreate1"}}),a("Select",{attrs:{"allow-create":"",multiple:"",filterable:"",multipleLimit:2,option:e.optionBaseCreate},on:{change:e.handlerChange},model:{value:e.selectValueCreate2,callback:function(l){e.selectValueCreate2=l},expression:"selectValueCreate2"}}),a("h2",[e._v("新建 slots")]),a("Select",{attrs:{"allow-create":"",filterable:""},on:{change:e.handlerChange},model:{value:e.selectValueCreate3,callback:function(l){e.selectValueCreate3=l},expression:"selectValueCreate3"}},e._l(e.optionBaseCreate,(function(l){return a("Option",{key:l.value,attrs:{value:l.value}},[e._v(e._s(l.label))])})),1),a("Select",{attrs:{"allow-create":"",multiple:"",filterable:"",multipleLimit:2},on:{change:e.handlerChange},model:{value:e.selectValueCreate4,callback:function(l){e.selectValueCreate4=l},expression:"selectValueCreate4"}},e._l(e.optionBaseCreate,(function(l){return a("Option",{key:l.value,attrs:{value:l.value}},[e._v(e._s(l.label))])})),1)],1),a("div",{staticClass:"dev-select-view"},[a("h2",[e._v("maxTagCount")]),a("Select",{attrs:{multiple:"",filterable:"","max-tag-count":2,option:e.optionBaseCreate},on:{change:e.handlerChange},model:{value:e.selectValueMaxTag1,callback:function(l){e.selectValueMaxTag1=l},expression:"selectValueMaxTag1"}}),a("h2",[e._v("maxTagText")]),a("Select",{attrs:{multiple:"",filterable:"","max-tag-count":2,"max-tag-text":e.maxTagText},on:{change:e.handlerChange},model:{value:e.selectValueMaxTag2,callback:function(l){e.selectValueMaxTag2=l},expression:"selectValueMaxTag2"}},e._l(e.optionBaseCreate,(function(l){return a("Option",{key:l.value,attrs:{value:l.value}},[e._v(e._s(l.label))])})),1)],1),a("div",{staticClass:"dev-select-view"},[a("h2",[e._v("基础")]),a("p",[e._v("dropdownMatchSelectWidth:下拉框是否与选择器同宽")]),a("Select",{attrs:{option:e.optionBaseHave,dropdownMatchSelectWidth:!0},on:{change:e.handlerChange},model:{value:e.selectValueBaseHave,callback:function(l){e.selectValueBaseHave=l},expression:"selectValueBaseHave"}}),a("p",[e._v("长数据时超出滚动")]),a("Select",{attrs:{option:e.optionBaseLarge},on:{change:e.handlerChange},model:{value:e.selectValueBaseLarge,callback:function(l){e.selectValueBaseLarge=l},expression:"selectValueBaseLarge"}}),a("p",[e._v("长数据时定义下拉框的最大高度，超出滚动")]),a("Select",{attrs:{option:e.optionBaseLarge,maxHeight:"300px"},on:{change:e.handlerChange},model:{value:e.selectValueBaseLarge,callback:function(l){e.selectValueBaseLarge=l},expression:"selectValueBaseLarge"}}),a("p",[e._v("props:option")]),a("Select",{attrs:{option:e.optionBase},on:{change:e.handlerChange},model:{value:e.selectValueBase0,callback:function(l){e.selectValueBase0=l},expression:"selectValueBase0"}}),a("Select",{attrs:{option:e.optionBase},on:{change:e.handlerChange},model:{value:e.selectValueBase1,callback:function(l){e.selectValueBase1=l},expression:"selectValueBase1"}}),a("p",[e._v("slots:option")]),a("Select",{on:{change:e.handlerChange},model:{value:e.selectValueBase2,callback:function(l){e.selectValueBase2=l},expression:"selectValueBase2"}},e._l(e.optionBase,(function(e){return a("Option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1),a("p",[e._v("返回值valueLabel格式props:option")]),a("Select",{attrs:{valueLable:"",option:e.optionBase},on:{change:e.handlerChange},model:{value:e.selectValueBase3,callback:function(l){e.selectValueBase3=l},expression:"selectValueBase3"}}),a("p",[e._v("空数据")]),a("Select",{attrs:{option:e.optionBaseEmpty},on:{change:e.handlerChange},model:{value:e.selectValueBase4,callback:function(l){e.selectValueBase4=l},expression:"selectValueBase4"}})],1),a("div",{staticClass:"dev-select-view"},[a("h2",[e._v("禁用")]),a("Select",{attrs:{option:e.optionDisabled,disabled:""},on:{change:e.handlerChange},model:{value:e.selectValueDisabled1,callback:function(l){e.selectValueDisabled1=l},expression:"selectValueDisabled1"}}),a("Select",{attrs:{option:e.optionDisabled},on:{change:e.handlerChange},model:{value:e.selectValueDisabled2,callback:function(l){e.selectValueDisabled2=l},expression:"selectValueDisabled2"}}),a("Select",{attrs:{option:e.optionDisabled,disabled:"",multiple:""},on:{change:e.handlerChange},model:{value:e.selectValueDisabled3,callback:function(l){e.selectValueDisabled3=l},expression:"selectValueDisabled3"}}),a("Select",{attrs:{option:e.optionDisabled,multiple:""},on:{change:e.handlerChange},model:{value:e.selectValueDisabled4,callback:function(l){e.selectValueDisabled4=l},expression:"selectValueDisabled4"}})],1),a("div",{staticClass:"dev-select-view"},[a("h2",[e._v("size")]),a("p",[e._v("mini: ")]),a("Select",{attrs:{size:"mini"},model:{value:e.selectValueSizeMini,callback:function(l){e.selectValueSizeMini=l},expression:"selectValueSizeMini"}},e._l(e.optionSizeMini,(function(l){return a("Option",{key:l.value,attrs:{value:l.value,selected:l.selected,disabled:l.disabled}},[e._v("\n                "+e._s(l.label)+"\n            ")])})),1),a("p",[e._v("small: ")]),a("Select",{attrs:{size:"small"},model:{value:e.selectValueSizeSmall,callback:function(l){e.selectValueSizeSmall=l},expression:"selectValueSizeSmall"}},e._l(e.optionSizeSmall,(function(l){return a("Option",{key:l.value,attrs:{value:l.value,selected:l.selected,disabled:l.disabled}},[e._v("\n                "+e._s(l.label)+"\n            ")])})),1),a("p",[e._v("default: ")]),a("Select",{model:{value:e.selectValueSizeDefault,callback:function(l){e.selectValueSizeDefault=l},expression:"selectValueSizeDefault"}},e._l(e.optionSizeDefault,(function(l){return a("Option",{key:l.value,attrs:{value:l.value,selected:l.selected,disabled:l.disabled}},[e._v("\n                "+e._s(l.label)+"\n            ")])})),1),a("p",[e._v("large: ")]),a("Select",{attrs:{size:"large"},model:{value:e.selectValueSizeLarge,callback:function(l){e.selectValueSizeLarge=l},expression:"selectValueSizeLarge"}},e._l(e.optionSizeLarge,(function(l){return a("Option",{key:l.value,attrs:{value:l.value,selected:l.selected,disabled:l.disabled}},[e._v("\n                "+e._s(l.label)+"\n            ")])})),1)],1),a("div",{staticClass:"dev-select-view"},[a("h2",[e._v("可清空")]),a("p",[e._v("可清空：props:option")]),a("Select",{attrs:{option:e.optionClearable,clearable:""},on:{change:e.handlerChange},model:{value:e.selectValueClearable,callback:function(l){e.selectValueClearable=l},expression:"selectValueClearable"}})],1),a("div",{staticClass:"dev-select-view"},[a("h2",[e._v("分组")]),a("p",[e._v("分组：props:option")]),a("Select",{attrs:{option:e.optionGroup,clearable:""},on:{change:e.handlerChange},model:{value:e.selectValueGroup,callback:function(l){e.selectValueGroup=l},expression:"selectValueGroup"}}),a("p",[e._v("分组：slots:option")]),a("Select",{on:{change:e.handlerChange},model:{value:e.selectValueGroup1,callback:function(l){e.selectValueGroup1=l},expression:"selectValueGroup1"}},[a("OptionGroup",{attrs:{label:"ceshi"}},e._l(e.optionGroup0,(function(l){return a("Option",{key:l.value,attrs:{value:l.value,selected:l.selected,disabled:l.disabled}},[e._v("\n                    "+e._s(l.label)+"\n                ")])})),1),a("OptionGroup",{attrs:{label:"ceshi2"}},e._l(e.optionGroup1,(function(l){return a("Option",{key:l.value,attrs:{value:l.value,selected:l.selected,disabled:l.disabled}},[e._v("\n                    "+e._s(l.label)+"\n                ")])})),1)],1)],1),a("div",{staticClass:"dev-select-view"},[a("h2",[e._v("自定义模板")]),a("p",[e._v("自定义模板：slots:option")]),a("Select",{on:{change:e.handlerChange},model:{value:e.selectValueCustomModel1,callback:function(l){e.selectValueCustomModel1=l},expression:"selectValueCustomModel1"}},e._l(e.optionCustomModel,(function(l){return a("Option",{key:l.value,attrs:{value:l.value,label:l.label,disabled:l.disabled}},[a("Icon",{staticStyle:{"margin-right":"10px"},attrs:{type:l.icon}}),e._v("\n                "+e._s(l.label)+"\n            ")],1)})),1),a("p",[e._v("自定义模板：props:option")]),a("Select",{attrs:{option:e.optionCustomModel},on:{change:e.handlerChange},model:{value:e.selectValueCustomModel2,callback:function(l){e.selectValueCustomModel2=l},expression:"selectValueCustomModel2"}})],1),a("div",{staticClass:"dev-select-view"},[a("h2",[e._v("多选")]),a("p",[e._v("多选：slots:option")]),a("Select",{attrs:{multiple:""},on:{change:e.handlerChange},model:{value:e.selectValueMultiple1,callback:function(l){e.selectValueMultiple1=l},expression:"selectValueMultiple1"}},e._l(e.optionMultiple,(function(l){return a("Option",{key:l.value,attrs:{value:l.value,label:l.label,disabled:l.disabled}},[e._v("\n                "+e._s(l.label)+"\n            ")])})),1),a("p",[e._v("多选返回值valueLabel格式：props:option")]),a("Select",{attrs:{multiple:"",valueLable:"",option:e.optionMultiple},on:{change:e.handlerChange},model:{value:e.selectValueMultiple2,callback:function(l){e.selectValueMultiple2=l},expression:"selectValueMultiple2"}}),a("h2",[e._v("限制多选数量 multipleLimit")]),a("p",[e._v("多选：slots:option")]),a("Select",{attrs:{multiple:"",multipleLimit:2},on:{change:e.handlerChange},model:{value:e.selectValueMultiple1,callback:function(l){e.selectValueMultiple1=l},expression:"selectValueMultiple1"}},e._l(e.optionMultiple,(function(l){return a("Option",{key:l.value,attrs:{value:l.value,label:l.label,disabled:l.disabled}},[e._v("\n                "+e._s(l.label)+"\n            ")])})),1),a("p",[e._v("多选返回值valueLabel格式：props:option")]),a("Select",{attrs:{multiple:"",multipleLimit:2,valueLable:"",option:e.optionMultiple},on:{change:e.handlerChange},model:{value:e.selectValueMultiple2,callback:function(l){e.selectValueMultiple2=l},expression:"selectValueMultiple2"}})],1),a("div",{staticClass:"dev-select-view"},[a("h2",[e._v("可搜索")]),a("Select",{attrs:{size:"mini",option:e.optionSearch,filterable:"",clearable:""},on:{change:e.handlerChange},model:{value:e.selectValueSearch2,callback:function(l){e.selectValueSearch2=l},expression:"selectValueSearch2"}}),a("Select",{attrs:{size:"small",option:e.optionSearch,filterable:"",clearable:""},on:{change:e.handlerChange},model:{value:e.selectValueSearch2,callback:function(l){e.selectValueSearch2=l},expression:"selectValueSearch2"}}),a("Select",{attrs:{option:e.optionSearch,filterable:"",clearable:""},on:{change:e.handlerChange},model:{value:e.selectValueSearch2,callback:function(l){e.selectValueSearch2=l},expression:"selectValueSearch2"}}),a("Select",{attrs:{size:"large",option:e.optionSearch,filterable:"",clearable:""},on:{change:e.handlerChange},model:{value:e.selectValueSearch2,callback:function(l){e.selectValueSearch2=l},expression:"selectValueSearch2"}}),a("p",[e._v("可搜索单选可清空slots:option")]),a("Select",{attrs:{filterable:"",clearable:""},on:{change:e.handlerChange},model:{value:e.selectValueSearch1,callback:function(l){e.selectValueSearch1=l},expression:"selectValueSearch1"}},e._l(e.optionSearch,(function(l){return a("Option",{key:l.value,attrs:{value:l.value,label:l.label,disabled:l.disabled}},[a("Icon",{staticStyle:{"margin-right":"10px"},attrs:{type:l.icon}}),e._v("\n                "+e._s(l.label)+"\n            ")],1)})),1),a("p",[e._v("可搜索单选可清空slots:optionGroup")]),a("Select",{attrs:{filterable:"",clearable:""},on:{change:e.handlerChange},model:{value:e.selectValueSearch1,callback:function(l){e.selectValueSearch1=l},expression:"selectValueSearch1"}},[a("OptionGroup",{attrs:{label:"search1"}},e._l(e.optionSearchGroup0,(function(l){return a("Option",{key:l.value,attrs:{value:l.value,selected:l.selected,disabled:l.disabled}},[e._v("\n                    "+e._s(l.label)+"\n                ")])})),1),a("OptionGroup",{attrs:{label:"search2"}},e._l(e.optionSearchGroup1,(function(l){return a("Option",{key:l.value,attrs:{value:l.value,selected:l.selected,disabled:l.disabled}},[e._v("\n                    "+e._s(l.label)+"\n                ")])})),1)],1),a("p",[e._v("可搜索单选可清空props:option")]),a("Select",{attrs:{option:e.optionSearch,filterable:"",clearable:""},on:{change:e.handlerChange},model:{value:e.selectValueSearch2,callback:function(l){e.selectValueSearch2=l},expression:"selectValueSearch2"}}),a("p",[e._v("可搜索多选可清空props:option")]),a("Select",{attrs:{option:e.optionSearch,multiple:"",filterable:"",clearable:"",multipleLimit:2},on:{change:e.handlerChange},model:{value:e.selectValueSearch3,callback:function(l){e.selectValueSearch3=l},expression:"selectValueSearch3"}}),a("p",[e._v("可搜索单选可清空props:optionGroup")]),a("Select",{attrs:{option:e.optionSearchGroup,filterable:"",clearable:""},on:{change:e.handlerChange},model:{value:e.selectValueSearchGroup2,callback:function(l){e.selectValueSearchGroup2=l},expression:"selectValueSearchGroup2"}}),a("p",[e._v("可搜索多选可清空props:optionGroup")]),a("Select",{attrs:{option:e.optionSearchGroup,multiple:"",filterable:"",clearable:"",multipleLimit:2},on:{change:e.handlerChange},model:{value:e.selectValueSearchGroup3,callback:function(l){e.selectValueSearchGroup3=l},expression:"selectValueSearchGroup3"}})],1),a("div",{staticClass:"dev-select-view"},[a("h2",[e._v("远程搜索")]),a("p",[e._v("远程搜索单选可清空slot:option")]),a("Select",{attrs:{filterable:"",remote:"",clearable:"",loading:e.remoteLoading},on:{change:e.handlerChange,"remote-change":e.handlerChangeRemote},model:{value:e.selectValueRemote1,callback:function(l){e.selectValueRemote1=l},expression:"selectValueRemote1"}},e._l(e.optionRemote,(function(l){return a("Option",{key:l.value,attrs:{value:l.value,label:l.label,disabled:l.disabled}},[a("Icon",{class:l.icon,staticStyle:{"margin-right":"10px"}}),e._v("\n                "+e._s(l.label)+"\n            ")],1)})),1),a("p",[e._v("远程搜索多选可清空slot:option")]),a("Select",{attrs:{multiple:"",filterable:"",remote:"",clearable:"",loading:e.remoteLoading},on:{change:e.handlerChange,"remote-change":e.handlerChangeRemote},model:{value:e.selectValueRemote3,callback:function(l){e.selectValueRemote3=l},expression:"selectValueRemote3"}},e._l(e.optionRemote,(function(l){return a("Option",{key:l.value,attrs:{value:l.value,label:l.label,disabled:l.disabled}},[a("Icon",{class:l.icon,staticStyle:{"margin-right":"10px"}}),e._v("\n                "+e._s(l.label)+"\n            ")],1)})),1),a("p",[e._v("远程搜索多选可清空props:option")]),a("Select",{attrs:{option:e.optionRemote,filterable:"",remote:"",clearable:"",loading:e.remoteLoading},on:{change:e.handlerChange,"remote-change":e.handlerChangeRemote},model:{value:e.selectValueRemote2,callback:function(l){e.selectValueRemote2=l},expression:"selectValueRemote2"}})],1)])},o=[],s=(a("ed63"),a("8cf2"),{data:function(){return{selectValueBaseSize1:"",selectValueBaseSize2:"",selectValueBaseSize3:"",selectValueBaseSize4:"",selectValueMultipleSize1:[],selectValueMultipleSize2:[],selectValueMultipleSize3:[],selectValueMultipleSize4:[],selectValueBaseHave:"",selectValueBaseLarge:"",selectValueBase0:"",selectValueBase1:"",selectValueBase2:"0",selectValueBase3:"",selectValueBase4:"",optionBaseLarge:[],optionBase:[],optionBaseEmpty:[],optionBaseHave:[{value:"0",label:"测试0你那你打你嗲嗲嗲嗲滴啊发那间房间安静能否将案件发年房价按附件",selected:!0,disabled:!0},{value:"1",label:"测试1",selected:!1},{value:"2",label:"测试2",selected:!1},{value:"3",label:"测试3",selected:!1},{value:"4",label:"测试4",selected:!1}],selectValueCreate1:"",selectValueCreate2:"",selectValueCreate3:"",selectValueCreate4:"",optionBaseCreate:[{label:"html",value:"html"},{label:"css",value:"css"},{label:"javascript",value:"javascript"}],selectValueMaxTag1:[],selectValueMaxTag2:[],selectValueDisabled1:"",selectValueDisabled2:"1",selectValueDisabled3:"1",selectValueDisabled4:"1",optionDisabled:[],selectValueSizeMini:"",optionSizeMini:[],selectValueSizeSmall:"",optionSizeSmall:[],selectValueSizeDefault:"",optionSizeDefault:[],selectValueSizeLarge:"",optionSizeLarge:[],selectValueClearable:"",optionClearable:[],selectValueGroup:"",selectValueGroup1:"",optionGroup:[],optionGroup0:[],optionGroup1:[],selectValueCustomModel1:"",selectValueCustomModel2:"",optionCustomModel:[],selectValueSearch1:"",selectValueSearch2:"",selectValueSearch3:"",selectValueSearchGroup2:"",selectValueSearchGroup3:"",optionSearch:[],optionSearch1:[],optionSearch2:[],optionSearchGroup:[],optionSearchGroup0:[],optionSearchGroup1:[],selectValueRemote1:"",selectValueRemote2:"",selectValueRemote3:"",optionRemote:[],optionRemoteData:[],remoteLoading:!1,selectValueMultiple1:"",selectValueMultiple2:[],optionMultiple:[]}},mounted:function(){var e=this;setTimeout((function(){e.getOptionData()}),4e3),setTimeout((function(){e.setValues()}),3e3)},methods:{maxTagText:function(e){return"more ".concat(e)},setValues:function(){this.selectValueMultiple2=[]},getOptionData:function(){this.optionBase=[{value:"0",label:"测试0",selected:!0,disabled:!0},{value:"1",label:"测试1",selected:!1},{value:"2",label:"测试2",selected:!1},{value:"3",label:"测试3",selected:!1},{value:"4",label:"测试4",selected:!1}],this.optionBaseLarge=[{value:"0",label:"测试0",selected:!0,disabled:!0},{value:"1",label:"测试1",selected:!1},{value:"2",label:"测试2",selected:!1},{value:"3",label:"测试3",selected:!1},{value:"4",label:"测试4",selected:!1},{value:"5",label:"测试5",selected:!0,disabled:!0},{value:"6",label:"测试6",selected:!1},{value:"7",label:"测试7",selected:!1},{value:"8",label:"测试8",selected:!1},{value:"9",label:"测试9",selected:!1},{value:"10",label:"测试10",selected:!1},{value:"11",label:"测试11",selected:!1}],this.optionDisabled=[{value:"0",label:"测试0",selected:!0,disabled:!0},{value:"1",label:"测试1",selected:!1},{value:"2",label:"测试2",selected:!1},{value:"3",label:"测试3",selected:!1},{value:"4",label:"测试5",selected:!1}],this.optionSizeSmall=[{value:"0",label:"测试0",selected:!0,disabled:!0},{value:"1",label:"测试1",selected:!1},{value:"2",label:"测试2",selected:!1},{value:"3",label:"测试3",selected:!1},{value:"4",label:"测试5",selected:!1}],this.optionSizeDefault=[{value:"0",label:"测试0",selected:!0,disabled:!0},{value:"1",label:"测试1",selected:!1},{value:"2",label:"测试2",selected:!1},{value:"3",label:"测试3",selected:!1},{value:"4",label:"测试5",selected:!1}],this.optionSizeLarge=[{value:"0",label:"测试0",selected:!0,disabled:!0},{value:"1",label:"测试1",selected:!1},{value:"2",label:"测试2",selected:!1},{value:"3",label:"测试3",selected:!1},{value:"4",label:"测试5",selected:!1}],this.optionClearable=[{value:"0",label:"测试0",selected:!0,disabled:!0},{value:"1",label:"测试1",selected:!1},{value:"2",label:"测试2",selected:!1},{value:"3",label:"测试3",selected:!1},{value:"4",label:"测试5",selected:!1}],this.optionGroup=[{value:"group1",label:"group1",option:[{value:"option0",label:"option0",disabled:!0},{value:"option1",label:"option1"}]},{value:"group2",label:"group2",option:[{value:"option2-1",label:"option2-1",disabled:!0},{value:"option2-2",label:"option2-2"}]}],this.optionGroup0=[{value:"group0",label:"测试group0"},{value:"group1",label:"测试group1"},{value:"group2",label:"测试group2"}],this.optionGroup1=[{value:"group3",label:"测试group3"},{value:"group4",label:"测试group4"}],this.optionCustomModel=[{value:"0",label:"测试0",icon:"home",disabled:!0},{value:"1",label:"测试1",icon:"star"},{value:"2",label:"测试2",icon:"button"},{value:"3",label:"测试3",icon:"sound"},{value:"4",label:"测试5",icon:"setting"}],this.optionSearch=[{value:"0",label:"测试0",icon:"home",disabled:!0},{value:"1",label:"测试1",icon:"star"},{value:"2",label:"测试2",icon:"button"},{value:"3",label:"测试3",icon:"sound"},{value:"4",label:"测试5",icon:"setting"}],this.optionSearchGroup0=[{value:"group0",label:"测试group0"},{value:"group1",label:"测试group1"},{value:"group2",label:"测试group2"}],this.optionSearchGroup1=[{value:"group3",label:"测试group3"},{value:"group4",label:"测试group4"}],this.optionSearchGroup=[{value:"group1",label:"group1",selected:!0,disabled:!0,noClick:!1,option:[{value:"group0",label:"测试group0",selected:!0,disabled:!0},{value:"group1",label:"测试group1",selected:!1}]},{value:"group2",label:"group2",selected:!0,disabled:!0,noClick:!0,option:[{value:"group2",label:"测试group2",selected:!0,disabled:!0},{value:"group3",label:"测试group3",selected:!1}]}],this.optionRemote=[{value:"0",label:"测试0",icon:"home",disabled:!0},{value:"1",label:"测试1",icon:"star"},{value:"2",label:"测试2",icon:"button"},{value:"3",label:"测试3",icon:"sound"},{value:"4",label:"测试5",icon:"setting"}],this.optionRemoteData=[{value:"0",label:"测试0",icon:"home",disabled:!0},{value:"1",label:"测试1",icon:"star"},{value:"2",label:"测试2",icon:"button"},{value:"3",label:"测试3",icon:"sound"},{value:"4",label:"测试5",icon:"setting"}],this.optionMultiple=[{value:"0",label:"测试0"},{value:"1",label:"测试1"},{value:"2",label:"测试2"},{value:"3",label:"测试3"},{value:"4",label:"测试4"},{value:"5",label:"测试5"},{value:"6",label:"测试6"},{value:"7",label:"测试7"},{value:"8",label:"测试8"}]},handlerChange:function(e){console.log(e,"===cahnge")},handlerChangeRemote:function(e){var l=this;console.log(e,"value"),this.optionRemote=[],this.remoteLoading=!0,setTimeout((function(){l.optionRemote=l.optionRemoteData.filter((function(l){return l.label.includes(e)})),console.log(l.optionRemote,"this.optionRemote"),l.remoteLoading=!1}),500)}}}),n=s,c=(a("6b1a"),a("9ca4")),i=Object(c["a"])(n,t,o,!1,null,"a691f882",null);l["default"]=i.exports}}]);
//# sourceMappingURL=chunk-6f6c6c09.32ff1c00.js.map