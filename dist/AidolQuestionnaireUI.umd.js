(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AidolQuestionnaireUI"] = factory();
	else
		root["AidolQuestionnaireUI"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.8_prettier@2.5.1_raw-loader@4.0.2_sass-loader@8.0.2_vue-template-compiler@2.6.14_vue@2.6.14/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/choice/index.vue?vue&type=template&id=13351f52
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ai-choice"},[_c('ai-title',{style:(_vm.titleStyle),attrs:{"index":_vm.index,"content":_vm.titleContent,"suffix-text":_vm.realTitleSuffixText}}),_c('AiTitleImage',{attrs:{"image":_vm.image,"img-class-name":"ai-choice__image"}}),_c('div',{class:_vm.choiceListClass},_vm._l((_vm.realOptions),function(v,i){return _c('div',{key:i,class:[_vm.choiceListItemClass, { 'is-active': _vm.isActive(v) }],style:(Object.assign({}, v.styles, (_vm.optionStyle || {}))),on:{"click":function($event){return _vm.toggleChecked(v[_vm.props.value])}}},[(_vm.showImage)?_c('div',{staticClass:"ai-choice__list--image__item__wrap"},[_vm._m(0,true),_c('img',{attrs:{"src":v[_vm.props.src]}}),(v[_vm.props.label])?_c('div',{staticClass:"ai-choice__list--image__item__wrap__label",domProps:{"innerHTML":_vm._s(v[_vm.props.label])}}):_vm._e()]):_c('div',{domProps:{"innerHTML":_vm._s(v[_vm.props.label])}})])}),0),(_vm.collectReason)?_c('AiAnswerReason',{attrs:{"title-style":_vm.reasonStyle},model:{value:(_vm.answerReason),callback:function ($$v) {_vm.answerReason=$$v},expression:"answerReason"}}):_vm._e()],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ai-choice__list--image__item__wrap__icon"},[_c('div',{staticClass:"ai-choice__list--image__item__wrap__icon__inner"})])}]


;// CONCATENATED MODULE: ./src/lib/components/choice/index.vue?vue&type=template&id=13351f52

;// CONCATENATED MODULE: ./src/lib/utils/index.js
/**
 * 创建字符索引
 * @author hongwenqing(elenh)
 * @param {number} index 数字索引值
 * @param {Array} ori 匹配数组
 * @return {any}
 */
function createIndex(index, ori = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']) {
  const s = index + '';
  const len = s.length;
  let res = '';
  for (let i = 0; i < len; i++) {
    const sIndex = Number.parseInt(s[i]);
    res += ori[sIndex];
  }
  return res;
}
;// CONCATENATED MODULE: ./src/lib/mixin/props-options.js

/* harmony default export */ var props_options = ({
  props: {
    // 选项列表
    options: {
      type: Array,
      default: () => []
    },
    // 配置选项
    props: {
      type: Object,
      default: () => ({
        label: 'label',
        value: 'value',
        src: 'src'
      })
    },
    // 是否自动生成选项索引名
    autoOptionsIndex: {
      type: Boolean,
      default: true
    },
    // 选项索引集合
    optionsIndexSet: {
      type: [Array, undefined],
      default: undefined
    }
  },
  computed: {
    realOptions() {
      if (this.autoOptionsIndex) {
        return this.options.map((v, i) => {
          const index_char = createIndex(i, this.optionsIndexSet);
          const label = this.type !== 'only-image' ? `${index_char}. ${v[this.props.label]}` : '';
          return {
            ...v,
            [this.props.label]: label
          };
        });
      }
      return this.options;
    }
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/answer-reason/index.vue?vue&type=template&id=6be34742
var answer_reasonvue_type_template_id_6be34742_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ai-answer-reason"},[_c('span',{staticClass:"ai-answer-reason__title",style:(_vm.titleStyle)},[_vm._v(" "+_vm._s(_vm.titleContent)+" ")]),_c('textarea',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.reasonValue),expression:"reasonValue",modifiers:{"trim":true}}],staticClass:"ai-answer-reason__content",domProps:{"value":(_vm.reasonValue)},on:{"change":_vm.handleChange,"input":function($event){if($event.target.composing){ return; }_vm.reasonValue=$event.target.value.trim()},"blur":function($event){return _vm.$forceUpdate()}}})])}
var answer_reasonvue_type_template_id_6be34742_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.89.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.23.5_webpack@5.89.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-81.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/answer-reason/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var answer_reasonvue_type_script_lang_js = ({
  name: 'AiAnswerReason',
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    titleStyle: {
      type: [Object, Array, String],
      default: () => ({})
    },
    titleContent: {
      type: String,
      default: 'Tell us the reason for your option(Optional)'
    }
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {};
  },
  computed: {
    reasonValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value);
    }
  }
});
;// CONCATENATED MODULE: ./src/lib/components/answer-reason/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_answer_reasonvue_type_script_lang_js = (answer_reasonvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/lib/components/answer-reason/index.vue





