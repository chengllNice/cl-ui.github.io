(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dde0c"],{"82ea":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"doc-article monkey-view-doc"},[t("h1",[e._v("国际化")]),e._m(0),e._m(1),t("p",[e._v("完整引入")]),t("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"md-html-no-demo"},[e._m(2)]),t("p",[e._v("按需引入")]),t("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"md-html-no-demo"},[e._m(3)]),t("p",[e._v("兼容 vue-i18n@6.x+")]),t("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"md-html-no-demo"},[e._m(4)]),t("p",[e._v("兼容 vue-i18n@5.x")]),t("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"md-html-no-demo"},[e._m(5)]),e._m(6),t("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"md-html-no-demo"},[e._m(7)]),e._m(8),e._m(9),e._m(10),e._m(11)])},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("code",[e._v("monkey-view")]),e._v("内部默认使用中文语言。如果需要使用其他语言，可以进行语言配置。下面以使用英文为例：")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h2",{staticClass:"anchor-title",attrs:{id:"webpack-zhong-shi-yong"}},[e._v("webpack中使用 "),t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-zhong-shi-yong"}},[e._v("#")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"javascript"}},[e._v("import Vue from 'vue'\nimport MonkeyView from 'monkey-view'\nimport locale from 'monkey-view/dist/locale/en-US'\n\nVue.use(MonkeyView, { locale })\n")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"javascript"}},[e._v("import Vue from 'vue';\nimport { locale, Page } from 'monkey-view';\nimport lang from 'monkey-view/dist/locale/en-US'\n\n// configure language\nlocale(lang);\n\n// import components\nVue.component('Page', Page);\n")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"javascript"}},[e._v("import Vue from 'vue';\nimport MonkeyView from 'monkey-view';\nimport VueI18n from 'vue-i18n';\nimport en from 'monkey-view/dist/locale/en-US';\nimport zh from 'monkey-view/dist/locale/zh-CN';\n\nVue.use(VueI18n);\nVue.use(MonkeyView);\nVue.locale = () => {};\n\nconst messages = {\n    en: Object.assign({ message: 'hello' }, en),\n    zh: Object.assign({ message: '你好' }, zh)\n};\n\nconst i18n = new VueI18n({\n    locale: 'en',\n    messages\n});\n\nnew Vue({ i18n }).$mount('#app');\n")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"javascript"}},[e._v("import Vue from 'vue';\nimport MonkeyView from 'monkey-view';\nimport VueI18n from 'vue-i18n';\nimport en from 'monkey-view/dist/locale/en-US';\nimport zh from 'monkey-view/dist/locale/zh-CN';\n\nVue.use(VueI18n);\nVue.use(MonkeyView);\n\nVue.config.lang = 'en-US';\nVue.locale('en-US', en);\nVue.locale('zh-CN', zh);\n")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h2",{staticClass:"anchor-title",attrs:{id:"cdn-de-fang-shi-shi-yong"}},[e._v("CDN 的方式使用 "),t("a",{staticClass:"header-anchor",attrs:{href:"#cdn-de-fang-shi-shi-yong"}},[e._v("#")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<script src="//unpkg.com/vue"><\/script>\n<script src="//unpkg.com/monkey-view/dist/monkey-view.min.js"><\/script>\n<script src="//unpkg.com/monkey-view/dist/locale/en-US.js"><\/script>\n\n<script>\n    MONKEY.locale(MONKEY.langs[\'en-US\'])\n<\/script>\n')])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h2",{staticClass:"anchor-title",attrs:{id:"zhi-chi-de-yu-yan"}},[e._v("支持的语言 "),t("a",{staticClass:"header-anchor",attrs:{href:"#zhi-chi-de-yu-yan"}},[e._v("#")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("目前"),t("code",[e._v("monkey-view")]),e._v("支持一下语言：")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",[e._v("简体中文(zh-CN)")]),t("li",[e._v("英文(en-US)")]),t("li",[e._v("繁体中文(zh-TW)")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("欢迎贡献代码，以支持更多语言。只需在 "),t("a",{attrs:{href:"https://github.com/chengllNice/monkey-view/tree/master/src/locale/lang",target:"_blank"}},[e._v("这里")]),e._v(" 添加一个语言配置文件即可。")])}],a=t("9ca4"),s={},c=Object(a["a"])(s,i,r,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0dde0c.43e96812.js.map