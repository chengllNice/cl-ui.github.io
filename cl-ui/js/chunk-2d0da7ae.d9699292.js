(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da7ae"],{"6c7b":function(t,e,o){"use strict";o.r(e);var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"doc-article cl-ui-doc"},[o("h1",[t._v("Layout 布局")]),o("p",[t._v("布局组件，整体页面布局。")]),t._m(0),t._m(1),t._m(2),t._m(3),o("p",[o("cl-alter",{attrs:{type:"info",showIcon:""}},[t._v("注意：采用 flex 布局实现，注意 "),o("a",{attrs:{href:"https://caniuse.com/#search=flex",target:"_blank"}},[t._v("浏览器兼容性")]),t._v(" 的问题。")])],1),t._m(4),o("code-wrap",{attrs:{id:"JBJG"}},[o("div",{attrs:{slot:"description"},slot:"description"},[o("p",[t._v("经典的页面布局")])]),o("span",{attrs:{slot:"title"},slot:"title"},[t._v("基本结构 "),o("a",{attrs:{href:"#JBJG","data-title":"基本结构"}},[t._v("#")])]),o("template",{slot:"source"},[o("cl-ui-demo0")],1),o("p"),o("template",{slot:"highlight"},[o("pre",{pre:!0},[o("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n <div>\n    <div class="doc-layout-single">\n        <cl-layout class="doc-layout-el">\n            <cl-header class="doc-layout-header">header</cl-header>\n            <cl-content class="doc-layout-content">content</cl-content>\n            <cl-footer class="doc-layout-footer">footer</cl-footer>\n        </cl-layout>\n    </div>\n    <div class="doc-layout-single">\n        <cl-layout class="doc-layout-el">\n            <cl-header class="doc-layout-header">header</cl-header>\n            <cl-layout>\n                <cl-sider class="doc-layout-sider" hide-trigger>sider</cl-sider>\n                <cl-content class="doc-layout-content">content</cl-content>\n            </cl-layout>\n            <cl-footer class="doc-layout-footer">footer</cl-footer>\n        </cl-layout>\n    </div>\n    <div class="doc-layout-single">\n        <cl-layout class="doc-layout-el">\n            <cl-sider class="doc-layout-sider" hide-trigger>sider</cl-sider>\n            <cl-layout>\n                <cl-header class="doc-layout-header">header</cl-header>\n                <cl-content class="doc-layout-content">content</cl-content>\n                <cl-footer class="doc-layout-footer">footer</cl-footer>\n            </cl-layout>\n        </cl-layout>\n    </div>\n    <div class="doc-layout-single">\n        <cl-layout class="doc-layout-el">\n            <cl-header class="doc-layout-header">header</cl-header>\n            <cl-layout>\n                <cl-sider class="doc-layout-sider" hide-trigger>sider</cl-sider>\n                <cl-layout>\n                    <cl-content class="doc-layout-content">content</cl-content>\n                    <cl-footer class="doc-layout-footer">footer</cl-footer>\n                </cl-layout>\n            </cl-layout>\n        </cl-layout>\n    </div>\n</div>\n</template>\n<style>\n    .doc-layout-single{\n        margin-bottom: 40px;\n    }\n    .doc-layout-el{\n        text-align: center;\n        color: #ffffff;\n        font-size: 16px;\n    }\n    .doc-layout-header, .doc-layout-footer{\n        background-color: #86d8af;\n    }\n    .doc-layout-content{\n        min-height: 120px;\n        line-height: 120px;\n        background-color: #19be6b;\n    }\n    .doc-layout-sider{\n        line-height: 120px;\n        background-color: #62c191;\n    }\n</style>\n\n')])])])],2),o("code-wrap",{attrs:{id:"ZDYD"}},[o("div",{attrs:{slot:"description"},slot:"description"},[o("p",[t._v("通常这里可以设置LOGO")])]),o("span",{attrs:{slot:"title"},slot:"title"},[t._v("自定义sider的header "),o("a",{attrs:{href:"#ZDYD","data-title":"自定义sider的header"}},[t._v("#")])]),o("template",{slot:"source"},[o("cl-ui-demo1")],1),o("p"),o("template",{slot:"highlight"},[o("pre",{pre:!0},[o("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <cl-layout class="doc-layout-el">\n        <cl-sider class="doc-layout-sider" hide-trigger>\n            <div slot="header" class="doc-layout-sider-header">\n                LOGO\n            </div>\n            sider\n        </cl-sider>\n        <cl-layout>\n            <cl-header class="doc-layout-header">header</cl-header>\n            <cl-content class="doc-layout-content">content</cl-content>\n            <cl-footer class="doc-layout-footer">footer</cl-footer>\n        </cl-layout>\n    </cl-layout>\n</template>\n<style>\n    .doc-layout-single{\n        margin-bottom: 40px;\n    }\n    .doc-layout-el{\n        text-align: center;\n        color: #ffffff;\n        font-size: 16px;\n    }\n    .doc-layout-header, .doc-layout-footer{\n        background-color: #86d8af;\n    }\n    .doc-layout-content{\n        min-height: 120px;\n        line-height: 120px;\n        background-color: #19be6b;\n    }\n    .doc-layout-sider{\n        line-height: 120px;\n        background-color: #62c191;\n    }\n     .doc-layout-sider-header{\n        background-color: #02b7a5;\n     }\n</style>\n\n')])])])],2),o("code-wrap",{attrs:{id:"CBLBJ"}},[o("div",{attrs:{slot:"description"},slot:"description"},[o("p",[t._v("默认 "),o("code",[t._v("Sider")]),t._v("组件显示trigger切换侧边栏的触发器，可以使用 "),o("code",[t._v("hide-trigger")]),t._v("属性隐藏触发器。\n可设置 "),o("code",[t._v("Sider")]),t._v("组件 "),o("code",[t._v("height")]),t._v("属性使内部内容超出时滚动。\n可设置 "),o("code",[t._v("Sider")]),t._v("组件 "),o("code",[t._v("collapsedWidth")]),t._v("属性收缩起来的宽度。当收起的宽度为0时，会自动出现特殊的trigger。\n可通过 v-model双向绑定控制 "),o("code",[t._v("Sider")]),t._v("组件的展开收起状态")])]),o("span",{attrs:{slot:"title"},slot:"title"},[t._v("侧边栏布局 "),o("a",{attrs:{href:"#CBLBJ","data-title":"侧边栏布局"}},[t._v("#")])]),o("template",{slot:"source"},[o("cl-ui-demo2")],1),o("p"),o("template",{slot:"highlight"},[o("pre",{pre:!0},[o("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n <div>\n     <div class="doc-layout-single">\n         <cl-layout class="doc-layout-el">\n             <cl-header class="doc-layout-header">header</cl-header>\n             <cl-layout>\n                 <cl-sider v-model="collapsed"\n                           class="doc-layout-sider doc-layout-sider-dark"\n                          :class="{\'doc-layout-sider-close\': collapsed}"\n                          :collapsed-width="collapsedWidth"\n                          :hide-trigger="hideTrigger">\n                     <cl-menu width="auto" theme="dark">\n                         <cl-tooltip class="doc-layout-menu-tooltip" placement="right" :disabled="!collapsed" content="options1">\n                             <cl-menu-item c-key="options1">\n                                 <i class="doc-layout-menu-icon cl-icon-home"></i>\n                                 <span class="doc-layout-menu-name">options1</span>\n                             </cl-menu-item>\n                         </cl-tooltip>\n                         <cl-tooltip class="doc-layout-menu-tooltip" placement="right" :disabled="!collapsed" content="options2">\n                             <cl-menu-item c-key="options2">\n                                 <i class="doc-layout-menu-icon cl-icon-home"></i>\n                                 <span class="doc-layout-menu-name">options2</span>\n                             </cl-menu-item>\n                         </cl-tooltip>\n                         <cl-tooltip class="doc-layout-menu-tooltip" placement="right" :disabled="!collapsed" content="options3">\n                             <cl-menu-item c-key="options3">\n                                 <i class="doc-layout-menu-icon cl-icon-home"></i>\n                                 <span class="doc-layout-menu-name">options3</span>\n                             </cl-menu-item>\n                         </cl-tooltip>\n                     </cl-menu>\n                 </cl-sider>\n                 <cl-content class="doc-layout-content">content</cl-content>\n             </cl-layout>\n             <cl-footer class="doc-layout-footer">footer</cl-footer>\n         </cl-layout>\n     </div>\n     <cl-switch width="90" v-model="hideTrigger">\n         <span slot="open">显示trigger</span>\n         <span slot="close">隐藏trigger</span>\n     </cl-switch>\n     <div>\n         定义收起的宽度： <cl-input type="number" v-model="collapsedWidth"></cl-input>\n     </div>\n </div>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          collapsed: true,\n          collapsedWidth: 60,\n          hideTrigger: false,\n        }\n      }\n    }\n<\/script>\n<style>\n    .doc-layout-single{\n        margin-bottom: 40px;\n    }\n    .doc-layout-el{\n        text-align: center;\n        color: #ffffff;\n        font-size: 16px;\n    }\n    .doc-layout-header, .doc-layout-footer{\n        background-color: #86d8af;\n    }\n    .doc-layout-content{\n        min-height: 120px;\n        line-height: 120px;\n        background-color: #19be6b;\n    }\n    .doc-layout-sider{\n        line-height: 120px;\n        background-color: #62c191;\n    }\n    .doc-layout-sider-dark{\n        background-color: #344058;\n        text-align: left;\n        line-height: normal;\n    }\n    .doc-layout-menu-tooltip{\n        display: block;\n        text-align: left;\n        line-height: normal;\n    }\n    .doc-layout-sider-close{\n        text-align: center;\n    }\n    .doc-layout-menu-icon{\n        transition: all 0.2s ease-in-out;\n        font-size: 18px;\n    }\n    .doc-layout-menu-name{\n        width: 0;\n        transition: all 0.1s;\n        margin: auto;\n    }\n</style>\n\n')])])])],2),o("code-wrap",{attrs:{id:"ZDY"}},[o("div",{attrs:{slot:"description"},slot:"description"},[o("p",[t._v("通过设置 "),o("code",[t._v("hide-trigger")]),t._v("属性隐藏默认的触发器。可自定义实现trigger触发器。")])]),o("span",{attrs:{slot:"title"},slot:"title"},[t._v("自定义trigger "),o("a",{attrs:{href:"#ZDY","data-title":"自定义trigger"}},[t._v("#")])]),o("template",{slot:"source"},[o("cl-ui-demo3")],1),o("p"),o("template",{slot:"highlight"},[o("pre",{pre:!0},[o("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n     <div class="doc-layout-single">\n         <cl-layout class="doc-layout-el">\n             <cl-sider v-model="collapsedCustom"\n                       class="doc-layout-sider doc-layout-sider-dark"\n                       :class="{\'doc-layout-sider-close\': collapsedCustom}"\n                       hide-trigger>\n                 <cl-menu width="auto" theme="dark">\n                     <cl-tooltip class="doc-layout-menu-tooltip" placement="right" :disabled="!collapsedCustom" content="options1">\n                         <cl-menu-item c-key="options1">\n                             <i class="doc-layout-menu-icon cl-icon-home"></i>\n                             <span class="doc-layout-menu-name">options1</span>\n                         </cl-menu-item>\n                     </cl-tooltip>\n                     <cl-tooltip class="doc-layout-menu-tooltip" placement="right" :disabled="!collapsedCustom" content="options2">\n                         <cl-menu-item c-key="options2">\n                             <i class="doc-layout-menu-icon cl-icon-home"></i>\n                             <span class="doc-layout-menu-name">options2</span>\n                         </cl-menu-item>\n                     </cl-tooltip>\n                     <cl-tooltip class="doc-layout-menu-tooltip" placement="right" :disabled="!collapsedCustom" content="options3">\n                         <cl-menu-item c-key="options3">\n                             <i class="doc-layout-menu-icon cl-icon-home"></i>\n                             <span class="doc-layout-menu-name">options3</span>\n                         </cl-menu-item>\n                     </cl-tooltip>\n                 </cl-menu>\n             </cl-sider>\n             <cl-layout>\n                 <cl-header class="doc-layout-header doc-layout-header-toggle">\n                     <i class="cl-icon-list1" @click="triggerClick"></i>\n                 </cl-header>\n                 <cl-content class="doc-layout-content">content</cl-content>\n                 <cl-footer class="doc-layout-footer">footer</cl-footer>\n             </cl-layout>\n         </cl-layout>\n     </div>\n </div>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          collapsedCustom: false,\n        }\n      },\n      methods: {\n        triggerClick(){\n          this.collapsedCustom = !this.collapsedCustom;\n        }\n      }\n    }\n<\/script>\n<style>\n    .doc-layout-single{\n        margin-bottom: 40px;\n    }\n    .doc-layout-el{\n        text-align: center;\n        color: #ffffff;\n        font-size: 16px;\n    }\n    .doc-layout-header, .doc-layout-footer{\n        background-color: #86d8af;\n    }\n    .doc-layout-content{\n        min-height: 120px;\n        line-height: 120px;\n        background-color: #19be6b;\n    }\n    .doc-layout-sider{\n        line-height: 120px;\n        background-color: #62c191;\n    }\n    .doc-layout-menu-tooltip{\n        display: block;\n    }\n    .doc-layout-sider-close{\n        text-align: center;\n    }\n    .doc-layout-menu-icon{\n        transition: all 0.2s ease-in-out;\n        font-size: 18px;\n    }\n    .doc-layout-menu-name{\n        width: 0;\n        transition: all 0.1s;\n        margin: auto;\n    }\n    .doc-layout-sider-dark{\n        background-color: #344058;\n        text-align: left;\n        line-height: normal;\n    }\n    .doc-layout-header-toggle{\n        text-align: left;\n    }\n    .doc-layout-header-toggle i{\n        cursor: pointer;\n    }\n</style>\n\n')])])])],2),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11)],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h2",{attrs:{id:"zu-jian-gai-shu"}},[t._v("组件概述 "),o("a",{staticClass:"header-anchor",attrs:{href:"#zu-jian-gai-shu","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("p",[o("code",[t._v("Layout")]),t._v("组件：布局容器，可以嵌套"),o("code",[t._v("Header")]),o("code",[t._v("Sider")]),o("code",[t._v("Content")]),o("code",[t._v("Footer")]),o("code",[t._v("Layout")]),t._v("组件，可以放在任何父容器中。")])]),o("li",[o("p",[o("code",[t._v("Header")]),t._v("组件：顶部容器，可以嵌套在"),o("code",[t._v("Layout")]),t._v("组件中，不能嵌套进其他布局组件中。")])]),o("li",[o("p",[o("code",[t._v("Sider")]),t._v("组件：侧边栏容器，默认附带基本功能，可以嵌套在"),o("code",[t._v("Layout")]),t._v("组件中，不能嵌套进其他布局组件中。")])]),o("li",[o("p",[o("code",[t._v("Content")]),t._v("组件：内容容器，可以嵌套在"),o("code",[t._v("Layout")]),t._v("组件中，不能嵌套进其他布局组件中。")])]),o("li",[o("p",[o("code",[t._v("Footer")]),t._v("组件：底部容器，可以嵌套在"),o("code",[t._v("Layout")]),t._v("组件中，不能嵌套进其他布局组件中。")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{attrs:{id:"jiao-hu"}},[t._v("交互 "),o("a",{staticClass:"header-anchor",attrs:{href:"#jiao-hu","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("code",[t._v("Sider")]),t._v("组件实现了基本的侧导航功能，支持手风琴和全展开的样式，请根据业务相应的扩展。")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h2",{attrs:{id:"dai-ma-shi-li"}},[t._v("代码示例 "),o("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h2",{attrs:{id:"api"}},[t._v("API "),o("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{attrs:{id:"sider-props"}},[t._v("Sider props "),o("a",{staticClass:"header-anchor",attrs:{href:"#sider-props","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",{staticClass:"doc-table"},[o("thead",[o("tr",[o("th",[t._v("属性")]),o("th",[t._v("类型")]),o("th",[t._v("说明")]),o("th",[t._v("默认值")])])]),o("tbody",[o("tr",[o("td",[t._v("value")]),o("td",[t._v("Boolean")]),o("td",[t._v("控制展开收起，可以使用v-model双向绑定，true(收起),false(展开)")]),o("td",[t._v("-")])]),o("tr",[o("td",[t._v("width")]),o("td",[t._v("String, Number")]),o("td",[t._v("展开时的宽度")]),o("td",[t._v("200")])]),o("tr",[o("td",[t._v("height")]),o("td",[t._v("String, Number")]),o("td",[t._v("设置滚动时的高度")]),o("td",[t._v("-")])]),o("tr",[o("td",[t._v("collapsedWidth")]),o("td",[t._v("String, Number")]),o("td",[t._v("收起时的宽度")]),o("td",[t._v("60")])]),o("tr",[o("td",[t._v("hideTrigger")]),o("td",[t._v("Boolean")]),o("td",[t._v("是否隐藏trigger")]),o("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{attrs:{id:"sider-event"}},[t._v("Sider event "),o("a",{staticClass:"header-anchor",attrs:{href:"#sider-event","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",{staticClass:"doc-table"},[o("thead",[o("tr",[o("th",[t._v("事件名")]),o("th",[t._v("说明")]),o("th",[t._v("返回值")])])]),o("tbody",[o("tr",[o("td",[t._v("collapse")]),o("td",[t._v("展开收起时触发")]),o("td",[t._v("value")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{attrs:{id:"sider-slot"}},[t._v("Sider slot "),o("a",{staticClass:"header-anchor",attrs:{href:"#sider-slot","aria-hidden":"true"}},[t._v("#")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",{staticClass:"doc-table"},[o("thead",[o("tr",[o("th",[t._v("名称")]),o("th",[t._v("说明")])])]),o("tbody",[o("tr",[o("td",[t._v("header")]),o("td",[t._v("定义header")])]),o("tr",[o("td",[t._v("trigger")]),o("td",[t._v("自定义trigger")])])])])}],a=(o("8e6e"),o("ac6a"),o("456d"),o("bd86"));function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,l)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(o,!0).forEach(function(e){Object(a["a"])(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var i={name:"component-doc",components:{"cl-ui-demo0":function(){var t=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[[o("div",[o("div",{staticClass:"doc-layout-single"},[o("cl-layout",{staticClass:"doc-layout-el"},[o("cl-header",{staticClass:"doc-layout-header"},[t._v("header")]),t._v(" "),o("cl-content",{staticClass:"doc-layout-content"},[t._v("content")]),t._v(" "),o("cl-footer",{staticClass:"doc-layout-footer"},[t._v("footer")])],1)],1),t._v(" "),o("div",{staticClass:"doc-layout-single"},[o("cl-layout",{staticClass:"doc-layout-el"},[o("cl-header",{staticClass:"doc-layout-header"},[t._v("header")]),t._v(" "),o("cl-layout",[o("cl-sider",{staticClass:"doc-layout-sider",attrs:{"hide-trigger":""}},[t._v("sider")]),t._v(" "),o("cl-content",{staticClass:"doc-layout-content"},[t._v("content")])],1),t._v(" "),o("cl-footer",{staticClass:"doc-layout-footer"},[t._v("footer")])],1)],1),t._v(" "),o("div",{staticClass:"doc-layout-single"},[o("cl-layout",{staticClass:"doc-layout-el"},[o("cl-sider",{staticClass:"doc-layout-sider",attrs:{"hide-trigger":""}},[t._v("sider")]),t._v(" "),o("cl-layout",[o("cl-header",{staticClass:"doc-layout-header"},[t._v("header")]),t._v(" "),o("cl-content",{staticClass:"doc-layout-content"},[t._v("content")]),t._v(" "),o("cl-footer",{staticClass:"doc-layout-footer"},[t._v("footer")])],1)],1)],1),t._v(" "),o("div",{staticClass:"doc-layout-single"},[o("cl-layout",{staticClass:"doc-layout-el"},[o("cl-header",{staticClass:"doc-layout-header"},[t._v("header")]),t._v(" "),o("cl-layout",[o("cl-sider",{staticClass:"doc-layout-sider",attrs:{"hide-trigger":""}},[t._v("sider")]),t._v(" "),o("cl-layout",[o("cl-content",{staticClass:"doc-layout-content"},[t._v("content")]),t._v(" "),o("cl-footer",{staticClass:"doc-layout-footer"},[t._v("footer")])],1)],1)],1)],1)])]],2)},e=[],o={};return s({render:t,staticRenderFns:e},o)}(),"cl-ui-demo1":function(){var t=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[[o("cl-layout",{staticClass:"doc-layout-el"},[o("cl-sider",{staticClass:"doc-layout-sider",attrs:{"hide-trigger":""}},[o("div",{staticClass:"doc-layout-sider-header",attrs:{slot:"header"},slot:"header"},[t._v("\n                LOGO\n            ")]),t._v("\n            sider\n        ")]),t._v(" "),o("cl-layout",[o("cl-header",{staticClass:"doc-layout-header"},[t._v("header")]),t._v(" "),o("cl-content",{staticClass:"doc-layout-content"},[t._v("content")]),t._v(" "),o("cl-footer",{staticClass:"doc-layout-footer"},[t._v("footer")])],1)],1)]],2)},e=[],o={};return s({render:t,staticRenderFns:e},o)}(),"cl-ui-demo2":function(){var t=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[[o("div",[o("div",{staticClass:"doc-layout-single"},[o("cl-layout",{staticClass:"doc-layout-el"},[o("cl-header",{staticClass:"doc-layout-header"},[t._v("header")]),t._v(" "),o("cl-layout",[o("cl-sider",{staticClass:"doc-layout-sider doc-layout-sider-dark",class:{"doc-layout-sider-close":t.collapsed},attrs:{"collapsed-width":t.collapsedWidth,"hide-trigger":t.hideTrigger},model:{value:t.collapsed,callback:function(e){t.collapsed=e},expression:"collapsed"}},[o("cl-menu",{attrs:{width:"auto",theme:"dark"}},[o("cl-tooltip",{staticClass:"doc-layout-menu-tooltip",attrs:{placement:"right",disabled:!t.collapsed,content:"options1"}},[o("cl-menu-item",{attrs:{"c-key":"options1"}},[o("i",{staticClass:"doc-layout-menu-icon cl-icon-home"}),t._v(" "),o("span",{staticClass:"doc-layout-menu-name"},[t._v("options1")])])],1),t._v(" "),o("cl-tooltip",{staticClass:"doc-layout-menu-tooltip",attrs:{placement:"right",disabled:!t.collapsed,content:"options2"}},[o("cl-menu-item",{attrs:{"c-key":"options2"}},[o("i",{staticClass:"doc-layout-menu-icon cl-icon-home"}),t._v(" "),o("span",{staticClass:"doc-layout-menu-name"},[t._v("options2")])])],1),t._v(" "),o("cl-tooltip",{staticClass:"doc-layout-menu-tooltip",attrs:{placement:"right",disabled:!t.collapsed,content:"options3"}},[o("cl-menu-item",{attrs:{"c-key":"options3"}},[o("i",{staticClass:"doc-layout-menu-icon cl-icon-home"}),t._v(" "),o("span",{staticClass:"doc-layout-menu-name"},[t._v("options3")])])],1)],1)],1),t._v(" "),o("cl-content",{staticClass:"doc-layout-content"},[t._v("content")])],1),t._v(" "),o("cl-footer",{staticClass:"doc-layout-footer"},[t._v("footer")])],1)],1),t._v(" "),o("cl-switch",{attrs:{width:"90"},model:{value:t.hideTrigger,callback:function(e){t.hideTrigger=e},expression:"hideTrigger"}},[o("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示trigger")]),t._v(" "),o("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏trigger")])]),t._v(" "),o("div",[t._v("\n         定义收起的宽度： "),o("cl-input",{attrs:{type:"number"},model:{value:t.collapsedWidth,callback:function(e){t.collapsedWidth=e},expression:"collapsedWidth"}})],1)],1)]],2)},e=[],o={data:function(){return{collapsed:!0,collapsedWidth:60,hideTrigger:!1}}};return s({render:t,staticRenderFns:e},o)}(),"cl-ui-demo3":function(){var t=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[[o("div",[o("div",{staticClass:"doc-layout-single"},[o("cl-layout",{staticClass:"doc-layout-el"},[o("cl-sider",{staticClass:"doc-layout-sider doc-layout-sider-dark",class:{"doc-layout-sider-close":t.collapsedCustom},attrs:{"hide-trigger":""},model:{value:t.collapsedCustom,callback:function(e){t.collapsedCustom=e},expression:"collapsedCustom"}},[o("cl-menu",{attrs:{width:"auto",theme:"dark"}},[o("cl-tooltip",{staticClass:"doc-layout-menu-tooltip",attrs:{placement:"right",disabled:!t.collapsedCustom,content:"options1"}},[o("cl-menu-item",{attrs:{"c-key":"options1"}},[o("i",{staticClass:"doc-layout-menu-icon cl-icon-home"}),t._v(" "),o("span",{staticClass:"doc-layout-menu-name"},[t._v("options1")])])],1),t._v(" "),o("cl-tooltip",{staticClass:"doc-layout-menu-tooltip",attrs:{placement:"right",disabled:!t.collapsedCustom,content:"options2"}},[o("cl-menu-item",{attrs:{"c-key":"options2"}},[o("i",{staticClass:"doc-layout-menu-icon cl-icon-home"}),t._v(" "),o("span",{staticClass:"doc-layout-menu-name"},[t._v("options2")])])],1),t._v(" "),o("cl-tooltip",{staticClass:"doc-layout-menu-tooltip",attrs:{placement:"right",disabled:!t.collapsedCustom,content:"options3"}},[o("cl-menu-item",{attrs:{"c-key":"options3"}},[o("i",{staticClass:"doc-layout-menu-icon cl-icon-home"}),t._v(" "),o("span",{staticClass:"doc-layout-menu-name"},[t._v("options3")])])],1)],1)],1),t._v(" "),o("cl-layout",[o("cl-header",{staticClass:"doc-layout-header doc-layout-header-toggle"},[o("i",{staticClass:"cl-icon-list1",on:{click:t.triggerClick}})]),t._v(" "),o("cl-content",{staticClass:"doc-layout-content"},[t._v("content")]),t._v(" "),o("cl-footer",{staticClass:"doc-layout-footer"},[t._v("footer")])],1)],1)],1)])]],2)},e=[],o={data:function(){return{collapsedCustom:!1}},methods:{triggerClick:function(){this.collapsedCustom=!this.collapsedCustom}}};return s({render:t,staticRenderFns:e},o)}()}},r=i,d=o("2877"),u=Object(d["a"])(r,l,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0da7ae.d9699292.js.map