/* normalize component */
;
var component = normalizeComponent(
  components_answer_reasonvue_type_script_lang_js,
  answer_reasonvue_type_template_id_6be34742_render,
  answer_reasonvue_type_template_id_6be34742_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var answer_reason = (component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/title-image/index.vue?vue&type=template&id=2cc7a691
var title_imagevue_type_template_id_2cc7a691_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.image && _vm.image.src)?_c('div',{staticClass:"ai-title-image",style:(_vm.image.container_style || {})},[_c('img',{staticClass:"ai-title-image__inner",class:_vm.imgClassName,style:(_vm.image.style),attrs:{"src":_vm.image.src}})]):_vm._e()}
var title_imagevue_type_template_id_2cc7a691_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.89.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.23.5_webpack@5.89.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-81.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/title-image/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var title_imagevue_type_script_lang_js = ({
  name: 'AiTitleImage',
  props: {
    image: {
      type: Object,
      default: () => ({
        src: '',
        style: {},
        container_style: {}
      })
    },
    imgClassName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  }
});
;// CONCATENATED MODULE: ./src/lib/components/title-image/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_title_imagevue_type_script_lang_js = (title_imagevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/lib/components/title-image/index.vue





/* normalize component */
;
var title_image_component = normalizeComponent(
  components_title_imagevue_type_script_lang_js,
  title_imagevue_type_template_id_2cc7a691_render,
  title_imagevue_type_template_id_2cc7a691_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var title_image = (title_image_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.89.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.23.5_webpack@5.89.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-81.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/choice/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var choicevue_type_script_lang_js = ({
  name: 'AiChoice',
  components: {
    AiAnswerReason: answer_reason,
    AiTitleImage: title_image
  },
  mixins: [props_options],
  props: {
    // 答题类型
    // image 文本 + 图片
    // text 普通文本
    // only-image 仅图片
    type: {
      type: String,
      default: 'text'
    },
    // 题目索引
    index: {
      type: [Number, String],
      default: ''
    },
    // 选择值
    value: {
      type: [Number, String, Array],
      default: () => []
    },
    // 原因双绑值
    answerReasonValue: {
      type: String,
      default: ''
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 多选时，最大选择个数, 0 表示不限制
    max: {
      type: [Number, String],
      default: 0
    },
    // 标题样式
    titleStyle: {
      type: [Object, Array, undefined],
      default: undefined
    },
    // 标题内容
    titleContent: {
      type: String,
      default: ''
    },
    // 自定义标题后缀文本内容
    titleSuffixText: {
      type: [String, undefined],
      default: undefined
    },
    // 选项样式
    optionStyle: {
      type: [Object, Array, undefined],
      default: undefined
    },
    // 作答原因样式
    reasonStyle: {
      type: [Object, Array, undefined],
      default: undefined
    },
    image: {
      type: Object,
      default: () => ({})
    },
    collectReason: {
      type: [Boolean, Number],
      default: false
    }
  },
  emits: ['update:answerReasonValue', 'input'],
  data() {
    return {
      checked: ''
    };
  },
  computed: {
    answerReason: {
      get() {
        return this.answerReasonValue;
      },
      set(value) {
        this.$emit('update:answerReasonValue', value);
      }
    },
    showImage() {
      return ['image', 'only-image'].includes(this.type);
    },
    // 是否超出最大选择个数
    isOuter() {
      return this.multiple && this.choiceMax > 0 && this.checked.length > this.choiceMax;
    },
    realTitleSuffixText() {
      if (this.titleSuffixText) return this.titleSuffixText;
      return this.multiple ? '（Multiple choice）' : '（Single choice）';
    },
    choiceMax() {
      const {
        parseInt
      } = Number;
      return parseInt(this.max);
    },
    choiceListClass() {
      return this.showImage ? 'ai-choice__list--image' : 'ai-choice__list';
    },
    choiceListItemClass() {
      return this.showImage ? 'ai-choice__list--image__item' : 'ai-choice__list__item';
    }
  },
  watch: {
    value: {
      handler(val) {
        if (this.multiple) {
          this.checked = Array.isArray(val) ? [...val] : [];
        } else {
          this.checked = val;
        }
      },
      immediate: true
    }
  },
  methods: {
    isActive(v) {
      const val = v[this.props.value];
      if (this.multiple) {
        return this.checked.includes(val);
      }
      return this.checked === val;
    },
    toggleChecked(val) {
      if (this.multiple) {
        const index = this.checked.findIndex(v => v === val);
        if (index >= 0) {
          this.checked.splice(index, 1);
        } else {
          this.checked.push(val);
        }
        if (this.isOuter) {
          this.checked.shift();
        }
      } else {
        this.checked = val;
      }
      this.$emit('input', this.checked);
    }
  }
});
;// CONCATENATED MODULE: ./src/lib/components/choice/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_choicevue_type_script_lang_js = (choicevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/lib/components/choice/index.vue





/* normalize component */
;
var choice_component = normalizeComponent(
  components_choicevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var choice = (choice_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/title/index.vue?vue&type=template&id=893e2f4c
var titlevue_type_template_id_893e2f4c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.content)?_c('div',{staticClass:"ai-title"},[(_vm.index)?[_c('span',[_vm._v(_vm._s(_vm.index))]),_c('span',[_vm._v(". ")])]:_vm._e(),_c('span',[_vm._v(_vm._s(_vm.content))]),_c('span',{staticClass:"ai-title__suffix-text"},[_vm._v(_vm._s(_vm.suffixText))])],2):_vm._e()}
var titlevue_type_template_id_893e2f4c_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.89.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.23.5_webpack@5.89.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-81.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/title/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var titlevue_type_script_lang_js = ({
  name: 'AiTitle',
  props: {
    // 题目索引
    index: {
      type: [Number, String],
      default: 1
    },
    // 标题内容
    content: {
      type: String,
      default: ''
    },
    // 后缀文本
    suffixText: {
      type: String,
      default: ''
    }
  }
});
;// CONCATENATED MODULE: ./src/lib/components/title/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_titlevue_type_script_lang_js = (titlevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/lib/components/title/index.vue





/* normalize component */
;
var title_component = normalizeComponent(
  components_titlevue_type_script_lang_js,
  titlevue_type_template_id_893e2f4c_render,
  titlevue_type_template_id_893e2f4c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var title = (title_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/short-answer/index.vue?vue&type=template&id=82c24430
var short_answervue_type_template_id_82c24430_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ai-short-answer"},[_c('ai-title',{style:(_vm.titleStyle),attrs:{"index":_vm.index,"content":_vm.titleContent}}),_c('AiTitleImage',{attrs:{"image":_vm.image,"img-class-name":"ai-short-answer__image"}}),_c('div',{staticClass:"ai-short-answer__content"},[_c('textarea',{staticClass:"ai-short-answer__content__inner",attrs:{"placeholder":_vm.placeholder,"autocomplete":_vm.autocomplete,"cols":_vm.cols,"rows":_vm.rows,"maxlength":_vm.maxlength,"disabled":_vm.disabled,"readonly":_vm.readonly,"resize":_vm.resize},domProps:{"value":_vm.textValue},on:{"input":_vm.handleInput,"change":_vm.handleChange,"focus":_vm.handleFocus,"blur":_vm.handleBlur}})])],1)}
var short_answervue_type_template_id_82c24430_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.89.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.23.5_webpack@5.89.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-81.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/short-answer/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var short_answervue_type_script_lang_js = ({
  name: 'AiShortAnswer',
  components: {
    AiTitle: title,
    AiTitleImage: title_image
  },
  props: {
    // 题目索引
    index: {
      type: [Number, String],
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    titleContent: {
      type: String,
      default: ''
    },
    titleStyle: {
      type: [Object, Array, undefined],
      default: undefined
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    cols: {
      type: [Number, String, undefined],
      default: undefined
    },
    rows: {
      type: [Number, String],
      default: 10
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, String, undefined],
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    // none, both, horizontal, vertical
    resize: {
      type: String,
      default: 'inherit'
    },
    // 图片配置
    image: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      textValue: ''
    };
  },
  watch: {
    value: {
      handler(val) {
        this.textValue = val;
      },
      immediate: true
    }
  },
  methods: {
    handleInput(e) {
      this.textValue = e.target.value;
      this.$emit('input', this.textValue, e);
    },
    handleChange(e) {
      this.$emit('change', this.textValue, e);
    },
    handleFocus(e) {
      this.$emit('focus', e);
    },
    handleBlur(e) {
      this.$emit('blur', e);
    }
  }
});
;// CONCATENATED MODULE: ./src/lib/components/short-answer/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_short_answervue_type_script_lang_js = (short_answervue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/lib/components/short-answer/index.vue





/* normalize component */
;
var short_answer_component = normalizeComponent(
  components_short_answervue_type_script_lang_js,
  short_answervue_type_template_id_82c24430_render,
  short_answervue_type_template_id_82c24430_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var short_answer = (short_answer_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/block-tips/index.vue?vue&type=template&id=a3851aa4
var block_tipsvue_type_template_id_a3851aa4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ai-block-tips",class:[{ 'is-active': _vm.isActive, animation: _vm.animation && _vm.isActive }]},[_c('div',{staticClass:"ai-block-tips__content"},[_vm._t("default")],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"ai-block-tips__message"},[_vm._t("content",function(){return [_vm._v(" "+_vm._s(_vm.message)+" ")]})],2)])}
var block_tipsvue_type_template_id_a3851aa4_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.89.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.23.5_webpack@5.89.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-81.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/block-tips/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var block_tipsvue_type_script_lang_js = ({
  name: 'AiBlockTips',
  props: {
    message: {
      type: String,
      default: ''
    },
    animation: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isActive() {
      return !!this.message;
    }
  }
});
;// CONCATENATED MODULE: ./src/lib/components/block-tips/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_block_tipsvue_type_script_lang_js = (block_tipsvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/lib/components/block-tips/index.vue





/* normalize component */
;
var block_tips_component = normalizeComponent(
  components_block_tipsvue_type_script_lang_js,
  block_tipsvue_type_template_id_a3851aa4_render,
  block_tipsvue_type_template_id_a3851aa4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var block_tips = (block_tips_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/rate/index.vue?vue&type=template&id=1065eb6e
var ratevue_type_template_id_1065eb6e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ai-rate"},[_c('div',{staticClass:"ai-rate__title"},[_c('ai-title',{style:(_vm.titleStyle),attrs:{"index":_vm.index,"content":_vm.titleContent}})],1),_c('AiTitleImage',{attrs:{"image":_vm.image,"img-class-name":"ai-rate__image"}}),_c('div',{staticClass:"ai-rate__content",style:(_vm.optionStyle)},[_vm._l((_vm.rateOptions),function(v){return _c('div',{key:v.value,staticClass:"ai-rate__content__item",class:[
        { 'is-hover-active': _vm.isHoverActive(v.value) },
        { 'is-active': _vm.isActive(v.value) }
      ],on:{"mouseover":function($event){return _vm.handleMouseover(v.value)},"mouseout":function($event){return _vm.handleMouseout(v.value)},"click":function($event){return _vm.handleClick(v.value)}}},[_vm._v(" "+_vm._s(v.label)+" ")])}),(_vm.showText)?_c('div',{staticClass:"ai-rate__content__text",style:(_vm.optionStyle)},[_vm._v(" "+_vm._s(_vm.rateText)+" ")]):_vm._e()],2),(_vm.collectReason)?_c('AiAnswerReason',{attrs:{"title-content":"Tell us the reason for your score(Optional)","title-style":_vm.reasonStyle},model:{value:(_vm.answerReason),callback:function ($$v) {_vm.answerReason=$$v},expression:"answerReason"}}):_vm._e()],1)}
