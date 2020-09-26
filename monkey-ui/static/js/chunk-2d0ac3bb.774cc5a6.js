(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac3bb"],{1952:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"doc-article monkey-ui-doc"},[a("h1",[e._v("Time 相对时间")]),e._m(0),a("code-wrap",{attrs:{id:"JCYF"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[e._v("默认类型时，一分钟之内显示为（..秒前），一小时之内显示（..分钟前），今天显示（时间点），昨天显示（昨天+时间点），昨天之前显示（时间点）")])]),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("基础用法 "),a("a",{attrs:{href:"#JCYF","data-title":"基础用法"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-ui-demo0")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <h4>指定时间在当前时间点之前</h4>\n    一分钟之内：<Time :time="baseTime1"></Time>\n    <br>\n    一小时之内：<Time :time="baseTime2"></Time>\n    <br>\n    今天：<Time :time="baseTime3"></Time>\n    <br>\n    昨天：<Time :time="baseTime4"></Time>\n    <br>\n    昨天之前：<Time :time="baseTime5"></Time>\n\n    <h4>指定时间在当前时间点之后</h4>\n    一分钟之内：<Time :time="baseTime6"></Time>\n    <br>\n    一小时之内：<Time :time="baseTime7"></Time>\n    <br>\n    今天：<Time :time="baseTime8"></Time>\n    <br>\n    明天：<Time :time="baseTime9"></Time>\n    <br>\n    明天之后：<Time :time="baseTime10"></Time>\n</template>\n<script>\n    export default {\n      data(){\n        let date = new Date();\n        let yesterDate = new Date();\n        yesterDate.setDate(date.getDate() - 1);\n        let oldDate = new Date();\n        oldDate.setDate(date.getDate() - 2);\n        return {\n          baseTime1: date - 10 * 1000,\n          baseTime2: date - 60 * 45 * 1000,\n          baseTime3: date - 60 * 70 * 1000,\n          baseTime4: yesterDate,\n          baseTime5: oldDate,\n\n          baseTime6: date.getTime() + 10 * 1000,\n          baseTime7: date.getTime() + 60 * 45 * 1000,\n          baseTime8: date.getTime() + 2 * 60 * 60 * 1000,\n          baseTime9: date.getTime() + 24 * 60 * 60 * 1000,\n          baseTime10: date.getTime() + 48 * 60 * 60 * 1000,\n        }\n      }\n    }\n<\/script>\n')])])])],2),a("code-wrap",{attrs:{id:"LX"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[e._v("type类型可取值"),a("code",[e._v("relative")]),a("code",[e._v("date")]),a("code",[e._v("datetime")])])]),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("type类型 "),a("a",{attrs:{href:"#LX","data-title":"type类型"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-ui-demo1")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Time :time="baseTime"></Time>\n    <br>\n    <Time :time="baseTime" type="date"></Time>\n    <br>\n    <Time :time="baseTime" type="datetime"></Time>\n</template>\n<script>\n    export default {\n      data(){\n        let date = new Date();\n        return {\n          baseTime: date - 10 * 1000,\n        }\n      }\n    }\n<\/script>\n')])])])],2),a("code-wrap",{attrs:{id:"GSH"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[e._v("format默认"),a("code",[e._v("yyyy-MM-dd hh:mm:ss")])])]),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("format格式化 "),a("a",{attrs:{href:"#GSH","data-title":"format格式化"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-ui-demo2")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Time :time="baseTime" format="yyyy年MM月dd日 hh:mm"></Time>\n    <br>\n    <Time :time="baseTime2" format="yyyy年MM月dd日 hh:mm"></Time>\n    <br>\n    <Time :time="baseTime" type="date" format="yyyy年MM月dd日 hh:mm"></Time>\n    <br>\n    <Time :time="baseTime" type="datetime" format="yyyy年MM月dd日 hh:mm"></Time>\n</template>\n<script>\n    export default {\n      data(){\n        let date = new Date();\n        return {\n          baseTime: date - 10 * 1000,\n          baseTime2: date - 24 * 60 * 60 * 1000,\n        }\n      }\n    }\n<\/script>\n')])])])],2),a("code-wrap",{attrs:{id:"ZDGXSJ"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("p",[a("code",[e._v("interval")]),e._v("属性设置自动更新时间的间隔，单位：秒。")])]),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("自动更新时间 "),a("a",{attrs:{href:"#ZDGXSJ","data-title":"自动更新时间"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-ui-demo3")],1),a("p"),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Time :time="baseTime" :interval="1"></Time>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          baseTime: new Date()\n        }\n      }\n    }\n<\/script>\n')])])])],2),e._m(1),e._m(2),e._m(3)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{attrs:{id:"dai-ma-shi-li"}},[e._v("代码示例 "),a("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{attrs:{id:"api"}},[e._v("API "),a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{attrs:{id:"time-props"}},[e._v("Time props "),a("a",{staticClass:"header-anchor",attrs:{href:"#time-props"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[e._v("属性")]),a("th",[e._v("类型")]),a("th",[e._v("说明")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("time")]),a("td",[e._v("String、Date、Number")]),a("td",[e._v("必传参数，支持时间戳")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("type")]),a("td",[e._v("String")]),a("td",[a("code",[e._v("relative")]),a("code",[e._v("date")]),a("code",[e._v("datetime")]),e._v(","),a("code",[e._v("relative")]),e._v("类型时，默认一分钟之内显示为（..秒前），一小时之内显示（..分钟前），今天显示（时间点），昨天显示（昨天+时间点），昨天之前显示（时间点）")]),a("td",[e._v("relative")])]),a("tr",[a("td",[e._v("interval")]),a("td",[e._v("Number")]),a("td",[e._v("设置自动更新时间的间隔，单位：秒")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("format")]),a("td",[e._v("String")]),a("td",[e._v("格式化时间显示，"),a("code",[e._v("date")]),a("code",[e._v("datetime")]),e._v("时有效，"),a("code",[e._v("relative")]),e._v("时按照指定的时间格式显示日期和时间")]),a("td",[e._v("yyyy-MM-dd hh:mm:ss")])])])])}],m=(a("5ab2"),a("6d57"),a("e10e"),a("9bef"));function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(m["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={name:"component-doc",components:{"monkey-ui-demo0":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("h4",[e._v("指定时间在当前时间点之前")]),e._v("\n    一分钟之内："),a("Time",{attrs:{time:e.baseTime1}}),e._v(" "),a("br"),e._v("\n    一小时之内："),a("Time",{attrs:{time:e.baseTime2}}),e._v(" "),a("br"),e._v("\n    今天："),a("Time",{attrs:{time:e.baseTime3}}),e._v(" "),a("br"),e._v("\n    昨天："),a("Time",{attrs:{time:e.baseTime4}}),e._v(" "),a("br"),e._v("\n    昨天之前："),a("Time",{attrs:{time:e.baseTime5}}),e._v(" "),a("h4",[e._v("指定时间在当前时间点之后")]),e._v("\n    一分钟之内："),a("Time",{attrs:{time:e.baseTime6}}),e._v(" "),a("br"),e._v("\n    一小时之内："),a("Time",{attrs:{time:e.baseTime7}}),e._v(" "),a("br"),e._v("\n    今天："),a("Time",{attrs:{time:e.baseTime8}}),e._v(" "),a("br"),e._v("\n    明天："),a("Time",{attrs:{time:e.baseTime9}}),e._v(" "),a("br"),e._v("\n    明天之后："),a("Time",{attrs:{time:e.baseTime10}})]],2)},t=[],a={data:function(){var e=new Date,t=new Date;t.setDate(e.getDate()-1);var a=new Date;return a.setDate(e.getDate()-2),{baseTime1:e-1e4,baseTime2:e-27e5,baseTime3:e-42e5,baseTime4:t,baseTime5:a,baseTime6:e.getTime()+1e4,baseTime7:e.getTime()+27e5,baseTime8:e.getTime()+72e5,baseTime9:e.getTime()+864e5,baseTime10:e.getTime()+1728e5}}};return s({render:e,staticRenderFns:t},a)}(),"monkey-ui-demo1":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Time",{attrs:{time:e.baseTime}}),e._v(" "),a("br"),e._v(" "),a("Time",{attrs:{time:e.baseTime,type:"date"}}),e._v(" "),a("br"),e._v(" "),a("Time",{attrs:{time:e.baseTime,type:"datetime"}})]],2)},t=[],a={data:function(){var e=new Date;return{baseTime:e-1e4}}};return s({render:e,staticRenderFns:t},a)}(),"monkey-ui-demo2":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Time",{attrs:{time:e.baseTime,format:"yyyy年MM月dd日 hh:mm"}}),e._v(" "),a("br"),e._v(" "),a("Time",{attrs:{time:e.baseTime2,format:"yyyy年MM月dd日 hh:mm"}}),e._v(" "),a("br"),e._v(" "),a("Time",{attrs:{time:e.baseTime,type:"date",format:"yyyy年MM月dd日 hh:mm"}}),e._v(" "),a("br"),e._v(" "),a("Time",{attrs:{time:e.baseTime,type:"datetime",format:"yyyy年MM月dd日 hh:mm"}})]],2)},t=[],a={data:function(){var e=new Date;return{baseTime:e-1e4,baseTime2:e-864e5}}};return s({render:e,staticRenderFns:t},a)}(),"monkey-ui-demo3":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Time",{attrs:{time:e.baseTime,interval:1}})]],2)},t=[],a={data:function(){return{baseTime:new Date}}};return s({render:e,staticRenderFns:t},a)}()}},o=d,c=a("9ca4"),T=Object(c["a"])(o,i,r,!1,null,null,null);t["default"]=T.exports}}]);
//# sourceMappingURL=chunk-2d0ac3bb.774cc5a6.js.map