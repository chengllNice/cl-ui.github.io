(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222943"],{cee0:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"doc-article monkey-view-doc"},[a("h1",[e._v("Input 输入框")]),a("p",[e._v("表单组件。支持input、number、password、textarea类型。")]),e._m(0),a("code-wrap",{attrs:{id:"JCYF"}},[a("template",{slot:"description"},[a("p",[e._v("可以使用v-model实现双向数据绑定。默认宽度100%。")])]),a("template",{slot:"title"},[e._v("基础用法 "),a("a",{attrs:{href:"#JCYF","data-title":"基础用法"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo0")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Input placeholder="placeholder" v-model="valueBase" style="width: 300px"></Input>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueBase: \'\',\n        }\n      }\n    }\n<\/script>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"JY"}},[a("template",{slot:"description"},[a("p",[e._v("设置 "),a("code",[e._v("disabled")]),e._v("属性禁用输入框。")])]),a("template",{slot:"title"},[e._v("禁用 "),a("a",{attrs:{href:"#JY","data-title":"禁用"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo1")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Row :gutter="16">\n        <Col>\n            <h4>input</h4>\n            <Input disabled placeholder="placeholder" v-model="valueDisabled"></Input>\n        </Col>\n        <Col>\n            <h4>number</h4>\n            <Input type="number" disabled placeholder="placeholder" v-model="valueDisabled"></Input>\n        </Col>\n        <Col>\n            <h4>search</h4>\n            <Input type="search" disabled placeholder="placeholder" v-model="valueDisabled"></Input>\n        </Col>\n        <Col>\n            <h4>password</h4>\n            <Input type="password" disabled placeholder="placeholder" v-model="valueDisabled"></Input>\n        </Col>\n    </Row>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueDisabled: \'\',\n        }\n      }\n    }\n<\/script>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"CC"}},[a("template",{slot:"description"},[a("p",[e._v("支持三种尺寸，设置 "),a("code",[e._v("size")]),e._v("为 "),a("code",[e._v("mini")]),a("code",[e._v("small")]),a("code",[e._v("large")]),e._v("实现迷你尺寸、小尺寸和大尺寸，不设置为默认尺寸。")])]),a("template",{slot:"title"},[e._v("尺寸 "),a("a",{attrs:{href:"#CC","data-title":"尺寸"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo2")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Row :gutter="10">\n        <Col>\n            <Input size="mini" placeholder="mini placeholder" v-model="valueSizeMini"></Input>\n        </Col>\n        <Col>\n            <Input size="small" placeholder="small placeholder" v-model="valueSizeSmall"></Input>\n        </Col>\n        <Col>\n            <Input placeholder="default placeholder" v-model="valueSizeDefault"></Input>\n        </Col>\n        <Col>\n            <Input size="large" placeholder="large placeholder" v-model="valueSizeLarge"></Input>\n        </Col>\n    </Row>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueSizeMini: \'\',\n          valueSizeSmall: \'\',\n          valueSizeDefault: \'\',\n          valueSizeLarge: \'\',\n        }\n      }\n    }\n<\/script>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"KQK"}},[a("template",{slot:"description"},[a("p",[e._v("设置 "),a("code",[e._v("clearable")]),e._v("属性实现可清空的输入框。显示清除按钮。")])]),a("template",{slot:"title"},[e._v("可清空 "),a("a",{attrs:{href:"#KQK","data-title":"可清空"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo3")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Input placeholder="placeholder" clearable v-model="valueClearable" style="width: 300px"></Input>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valueClearable: \'\',\n        }\n      }\n    }\n<\/script>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"QZHHZTB"}},[a("template",{slot:"description"},[a("p",[e._v("设置 "),a("code",[e._v("prefix")]),e._v("和 "),a("code",[e._v("suffix")]),e._v("属性及同名的 "),a("code",[e._v("slot")]),e._v("实现前缀和后缀图标。")])]),a("template",{slot:"title"},[e._v("前缀和后缀图标 "),a("a",{attrs:{href:"#QZHHZTB","data-title":"前缀和后缀图标"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo4")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <h4>属性方式</h4>\n    <Input placeholder="placeholder" v-model="valuePrefix" prefix="user-fill" style="width: 300px"></Input>\n    <br>\n    <Input placeholder="placeholder" v-model="valueSuffix" suffix="search" style="width: 300px"></Input>\n\n    <h4>slot方式</h4>\n    <Input placeholder="placeholder" v-model="valuePrefixSlot" style="width: 300px">\n        <Icon slot="prefix" type="user-fill"></Icon>\n    </Input>\n    <br>\n    <Input placeholder="placeholder" v-model="valueSuffixSlot" style="width: 300px">\n        <Icon slot="suffix" type="search"></Icon>\n    </Input>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valuePrefix: \'\',\n          valueSuffix: \'\',\n          valuePrefixSlot: \'\',\n          valueSuffixSlot: \'\',\n        }\n      }\n    }\n<\/script>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"QZHHZBQ"}},[a("template",{slot:"description"},[a("p",[e._v("设置 "),a("code",[e._v("prefix")]),e._v("和 "),a("code",[e._v("suffix")]),e._v("属性及同名的 "),a("code",[e._v("slot")]),e._v("实现前缀和后缀图标。")])]),a("template",{slot:"title"},[e._v("前置和后置标签 "),a("a",{attrs:{href:"#QZHHZBQ","data-title":"前置和后置标签"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo5")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Input placeholder="placeholder" v-model="valuePrepend">\n        <span slot="prepend">http://</span>\n        <span slot="append">.com</span>\n    </Input>\n    <br>\n    <Input placeholder="placeholder" v-model="valueAppend">\n        <Select slot="prepend" style="width: 70px;" v-model="inputPrependSelect" :option="inputPrependSelectOptions" :dropdownMatchSelectWidth="false"></Select>\n        <Select slot="append" style="width: 70px;" v-model="inputAppendSelect" :option="inputAppendSelectOptions" :dropdownMatchSelectWidth="false"></Select>\n    </Input>\n    <br>\n    <Input placeholder="placeholder" v-model="valuePrepend">\n        <Icon slot="append" type="setting"></Icon>\n    </Input>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          valuePrepend: \'\',\n          valueAppend: \'\',\n          inputPrependSelect: \'0\',\n          inputPrependSelectOptions: [\n            {\n              label: \'http://\',\n              value: \'0\',\n            },\n            {\n              label: \'https://\',\n              value: \'1\',\n            }\n          ],\n          inputAppendSelect: \'0\',\n          inputAppendSelectOptions: [\n            {\n              label: \'.com\',\n              value: \'0\',\n            },\n            {\n              label: \'.cn\',\n              value: \'1\',\n            },\n            {\n              label: \'.net\',\n              value: \'2\',\n            },\n            {\n              label: \'.org\',\n              value: \'3\',\n            }\n          ],\n        }\n      }\n    }\n<\/script>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"SSK"}},[a("template",{slot:"description"},[a("p",[e._v("设置 "),a("code",[e._v("type='search'")]),e._v("开启带有搜索按钮的输入框。")])]),a("template",{slot:"title"},[e._v("搜索框 "),a("a",{attrs:{href:"#SSK","data-title":"搜索框"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo6")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Input type="search" placeholder="placeholder" v-model="valueSearch"></Input>\n    <br>\n    <Input type="search" placeholder="placeholder" v-model="valueSearch1" suffixButton></Input>\n    <br>\n    <Input type="search" placeholder="placeholder" v-model="valueSearch2" suffixButton="Search"></Input>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n           valueSearch: \'\',\n           valueSearch1: \'\',\n           valueSearch2: \'\',\n        }\n      }\n    }\n<\/script>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"MMK"}},[a("template",{slot:"description"},[a("p",[e._v("设置 "),a("code",[e._v("type='password'")]),e._v("开启密码输入框。可以自定义密码框的后缀图标或者不显示图标")])]),a("template",{slot:"title"},[e._v("密码框 "),a("a",{attrs:{href:"#MMK","data-title":"密码框"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo7")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Input type="password" placeholder="placeholder" v-model="valuePassword"></Input>\n    <br>\n    <Input type="password" placeholder="placeholder" v-model="valuePassword1" :showPasswordIcon="false"></Input>\n    <br>\n    <Input type="password" placeholder="placeholder" v-model="valuePassword2">\n        <Icon slot="suffix" type="password"></Icon>\n    </Input>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n           valuePassword: \'\',\n           valuePassword1: \'\',\n           valuePassword2: \'\',\n        }\n      }\n    }\n<\/script>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"SZSRK"}},[a("template",{slot:"description"},[a("p",[e._v("设置 "),a("code",[e._v("type='number'")]),e._v("开启数字输入框。数字输入框的默认 "),a("code",[e._v("step=1")]),e._v("。可以自定义 "),a("code",[e._v("step")]),e._v("大小，也可以设置 "),a("code",[e._v("step=false")]),e._v("不显示操作。")])]),a("template",{slot:"title"},[e._v("数字输入框 "),a("a",{attrs:{href:"#SZSRK","data-title":"数字输入框"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo8")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Input type="number" placeholder="placeholder" v-model="valueNumber"></Input>\n    <h4>step=2</h4>\n    <Input type="number" placeholder="placeholder" v-model="valueNumber1" :step="2"></Input>\n    <h4>step=false</h4>\n    <Input type="number" placeholder="placeholder" v-model="valueNumber2" :step="false"></Input>\n    <h4>stepType=\'right\'</h4>\n    <Input type="number" placeholder="placeholder" v-model="valueNumber3" stepType="right"></Input>\n    <h4>限制最大最小值及小数位：min=0,max=100,precision=2</h4>\n    <Input type="number" placeholder="placeholder" v-model="valueNumber4" :min="0" :max="100" :precision="2"></Input>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n           valueNumber: \'\',\n           valueNumber1: \'\',\n           valueNumber2: \'\',\n           valueNumber3: \'\',\n           valueNumber4: \'\',\n        }\n      }\n    }\n<\/script>\n\n')])])])])],2),a("code-wrap",{attrs:{id:"WBY"}},[a("template",{slot:"description"},[a("p",[e._v("设置 "),a("code",[e._v("type='textarea'")]),e._v("开启文本域模式。设置 "),a("code",[e._v("autosize")]),e._v("属性可自适应高度，该属性设置为对象可设置最小行数和最大行数。")])]),a("template",{slot:"title"},[e._v("文本域 "),a("a",{attrs:{href:"#WBY","data-title":"文本域"}},[e._v("#")])]),a("template",{slot:"source"},[a("monkey-view-demo9")],1),a("template",{slot:"highlight"},[a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <Input type="textarea" placeholder="placeholder" v-model="valueTextarea"></Input>\n    <h4>自适应高度</h4>\n    <Input type="textarea" placeholder="placeholder" v-model="valueTextarea1" autosize></Input>\n    <Input type="textarea" placeholder="placeholder" v-model="valueTextarea2" :autosize="{minRows: 3, maxRows: 6}"></Input>\n    <h4>设置文本域大小</h4>\n    <Input type="textarea" placeholder="placeholder" v-model="valueTextarea3" :rows="5"></Input>\n    <h4>限制输入长度并显示输入长度：maxLength=20,showLimitLabel</h4>\n    <Input type="textarea" placeholder="placeholder" v-model="valueTextarea4" :maxLength="20" showLimitLabel></Input>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n           valueTextarea: \'\',\n           valueTextarea1: \'\',\n           valueTextarea2: \'\',\n           valueTextarea3: \'\',\n           valueTextarea4: \'\',\n        }\n      }\n    }\n<\/script>\n\n')])])])])],2),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"anchor-title",attrs:{id:"dai-ma-shi-li"}},[e._v("代码示例 "),a("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-shi-li"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"anchor-title",attrs:{id:"api"}},[e._v("API "),a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticClass:"anchor-title",attrs:{id:"input-props"}},[e._v("Input props "),a("a",{staticClass:"header-anchor",attrs:{href:"#input-props"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[e._v("属性")]),a("th",[e._v("类型")]),a("th",[e._v("说明")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("type")]),a("td",[e._v("String")]),a("td",[e._v("设置文本框的类型，可选值 "),a("code",[e._v("input")]),a("code",[e._v("number")]),a("code",[e._v("search")]),a("code",[e._v("password")]),a("code",[e._v("textarea")])]),a("td",[e._v("input")])]),a("tr",[a("td",[e._v("name")]),a("td",[e._v("String")]),a("td",[e._v("原生name属性")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("value")]),a("td",[e._v("String, Number")]),a("td",[e._v("绑定的值，可以使用v-model进行双向绑定")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("disabled")]),a("td",[e._v("Boolean")]),a("td",[e._v("禁用")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("readonly")]),a("td",[e._v("Boolean")]),a("td",[e._v("只读属性")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("placeholder")]),a("td",[e._v("String")]),a("td",[e._v("占位文本")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("size")]),a("td",[e._v("String")]),a("td",[e._v("尺寸，可选值 "),a("code",[e._v("mini")]),a("code",[e._v("small")]),a("code",[e._v("large")]),e._v("或者不设置")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("step")]),a("td",[e._v("Boolean, Number")]),a("td",[e._v("type为number时，每次改变的步数，可以是小数。false时不显示控制按钮， true时显示控制按钮，默认显示左右按钮")]),a("td",[e._v("1")])]),a("tr",[a("td",[e._v("step-type")]),a("td",[e._v("String")]),a("td",[e._v("type为"),a("code",[e._v("number")]),e._v("时，控制按钮显示的位置。可选值"),a("code",[e._v("right")])]),a("td",[e._v("1")])]),a("tr",[a("td",[e._v("min")]),a("td",[e._v("Number")]),a("td",[e._v("最小值。type类型为"),a("code",[e._v("number")]),e._v("时有用，设置可输入的最小值")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("max")]),a("td",[e._v("Number")]),a("td",[e._v("最大值。type类型为"),a("code",[e._v("number")]),e._v("时有用，设置可输入的最大值")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("precision")]),a("td",[e._v("Number")]),a("td",[e._v("保留小数点位数。type类型为"),a("code",[e._v("number")]),e._v("时有用")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("max-length")]),a("td",[e._v("Number")]),a("td",[e._v("可输入的最大字符长度。"),a("code",[e._v("input")]),e._v("和"),a("code",[e._v("textarea")]),e._v("时有效")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("show-limit-label")]),a("td",[e._v("Boolean")]),a("td",[e._v("是否显示限制。为true时会在输入框或者textarea尾部显示当前字符长度和限制长度"),a("code",[e._v("man-length")]),e._v("。该值需要和"),a("code",[e._v("man-length")]),e._v("配合使用。")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("autosize")]),a("td",[e._v("Boolean, Object")]),a("td",[e._v("type为"),a("code",[e._v("textarea")]),e._v("时有效。自适应内容高度，可设置对象，如"),a("code",[e._v("{minRows: 2, maxRows: 6}")])]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("rows")]),a("td",[e._v("Number")]),a("td",[e._v("type为"),a("code",[e._v("textarea")]),e._v("时有效。默认行数，超出时显示滚动条")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("show-password-icon")]),a("td",[e._v("Boolean, Object")]),a("td",[e._v("type为"),a("code",[e._v("password")]),e._v("时尾部显示控制字符显示的icon图标。false时不显示。可设置对象，设置icon，如："),a("code",[e._v("{close: 'close', open: 'square-plus'}")])]),a("td",[e._v("true")])]),a("tr",[a("td",[e._v("suffix")]),a("td",[e._v("String")]),a("td",[e._v("输入框尾部图标。"),a("code",[e._v("textarea")]),e._v("时无效。type为"),a("code",[e._v("search")]),e._v("时默认显示搜索图标")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("prefix")]),a("td",[e._v("Boolean, String")]),a("td",[e._v("输入框头部图标。"),a("code",[e._v("textarea")]),e._v("时无效")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("suffix-button")]),a("td",[e._v("String")]),a("td",[e._v("type为"),a("code",[e._v("search")]),e._v("时有效。定义搜索按钮，true时显示纯图标的按钮，string时可定义按钮的文字")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("clearable")]),a("td",[e._v("Boolean")]),a("td",[e._v("显示清除图标。type为"),a("code",[e._v("textarea")]),e._v("时无效")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("input-style")]),a("td",[e._v("Object")]),a("td",[e._v("输入框的样式，type为"),a("code",[e._v("textarea")]),e._v("时无效")]),a("td",[e._v("false")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticClass:"anchor-title",attrs:{id:"input-event"}},[e._v("Input event "),a("a",{staticClass:"header-anchor",attrs:{href:"#input-event"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[e._v("事件名")]),a("th",[e._v("说明")]),a("th",[e._v("返回值")])])]),a("tbody",[a("tr",[a("td",[e._v("change")]),a("td",[e._v("数据改变时触发")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("blur")]),a("td",[e._v("失去焦点时触发")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("focus")]),a("td",[e._v("获取焦点时触发")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("enter")]),a("td",[e._v("按下回车键时触发")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("search")]),a("td",[e._v("按下搜索或回车键时触发。"),a("code",[e._v("search")]),e._v("状态下有用")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("clear")]),a("td",[e._v("开始"),a("code",[e._v("clearable")]),e._v("时有用。点击清空按钮时触发")]),a("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticClass:"anchor-title",attrs:{id:"input-slot"}},[e._v("Input slot "),a("a",{staticClass:"header-anchor",attrs:{href:"#input-slot"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[e._v("名称")]),a("th",[e._v("说明")])])]),a("tbody",[a("tr",[a("td",[e._v("prepend")]),a("td",[e._v("前置内容。type为"),a("code",[e._v("textarea")]),e._v("时无效")])]),a("tr",[a("td",[e._v("prefix")]),a("td",[e._v("输入框头部内容。设置此项内容后内置的"),a("code",[e._v("prefix")]),e._v("无效。type为"),a("code",[e._v("textarea")]),e._v("时无效")])]),a("tr",[a("td",[e._v("suffix")]),a("td",[e._v("输入框尾部内容。设置此项内容后会导致内置"),a("code",[e._v("suffix")]),e._v("的无效。type为"),a("code",[e._v("textarea")]),e._v("时无效")])]),a("tr",[a("td",[e._v("append")]),a("td",[e._v("后置内容。设置此项内容后"),a("code",[e._v("suffix-button")]),e._v("无效。type为"),a("code",[e._v("textarea")]),e._v("时无效")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",{staticClass:"anchor-title",attrs:{id:"input-methods"}},[e._v("Input methods "),a("a",{staticClass:"header-anchor",attrs:{href:"#input-methods"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"doc-table"},[a("thead",[a("tr",[a("th",[e._v("名称")]),a("th",[e._v("说明")]),a("th",[e._v("参数")])])]),a("tbody",[a("tr",[a("td",[e._v("focus")]),a("td",[e._v("主动使input获取焦点")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("blur")]),a("td",[e._v("主动使input失去焦点")]),a("td",[e._v("-")])])])])}],n=(a("5ab2"),a("6d57"),a("e10e"),a("ce3c"));function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={name:"component-doc",components:{"monkey-view-demo0":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"placeholder"},model:{value:e.valueBase,callback:function(t){e.valueBase=t},expression:"valueBase"}})]],2)},t=[],a={data:function(){return{valueBase:""}}};return p({render:e,staticRenderFns:t},a)}(),"monkey-view-demo1":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Row",{attrs:{gutter:16}},[a("Col",[a("h4",[e._v("input")]),e._v(" "),a("Input",{attrs:{disabled:"",placeholder:"placeholder"},model:{value:e.valueDisabled,callback:function(t){e.valueDisabled=t},expression:"valueDisabled"}})],1),e._v(" "),a("Col",[a("h4",[e._v("number")]),e._v(" "),a("Input",{attrs:{type:"number",disabled:"",placeholder:"placeholder"},model:{value:e.valueDisabled,callback:function(t){e.valueDisabled=t},expression:"valueDisabled"}})],1),e._v(" "),a("Col",[a("h4",[e._v("search")]),e._v(" "),a("Input",{attrs:{type:"search",disabled:"",placeholder:"placeholder"},model:{value:e.valueDisabled,callback:function(t){e.valueDisabled=t},expression:"valueDisabled"}})],1),e._v(" "),a("Col",[a("h4",[e._v("password")]),e._v(" "),a("Input",{attrs:{type:"password",disabled:"",placeholder:"placeholder"},model:{value:e.valueDisabled,callback:function(t){e.valueDisabled=t},expression:"valueDisabled"}})],1)],1)]],2)},t=[],a={data:function(){return{valueDisabled:""}}};return p({render:e,staticRenderFns:t},a)}(),"monkey-view-demo2":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Row",{attrs:{gutter:10}},[a("Col",[a("Input",{attrs:{size:"mini",placeholder:"mini placeholder"},model:{value:e.valueSizeMini,callback:function(t){e.valueSizeMini=t},expression:"valueSizeMini"}})],1),e._v(" "),a("Col",[a("Input",{attrs:{size:"small",placeholder:"small placeholder"},model:{value:e.valueSizeSmall,callback:function(t){e.valueSizeSmall=t},expression:"valueSizeSmall"}})],1),e._v(" "),a("Col",[a("Input",{attrs:{placeholder:"default placeholder"},model:{value:e.valueSizeDefault,callback:function(t){e.valueSizeDefault=t},expression:"valueSizeDefault"}})],1),e._v(" "),a("Col",[a("Input",{attrs:{size:"large",placeholder:"large placeholder"},model:{value:e.valueSizeLarge,callback:function(t){e.valueSizeLarge=t},expression:"valueSizeLarge"}})],1)],1)]],2)},t=[],a={data:function(){return{valueSizeMini:"",valueSizeSmall:"",valueSizeDefault:"",valueSizeLarge:""}}};return p({render:e,staticRenderFns:t},a)}(),"monkey-view-demo3":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"placeholder",clearable:""},model:{value:e.valueClearable,callback:function(t){e.valueClearable=t},expression:"valueClearable"}})]],2)},t=[],a={data:function(){return{valueClearable:""}}};return p({render:e,staticRenderFns:t},a)}(),"monkey-view-demo4":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("h4",[e._v("属性方式")]),e._v(" "),a("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"placeholder",prefix:"user-fill"},model:{value:e.valuePrefix,callback:function(t){e.valuePrefix=t},expression:"valuePrefix"}}),e._v(" "),a("br"),e._v(" "),a("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"placeholder",suffix:"search"},model:{value:e.valueSuffix,callback:function(t){e.valueSuffix=t},expression:"valueSuffix"}}),e._v(" "),a("h4",[e._v("slot方式")]),e._v(" "),a("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"placeholder"},model:{value:e.valuePrefixSlot,callback:function(t){e.valuePrefixSlot=t},expression:"valuePrefixSlot"}},[a("Icon",{attrs:{slot:"prefix",type:"user-fill"},slot:"prefix"})],1),e._v(" "),a("br"),e._v(" "),a("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"placeholder"},model:{value:e.valueSuffixSlot,callback:function(t){e.valueSuffixSlot=t},expression:"valueSuffixSlot"}},[a("Icon",{attrs:{slot:"suffix",type:"search"},slot:"suffix"})],1)]],2)},t=[],a={data:function(){return{valuePrefix:"",valueSuffix:"",valuePrefixSlot:"",valueSuffixSlot:""}}};return p({render:e,staticRenderFns:t},a)}(),"monkey-view-demo5":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Input",{attrs:{placeholder:"placeholder"},model:{value:e.valuePrepend,callback:function(t){e.valuePrepend=t},expression:"valuePrepend"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("http://")]),e._v(" "),a("span",{attrs:{slot:"append"},slot:"append"},[e._v(".com")])]),e._v(" "),a("br"),e._v(" "),a("Input",{attrs:{placeholder:"placeholder"},model:{value:e.valueAppend,callback:function(t){e.valueAppend=t},expression:"valueAppend"}},[a("Select",{staticStyle:{width:"70px"},attrs:{slot:"prepend",option:e.inputPrependSelectOptions,dropdownMatchSelectWidth:!1},slot:"prepend",model:{value:e.inputPrependSelect,callback:function(t){e.inputPrependSelect=t},expression:"inputPrependSelect"}}),e._v(" "),a("Select",{staticStyle:{width:"70px"},attrs:{slot:"append",option:e.inputAppendSelectOptions,dropdownMatchSelectWidth:!1},slot:"append",model:{value:e.inputAppendSelect,callback:function(t){e.inputAppendSelect=t},expression:"inputAppendSelect"}})],1),e._v(" "),a("br"),e._v(" "),a("Input",{attrs:{placeholder:"placeholder"},model:{value:e.valuePrepend,callback:function(t){e.valuePrepend=t},expression:"valuePrepend"}},[a("Icon",{attrs:{slot:"append",type:"setting"},slot:"append"})],1)]],2)},t=[],a={data:function(){return{valuePrepend:"",valueAppend:"",inputPrependSelect:"0",inputPrependSelectOptions:[{label:"http://",value:"0"},{label:"https://",value:"1"}],inputAppendSelect:"0",inputAppendSelectOptions:[{label:".com",value:"0"},{label:".cn",value:"1"},{label:".net",value:"2"},{label:".org",value:"3"}]}}};return p({render:e,staticRenderFns:t},a)}(),"monkey-view-demo6":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Input",{attrs:{type:"search",placeholder:"placeholder"},model:{value:e.valueSearch,callback:function(t){e.valueSearch=t},expression:"valueSearch"}}),e._v(" "),a("br"),e._v(" "),a("Input",{attrs:{type:"search",placeholder:"placeholder",suffixButton:""},model:{value:e.valueSearch1,callback:function(t){e.valueSearch1=t},expression:"valueSearch1"}}),e._v(" "),a("br"),e._v(" "),a("Input",{attrs:{type:"search",placeholder:"placeholder",suffixButton:"Search"},model:{value:e.valueSearch2,callback:function(t){e.valueSearch2=t},expression:"valueSearch2"}})]],2)},t=[],a={data:function(){return{valueSearch:"",valueSearch1:"",valueSearch2:""}}};return p({render:e,staticRenderFns:t},a)}(),"monkey-view-demo7":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Input",{attrs:{type:"password",placeholder:"placeholder"},model:{value:e.valuePassword,callback:function(t){e.valuePassword=t},expression:"valuePassword"}}),e._v(" "),a("br"),e._v(" "),a("Input",{attrs:{type:"password",placeholder:"placeholder",showPasswordIcon:!1},model:{value:e.valuePassword1,callback:function(t){e.valuePassword1=t},expression:"valuePassword1"}}),e._v(" "),a("br"),e._v(" "),a("Input",{attrs:{type:"password",placeholder:"placeholder"},model:{value:e.valuePassword2,callback:function(t){e.valuePassword2=t},expression:"valuePassword2"}},[a("Icon",{attrs:{slot:"suffix",type:"password"},slot:"suffix"})],1)]],2)},t=[],a={data:function(){return{valuePassword:"",valuePassword1:"",valuePassword2:""}}};return p({render:e,staticRenderFns:t},a)}(),"monkey-view-demo8":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Input",{attrs:{type:"number",placeholder:"placeholder"},model:{value:e.valueNumber,callback:function(t){e.valueNumber=t},expression:"valueNumber"}}),e._v(" "),a("h4",[e._v("step=2")]),e._v(" "),a("Input",{attrs:{type:"number",placeholder:"placeholder",step:2},model:{value:e.valueNumber1,callback:function(t){e.valueNumber1=t},expression:"valueNumber1"}}),e._v(" "),a("h4",[e._v("step=false")]),e._v(" "),a("Input",{attrs:{type:"number",placeholder:"placeholder",step:!1},model:{value:e.valueNumber2,callback:function(t){e.valueNumber2=t},expression:"valueNumber2"}}),e._v(" "),a("h4",[e._v("stepType='right'")]),e._v(" "),a("Input",{attrs:{type:"number",placeholder:"placeholder",stepType:"right"},model:{value:e.valueNumber3,callback:function(t){e.valueNumber3=t},expression:"valueNumber3"}}),e._v(" "),a("h4",[e._v("限制最大最小值及小数位：min=0,max=100,precision=2")]),e._v(" "),a("Input",{attrs:{type:"number",placeholder:"placeholder",min:0,max:100,precision:2},model:{value:e.valueNumber4,callback:function(t){e.valueNumber4=t},expression:"valueNumber4"}})]],2)},t=[],a={data:function(){return{valueNumber:"",valueNumber1:"",valueNumber2:"",valueNumber3:"",valueNumber4:""}}};return p({render:e,staticRenderFns:t},a)}(),"monkey-view-demo9":function(){var e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("Input",{attrs:{type:"textarea",placeholder:"placeholder"},model:{value:e.valueTextarea,callback:function(t){e.valueTextarea=t},expression:"valueTextarea"}}),e._v(" "),a("h4",[e._v("自适应高度")]),e._v(" "),a("Input",{attrs:{type:"textarea",placeholder:"placeholder",autosize:""},model:{value:e.valueTextarea1,callback:function(t){e.valueTextarea1=t},expression:"valueTextarea1"}}),e._v(" "),a("Input",{attrs:{type:"textarea",placeholder:"placeholder",autosize:{minRows:3,maxRows:6}},model:{value:e.valueTextarea2,callback:function(t){e.valueTextarea2=t},expression:"valueTextarea2"}}),e._v(" "),a("h4",[e._v("设置文本域大小")]),e._v(" "),a("Input",{attrs:{type:"textarea",placeholder:"placeholder",rows:5},model:{value:e.valueTextarea3,callback:function(t){e.valueTextarea3=t},expression:"valueTextarea3"}}),e._v(" "),a("h4",[e._v("限制输入长度并显示输入长度：maxLength=20,showLimitLabel")]),e._v(" "),a("Input",{attrs:{type:"textarea",placeholder:"placeholder",maxLength:20,showLimitLabel:""},model:{value:e.valueTextarea4,callback:function(t){e.valueTextarea4=t},expression:"valueTextarea4"}})]],2)},t=[],a={data:function(){return{valueTextarea:"",valueTextarea1:"",valueTextarea2:"",valueTextarea3:"",valueTextarea4:""}}};return p({render:e,staticRenderFns:t},a)}()}},v=d,s=a("9ca4"),u=Object(s["a"])(v,l,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d222943.6681c669.js.map