var ratevue_type_template_id_1065eb6e_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.89.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.23.5_webpack@5.89.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-81.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/rate/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var ratevue_type_script_lang_js = ({
  name: 'AiRate',
  components: {
    AiAnswerReason: answer_reason,
    AiTitle: title,
    AiTitleImage: title_image
  },
  props: {
    // 双绑值
    value: {
      type: [Number, String],
      default: 0
    },
    // 原因双绑值
    answerReasonValue: {
      type: String,
      default: ''
    },
    // 题目索引
    index: {
      type: [Number, String],
      default: ''
    },
    // 标题
    titleContent: {
      type: String,
      default: ''
    },
    // 标题样式
    titleStyle: {
      type: [Object, Array, undefined],
      default: undefined
    },
    // 选项样式
    optionStyle: {
      type: [Object, Array, undefined],
      default: undefined
    },
    // 作答原因样式
    reasonStyle: {
      type: [Object, Array, undefined],
      default: undefined
    },
    // 最大值
    max: {
      type: [Number, String],
      default: 5
    },
    // 自定义选项，设置此选项时，max 将无效
    options: {
      type: [Array, undefined],
      default: undefined
    },
    // 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容
    showText: {
      type: Boolean,
      default: false
    },
    // 辅助文字数组
    texts: {
      type: Array,
      default: () => []
    },
    image: {
      type: Object,
      default: () => ({})
    },
    collectReason: {
      type: [Boolean, Number],
      default: false
    }
  },
  emits: ['input', 'update:answerReasonValue'],
  data() {
    return {
      hoverActive: '',
      hoverIng: false
    };
  },
  computed: {
    active: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    },
    answerReason: {
      get() {
        return this.answerReasonValue;
      },
      set(value) {
        this.$emit('update:answerReasonValue', value);
      }
    },
    rateMax() {
      return Number.parseInt(this.max);
    },
    rateOptions() {
      if (Array.isArray(this.options) && this.options.length > 0) {
        return this.options;
      }
      const res = [];
      for (let i = 1; i <= this.rateMax; i++) {
        res.push({
          label: i,
          value: i
        });
      }
      return res;
    },
    rateText() {
      const ac = this.hoverIng ? this.hoverActive : this.active;
      const index = this.rateOptions.findIndex(v => v.value === ac);
      return this.texts[index];
    },
    hoverActiveIndex() {
      return this.rateOptions.findIndex(v => v.value === this.hoverActive);
    },
    activeIndex() {
      return this.rateOptions.findIndex(v => v.value === this.active);
    }
  },
  methods: {
    isHoverActive(value) {
      const index = this.rateOptions.findIndex(v => v.value === value);
      return index <= this.hoverActiveIndex && this.hoverIng;
    },
    isActive(value) {
      const index = this.rateOptions.findIndex(v => v.value === value);
      return index <= this.activeIndex && !this.hoverIng;
    },
    handleMouseover(value) {
      this.hoverActive = value;
      this.hoverIng = true;
    },
    handleMouseout(value) {
      this.hoverActive = value;
      this.hoverIng = false;
    },
    handleClick(value) {
      this.active = value;
    }
  }
});
;// CONCATENATED MODULE: ./src/lib/components/rate/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ratevue_type_script_lang_js = (ratevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/lib/components/rate/index.vue





