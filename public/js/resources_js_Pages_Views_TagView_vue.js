"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Views_TagView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["title", "shared", "filter"],
  data: function data() {
    return {
      drawer: false,
      dialog: false,
      search: this.filter,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      socialLinks: [{
        icon: "mdi-facebook",
        link: "https://www.facebook.com/Flojournalism.diaries/"
      }, {
        icon: "mdi-twitter",
        link: "https://twitter.com/FlorentinahHiza?t=5YiEpFJawlc7bPQY5quE6A&s=08"
      }, {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/florentinah-hiza-a45ba8109"
      }, {
        icon: "mdi-youtube",
        link: "https://youtube.com/channel/UCk0IYz5ANiia2xQahL0Dgmg"
      }]
    };
  },
  watch: {
    search: lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (value) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get("/", {
        search: value
      }, {
        replace: true,
        preserveScroll: true
      });
    }, 500)
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/TagView.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/TagView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layouts/Navigation.vue */ "./resources/js/Pages/Layouts/Navigation.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  layout: _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: ["blogs", "tagName"],
  components: {
    Navigation: _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loadedBlogs: this.blogs
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener("scroll", (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(function (e) {
      var pixelsFromBottom = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight;

      if (pixelsFromBottom < 500) {
        axios.get(_this.loadedBlogs.next_page_url).then(function (response) {
          _this.loadedBlogs = _objectSpread(_objectSpread({}, response.data), {}, {
            data: [].concat(_toConsumableArray(_this.loadedBlogs.data), _toConsumableArray(response.data.data))
          });
        });
      }
    }, 100));
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_bg_7_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/images/bg-7.jpg */ "./public/images/bg-7.jpg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_images_bg_7_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.image[data-v-706ae5e3] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/images/bg-7.jpg":
/*!********************************!*\
  !*** ./public/images/bg-7.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/bg-7.jpg?b9b5f30bc68276636761e0785d52c234");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_706ae5e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_706ae5e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_706ae5e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Layouts/Navigation.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=706ae5e3&scoped=true& */ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _Navigation_vue_vue_type_style_index_0_id_706ae5e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& */ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "706ae5e3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layouts/Navigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Views/TagView.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Views/TagView.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TagView_vue_vue_type_template_id_0e60b4c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagView.vue?vue&type=template&id=0e60b4c5& */ "./resources/js/Pages/Views/TagView.vue?vue&type=template&id=0e60b4c5&");
/* harmony import */ var _TagView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagView.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Views/TagView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TagView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TagView_vue_vue_type_template_id_0e60b4c5___WEBPACK_IMPORTED_MODULE_0__.render,
  _TagView_vue_vue_type_template_id_0e60b4c5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Views/TagView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Views/TagView.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Views/TagView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TagView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/TagView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_706ae5e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=style&index=0&id=706ae5e3&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_706ae5e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=706ae5e3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Views/TagView.vue?vue&type=template&id=0e60b4c5&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Views/TagView.vue?vue&type=template&id=0e60b4c5& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagView_vue_vue_type_template_id_0e60b4c5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagView_vue_vue_type_template_id_0e60b4c5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagView_vue_vue_type_template_id_0e60b4c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TagView.vue?vue&type=template&id=0e60b4c5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/TagView.vue?vue&type=template&id=0e60b4c5&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/Navigation.vue?vue&type=template&id=706ae5e3&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: {
            app: "",
            color: "drawer",
            temporary: "",
            hidden: _vm.$vuetify.breakpoint.smAndUp,
          },
          model: {
            value: _vm.drawer,
            callback: function ($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer",
          },
        },
        [
          _c(
            "v-list",
            [
              _c(
                "v-list-item",
                {},
                [
                  _c(
                    "v-list-item-avatar",
                    [
                      _c(
                        "v-avatar",
                        [
                          _c("v-img", {
                            attrs: { src: "/images/NiaLogo.jpeg" },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [
                        _c(
                          "span",
                          { staticClass: "white--text font-semibold text-xl" },
                          [_vm._v(" Nia Media ")]
                        ),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "px-2 pb-4 grid space-y-2" },
                [
                  !_vm.shared.user.auth
                    ? _c(
                        "Link",
                        {
                          staticClass: "no-underline",
                          attrs: { href: "/auth/register" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "no-underlne",
                              attrs: {
                                small: "",
                                elevation: "",
                                outlined: "",
                                rounded: "",
                                color: "white",
                                block: "",
                              },
                            },
                            [
                              _c("span", { staticClass: "no-underline" }, [
                                _vm._v("sign up"),
                              ]),
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.shared.user.auth
                    ? _c(
                        "Link",
                        {
                          staticClass: "no-underline",
                          attrs: { href: "/auth/login" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "no-underlne",
                              attrs: {
                                small: "",
                                elevation: "",
                                outlined: "",
                                rounded: "",
                                color: "white",
                                block: "",
                              },
                            },
                            [
                              _c("span", { staticClass: "no-underline" }, [
                                _vm._v("sign in"),
                              ]),
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.shared.user.auth
                    ? _c(
                        "Link",
                        {
                          staticClass: "no-underline",
                          attrs: { href: "/auth/logout" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "no-underlne",
                              attrs: {
                                small: "",
                                elevation: "",
                                outlined: "",
                                rounded: "",
                                color: "white",
                                block: "",
                              },
                            },
                            [
                              _c("span", { staticClass: "no-underline" }, [
                                _vm._v("logout"),
                              ]),
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.shared.user.auth
                    ? _c(
                        "Link",
                        {
                          staticClass: "no-underline",
                          attrs: { href: "/user/my-profile" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "no-underlne",
                              attrs: {
                                small: "",
                                elevation: "",
                                outlined: "",
                                rounded: "",
                                color: "white",
                                block: "",
                              },
                            },
                            [
                              _c("span", { staticClass: "no-underline" }, [
                                _vm._v("my account"),
                              ]),
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "Link",
                    {
                      staticClass: "no-underline",
                      attrs: { href: "/contact" },
                    },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "no-underlne",
                          attrs: {
                            small: "",
                            elevation: "",
                            outlined: "",
                            rounded: "",
                            color: "white",
                            block: "",
                          },
                        },
                        [
                          _c("span", { staticClass: "no-underline" }, [
                            _vm._v("contact us"),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Link",
                    { staticClass: "no-underline", attrs: { href: "/tv" } },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "no-underlne",
                          attrs: {
                            small: "",
                            elevation: "",
                            outlined: "",
                            rounded: "",
                            color: "white",
                            block: "",
                          },
                        },
                        [
                          _c("span", { staticClass: "no-underline" }, [
                            _vm._v("Podcast"),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "white mb-10" }),
              _vm._v(" "),
              _c("v-subheader", [
                _c(
                  "span",
                  { staticClass: "text-white text-lg font-semibold" },
                  [_vm._v("Tags")]
                ),
              ]),
              _vm._v(" "),
              _vm._l(_vm.shared.tags, function (tag, index) {
                return _c(
                  "div",
                  { key: index },
                  [
                    _c(
                      "v-list-item",
                      [
                        _c(
                          "v-list-item-content",
                          [
                            _c(
                              "Link",
                              {
                                staticClass: "no-underline",
                                attrs: { href: "/tag/" + tag.slug },
                              },
                              [
                                _c("v-list-item-title", {
                                  staticClass: "grey--text text--lighten-4",
                                  domProps: { textContent: _vm._s(tag.name) },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider", {}),
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c(
                "v-list-group",
                {
                  staticClass: "white--text",
                  attrs: { color: "white", "no-action": "", "sub-group": "" },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function () {
                        return [
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", {
                                domProps: { textContent: _vm._s("World") },
                              }),
                            ],
                            1
                          ),
                        ]
                      },
                      proxy: true,
                    },
                  ]),
                },
                [
                  _vm._v(" "),
                  _vm._l(_vm.shared.otherTags, function (tag, index) {
                    return _c(
                      "div",
                      { key: index, attrs: { "active-class": "" } },
                      [
                        _c(
                          "v-list-item",
                          [
                            _c(
                              "v-list-item-content",
                              [
                                _c(
                                  "Link",
                                  {
                                    staticClass: "text-white no-underline",
                                    attrs: { href: "/tag/" + tag.slug },
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _c("span", {
                                        staticClass: "text-white",
                                        domProps: {
                                          textContent: _vm._s(tag.name),
                                        },
                                      }),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  }),
                ],
                2
              ),
            ],
            2
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        {
          attrs: {
            app: "",
            color: "nav",
            flat: "",
            dense: "",
            height: _vm.$vuetify.breakpoint.mdAndUp ? 80 : "",
          },
        },
        [
          _c(
            "v-container",
            { staticClass: "pa-0 fill-height" },
            [
              _c(
                "v-row",
                [
                  _c("v-col", [
                    _vm.$vuetify.breakpoint.smAndDown
                      ? _c(
                          "div",
                          { staticClass: "flex justify-between" },
                          [
                            _c("v-app-bar-nav-icon", {
                              staticClass: "white--text",
                              on: {
                                click: function ($event) {
                                  _vm.drawer = !_vm.drawer
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "v-toolbar-title",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "white--text",
                                    attrs: {
                                      elevation: "",
                                      depressed: "",
                                      color: "transparent",
                                    },
                                  },
                                  [_vm._v("nia media")]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      elevation: "",
                                      icon: "",
                                      color: "",
                                    },
                                    on: {
                                      click: function ($event) {
                                        _vm.dialog = !_vm.dialog
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "white" } },
                                      [_vm._v("mdi-magnify")]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm.$page.url !== "/"
                                  ? _c(
                                      "Link",
                                      { attrs: { href: "/" } },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              icon: "",
                                              elevation: "",
                                              color: "",
                                            },
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "white" } },
                                              [_vm._v("mdi-home")]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.$vuetify.breakpoint.mdAndUp
                      ? _c("div", { staticClass: "flex justify-between" }, [
                          _c(
                            "div",
                            { staticClass: "inline-flex white--text" },
                            [
                              _c("v-avatar", [
                                _c("img", {
                                  attrs: {
                                    src: "/images/NiaLogo.jpeg",
                                    alt: "",
                                  },
                                }),
                              ]),
                              _vm._v(" "),
                              _c("v-divider", {
                                staticClass: "white mx-3",
                                attrs: { vertical: "" },
                              }),
                              _vm._v(" "),
                              _vm.$vuetify.breakpoint.mdAndUp
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "flex space-x-4 justify-end mt-3",
                                    },
                                    [
                                      _vm._l(
                                        _vm.shared.tags,
                                        function (tag, index) {
                                          return _c(
                                            "Link",
                                            {
                                              key: index,
                                              staticClass:
                                                "capitalize grey--text no-underline",
                                              attrs: {
                                                href: "/tag/" + tag.slug,
                                              },
                                            },
                                            [
                                              _c("span", {
                                                staticClass: "text-white",
                                                domProps: {
                                                  textContent: _vm._s(tag.name),
                                                },
                                              }),
                                            ]
                                          )
                                        }
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        [
                                          _c(
                                            "v-menu",
                                            {
                                              staticClass:
                                                "capitalize white--text",
                                              attrs: {
                                                "open-on-hover": "",
                                                top: "",
                                                "offset-y": "",
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "activator",
                                                    fn: function (ref) {
                                                      var on = ref.on
                                                      var attrs = ref.attrs
                                                      return [
                                                        _c(
                                                          "v-btn",
                                                          _vm._g(
                                                            _vm._b(
                                                              {
                                                                staticClass:
                                                                  "capitalize white--text",
                                                                attrs: {
                                                                  depressed: "",
                                                                  color:
                                                                    "transparent",
                                                                },
                                                              },
                                                              "v-btn",
                                                              attrs,
                                                              false
                                                            ),
                                                            on
                                                          ),
                                                          [
                                                            _c("span", [
                                                              _vm._v("World"),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                attrs: {
                                                                  color: "",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "mdi-menu-down"
                                                                ),
                                                              ]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                      ]
                                                    },
                                                  },
                                                ],
                                                null,
                                                false,
                                                3193845518
                                              ),
                                            },
                                            [
                                              _vm._v(" "),
                                              _c(
                                                "v-list",
                                                { attrs: { color: "nav" } },
                                                _vm._l(
                                                  _vm.shared.otherTags,
                                                  function (item, index) {
                                                    return _c(
                                                      "v-list-item",
                                                      { key: index },
                                                      [
                                                        _c(
                                                          "Link",
                                                          {
                                                            staticClass:
                                                              "no-underline text-white",
                                                            attrs: {
                                                              href:
                                                                "/tag/" +
                                                                item.slug,
                                                            },
                                                          },
                                                          [
                                                            _c(
                                                              "v-list-item-title",
                                                              [
                                                                _c("span", {
                                                                  staticClass:
                                                                    "no-underline text-white",
                                                                  domProps: {
                                                                    textContent:
                                                                      _vm._s(
                                                                        item.name
                                                                      ),
                                                                  },
                                                                }),
                                                              ]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  }
                                                ),
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    2
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.$vuetify.breakpoint.mdAndUp
                            ? _c(
                                "div",
                                { staticClass: "inline-flex justify-end" },
                                [
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            elevation: "",
                                            icon: "",
                                            color: "",
                                          },
                                          on: {
                                            click: function ($event) {
                                              _vm.dialog = !_vm.dialog
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "white" } },
                                            [_vm._v("mdi-magnify")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.$page.url !== "/"
                                    ? _c(
                                        "Link",
                                        { attrs: { href: "/" } },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                elevation: "",
                                                icon: "",
                                                color: "",
                                              },
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { color: "white" } },
                                                [_vm._v("mdi-home")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.shared.user.auth
                                    ? _c(
                                        "Link",
                                        { attrs: { href: "/user/my-profile" } },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                elevation: "",
                                                icon: "",
                                                color: "",
                                              },
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { color: "white" } },
                                                [_vm._v("mdi-account")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "Link",
                                    { attrs: { href: "/contact" } },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            elevation: "",
                                            icon: "",
                                            color: "",
                                          },
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "white" } },
                                            [_vm._v("mdi-phone")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  !_vm.shared.user.auth
                                    ? _c(
                                        "Link",
                                        {
                                          staticClass:
                                            "no-underline text-white mr-3 mt-3",
                                          attrs: { href: "/auth/register" },
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "text-white" },
                                            [_vm._v(" Sign Up")]
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  !_vm.shared.user.auth
                                    ? _c(
                                        "Link",
                                        {
                                          staticClass:
                                            "no-underline text-white mt-3",
                                          attrs: { href: "/auth/login" },
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "text-white" },
                                            [_vm._v("Log In")]
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.shared.user.auth
                                    ? _c(
                                        "Link",
                                        { attrs: { href: "/auth/logout" } },
                                        [
                                          _c(
                                            "v-btn",
                                            { attrs: { icon: "" } },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { color: "white" } },
                                                [_vm._v("mdi-logout")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                ],
                                1
                              )
                            : _vm._e(),
                        ])
                      : _vm._e(),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "400" },
          model: {
            value: _vm.dialog,
            callback: function ($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog",
          },
        },
        [
          _c(
            "v-card",
            {},
            [
              _c("v-card-title", [_vm._v(" Search ")]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: {
                      placeholder: "Search...",
                      outlined: "",
                      dense: "",
                    },
                    model: {
                      value: _vm.search,
                      callback: function ($$v) {
                        _vm.search = $$v
                      },
                      expression: "search",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex justify-end" },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            small: "",
                            elevation: "",
                            outlined: "",
                            color: "error",
                          },
                          on: {
                            click: function ($event) {
                              _vm.dialog = false
                            },
                          },
                        },
                        [_vm._v("cancel")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-main",
        { staticClass: "background pb-6" },
        [
          _vm.filter
            ? _c(
                "v-container",
                {},
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", [
                        _c("div", { staticClass: "title" }, [
                          _vm._v("Search results for " + _vm._s(_vm.filter)),
                        ]),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._t("default"),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-footer",
        { attrs: { dark: "", padless: "" } },
        [
          _c(
            "v-card",
            {
              staticClass: "image indigo lighten-1 white--text text-center",
              attrs: { flat: "", tile: "", width: "100%", "max-width": "100%" },
            },
            [
              _c(
                "v-card-text",
                _vm._l(_vm.socialLinks, function (social, index) {
                  return _c(
                    "v-btn",
                    {
                      key: index,
                      staticClass: "mx-4 white--text",
                      attrs: { href: social.link, icon: "" },
                    },
                    [
                      _c("v-icon", { attrs: { size: "24px" } }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(social.icon) +
                            "\n          "
                        ),
                      ]),
                    ],
                    1
                  )
                }),
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "white--text" }, [
                _vm._v("\n        " + _vm._s(new Date().getFullYear()) + " — "),
                _c("strong", [_vm._v("Nia Media")]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/TagView.vue?vue&type=template&id=0e60b4c5&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Views/TagView.vue?vue&type=template&id=0e60b4c5& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Head", [
        _c("title", [_vm._v(_vm._s("Nia Media - trending "))]),
        _vm._v(" "),
        _c("meta", {
          attrs: { "http-equiv": "X-UA-Compatible", content: "ie=edge" },
        }),
        _vm._v(" "),
        _c("link", {
          attrs: { rel: "shortcut icon", href: "/images/NiaLogo.jpeg" },
        }),
        _vm._v(" "),
        _c("link", { attrs: { rel: "stylesheet", href: "" } }),
        _vm._v(" "),
        _c("meta", { attrs: { name: "”robots”", content: "index, follow" } }),
        _vm._v(" "),
        _c("meta", {
          attrs: {
            name: "keywords",
            content:
              "hot, news, money, riches, trending,  tags,  nia media, latest news,news, logs, articles,news kenya, florentinah hijah, sports news",
          },
        }),
        _vm._v(" "),
        _c("meta", {
          attrs: { name: "description", content: " nia media - trending" },
        }),
      ]),
      _vm._v(" "),
      _c("div", {
        staticClass:
          "\n      md:pl-10\n      lg:pl-20\n      capitalize\n      min-w-full\n      text-5xl\n      py-10\n      font-bold\n      grey--text\n      text--lighten-4\n      tag\n    ",
        domProps: { textContent: _vm._s(_vm.tagName) },
      }),
      _vm._v(" "),
      _c(
        "v-container",
        {},
        [
          _vm.loadedBlogs.data.length < 1
            ? _c(
                "v-row",
                [
                  _c("v-col", [
                    _c("div", { staticClass: "title" }, [
                      _vm._v("No Articles Found!"),
                    ]),
                  ]),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-row",
            _vm._l(_vm.loadedBlogs.data, function (blog, index) {
              return _c(
                "v-col",
                {
                  key: index,
                  attrs: { cols: "12", sm: "6", md: "4", lg: "3" },
                },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-img",
                        {
                          attrs: { src: blog.image.path, height: 200 },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "placeholder",
                                fn: function () {
                                  return [
                                    _c(
                                      "v-row",
                                      {
                                        staticClass: "fill-height ma-0",
                                        attrs: {
                                          align: "center",
                                          justify: "center",
                                        },
                                      },
                                      [
                                        _c("v-progress-circular", {
                                          attrs: {
                                            indeterminate: "",
                                            color: "grey lighten-5",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            true
                          ),
                        },
                        [_c("div", { staticClass: "absolute bottom-2 left-2" })]
                      ),
                      _vm._v(" "),
                      _c("v-card-text", {}, [
                        _c(
                          "div",
                          { staticClass: "grid space-y-2" },
                          [
                            blog.tags
                              ? _c(
                                  "div",
                                  { staticClass: "inline-flex gap-x-3" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "inline-flex gap-x-2 flex-wrap",
                                      },
                                      _vm._l(blog.tags, function (tag, index) {
                                        return _c(
                                          "Link",
                                          {
                                            key: index,
                                            attrs: { href: tag.slug },
                                          },
                                          [
                                            _c("v-btn", {
                                              attrs: {
                                                "x-small": "",
                                                rounded: "",
                                                outlined: "",
                                                elevation: "",
                                                color: "orange darken-2",
                                              },
                                              domProps: {
                                                textContent: _vm._s(
                                                  "#" + tag.name
                                                ),
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      }),
                                      1
                                    ),
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "text-sm text-red-300 d-none" },
                              [
                                _c(
                                  "v-avatar",
                                  { attrs: { size: "40", left: "" } },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: "/images/cat4.jpg",
                                        alt: "",
                                      },
                                    }),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "text-sm text-blue-300" },
                                  [_vm._v("Alice jones")]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "Link",
                              {
                                staticClass: "no-underline",
                                attrs: { href: "/blog/" + blog.slug },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "line-clamp-3 no-underline text-gray-900",
                                    domProps: {
                                      textContent: _vm._s(blog.title),
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n                Ullam, praesentium voluptates, alias expedita aliquam sint\n                vitae sapiente officia explicabo soluta nisi id debitis\n                incidunt reiciendis maxime illum blanditiis aliquid\n                aspernatur.\n              "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "text-xs text-gray-500" },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      _vm._f("moment")(
                                        blog.created_at,
                                        "calendar"
                                      )
                                    ) +
                                    "\n              "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              )
            }),
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);