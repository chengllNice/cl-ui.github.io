(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e20f"],{d3f0:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"doc-article cl-ui-doc"},[r("h1",[t._v("Card 卡片")]),r("p",[t._v("基础容器，可承载文字、列表、图片等内容。")]),t._m(0),r("code-wrap",{attrs:{id:"JCYF"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[t._v("基本简单的使用方法。可以设置 "),r("code",[t._v("title")]),t._v("属性定义标题，使用 "),r("code",[t._v("name='extra'")]),t._v("的 "),r("code",[t._v("slot")]),t._v("定义右侧显示的额外信息。也可以使用 "),r("code",[t._v("name='header'")]),t._v("的 "),r("code",[t._v("slot")]),t._v("实现自定义头部，此时 "),r("code",[t._v("extra")]),t._v("的 "),r("code",[t._v("slot")]),t._v("无效。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[t._v("基础用法 "),r("a",{attrs:{href:"#JCYF","data-title":"基础用法"}},[t._v("#")])]),r("template",{slot:"source"},[r("cl-ui-demo0")],1),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-row :gutter="10">\n        <cl-col>\n            <cl-card title="Default Card">\n                <template slot="extra">\n                    extra\n                </template>\n                <div>Card Content</div>\n                <div>Card Content</div>\n                <div>Card Content</div>\n            </cl-card>\n        </cl-col>\n        <cl-col>\n            <cl-card>\n                <template slot="header">\n                    <div class="doc-card-header">\n                        <span>Slot Header Card</span>\n                        <span class="extra">extra</span>\n                    </div>\n                </template>\n                <div>Card Content</div>\n                <div>Card Content</div>\n                <div>Card Content</div>\n            </cl-card>\n        </cl-col>\n    </cl-row>\n</template>\n')])])])],2),r("code-wrap",{attrs:{id:"WBK"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[t._v("设置 "),r("code",[t._v("no-border")]),t._v("属性可以实现无边框的卡片。建议此时在灰色背景下使用。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[t._v("无边框 "),r("a",{attrs:{href:"#WBK","data-title":"无边框"}},[t._v("#")])]),r("template",{slot:"source"},[r("cl-ui-demo1")],1),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div style="background-color: #eeeeee; padding: 20px;">\n        <cl-card title="Default Card" no-border>\n            <template slot="extra">\n                extra\n            </template>\n            <div>Card Content</div>\n            <div>Card Content</div>\n            <div>Card Content</div>\n        </cl-card>\n    </div>\n</template>\n')])])])],2),r("code-wrap",{attrs:{id:"JYXTYY"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[t._v("设置 "),r("code",[t._v("no-hover")]),t._v("属性可以实现禁用悬停阴影的效果。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[t._v("禁用悬停阴影 "),r("a",{attrs:{href:"#JYXTYY","data-title":"禁用悬停阴影"}},[t._v("#")])]),r("template",{slot:"source"},[r("cl-ui-demo2")],1),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-row :gutter="10">\n        <cl-col>\n            <cl-card title="Default Card">\n                <template slot="extra">\n                    extra\n                </template>\n                <div>Card Content</div>\n                <div>Card Content</div>\n                <div>Card Content</div>\n            </cl-card>\n        </cl-col>\n        <cl-col>\n            <cl-card title="Default Card" no-hover>\n                <template slot="extra">\n                    extra\n                </template>\n                <div>Card Content</div>\n                <div>Card Content</div>\n                <div>Card Content</div>\n            </cl-card>\n        </cl-col>\n    </cl-row>\n</template>\n')])])])],2),r("code-wrap",{attrs:{id:"JJKP"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[t._v("简洁卡片只包含内容区域。可以设置 "),r("code",[t._v("body-padding")]),t._v("属性控制内容区域的padding。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[t._v("简洁卡片 "),r("a",{attrs:{href:"#JJKP","data-title":"简洁卡片"}},[t._v("#")])]),r("template",{slot:"source"},[r("cl-ui-demo3")],1),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-row :gutter="10">\n        <cl-col>\n            <cl-card>\n                <div>Card Content</div>\n                <div>Card Content</div>\n                <div>Card Content</div>\n            </cl-card>\n        </cl-col>\n        <cl-col body-padding="10px">\n            <cl-card>\n                <div>Card Content</div>\n                <div>Card Content</div>\n                <div>Card Content</div>\n            </cl-card>\n        </cl-col>\n    </cl-row>\n</template>\n')])])])],2),r("code-wrap",{attrs:{id:"DYDBDKP"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[t._v("简洁卡片只包含内容区域。可以设置 "),r("code",[t._v("body-padding")]),t._v("属性控制内容区域的padding。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[t._v("带有底部的卡片 "),r("a",{attrs:{href:"#DYDBDKP","data-title":"带有底部的卡片"}},[t._v("#")])]),r("template",{slot:"source"},[r("cl-ui-demo4")],1),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-card body-padding="0" style="max-width: 400px">\n        <img class="doc-card-avatar" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3623139363,2281616215&fm=26&gp=0.jpg" alt="">\n        <div class="doc-card-content">\n            <h3>动漫</h3>\n            Content of no border type. Content of no border type. Content of no border type. Content of no border type.Content of no border type. Content of no border type. Content of no border type. Content of no border type.Content of no border type. Content of no border type. Content of no border type. Content of no border type.\n        </div>\n\n        <div class="doc-card-footer" slot="footer">\n            <i class="cl-icon-list"></i>\n            <i class="cl-icon-setting"></i>\n            <i class="cl-icon-thumbs"></i>\n        </div>\n    </cl-card>\n</template>\n')])])])],2),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{attrs:{id:"dai-ma-shi-li"}},[t._v("代码示例 "),r("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{attrs:{id:"api"}},[t._v("API "),r("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{attrs:{id:"card-props"}},[t._v("Card props "),r("a",{staticClass:"header-anchor",attrs:{href:"#card-props","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"doc-table"},[r("thead",[r("tr",[r("th",[t._v("属性")]),r("th",[t._v("类型")]),r("th",[t._v("说明")]),r("th",[t._v("默认值")])])]),r("tbody",[r("tr",[r("td",[t._v("title")]),r("td",[t._v("String")]),r("td",[t._v("卡片标题")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("no-border")]),r("td",[t._v("Boolean")]),r("td",[t._v("是否显示边框")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("no-hover")]),r("td",[t._v("Boolean")]),r("td",[t._v("禁用鼠标悬停效果")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("body-padding")]),r("td",[t._v("String, Number")]),r("td",[t._v("设置内容区域的padding")]),r("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{attrs:{id:"card-slot"}},[t._v("Card slot "),r("a",{staticClass:"header-anchor",attrs:{href:"#card-slot","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"doc-table"},[r("thead",[r("tr",[r("th",[t._v("名称")]),r("th",[t._v("说明")])])]),r("tbody",[r("tr",[r("td",[t._v("header")]),r("td",[t._v("自定义卡片头部，此时 "),r("code",[t._v("name='extra'")]),t._v("的"),r("code",[t._v("slot")]),t._v("无效")])]),r("tr",[r("td",[t._v("extra")]),r("td",[t._v("定义卡片头部右侧的额外内容，可以配合"),r("code",[t._v("title")]),t._v("属性一起使用")])]),r("tr",[r("td",[t._v("footer")]),r("td",[t._v("定义卡片的页脚")])])])])}],o=(r("8e6e"),r("ac6a"),r("456d"),r("bd86"));function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach(function(e){Object(o["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var l={name:"component-doc",components:{"cl-ui-demo0":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("cl-row",{attrs:{gutter:10}},[r("cl-col",[r("cl-card",{attrs:{title:"Default Card"}},[r("template",{slot:"extra"},[t._v("\n                    extra\n                ")]),t._v(" "),r("div",[t._v("Card Content")]),t._v(" "),r("div",[t._v("Card Content")]),t._v(" "),r("div",[t._v("Card Content")])],2)],1),t._v(" "),r("cl-col",[r("cl-card",[r("template",{slot:"header"},[r("div",{staticClass:"doc-card-header"},[r("span",[t._v("Slot Header Card")]),t._v(" "),r("span",{staticClass:"extra"},[t._v("extra")])])]),t._v(" "),r("div",[t._v("Card Content")]),t._v(" "),r("div",[t._v("Card Content")]),t._v(" "),r("div",[t._v("Card Content")])],2)],1)],1)]],2)},e=[],r={};return c({render:t,staticRenderFns:e},r)}(),"cl-ui-demo1":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("div",{staticStyle:{"background-color":"#eeeeee",padding:"20px"}},[r("cl-card",{attrs:{title:"Default Card","no-border":""}},[r("template",{slot:"extra"},[t._v("\n                extra\n            ")]),t._v(" "),r("div",[t._v("Card Content")]),t._v(" "),r("div",[t._v("Card Content")]),t._v(" "),r("div",[t._v("Card Content")])],2)],1)]],2)},e=[],r={};return c({render:t,staticRenderFns:e},r)}(),"cl-ui-demo2":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("cl-row",{attrs:{gutter:10}},[r("cl-col",[r("cl-card",{attrs:{title:"Default Card"}},[r("template",{slot:"extra"},[t._v("\n                    extra\n                ")]),t._v(" "),r("div",[t._v("Card Content")]),t._v(" "),r("div",[t._v("Card Content")]),t._v(" "),r("div",[t._v("Card Content")])],2)],1),t._v(" "),r("cl-col",[r("cl-card",{attrs:{title:"Default Card","no-hover":""}},[r("template",{slot:"extra"},[t._v("\n                    extra\n                ")]),t._v(" "),r("div",[t._v("Card Content")]),t._v(" "),r("div",[t._v("Card Content")]),t._v(" "),r("div",[t._v("Card Content")])],2)],1)],1)]],2)},e=[],r={};return c({render:t,staticRenderFns:e},r)}(),"cl-ui-demo3":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("cl-row",{attrs:{gutter:10}},[r("cl-col",[r("cl-card",[r("div",[t._v("Card Content")]),t._v(" "),r("div",[t._v("Card Content")]),t._v(" "),r("div",[t._v("Card Content")])])],1),t._v(" "),r("cl-col",{attrs:{"body-padding":"10px"}},[r("cl-card",[r("div",[t._v("Card Content")]),t._v(" "),r("div",[t._v("Card Content")]),t._v(" "),r("div",[t._v("Card Content")])])],1)],1)]],2)},e=[],r={};return c({render:t,staticRenderFns:e},r)}(),"cl-ui-demo4":function(){var t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("cl-card",{staticStyle:{"max-width":"400px"},attrs:{"body-padding":"0"}},[r("img",{staticClass:"doc-card-avatar",attrs:{src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3623139363,2281616215&fm=26&gp=0.jpg",alt:""}}),t._v(" "),r("div",{staticClass:"doc-card-content"},[r("h3",[t._v("动漫")]),t._v("\n            Content of no border type. Content of no border type. Content of no border type. Content of no border type.Content of no border type. Content of no border type. Content of no border type. Content of no border type.Content of no border type. Content of no border type. Content of no border type. Content of no border type.\n        ")]),t._v(" "),r("div",{staticClass:"doc-card-footer",attrs:{slot:"footer"},slot:"footer"},[r("i",{staticClass:"cl-icon-list"}),t._v(" "),r("i",{staticClass:"cl-icon-setting"}),t._v(" "),r("i",{staticClass:"cl-icon-thumbs"})])])]],2)},e=[],r={};return c({render:t,staticRenderFns:e},r)}()}},i=l,s=r("2877"),v=Object(s["a"])(i,n,a,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d21e20f.9f8db8a3.js.map