/* normalize component */
;
var rate_component = normalizeComponent(
  components_ratevue_type_script_lang_js,
  ratevue_type_template_id_1065eb6e_render,
  ratevue_type_template_id_1065eb6e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var rate = (rate_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/rate-group/index.vue?vue&type=template&id=21436ef9
var rate_groupvue_type_template_id_21436ef9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ai-rate-group"},[_c('div',{staticClass:"ai-rate-group__title"},[_c('ai-title',{style:(_vm.titleStyle),attrs:{"index":_vm.index,"content":_vm.titleContent}})],1),_c('AiTitleImage',{attrs:{"image":_vm.image,"img-class-name":"ai-rate-group__image"}}),_c('div',{staticClass:"ai-rate-group__list"},_vm._l((_vm.realOptions),function(v,i){return _c('ai-rate',{key:i,staticClass:"ai-rate-group__list-item",attrs:{"title-content":v[_vm.props.label],"title-style":_vm.optionStyle,"option-style":_vm.optionStyle,"max":_vm.max,"show-text":_vm.showText,"texts":_vm.texts},on:{"input":_vm.handleInput},model:{value:(_vm.checkedMap[v[_vm.props.value]]),callback:function ($$v) {_vm.$set(_vm.checkedMap, v[_vm.props.value], $$v)},expression:"checkedMap[v[props.value]]"}})}),1),(_vm.collectReason)?_c('AiAnswerReason',{attrs:{"title-content":"Tell us the reason for your score(Optional)","title-style":_vm.reasonStyle},model:{value:(_vm.answerReason),callback:function ($$v) {_vm.answerReason=$$v},expression:"answerReason"}}):_vm._e()],1)}
var rate_groupvue_type_template_id_21436ef9_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.89.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.23.5_webpack@5.89.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-81.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/rate-group/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var rate_groupvue_type_script_lang_js = ({
  name: 'AiRateGroup',
  components: {
    AiAnswerReason: answer_reason,
    AiTitleImage: title_image
  },
  mixins: [props_options],
  props: {
    // 题目索引
    index: {
      type: [Number, String],
      default: ''
    },
    // 绑定值
    value: {
      type: Object,
      default: () => ({})
    },
    // 原因双绑值
    answerReasonValue: {
      type: String,
      default: ''
    },
    // 标题样式
    titleStyle: {
      type: [Object, Array, undefined],
      default: undefined
    },
    // 标题内容
    titleContent: {
      type: String,
      default: ''
    },
    // 选项样式
    optionStyle: {
      type: [Object, Array, undefined],
      default: undefined
    },
    // 作答原因样式
    reasonStyle: {
      type: [Object, Array, undefined],
      default: undefined
    },
    // 评分最大值
    max: {
      type: [Number, String],
      default: 10
    },
    // 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容
    showText: {
      type: Boolean,
      default: false
    },
    // 辅助文字数组
    texts: {
      type: Array,
      default: () => []
    },
    // 图片配置
    image: {
      type: Object,
      default: () => ({})
    },
    // 是否收集作答原因
    collectReason: {
      type: [Boolean, Number],
      default: false
    }
  },
  emits: ['input', 'update:answerReasonValue'],
  data() {
    return {
      checkedMap: {}
    };
  },
  computed: {
    answerReason: {
      get() {
        return this.answerReasonValue;
      },
      set(value) {
        this.$emit('update:answerReasonValue', value);
      }
    }
  },
  watch: {
    value: {
      handler(val) {
        if (!val || JSON.stringify(val) === '{}') {
          this.checkedMap = this.realOptions.reduce((init, v) => {
            init[v[this.props.value]] = '';
            return init;
          }, {});
          return;
        }
        this.checkedMap = {
          ...val
        };
      },
      immediate: true
    }
  },
  methods: {
    handleInput() {
      this.$emit('input', this.checkedMap);
    }
  }
});
;// CONCATENATED MODULE: ./src/lib/components/rate-group/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_rate_groupvue_type_script_lang_js = (rate_groupvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/lib/components/rate-group/index.vue





/* normalize component */
;
var rate_group_component = normalizeComponent(
  components_rate_groupvue_type_script_lang_js,
  rate_groupvue_type_template_id_21436ef9_render,
  rate_groupvue_type_template_id_21436ef9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var rate_group = (rate_group_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.89.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.23.5_webpack@5.89.0/node_modules/babel-loader/lib/index.js??clonedRuleSet-81.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_css-loader@6.8.1_prettier@2.5.1_vue-template-compiler@2.6.14_webpack@5.89.0/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/lib/components/custom-rate/index.vue?vue&type=script&lang=js

/* harmony default export */ var custom_ratevue_type_script_lang_js = ({
  ...rate,
  name: 'AiCustomRate'
});
;// CONCATENATED MODULE: ./src/lib/components/custom-rate/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_custom_ratevue_type_script_lang_js = (custom_ratevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/lib/components/custom-rate/index.vue
var custom_rate_render, custom_rate_staticRenderFns
;



/* normalize component */
;
var custom_rate_component = normalizeComponent(
  components_custom_ratevue_type_script_lang_js,
  custom_rate_render,
  custom_rate_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var custom_rate = (custom_rate_component.exports);
;// CONCATENATED MODULE: ./src/lib/main.js








function install(Vue) {
  [choice, title, short_answer, block_tips, rate, rate_group, custom_rate].forEach(v => {
    Vue.component(v.name, v);
  });
}
/* harmony default export */ var main = ({
  install,
  AiTitle: title,
  AiChoice: choice,
  AiShortAnswer: short_answer,
  AiBlockTips: block_tips,
  AiRate: rate,
  AiRateGroup: rate_group,
  AiCustomRate: custom_rate
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.8_prettier@2.5.1_raw-loader@4.0.2_sass-loader@8.0.2_vue-template-compiler@2.6.14_vue@2.6.14/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (main);


__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});