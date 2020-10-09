(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2308c5"],{ed6f:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"doc-article monkey-view-doc"},[n("h1",[t._v("Loading 加载中")]),n("p",[t._v("当正在获取数据时可以使用loading提高用户体验。")]),t._m(0),n("code-wrap",{attrs:{id:"JCYF"}},[n("template",{slot:"description"},[n("p",[t._v("设置"),n("code",[t._v("size")]),t._v("属性可以实现不同尺寸的loading，"),n("code",[t._v("visible")]),t._v("属性控制loading是否显示。")]),n("p",[t._v("使用"),n("code",[t._v("slot")]),t._v("可以定义加载中文字和加载图标，如果自定义实现加载图片需要自己实现加载的动画和样式。")])]),n("template",{slot:"title"},[t._v("基础用法 "),n("a",{attrs:{href:"#JCYF","data-title":"基础用法"}},[t._v("#")])]),n("template",{slot:"source"},[n("monkey-view-demo0")],1),n("template",{slot:"highlight"},[n("p"),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <h4>基础</h4>\n    <Row>\n        <Col><Loading size="mini" :visible="loading" /></Col>\n        <Col><Loading size="small" :visible="loading" /></Col>\n        <Col><Loading :visible="loading" /></Col>\n        <Col><Loading size="large" :visible="loading" /></Col>\n    </Row>\n    <h4>使用slot</h4>\n    <Loading size="mini" :visible="loading">\n        <Icon type="loading"></Icon>\n        <span slot="text">loading...</span>\n    </Loading>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                loading: true\n            }\n        }      \n    }\n<\/script>\n\n')])])])])],2),n("code-wrap",{attrs:{id:"BTLX"}},[n("template",{slot:"description"},[n("p",[t._v("设置"),n("code",[t._v("type")]),t._v("属性实现不同类型的loading，内部提供六种loading效果，可以根据需要使用。")])]),n("template",{slot:"title"},[t._v("不同类型 "),n("a",{attrs:{href:"#BTLX","data-title":"不同类型"}},[t._v("#")])]),n("template",{slot:"source"},[n("monkey-view-demo1")],1),n("template",{slot:"highlight"},[n("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <Row>\n        <Col><Loading size="mini" :visible="loading" /></Col>\n        <Col><Loading type="loading1" size="mini" :visible="loading" /></Col>\n        <Col><Loading type="loading2" size="small" :visible="loading" /></Col>\n        <Col><Loading type="loading3" :visible="loading" /></Col>\n        <Col><Loading type="loading4" size="large" :visible="loading" /></Col>\n        <Col><Loading type="loading5" size="large" :visible="loading" /></Col>\n    </Row>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                loading: true\n            }\n        }      \n    }\n<\/script>\n\n')])])])])],2),n("code-wrap",{attrs:{id:"GD"}},[n("template",{slot:"description"},[n("p",[t._v("设置"),n("code",[t._v("fix")]),t._v("实现定位loading，此时将按照最近定位父元素实现定位覆盖。")])]),n("template",{slot:"title"},[t._v("固定 "),n("a",{attrs:{href:"#GD","data-title":"固定"}},[t._v("#")])]),n("template",{slot:"source"},[n("monkey-view-demo2")],1),n("template",{slot:"highlight"},[n("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div class="doc-loading-fix-wrap">\n        <div>content</div>\n        <div>content</div>\n        <div>content</div>\n        <div>content</div>\n        <Loading fix :visible="loading" />\n    </div>\n    <m-switch v-model="loading" width="50">\n        <span slot="open">开启</span>\n        <span slot="close">关闭</span>\n    </m-switch>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                loading: true\n            }\n        },\n        methods: {\n        \n        }             \n    }\n<\/script>\n\n')])])])])],2),n("code-wrap",{attrs:{id:"QPJZ"}},[n("template",{slot:"description"},[n("p",[t._v("设置"),n("code",[t._v("fullscreen")]),t._v("属性可以实现全屏加载。")])]),n("template",{slot:"title"},[t._v("全屏加载 "),n("a",{attrs:{href:"#QPJZ","data-title":"全屏加载"}},[t._v("#")])]),n("template",{slot:"source"},[n("monkey-view-demo3")],1),n("template",{slot:"highlight"},[n("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <Loading fullscreen :visible="loading" />\n    <Button @click="openLoading">开启全屏加载，3s后关闭</Button>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                loading: false\n            }\n        },\n        methods: {\n            openLoading(){\n                this.loading = true;\n                setTimeout(()=>{\n                    this.loading = false;\n                }, 3000)\n            }           \n        }             \n    }\n<\/script>\n\n')])])])])],2),n("code-wrap",{attrs:{id:"FWFS"}},[n("template",{slot:"description"},[n("p",[t._v("可以使用实例方法实现loading加载效果，此时loading是全屏加载。只可以配置"),n("code",[t._v("type")]),n("code",[t._v("size")]),n("code",[t._v("text")]),t._v("属性。")]),n("p",[t._v("配置参数"),n("code",[t._v("option")]),t._v("为对象或者字符串。其中为字符串时只可配置加载文字描述。为对象时如下：")]),n("p",[n("code",[t._v("{text: '', size: '', type: ''}")])])]),n("template",{slot:"title"},[t._v("服务方式 "),n("a",{attrs:{href:"#FWFS","data-title":"服务方式"}},[t._v("#")])]),n("template",{slot:"source"},[n("monkey-view-demo4")],1),n("template",{slot:"highlight"},[n("p"),n("p"),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <Button @click=\"openLoading\">调用实例方法开启全屏加载，3s后关闭</Button>\n    <Button @click=\"openLoading('large', '加载中')\">调用实例方法开启全屏加载，3s后关闭，添加配置项</Button>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                \n            }\n        },\n        methods: {\n            openLoading(size, text){\n                let config = {};\n                if(size && text){\n                    config = {\n                        size: size || '',\n                        text: text || '',\n                        type: 'default',\n                    };\n                }   \n                this.$Loading.open(config);\n                setTimeout(()=>{\n                    this.$Loading.close();\n                }, 3000)\n            }           \n        }             \n    }\n<\/script>\n\n")])])])])],2),n("code-wrap",{attrs:{id:"ZLSX"}},[n("template",{slot:"description"},[n("p",[t._v("可以使用"),n("code",[t._v("v-loading")]),t._v("指令实现加载效果。")]),n("p",[t._v("指令方式相对于添加指令的元素进行定位。")]),n("p",[t._v("可以添加指令配置参数，其中第一个参数为loading的type，第二个参数为loading的size尺寸，第三个参数为loading的text文字。")])]),n("template",{slot:"title"},[t._v("指令实现 "),n("a",{attrs:{href:"#ZLSX","data-title":"指令实现"}},[t._v("#")])]),n("template",{slot:"source"},[n("monkey-view-demo5")],1),n("template",{slot:"highlight"},[n("p"),n("p"),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <h4>基础使用</h4>\n    <div class="doc-loading-fix-wrap" v-loading="loading">\n        <div>content</div>\n        <div>content</div>\n        <div>content</div>\n        <div>content</div>\n    </div>\n    <m-switch v-model="loading" width="50">\n        <span slot="open">开启</span>\n        <span slot="close">关闭</span>\n    </m-switch>\n\n    <h4>添加配置参数使用</h4>\n    <div class="doc-loading-fix-wrap" v-loading:loading2:large:加载中="loading1">\n        <div>content</div>\n        <div>content</div>\n        <div>content</div>\n        <div>content</div>\n    </div>\n    <m-switch v-model="loading1" width="50">\n        <span slot="open">开启</span>\n        <span slot="close">关闭</span>\n    </m-switch>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                loading: false,\n                loading1: false,\n            }\n        },\n        methods: {\n                   \n        }             \n    }\n<\/script>\n\n')])])])])],2),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"anchor-title",attrs:{id:"dai-ma-shi-li"}},[t._v("代码示例 "),n("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"anchor-title",attrs:{id:"api"}},[t._v("API "),n("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"anchor-title",attrs:{id:"loading-props"}},[t._v("Loading props "),n("a",{staticClass:"header-anchor",attrs:{href:"#loading-props"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[t._v("属性")]),n("th",[t._v("类型")]),n("th",[t._v("说明")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("visible")]),n("td",[t._v("Boolean")]),n("td",[t._v("是否显示loading")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("type")]),n("td",[t._v("String")]),n("td",[t._v("loading类型，可选值 "),n("code",[t._v("default")]),n("code",[t._v("loading1")]),n("code",[t._v("loading2")]),n("code",[t._v("loading3")]),n("code",[t._v("loading4")]),n("code",[t._v("loading5")])]),n("td",[t._v("default")])]),n("tr",[n("td",[t._v("text")]),n("td",[t._v("String")]),n("td",[t._v("文字描述")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("size")]),n("td",[t._v("String")]),n("td",[t._v("尺寸，可选值 "),n("code",[t._v("mini")]),n("code",[t._v("small")]),n("code",[t._v("default")]),n("code",[t._v("large")])]),n("td",[t._v("default")])]),n("tr",[n("td",[t._v("fix")]),n("td",[t._v("Boolean")]),n("td",[t._v("相对于已定位的父及元素定位，指令模式下相对于添加指令的元素定位")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("fullscreen")]),n("td",[t._v("Boolean")]),n("td",[t._v("全屏显示，指令模式下不能设置，服务模式下默认为全屏显示")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("color")]),n("td",[t._v("String")]),n("td",[t._v("自定义loading颜色，服务和指令模式下不能设置")]),n("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"anchor-title",attrs:{id:"loading-slot"}},[t._v("Loading slot "),n("a",{staticClass:"header-anchor",attrs:{href:"#loading-slot"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"doc-table"},[n("thead",[n("tr",[n("th",[t._v("名称")]),n("th",[t._v("说明")])])]),n("tbody",[n("tr",[n("td",[t._v("-")]),n("td",[t._v("loading图标")])]),n("tr",[n("td",[t._v("text")]),n("td",[t._v("loading文字描述")])])])])}],a=(n("5ab2"),n("6d57"),n("e10e"),n("ce3c"));function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s={name:"component-doc",components:{"monkey-view-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("h4",[t._v("基础")]),t._v(" "),n("Row",[n("Col",[n("Loading",{attrs:{size:"mini",visible:t.loading}})],1),t._v(" "),n("Col",[n("Loading",{attrs:{size:"small",visible:t.loading}})],1),t._v(" "),n("Col",[n("Loading",{attrs:{visible:t.loading}})],1),t._v(" "),n("Col",[n("Loading",{attrs:{size:"large",visible:t.loading}})],1)],1),t._v(" "),n("h4",[t._v("使用slot")]),t._v(" "),n("Loading",{attrs:{size:"mini",visible:t.loading}},[n("Icon",{attrs:{type:"loading"}}),t._v(" "),n("span",{attrs:{slot:"text"},slot:"text"},[t._v("loading...")])],1)]],2)},e=[],n={data:function(){return{loading:!0}}};return d({render:t,staticRenderFns:e},n)}(),"monkey-view-demo1":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("Row",[n("Col",[n("Loading",{attrs:{size:"mini",visible:t.loading}})],1),t._v(" "),n("Col",[n("Loading",{attrs:{type:"loading1",size:"mini",visible:t.loading}})],1),t._v(" "),n("Col",[n("Loading",{attrs:{type:"loading2",size:"small",visible:t.loading}})],1),t._v(" "),n("Col",[n("Loading",{attrs:{type:"loading3",visible:t.loading}})],1),t._v(" "),n("Col",[n("Loading",{attrs:{type:"loading4",size:"large",visible:t.loading}})],1),t._v(" "),n("Col",[n("Loading",{attrs:{type:"loading5",size:"large",visible:t.loading}})],1)],1)]],2)},e=[],n={data:function(){return{loading:!0}}};return d({render:t,staticRenderFns:e},n)}(),"monkey-view-demo2":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",{staticClass:"doc-loading-fix-wrap"},[n("div",[t._v("content")]),t._v(" "),n("div",[t._v("content")]),t._v(" "),n("div",[t._v("content")]),t._v(" "),n("div",[t._v("content")]),t._v(" "),n("Loading",{attrs:{fix:"",visible:t.loading}})],1),t._v(" "),n("m-switch",{attrs:{width:"50"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),t._v(" "),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])]],2)},e=[],n={data:function(){return{loading:!0}},methods:{}};return d({render:t,staticRenderFns:e},n)}(),"monkey-view-demo3":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("Loading",{attrs:{fullscreen:"",visible:t.loading}}),t._v(" "),n("Button",{on:{click:t.openLoading}},[t._v("开启全屏加载，3s后关闭")])]],2)},e=[],n={data:function(){return{loading:!1}},methods:{openLoading:function(){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1}),3e3)}}};return d({render:t,staticRenderFns:e},n)}(),"monkey-view-demo4":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("Button",{on:{click:t.openLoading}},[t._v("调用实例方法开启全屏加载，3s后关闭")]),t._v(" "),n("Button",{on:{click:function(e){return t.openLoading("large","加载中")}}},[t._v("调用实例方法开启全屏加载，3s后关闭，添加配置项")])]],2)},e=[],n={data:function(){return{}},methods:{openLoading:function(t,e){var n=this,i={};t&&e&&(i={size:t||"",text:e||"",type:"default"}),this.$Loading.open(i),setTimeout((function(){n.$Loading.close()}),3e3)}}};return d({render:t,staticRenderFns:e},n)}(),"monkey-view-demo5":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("h4",[t._v("基础使用")]),t._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"doc-loading-fix-wrap"},[n("div",[t._v("content")]),t._v(" "),n("div",[t._v("content")]),t._v(" "),n("div",[t._v("content")]),t._v(" "),n("div",[t._v("content")])]),t._v(" "),n("m-switch",{attrs:{width:"50"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),t._v(" "),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])]),t._v(" "),n("h4",[t._v("添加配置参数使用")]),t._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading:loading2:large:加载中",value:t.loading1,expression:"loading1",arg:"loading2:large:加载中"}],staticClass:"doc-loading-fix-wrap"},[n("div",[t._v("content")]),t._v(" "),n("div",[t._v("content")]),t._v(" "),n("div",[t._v("content")]),t._v(" "),n("div",[t._v("content")])]),t._v(" "),n("m-switch",{attrs:{width:"50"},model:{value:t.loading1,callback:function(e){t.loading1=e},expression:"loading1"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),t._v(" "),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])]],2)},e=[],n={data:function(){return{loading:!1,loading1:!1}},methods:{}};return d({render:t,staticRenderFns:e},n)}()}},r=s,v=n("9ca4"),c=Object(v["a"])(r,i,o,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d2308c5.bd371db3.js.map