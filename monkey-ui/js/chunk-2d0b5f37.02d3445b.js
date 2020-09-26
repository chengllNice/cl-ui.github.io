(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b5f37"],{"1aa2":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"doc-article monkey-ui-doc"},[r("h1",[e._v("TimePicker 时间选择器")]),r("p",[e._v("选择时间，支持时、分、秒选择，支持时间的范围选择。")]),e._m(0),r("code-wrap",{attrs:{id:"JCYF"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[e._v("设置"),r("code",[e._v("type")]),e._v("类型为"),r("code",[e._v("time")]),r("code",[e._v("timerange")]),e._v("分别为时间单选和时间范围选择。")]),r("p",[e._v("设置"),r("code",[e._v("placement")]),e._v("属性可以控制下拉框的位置，和tooltip组件一致。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("基础用法 "),r("a",{attrs:{href:"#JCYF","data-title":"基础用法"}},[e._v("#")])]),r("template",{slot:"source"},[r("monkey-ui-demo0")],1),r("p"),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Row :gutter="16">\n        <Col>\n            <TimePicker placeholder="请选择时间" clearable></TimePicker>\n        </Col>\n        <Col>\n            <TimePicker type="timerange" placement="bottom-end" placeholder="请选择时间范围" clearable></TimePicker>\n        </Col>\n    </Row>\n</template>\n')])])])],2),r("code-wrap",{attrs:{id:"SJGSH"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[e._v("设置"),r("code",[e._v("format")]),e._v("属性格式化时间。format会改变value的值。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("时间格式化 "),r("a",{attrs:{href:"#SJGSH","data-title":"时间格式化"}},[e._v("#")])]),r("template",{slot:"source"},[r("monkey-ui-demo1")],1),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Row :gutter="16">\n        <Col>\n            <TimePicker v-model="time1" format="HH时mm分ss秒" placeholder="请选择时间"></TimePicker>\n        </Col>\n        <Col>\n            <TimePicker v-model="time2" format="HH,mm,ss" placeholder="请选择时间"></TimePicker>\n        </Col>\n        <Col>\n            <TimePicker v-model="time3" type="timerange" format="HH时mm分ss秒" placeholder="请选择时间范围"></TimePicker>\n        </Col>\n    </Row>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                time1: \'00:09:05\',\n                time2: \'\',\n                time3: [\'00:09:05\', \'00:09:04\'],\n            }\n        }\n    }\n<\/script>\n\n')])])])],2),r("code-wrap",{attrs:{id:"XZSF"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[e._v("设置"),r("code",[e._v("format")]),e._v("属性格式化时间。去掉秒。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("选择时分 "),r("a",{attrs:{href:"#XZSF","data-title":"选择时分"}},[e._v("#")])]),r("template",{slot:"source"},[r("monkey-ui-demo2")],1),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Row :gutter="16">\n        <Col>\n            <TimePicker format="HH:mm" placeholder="请选择时间"></TimePicker>\n        </Col>\n        <Col>\n            <TimePicker format="HH:mm" type="timerange" placeholder="请选择时间范围"></TimePicker>\n        </Col>\n    </Row>\n</template>\n')])])])],2),r("code-wrap",{attrs:{id:"BKXSJ"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[e._v("设置"),r("code",[e._v("disabledHours")]),e._v("属性设置不可选的小时。")]),r("p",[r("code",[e._v("disabledMinutes")]),e._v("设置不可选的分钟。")]),r("p",[r("code",[e._v("disabledSecond")]),e._v("设置不可选的秒。")]),r("p",[r("code",[e._v("hideDisabledOptions")]),e._v("设置隐藏disabled的项。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("不可选时间 "),r("a",{attrs:{href:"#BKXSJ","data-title":"不可选时间"}},[e._v("#")])]),r("template",{slot:"source"},[r("monkey-ui-demo3")],1),r("p"),r("p"),r("p"),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Row :gutter="16">\n        <Col>\n            <TimePicker :disabledHours="[0,1,2]" :disabledMinutes="[0,1,2]" placeholder="请选择时间"></TimePicker>\n        </Col>\n        <Col>\n            <TimePicker :disabledHours="[0,1,2]" :disabledMinutes="[0,1,2]" hideDisabledOptions placeholder="请选择时间"></TimePicker>\n        </Col>\n        <Col>\n            <TimePicker type="timerange" :disabledHours="[0,1,2]" :disabledMinutes="[0,1,2]" placeholder="请选择时间范围"></TimePicker>\n        </Col>\n    </Row>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                shortcuts: [\n                    {\n                      text: \'今天\',\n                      onClick(picker){\n                          let date = new Date();\n                          picker.setValue(date);\n                      }\n                    },\n                    {\n                      text: \'昨天\',\n                      onClick(picker){\n                          let date = new Date();\n                          date.setDate(date.getDate() - 1);\n                          picker.setValue(date);\n                      }\n                    },\n                    {\n                      text: \'一周之前的某一天\',\n                      onClick(picker){\n                          let date = new Date();\n                          date.setDate(date.getDate() - 7);\n                          picker.setValue(date);\n                      }\n                    }\n                ],\n                shortcutsrange: [\n                    {\n                      text: \'最近一周\',\n                      onClick(picker){\n                          let date1 = new Date();\n                          let date2 = new Date();\n                          date1.setDate(date1.getDate() - 7);\n                          picker.setValue([date1, date2]);\n                      }\n                    },\n                    {\n                      text: \'一个月\',\n                      onClick(picker){\n                          let date1 = new Date();\n                          let date2 = new Date();\n                          date1.setDate(date1.getDate() - 30);\n                          picker.setValue([date1, date2]);\n                      }\n                    },\n                    {\n                      text: \'三个月\',\n                      onClick(picker){\n                          let date1 = new Date();\n                          let date2 = new Date();\n                          date1.setDate(date1.getDate() - 90);\n                          picker.setValue([date1, date2]);\n                      }\n                    }\n                ],\n            }\n        }\n    }\n<\/script>\n')])])])],2),r("code-wrap",{attrs:{id:"QRCZ"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[e._v("设置"),r("code",[e._v("confirm")]),e._v("属性可以展示确认和清除按钮，确认按钮不影响时间选择。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("确认操作 "),r("a",{attrs:{href:"#QRCZ","data-title":"确认操作"}},[e._v("#")])]),r("template",{slot:"source"},[r("monkey-ui-demo4")],1),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Row :gutter="16">\n        <Col>\n            <TimePicker confirm placeholder="请选择日期"></TimePicker>\n        </Col>\n        <Col>\n            <TimePicker type="timerange" confirm placeholder="请选择日期范围"></TimePicker>\n        </Col>\n    </Row>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                \n            }\n        },\n        methods: {\n            \n        }\n    }\n<\/script>\n')])])])],2),r("code-wrap",{attrs:{id:"ZDHBKSR"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[e._v("设置"),r("code",[e._v("readonly")]),e._v("属性开启只读。只读时不能打开日期下拉框。")]),r("p",[e._v("设置"),r("code",[e._v("editable")]),e._v("属性控制是否可输入。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("只读和不可输入 "),r("a",{attrs:{href:"#ZDHBKSR","data-title":"只读和不可输入"}},[e._v("#")])]),r("template",{slot:"source"},[r("monkey-ui-demo5")],1),r("p"),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Row :gutter="16">\n        <Col>\n            <h4>只读</h4>\n            <TimePicker placeholder="请选择时间" readonly></TimePicker>\n        </Col>\n        <Col>\n            <h4>不可输入</h4>\n            <TimePicker type="timerange" placeholder="请选择时间范围" :editable="false"></TimePicker>\n        </Col>\n    </Row>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                \n            }\n        },\n    }\n<\/script>\n')])])])],2),r("code-wrap",{attrs:{id:"JY"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[e._v("设置"),r("code",[e._v("disabled")]),e._v("属性禁用日期选择器。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("禁用 "),r("a",{attrs:{href:"#JY","data-title":"禁用"}},[e._v("#")])]),r("template",{slot:"source"},[r("monkey-ui-demo6")],1),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <TimePicker placeholder="请选择时间" disabled></TimePicker>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                \n            }\n        },\n    }\n<\/script>\n')])])])],2),r("code-wrap",{attrs:{id:"ZDYCFQ"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[e._v("设置"),r("code",[e._v("disabled")]),e._v("属性禁用日期选择器。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("自定义触发器 "),r("a",{attrs:{href:"#ZDYCFQ","data-title":"自定义触发器"}},[e._v("#")])]),r("template",{slot:"source"},[r("monkey-ui-demo7")],1),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <TimePicker placeholder="请选择时间" :open="open">\n        <Button type="text" @click="open = !open">触发时间框打开关闭</Button>\n    </TimePicker>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                open: false\n            }\n        },\n    }\n<\/script>\n')])])])],2),r("code-wrap",{attrs:{id:"ZXSSJK"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[e._v("设置"),r("code",[e._v("only-show-pane")]),e._v("属性只显示日期框。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("只显示时间框 "),r("a",{attrs:{href:"#ZXSSJK","data-title":"只显示时间框"}},[e._v("#")])]),r("template",{slot:"source"},[r("monkey-ui-demo8")],1),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <TimePicker v-model="time" only-show-pane @change="handleChange">\n        <template slot="paneFooter">\n            <Button size="small" @click="handleClear">清除</Button>\n        </template>\n    </TimePicker>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                time: \'\'\n            }\n        },\n        methods: {\n            handleChange(value){\n                this.$Message.info(\'selectd value is \' + value)\n            },\n            handleClear(){\n                this.time = \'\';\n            }   \n        }\n    }\n<\/script>\n')])])])],2),r("code-wrap",{attrs:{id:"CC"}},[r("div",{attrs:{slot:"description"},slot:"description"},[r("p",[e._v("设置"),r("code",[e._v("size")]),e._v("属性控制尺寸大小，可选值 "),r("code",[e._v("mini")]),r("code",[e._v("small")]),r("code",[e._v("large")]),e._v("或者不设置。")])]),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("尺寸 "),r("a",{attrs:{href:"#CC","data-title":"尺寸"}},[e._v("#")])]),r("template",{slot:"source"},[r("monkey-ui-demo9")],1),r("p"),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Row :gutter="16">\n        <Col>\n            <h4>Mini</h4>\n            <TimePicker placeholder="请选择时间" size="mini"></TimePicker>\n        </Col>\n        <Col>\n            <h4>Small</h4>\n            <TimePicker placeholder="请选择时间" size="small"></TimePicker>\n        </Col>\n        <Col>\n            <h4>Default</h4>\n            <TimePicker placeholder="请选择时间"></TimePicker>\n        </Col>\n        <Col>\n            <h4>Large</h4>\n            <TimePicker placeholder="请选择时间" size="large"></TimePicker>\n        </Col>\n    </Row>\n</template>\n<script>\n    export default {\n        data(){\n            return {\n                \n            }\n        },\n    }\n<\/script>\n')])])])],2),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9)],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",{attrs:{id:"dai-ma-shi-li"}},[e._v("代码示例 "),r("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",{attrs:{id:"api"}},[e._v("API "),r("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"timepicker-props"}},[e._v("TimePicker props "),r("a",{staticClass:"header-anchor",attrs:{href:"#timepicker-props"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",{staticClass:"doc-table"},[r("thead",[r("tr",[r("th",[e._v("属性")]),r("th",[e._v("类型")]),r("th",[e._v("说明")]),r("th",[e._v("默认值")])])]),r("tbody",[r("tr",[r("td",[e._v("type")]),r("td",[e._v("String")]),r("td",[e._v("设置时间选择器的类型，可选值 "),r("code",[e._v("time")]),r("code",[e._v("timerange")])]),r("td",[e._v("time")])]),r("tr",[r("td",[e._v("value")]),r("td",[e._v("String, Array, Date, Number")]),r("td",[e._v("绑定的值，可以使用v-model进行双向绑定，"),r("code",[e._v("range")]),e._v("模式下为Array类型, "),r("code",[e._v("Number")]),e._v("类型为时间戳")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("disabled")]),r("td",[e._v("Boolean")]),r("td",[e._v("禁用")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("disabledHours")]),r("td",[e._v("Array")]),r("td",[e._v("禁用的小时")]),r("td",[e._v("[]")])]),r("tr",[r("td",[e._v("disabledMinutes")]),r("td",[e._v("Array")]),r("td",[e._v("禁用的分钟")]),r("td",[e._v("[]")])]),r("tr",[r("td",[e._v("disabledSeconds")]),r("td",[e._v("Array")]),r("td",[e._v("禁用的秒")]),r("td",[e._v("[]")])]),r("tr",[r("td",[e._v("hideDisabledOptions")]),r("td",[e._v("Boolean")]),r("td",[e._v("是否隐藏禁用的时间")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("confirm")]),r("td",[e._v("Boolean")]),r("td",[e._v("是否显示确认、清除按钮")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("readonly")]),r("td",[e._v("Boolean")]),r("td",[e._v("只读属性，只读时不能打开时间下拉框")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("placeholder")]),r("td",[e._v("String")]),r("td",[e._v("占位文本")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("size")]),r("td",[e._v("String")]),r("td",[e._v("尺寸，可选值 "),r("code",[e._v("mini")]),r("code",[e._v("small")]),r("code",[e._v("large")]),e._v("或者不设置")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("clearable")]),r("td",[e._v("Boolean")]),r("td",[e._v("显示清除图标")]),r("td",[e._v("true")])]),r("tr",[r("td",[e._v("suffix")]),r("td",[e._v("String")]),r("td",[e._v("输入框尾部图标")]),r("td",[e._v("time")])]),r("tr",[r("td",[e._v("prefix")]),r("td",[e._v("String")]),r("td",[e._v("输入框前置图标")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("transition")]),r("td",[e._v("String")]),r("td",[e._v("自定义时间下拉框的动画效果")]),r("td",[e._v("slideUp")])]),r("tr",[r("td",[e._v("editable")]),r("td",[e._v("Boolean")]),r("td",[e._v("是否可以输入")]),r("td",[e._v("true")])]),r("tr",[r("td",[e._v("placement")]),r("td",[e._v("String")]),r("td",[e._v("和"),r("code",[e._v("tooltip")]),e._v("一样")]),r("td",[e._v("bottom-start")])]),r("tr",[r("td",[e._v("format")]),r("td",[e._v("String")]),r("td",[e._v("输入框展示时间的格式化，详细见"),r("code",[e._v("date-picker")]),e._v("组件的日期格式化说明")]),r("td",[e._v("HH:mm:ss")])]),r("tr",[r("td",[e._v("value-format")]),r("td",[e._v("String")]),r("td",[r("code",[e._v("v-model")]),e._v("绑定值时间的格式化，详细见"),r("code",[e._v("date-picker")]),e._v("组件的日期格式化说明")]),r("td",[e._v("HH:mm:ss")])]),r("tr",[r("td",[e._v("open")]),r("td",[e._v("Boolean")]),r("td",[e._v("自定义控制打开关闭时间下拉框，此时选择器不会主动关闭。")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("separator")]),r("td",[e._v("String")]),r("td",[e._v("两个时间之间的分隔符")]),r("td",[e._v("～")])]),r("tr",[r("td",[e._v("className")]),r("td",[e._v("String")]),r("td",[e._v("选择器的类名")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("dropdownClassName")]),r("td",[e._v("String")]),r("td",[e._v("选择器下拉框的类名")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("only-show-pane")]),r("td",[e._v("Boolean")]),r("td",[e._v("只显示时间框")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("renderHtml")]),r("td",[e._v("HTMLElement, Boolean")]),r("td",[e._v("定义时间下拉框渲染的位置，如果为"),r("code",[e._v("true")]),e._v("则渲染到body中，可以指定渲染的元素")]),r("td",[e._v("false")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"timepicker-event"}},[e._v("TimePicker event "),r("a",{staticClass:"header-anchor",attrs:{href:"#timepicker-event"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",{staticClass:"doc-table"},[r("thead",[r("tr",[r("th",[e._v("事件名")]),r("th",[e._v("说明")]),r("th",[e._v("返回值")])])]),r("tbody",[r("tr",[r("td",[e._v("change")]),r("td",[e._v("数据改变时触发，返回已经格式化的时间")]),r("td",[e._v("time")])]),r("tr",[r("td",[e._v("clear")]),r("td",[e._v("点击清空按钮和清除按钮时触发")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("click-outside")]),r("td",[e._v("点击外部关闭下拉框时触发")]),r("td",[e._v("event")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"timepicker-slot"}},[e._v("TimePicker slot "),r("a",{staticClass:"header-anchor",attrs:{href:"#timepicker-slot"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",{staticClass:"doc-table"},[r("thead",[r("tr",[r("th",[e._v("名称")]),r("th",[e._v("说明")])])]),r("tbody",[r("tr",[r("td",[e._v("-")]),r("td",[e._v("自定义触发器")])]),r("tr",[r("td",[e._v("paneFooter")]),r("td",[e._v("自定义日期选择框底部内容")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"timepicker-methods"}},[e._v("TimePicker methods "),r("a",{staticClass:"header-anchor",attrs:{href:"#timepicker-methods"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",{staticClass:"doc-table"},[r("thead",[r("tr",[r("th",[e._v("名称")]),r("th",[e._v("说明")]),r("th",[e._v("参数")])])]),r("tbody",[r("tr",[r("td",[e._v("focus")]),r("td",[e._v("主动使input获取焦点")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("blur")]),r("td",[e._v("主动使input失去焦点")]),r("td",[e._v("-")])])])])}],i=(r("5ab2"),r("6d57"),r("e10e"),r("9bef"));function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s={name:"component-doc",components:{"monkey-ui-demo0":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("Row",{attrs:{gutter:16}},[r("Col",[r("TimePicker",{attrs:{placeholder:"请选择时间",clearable:""}})],1),e._v(" "),r("Col",[r("TimePicker",{attrs:{type:"timerange",placement:"bottom-end",placeholder:"请选择时间范围",clearable:""}})],1)],1)]],2)},t=[],r={};return o({render:e,staticRenderFns:t},r)}(),"monkey-ui-demo1":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("Row",{attrs:{gutter:16}},[r("Col",[r("TimePicker",{attrs:{format:"HH时mm分ss秒",placeholder:"请选择时间"},model:{value:e.time1,callback:function(t){e.time1=t},expression:"time1"}})],1),e._v(" "),r("Col",[r("TimePicker",{attrs:{format:"HH,mm,ss",placeholder:"请选择时间"},model:{value:e.time2,callback:function(t){e.time2=t},expression:"time2"}})],1),e._v(" "),r("Col",[r("TimePicker",{attrs:{type:"timerange",format:"HH时mm分ss秒",placeholder:"请选择时间范围"},model:{value:e.time3,callback:function(t){e.time3=t},expression:"time3"}})],1)],1)]],2)},t=[],r={data:function(){return{time1:"00:09:05",time2:"",time3:["00:09:05","00:09:04"]}}};return o({render:e,staticRenderFns:t},r)}(),"monkey-ui-demo2":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("Row",{attrs:{gutter:16}},[r("Col",[r("TimePicker",{attrs:{format:"HH:mm",placeholder:"请选择时间"}})],1),e._v(" "),r("Col",[r("TimePicker",{attrs:{format:"HH:mm",type:"timerange",placeholder:"请选择时间范围"}})],1)],1)]],2)},t=[],r={};return o({render:e,staticRenderFns:t},r)}(),"monkey-ui-demo3":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("Row",{attrs:{gutter:16}},[r("Col",[r("TimePicker",{attrs:{disabledHours:[0,1,2],disabledMinutes:[0,1,2],placeholder:"请选择时间"}})],1),e._v(" "),r("Col",[r("TimePicker",{attrs:{disabledHours:[0,1,2],disabledMinutes:[0,1,2],hideDisabledOptions:"",placeholder:"请选择时间"}})],1),e._v(" "),r("Col",[r("TimePicker",{attrs:{type:"timerange",disabledHours:[0,1,2],disabledMinutes:[0,1,2],placeholder:"请选择时间范围"}})],1)],1)]],2)},t=[],r={data:function(){return{shortcuts:[{text:"今天",onClick:function(e){var t=new Date;e.setValue(t)}},{text:"昨天",onClick:function(e){var t=new Date;t.setDate(t.getDate()-1),e.setValue(t)}},{text:"一周之前的某一天",onClick:function(e){var t=new Date;t.setDate(t.getDate()-7),e.setValue(t)}}],shortcutsrange:[{text:"最近一周",onClick:function(e){var t=new Date,r=new Date;t.setDate(t.getDate()-7),e.setValue([t,r])}},{text:"一个月",onClick:function(e){var t=new Date,r=new Date;t.setDate(t.getDate()-30),e.setValue([t,r])}},{text:"三个月",onClick:function(e){var t=new Date,r=new Date;t.setDate(t.getDate()-90),e.setValue([t,r])}}]}}};return o({render:e,staticRenderFns:t},r)}(),"monkey-ui-demo4":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("Row",{attrs:{gutter:16}},[r("Col",[r("TimePicker",{attrs:{confirm:"",placeholder:"请选择日期"}})],1),e._v(" "),r("Col",[r("TimePicker",{attrs:{type:"timerange",confirm:"",placeholder:"请选择日期范围"}})],1)],1)]],2)},t=[],r={data:function(){return{}},methods:{}};return o({render:e,staticRenderFns:t},r)}(),"monkey-ui-demo5":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("Row",{attrs:{gutter:16}},[r("Col",[r("h4",[e._v("只读")]),e._v(" "),r("TimePicker",{attrs:{placeholder:"请选择时间",readonly:""}})],1),e._v(" "),r("Col",[r("h4",[e._v("不可输入")]),e._v(" "),r("TimePicker",{attrs:{type:"timerange",placeholder:"请选择时间范围",editable:!1}})],1)],1)]],2)},t=[],r={data:function(){return{}}};return o({render:e,staticRenderFns:t},r)}(),"monkey-ui-demo6":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("TimePicker",{attrs:{placeholder:"请选择时间",disabled:""}})]],2)},t=[],r={data:function(){return{}}};return o({render:e,staticRenderFns:t},r)}(),"monkey-ui-demo7":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("TimePicker",{attrs:{placeholder:"请选择时间",open:e.open}},[r("Button",{attrs:{type:"text"},on:{click:function(t){e.open=!e.open}}},[e._v("触发时间框打开关闭")])],1)]],2)},t=[],r={data:function(){return{open:!1}}};return o({render:e,staticRenderFns:t},r)}(),"monkey-ui-demo8":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("TimePicker",{attrs:{"only-show-pane":""},on:{change:e.handleChange},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},[r("template",{slot:"paneFooter"},[r("Button",{attrs:{size:"small"},on:{click:e.handleClear}},[e._v("清除")])],1)],2)]],2)},t=[],r={data:function(){return{time:""}},methods:{handleChange:function(e){this.$Message.info("selectd value is "+e)},handleClear:function(){this.time=""}}};return o({render:e,staticRenderFns:t},r)}(),"monkey-ui-demo9":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("Row",{attrs:{gutter:16}},[r("Col",[r("h4",[e._v("Mini")]),e._v(" "),r("TimePicker",{attrs:{placeholder:"请选择时间",size:"mini"}})],1),e._v(" "),r("Col",[r("h4",[e._v("Small")]),e._v(" "),r("TimePicker",{attrs:{placeholder:"请选择时间",size:"small"}})],1),e._v(" "),r("Col",[r("h4",[e._v("Default")]),e._v(" "),r("TimePicker",{attrs:{placeholder:"请选择时间"}})],1),e._v(" "),r("Col",[r("h4",[e._v("Large")]),e._v(" "),r("TimePicker",{attrs:{placeholder:"请选择时间",size:"large"}})],1)],1)]],2)},t=[],r={data:function(){return{}}};return o({render:e,staticRenderFns:t},r)}()}},d=s,c=r("9ca4"),v=Object(c["a"])(d,n,a,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0b5f37.02d3445b.js.map