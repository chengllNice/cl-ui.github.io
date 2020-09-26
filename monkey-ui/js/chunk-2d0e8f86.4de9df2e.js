(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8f86"],{"8c16":function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"doc-article monkey-ui-doc"},[l("h1",[e._v("Checkbox 复选框")]),l("p",[e._v("复选框。一组可选项中进行多选。也可单独使用，表示某种状态的切换。")]),e._m(0),l("code-wrap",{attrs:{id:"DDSY"}},[l("div",{attrs:{slot:"description"},slot:"description"},[l("p",[e._v("可以使用v-model实现双向数据绑定。")])]),l("span",{attrs:{slot:"title"},slot:"title"},[e._v("单独使用 "),l("a",{attrs:{href:"#DDSY","data-title":"单独使用"}},[e._v("#")])]),l("template",{slot:"source"},[l("monkey-ui-demo0")],1),l("p"),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <Checkbox v-model="single">Checkbox</Checkbox>\n        <p>{{single}}</p>\n    </div>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          single: false,\n        }\n      }\n    }\n<\/script>\n')])])])],2),l("code-wrap",{attrs:{id:"ZDYXZDZ"}},[l("div",{attrs:{slot:"description"},slot:"description"},[l("p",[e._v("单独使用时，可以通过设置 "),l("code",[e._v("true-value")]),e._v("属性和 "),l("code",[e._v("false-value")]),e._v("属性控制选中和取消选中的值。")])]),l("span",{attrs:{slot:"title"},slot:"title"},[e._v("自定义选中的值 "),l("a",{attrs:{href:"#ZDYXZDZ","data-title":"自定义选中的值"}},[e._v("#")])]),l("template",{slot:"source"},[l("monkey-ui-demo1")],1),l("p"),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Checkbox v-model="singleCustom" true-value="1" false-value="0">自定义选中和取消选中的值</Checkbox>\n    <p>{{singleCustom}}</p>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          singleCustom: \'0\',\n        }\n      }\n    }\n<\/script>\n')])])])],2),l("code-wrap",{attrs:{id:"ZHSY"}},[l("div",{attrs:{slot:"description"},slot:"description"},[l("p",[e._v("使用 "),l("code",[e._v("checkboxGroup")]),e._v("组件把多个 "),l("code",[e._v("checkbox")]),e._v("组件组合起来使用，只需要在 Group 组件上绑定 "),l("code",[e._v("v-model")]),e._v("即可，此时需要绑定 "),l("code",[e._v("Array")]),e._v("类型的 "),l("code",[e._v("v-model")]),e._v("。此时"),l("code",[e._v("checkbox")]),e._v("的 "),l("code",[e._v("label")]),e._v("属性是该项的对应的值，若此标签中没有内容，该 "),l("code",[e._v("label")]),e._v("属性的值即作为内容。如果 Group的 "),l("code",[e._v("v-model")]),e._v("有对应 "),l("code",[e._v("checkbox")]),e._v("的 "),l("code",[e._v("label")]),e._v("的值，表明为选中状态，否则不选中。"),l("code",[e._v("checkboxGroup")]),e._v("组件可以使用 "),l("code",[e._v("options")]),e._v("属性绑定数据实现多选框组合，值类型如："),l("code",[e._v("[{label: '', value: '', disabled: true}]")]),e._v("的形式，label为展示内容，value为选中时的值，disabled可选，禁用控制。")])]),l("span",{attrs:{slot:"title"},slot:"title"},[e._v("组合使用 "),l("a",{attrs:{href:"#ZHSY","data-title":"组合使用"}},[e._v("#")])]),l("template",{slot:"source"},[l("monkey-ui-demo2")],1),l("p"),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <Row>\n        <Col>\n            <CheckboxGroup v-model=\"group\">\n                <Checkbox label=\"apple\">Apple</Checkbox>\n                <Checkbox label=\"orange\">Orange</Checkbox>\n                <Checkbox label=\"banana\">Banana</Checkbox>\n                <Checkbox label=\"melon\">Melon</Checkbox>\n            </CheckboxGroup>\n            <p>{{group}}</p>\n        </Col>\n        <Col>\n            <CheckboxGroup v-model=\"group1\" :options=\"groupOptions\"></CheckboxGroup>\n            <p>{{group1}}</p>\n        </Col>\n    </Row>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          group: ['orange'],\n          group1: ['banana'],\n          groupOptions: [\n            {\n              label: '苹果',\n              value: 'apple'\n            },\n            {\n              label: '橘子',\n              value: 'orange'\n            },\n            {\n              label: '香蕉',\n              value: 'banana'\n            },\n            {\n              label: '西瓜',\n              value: 'melon'\n            }\n          ]\n        }\n      }\n    }\n<\/script>\n\n")])])])],2),l("code-wrap",{attrs:{id:"ZT"}},[l("div",{attrs:{slot:"description"},slot:"description"},[l("p",[e._v("设置 "),l("code",[e._v("disbaled")]),e._v("属性可以实现禁用。可以给 "),l("code",[e._v("checkbox")]),e._v("组件添加 "),l("code",[e._v("disabled")]),e._v("属性实现禁用。组合使用时可以给 Group 组件添加 "),l("code",[e._v("disabled")]),e._v("属性实现该组合下的所有子项禁用；也可以单独给某个子项设置 "),l("code",[e._v("disabled")]),e._v("属性实现某一项的禁用。")])]),l("span",{attrs:{slot:"title"},slot:"title"},[e._v("disable状态 "),l("a",{attrs:{href:"#ZT","data-title":"disable状态"}},[e._v("#")])]),l("template",{slot:"source"},[l("monkey-ui-demo3")],1),l("p"),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <h4>单独使用禁用</h4>\n    <Checkbox disabled  v-model="disabledSingle">DisabledCheckbox</Checkbox>\n    <p>{{disabledSingle}}</p>\n\n    <h4>组合使用禁用</h4>\n    <Checkbox-group disabled v-model="disabledGroup" :options="disabledGroupOptions"></Checkbox-group>\n    <p>{{disabledGroup}}</p>\n\n    <h4>组合使用禁用指定项</h4>\n    <Checkbox-group v-model="disabledGroup1" :options="disabledGroupOptions"></Checkbox-group>\n    <p>{{disabledGroup1}}</p>\n\n    <h4>组合使用禁用指定项</h4>\n    <Checkbox-group v-model="disabledGroup2">\n        <Checkbox label="apple">Apple</Checkbox>\n        <Checkbox label="orange">Orange</Checkbox>\n        <Checkbox label="banana" disabled>Banana</Checkbox>\n        <Checkbox label="melon">Melon</Checkbox>\n    </Checkbox-group>\n    <p>{{disabledGroup2}}</p>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          disabledSingle: true,\n          disabledGroup: [\'banana\'],\n          disabledGroup1: [],\n          disabledGroupOptions: [\n            {\n              label: \'苹果\',\n              value: \'apple\'\n            },\n            {\n              label: \'橘子\',\n              value: \'orange\',\n              disabled: true,\n            },\n            {\n              label: \'香蕉\',\n              value: \'banana\'\n            },\n            {\n              label: \'西瓜\',\n              value: \'melon\'\n            }\n          ],\n          disabledGroup2: [],\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),l("code-wrap",{attrs:{id:"SKD"}},[l("div",{attrs:{slot:"description"},slot:"description"},[l("p",[e._v("和其它组件通信联动。")])]),l("span",{attrs:{slot:"title"},slot:"title"},[e._v("受控的checkbox "),l("a",{attrs:{href:"#SKD","data-title":"受控的checkbox"}},[e._v("#")])]),l("template",{slot:"source"},[l("monkey-ui-demo4")],1),l("p"),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Checkbox v-model="controlChecked" :disabled="controlDisabled">Checkbox</Checkbox>\n    <p>controlChecked: {{controlChecked}}</p>\n    <p>controlDisabled: {{controlDisabled}}</p>\n    <m-switch width="90" v-model="controlChecked">\n        <template slot="open">Checked</template>\n        <template slot="close">UnChecked</template>\n    </m-switch>\n    <m-switch width="90" v-model="controlDisabled">\n        <template slot="open">Disabled</template>\n        <template slot="close">UnDisabled</template>\n    </m-switch>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n           controlChecked: false,\n           controlDisabled: false,\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),l("code-wrap",{attrs:{id:"QX"}},[l("div",{attrs:{slot:"description"},slot:"description"},[l("p",[e._v("可以使用v-model实现双向数据绑定。")])]),l("span",{attrs:{slot:"title"},slot:"title"},[e._v("全选 "),l("a",{attrs:{href:"#QX","data-title":"全选"}},[e._v("#")])]),l("template",{slot:"source"},[l("monkey-ui-demo5")],1),l("p"),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <Checkbox v-model=\"checkboxAll\" :indeterminate=\"indeterminateAll\" @change=\"checkboxAllChange\">全选</Checkbox>\n    <br>\n    <Checkbox-group v-model=\"checkboxGroupAll\" :options=\"checkboxGroupAllOption\" @change=\"checkboxGroupAllChange\"></Checkbox-group>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          checkboxAll: false,\n          indeterminateAll: false,\n          checkboxGroupAll: [],\n          checkboxGroupAllOption: [\n            {\n              label: '苹果',\n              value: 'apple'\n            },\n            {\n              label: '橘子',\n              value: 'orange',\n            },\n            {\n              label: '香蕉',\n              value: 'banana'\n            },\n            {\n              label: '西瓜',\n              value: 'melon'\n            }\n          ],\n        }\n      },\n      methods: {\n        checkboxAllChange(){\n          if(this.checkboxAll){\n            this.checkboxGroupAllOption.forEach(item=>{\n              this.checkboxGroupAll.push(item.value)\n            })\n          }else{\n            this.checkboxGroupAll = [];\n            this.indeterminateAll = false;\n          }\n        },\n        checkboxGroupAllChange(){\n          if(this.checkboxGroupAll.length === this.checkboxGroupAllOption.length){\n            this.checkboxAll = true;\n          }else if(this.checkboxGroupAll.length && this.checkboxGroupAll.length !== this.checkboxGroupAllOption.length){\n            this.indeterminateAll = true;\n            this.checkboxAll = false;\n          }else{\n            this.checkboxAll = false;\n            this.indeterminateAll = false;\n          }\n        },\n      }\n    }\n<\/script>\n\n")])])])],2),l("code-wrap",{attrs:{id:"CC"}},[l("div",{attrs:{slot:"description"},slot:"description"},[l("p",[e._v("可以通过设置 "),l("code",[e._v("size")]),e._v("属性控制尺寸大小，可选值有 "),l("code",[e._v("small")]),l("code",[e._v("large")]),e._v(" 或者不设置。")])]),l("span",{attrs:{slot:"title"},slot:"title"},[e._v("尺寸 "),l("a",{attrs:{href:"#CC","data-title":"尺寸"}},[e._v("#")])]),l("template",{slot:"source"},[l("monkey-ui-demo6")],1),l("p"),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Checkbox v-model="singleMini" size="mini">Mini</Checkbox>\n    <Checkbox v-model="singleSmall" size="small">Small</Checkbox>\n    <Checkbox v-model="singleDefault">Default</Checkbox>\n    <Checkbox v-model="singleLarge" size="large">Large</Checkbox>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          singleMini: false,\n          singleSmall: false,\n          singleDefault: false,\n          singleLarge: false,\n        }\n      }\n    }\n<\/script>\n\n')])])])],2),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9)],1)},o=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("h2",{attrs:{id:"dai-ma-shi-li"}},[e._v("代码示例 "),l("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("h2",{attrs:{id:"api"}},[e._v("API "),l("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("h3",{attrs:{id:"checkbox-props"}},[e._v("Checkbox props "),l("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-props"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("table",{staticClass:"doc-table"},[l("thead",[l("tr",[l("th",[e._v("属性")]),l("th",[e._v("类型")]),l("th",[e._v("说明")]),l("th",[e._v("默认值")])])]),l("tbody",[l("tr",[l("td",[e._v("value")]),l("td",[e._v("Number, String, Boolean")]),l("td",[e._v("只有单独使用是可以使用v-model绑定值，设置true-value和false-value时返回设置的值，默认返回boolean值")]),l("td",[e._v("-")])]),l("tr",[l("td",[e._v("label")]),l("td",[e._v("Number, String, Boolean")]),l("td",[e._v("单独使用时该项值为文字描述。组合使用时，如果使用组合的options属性，该项值为文字描述；使用slot的checkbox时，该项为判断当前项是否选中")]),l("td",[e._v("-")])]),l("tr",[l("td",[e._v("indeterminate")]),l("td",[e._v("Boolean")]),l("td",[e._v("只负责样式控制，设置indeterminate状态")]),l("td",[e._v("-")])]),l("tr",[l("td",[e._v("disabled")]),l("td",[e._v("Boolean")]),l("td",[e._v("禁用")]),l("td",[e._v("-")])]),l("tr",[l("td",[e._v("name")]),l("td",[e._v("String")]),l("td",[e._v("原生name属性")]),l("td",[e._v("-")])]),l("tr",[l("td",[e._v("trueValue")]),l("td",[e._v("Number, String, Boolean")]),l("td",[e._v("设置选中时的值")]),l("td",[e._v("-")])]),l("tr",[l("td",[e._v("falseValue")]),l("td",[e._v("Number, String, Boolean")]),l("td",[e._v("设置取消选中时的值")]),l("td",[e._v("-")])]),l("tr",[l("td",[e._v("size")]),l("td",[e._v("String")]),l("td",[e._v("尺寸，可选值 "),l("code",[e._v("mini")]),l("code",[e._v("small")]),l("code",[e._v("large")])]),l("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("h3",{attrs:{id:"checkbox-event"}},[e._v("Checkbox event "),l("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-event"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("table",{staticClass:"doc-table"},[l("thead",[l("tr",[l("th",[e._v("事件名")]),l("th",[e._v("说明")]),l("th",[e._v("返回值")])])]),l("tbody",[l("tr",[l("td",[e._v("change")]),l("td",[e._v("只有单独使用时有效。绑定的值改变时触发")]),l("td",[e._v("当前状态")])])])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("h3",{attrs:{id:"checkboxgroup-props"}},[e._v("CheckboxGroup props "),l("a",{staticClass:"header-anchor",attrs:{href:"#checkboxgroup-props"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("table",{staticClass:"doc-table"},[l("thead",[l("tr",[l("th",[e._v("属性")]),l("th",[e._v("类型")]),l("th",[e._v("说明")]),l("th",[e._v("默认值")])])]),l("tbody",[l("tr",[l("td",[e._v("value")]),l("td",[e._v("Array")]),l("td",[e._v("指定选中的集合，使用v-model双向绑定。使用 "),l("code",[e._v("options")]),e._v(" 属性时选中的是选项"),l("code",[e._v("value")]),e._v("的值。使用"),l("code",[e._v("slot")]),e._v("的"),l("code",[e._v("checkbox")]),e._v("时选中的是指定"),l("code",[e._v("label")]),e._v("的值。")]),l("td",[e._v("-")])]),l("tr",[l("td",[e._v("disabled")]),l("td",[e._v("Boolean")]),l("td",[e._v("组合中的所有checkbox全部禁用")]),l("td",[e._v("-")])]),l("tr",[l("td",[e._v("size")]),l("td",[e._v("String")]),l("td",[e._v("组合中所有checkbox的尺寸")]),l("td",[e._v("-")])]),l("tr",[l("td",[e._v("options")]),l("td",[e._v("Array")]),l("td",[e._v("类似"),l("code",[e._v("[{value: '0', label: 'checkbox', disabled: true}]")]),e._v("这样的数组，其中"),l("code",[e._v("value")]),e._v("指定当前项是否选中，"),l("code",[e._v("label")]),e._v("为当前项的文字描述，"),l("code",[e._v("disabled")]),e._v("可选，控制禁用状态")]),l("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("h3",{attrs:{id:"checkboxgroup-event"}},[e._v("CheckboxGroup event "),l("a",{staticClass:"header-anchor",attrs:{href:"#checkboxgroup-event"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("table",{staticClass:"doc-table"},[l("thead",[l("tr",[l("th",[e._v("事件名")]),l("th",[e._v("说明")]),l("th",[e._v("返回值")])])]),l("tbody",[l("tr",[l("td",[e._v("change")]),l("td",[e._v("绑定的值改变时触发，返回当前选中值的数组")]),l("td",[e._v("[]")])])])])}],a=(l("5ab2"),l("e10e"),l("6d57"),l("9bef"));function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){Object(a["a"])(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}var s={name:"component-doc",components:{"monkey-ui-demo0":function(){var e=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[[l("div",[l("Checkbox",{model:{value:e.single,callback:function(t){e.single=t},expression:"single"}},[e._v("Checkbox")]),e._v(" "),l("p",[e._v(e._s(e.single))])],1)]],2)},t=[],l={data:function(){return{single:!1}}};return c({render:e,staticRenderFns:t},l)}(),"monkey-ui-demo1":function(){var e=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[[l("Checkbox",{attrs:{"true-value":"1","false-value":"0"},model:{value:e.singleCustom,callback:function(t){e.singleCustom=t},expression:"singleCustom"}},[e._v("自定义选中和取消选中的值")]),e._v(" "),l("p",[e._v(e._s(e.singleCustom))])]],2)},t=[],l={data:function(){return{singleCustom:"0"}}};return c({render:e,staticRenderFns:t},l)}(),"monkey-ui-demo2":function(){var e=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[[l("Row",[l("Col",[l("CheckboxGroup",{model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},[l("Checkbox",{attrs:{label:"apple"}},[e._v("Apple")]),e._v(" "),l("Checkbox",{attrs:{label:"orange"}},[e._v("Orange")]),e._v(" "),l("Checkbox",{attrs:{label:"banana"}},[e._v("Banana")]),e._v(" "),l("Checkbox",{attrs:{label:"melon"}},[e._v("Melon")])],1),e._v(" "),l("p",[e._v(e._s(e.group))])],1),e._v(" "),l("Col",[l("CheckboxGroup",{attrs:{options:e.groupOptions},model:{value:e.group1,callback:function(t){e.group1=t},expression:"group1"}}),e._v(" "),l("p",[e._v(e._s(e.group1))])],1)],1)]],2)},t=[],l={data:function(){return{group:["orange"],group1:["banana"],groupOptions:[{label:"苹果",value:"apple"},{label:"橘子",value:"orange"},{label:"香蕉",value:"banana"},{label:"西瓜",value:"melon"}]}}};return c({render:e,staticRenderFns:t},l)}(),"monkey-ui-demo3":function(){var e=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[[l("h4",[e._v("单独使用禁用")]),e._v(" "),l("Checkbox",{attrs:{disabled:""},model:{value:e.disabledSingle,callback:function(t){e.disabledSingle=t},expression:"disabledSingle"}},[e._v("DisabledCheckbox")]),e._v(" "),l("p",[e._v(e._s(e.disabledSingle))]),e._v(" "),l("h4",[e._v("组合使用禁用")]),e._v(" "),l("Checkbox-group",{attrs:{disabled:"",options:e.disabledGroupOptions},model:{value:e.disabledGroup,callback:function(t){e.disabledGroup=t},expression:"disabledGroup"}}),e._v(" "),l("p",[e._v(e._s(e.disabledGroup))]),e._v(" "),l("h4",[e._v("组合使用禁用指定项")]),e._v(" "),l("Checkbox-group",{attrs:{options:e.disabledGroupOptions},model:{value:e.disabledGroup1,callback:function(t){e.disabledGroup1=t},expression:"disabledGroup1"}}),e._v(" "),l("p",[e._v(e._s(e.disabledGroup1))]),e._v(" "),l("h4",[e._v("组合使用禁用指定项")]),e._v(" "),l("Checkbox-group",{model:{value:e.disabledGroup2,callback:function(t){e.disabledGroup2=t},expression:"disabledGroup2"}},[l("Checkbox",{attrs:{label:"apple"}},[e._v("Apple")]),e._v(" "),l("Checkbox",{attrs:{label:"orange"}},[e._v("Orange")]),e._v(" "),l("Checkbox",{attrs:{label:"banana",disabled:""}},[e._v("Banana")]),e._v(" "),l("Checkbox",{attrs:{label:"melon"}},[e._v("Melon")])],1),e._v(" "),l("p",[e._v(e._s(e.disabledGroup2))])]],2)},t=[],l={data:function(){return{disabledSingle:!0,disabledGroup:["banana"],disabledGroup1:[],disabledGroupOptions:[{label:"苹果",value:"apple"},{label:"橘子",value:"orange",disabled:!0},{label:"香蕉",value:"banana"},{label:"西瓜",value:"melon"}],disabledGroup2:[]}}};return c({render:e,staticRenderFns:t},l)}(),"monkey-ui-demo4":function(){var e=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[[l("Checkbox",{attrs:{disabled:e.controlDisabled},model:{value:e.controlChecked,callback:function(t){e.controlChecked=t},expression:"controlChecked"}},[e._v("Checkbox")]),e._v(" "),l("p",[e._v("controlChecked: "+e._s(e.controlChecked))]),e._v(" "),l("p",[e._v("controlDisabled: "+e._s(e.controlDisabled))]),e._v(" "),l("m-switch",{attrs:{width:"90"},model:{value:e.controlChecked,callback:function(t){e.controlChecked=t},expression:"controlChecked"}},[l("template",{slot:"open"},[e._v("Checked")]),e._v(" "),l("template",{slot:"close"},[e._v("UnChecked")])],2),e._v(" "),l("m-switch",{attrs:{width:"90"},model:{value:e.controlDisabled,callback:function(t){e.controlDisabled=t},expression:"controlDisabled"}},[l("template",{slot:"open"},[e._v("Disabled")]),e._v(" "),l("template",{slot:"close"},[e._v("UnDisabled")])],2)]],2)},t=[],l={data:function(){return{controlChecked:!1,controlDisabled:!1}}};return c({render:e,staticRenderFns:t},l)}(),"monkey-ui-demo5":function(){var e=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[[l("Checkbox",{attrs:{indeterminate:e.indeterminateAll},on:{change:e.checkboxAllChange},model:{value:e.checkboxAll,callback:function(t){e.checkboxAll=t},expression:"checkboxAll"}},[e._v("全选")]),e._v(" "),l("br"),e._v(" "),l("Checkbox-group",{attrs:{options:e.checkboxGroupAllOption},on:{change:e.checkboxGroupAllChange},model:{value:e.checkboxGroupAll,callback:function(t){e.checkboxGroupAll=t},expression:"checkboxGroupAll"}})]],2)},t=[],l={data:function(){return{checkboxAll:!1,indeterminateAll:!1,checkboxGroupAll:[],checkboxGroupAllOption:[{label:"苹果",value:"apple"},{label:"橘子",value:"orange"},{label:"香蕉",value:"banana"},{label:"西瓜",value:"melon"}]}},methods:{checkboxAllChange:function(){var e=this;this.checkboxAll?this.checkboxGroupAllOption.forEach((function(t){e.checkboxGroupAll.push(t.value)})):(this.checkboxGroupAll=[],this.indeterminateAll=!1)},checkboxGroupAllChange:function(){this.checkboxGroupAll.length===this.checkboxGroupAllOption.length?this.checkboxAll=!0:this.checkboxGroupAll.length&&this.checkboxGroupAll.length!==this.checkboxGroupAllOption.length?(this.indeterminateAll=!0,this.checkboxAll=!1):(this.checkboxAll=!1,this.indeterminateAll=!1)}}};return c({render:e,staticRenderFns:t},l)}(),"monkey-ui-demo6":function(){var e=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[[l("Checkbox",{attrs:{size:"mini"},model:{value:e.singleMini,callback:function(t){e.singleMini=t},expression:"singleMini"}},[e._v("Mini")]),e._v(" "),l("Checkbox",{attrs:{size:"small"},model:{value:e.singleSmall,callback:function(t){e.singleSmall=t},expression:"singleSmall"}},[e._v("Small")]),e._v(" "),l("Checkbox",{model:{value:e.singleDefault,callback:function(t){e.singleDefault=t},expression:"singleDefault"}},[e._v("Default")]),e._v(" "),l("Checkbox",{attrs:{size:"large"},model:{value:e.singleLarge,callback:function(t){e.singleLarge=t},expression:"singleLarge"}},[e._v("Large")])]],2)},t=[],l={data:function(){return{singleMini:!1,singleSmall:!1,singleDefault:!1,singleLarge:!1}}};return c({render:e,staticRenderFns:t},l)}()}},i=s,d=l("9ca4"),p=Object(d["a"])(i,n,o,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0e8f86.4de9df2e.js.map