"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_User_EditBlog_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["shared"],
  data: function data() {
    return {
      drawer: false,
      userLinks: [{
        name: "All Articles",
        icon: "mdi-format-align-center",
        link: "/user/blog"
      }, {
        name: "Create Article",
        icon: "mdi-format-annotation-plus",
        link: "/user/blog/create"
      }, {
        name: "My Profile",
        icon: "mdi-account-circle",
        link: "/user/my-profile"
      }, {
        name: "All Users",
        icon: "mdi-account-multiple",
        link: "/admin/users"
      }, {
        name: "All Tags",
        icon: "mdi-brightness-auto",
        link: "/admin/tags"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/EditBlog.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/EditBlog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_AdminNavigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Layouts/AdminNavigation.vue */ "./resources/js/Pages/Layouts/AdminNavigation.vue");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["errors", "blog", "imagePath"],
  layout: _Layouts_AdminNavigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_1__.VueEditor
  },
  data: function data() {
    return {
      valid: false,
      required: [function (v) {
        return !!v || "This field is required";
      }],
      file: [function (files) {
        return !files || !files.some(function (file) {
          return file.size > 2e6;
        }) || "Avatar size should be less than 2 MB!";
      }],
      form: {
        _method: "put",
        content: "fjjjjf",
        image: null,
        title: this.blog.title,
        status: this.blog.published ? 1 : 0
      },
      color: null,
      text: null,
      published: [{
        status: "Published",
        value: true
      }, {
        status: "Not Published",
        value: false
      }],
      processing: false,
      timeout: null,
      loading: false,
      redirect: false
    };
  },
  watch: {
    redirect: function redirect() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.get("/user/blog");
    }
  },
  methods: {
    update: function update() {
      var _this = this;

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.post("/user/blog/".concat(this.blog.id), this.form, {
        forceFormData: true,
        preserveScroll: true,
        preserveState: true,
        onStart: function onStart() {
          _this.loading = true;
          _this.processing = true;
          _this.color = "yellow darken-1";
          _this.timeout = 100003663;
          _this.text = "Update in progress, please wait..";
        },
        onSuccess: function onSuccess() {
          _this.loading = false;
          _this.text = "Update Success";
          _this.processing = false;
          _this.color = "green darken-1";
          _this.timeout = 4000;
          _this.redirect = true;
        },
        onError: function onError() {
          _this.loading = false;
          _this.timeout = 3000;
          _this.color = "error";
          _this.text = "Failed, please check for any errors";
          _this.processing = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Layouts/AdminNavigation.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Layouts/AdminNavigation.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminNavigation.vue?vue&type=template&id=1dd00304& */ "./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304&");
/* harmony import */ var _AdminNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminNavigation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layouts/AdminNavigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/User/EditBlog.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/User/EditBlog.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditBlog_vue_vue_type_template_id_7be593d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditBlog.vue?vue&type=template&id=7be593d7& */ "./resources/js/Pages/User/EditBlog.vue?vue&type=template&id=7be593d7&");
/* harmony import */ var _EditBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditBlog.vue?vue&type=script&lang=js& */ "./resources/js/Pages/User/EditBlog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditBlog_vue_vue_type_template_id_7be593d7___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditBlog_vue_vue_type_template_id_7be593d7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/User/EditBlog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminNavigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/User/EditBlog.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/User/EditBlog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditBlog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/EditBlog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminNavigation.vue?vue&type=template&id=1dd00304& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304&");


/***/ }),

/***/ "./resources/js/Pages/User/EditBlog.vue?vue&type=template&id=7be593d7&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/User/EditBlog.vue?vue&type=template&id=7be593d7& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBlog_vue_vue_type_template_id_7be593d7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBlog_vue_vue_type_template_id_7be593d7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBlog_vue_vue_type_template_id_7be593d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditBlog.vue?vue&type=template&id=7be593d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/EditBlog.vue?vue&type=template&id=7be593d7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
          attrs: { color: "drawer", app: "" },
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
              _c("v-divider", {}),
              _vm._v(" "),
              _vm._l(_vm.userLinks, function (page, index) {
                return _c(
                  "v-list-item",
                  { key: index },
                  [
                    _c(
                      "Link",
                      {
                        staticClass: "white--text",
                        attrs: { href: page.link },
                      },
                      [
                        _c(
                          "v-list-item-icon",
                          [
                            _c("v-icon", {
                              attrs: { color: "white" },
                              domProps: { textContent: _vm._s(page.icon) },
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
                        _c(
                          "Link",
                          {
                            staticClass: "white--text no-underline",
                            attrs: { href: page.link },
                          },
                          [
                            _c("v-list-item-title", {
                              staticClass: "white--text",
                              domProps: { textContent: _vm._s(page.name) },
                            }),
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
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        { attrs: { app: "", "hide-on-scroll": "", color: "nav" } },
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
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "Link",
            { attrs: { href: "/auth/logout" } },
            [
              _c(
                "v-btn",
                { attrs: { elevation: "", icon: "", color: "" } },
                [
                  _c("v-icon", { attrs: { color: "white" } }, [
                    _vm._v("mdi-logout"),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-avatar", [
            _c("img", {
              attrs: { src: _vm.shared.user.auth.avatarPath, alt: "" },
            }),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-main", [_vm._t("default")], 2),
      _vm._v(" "),
      _c("v-footer", { attrs: { app: "" } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/EditBlog.vue?vue&type=template&id=7be593d7&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/EditBlog.vue?vue&type=template&id=7be593d7& ***!
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
    "v-container",
    {},
    [
      _c(
        "v-row",
        [
          _c("v-col", [
            _c("div", { staticClass: "display-1" }, [_vm._v("Edit Blog")]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-form",
                {
                  model: {
                    value: _vm.valid,
                    callback: function ($$v) {
                      _vm.valid = $$v
                    },
                    expression: "valid",
                  },
                },
                [
                  _c(
                    "v-container",
                    { staticClass: "pa-0" },
                    [
                      _c(
                        "v-row",
                        { attrs: { dense: "" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Title"),
                              ]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  placeholder: "Enter Title",
                                  outlined: "",
                                  rules: _vm.required,
                                  dense: "",
                                  "error-messages": _vm.errors.title,
                                  disabled: _vm.processing,
                                  loading: _vm.processing,
                                },
                                model: {
                                  value: _vm.form.title,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "title", $$v)
                                  },
                                  expression: "form.title",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Cover Image"),
                              ]),
                              _vm._v(" "),
                              _c("v-img", {
                                staticClass: "rounded-sm mb-3",
                                attrs: { height: "350", src: _vm.imagePath },
                              }),
                              _vm._v(" "),
                              _c("v-file-input", {
                                attrs: {
                                  placeholder: "Edit Cover Image",
                                  "show-size": true,
                                  "counter-size-string": "2042",
                                  rules: _vm.required,
                                  outlined: "",
                                  "small-chips": "",
                                  disabled: _vm.processing,
                                  loading: _vm.processing,
                                  "error-messages": _vm.errors.image,
                                  dense: "",
                                },
                                model: {
                                  value: _vm.form.image,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "image", $$v)
                                  },
                                  expression: "form.image",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Status"),
                              ]),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  items: _vm.published,
                                  "item-text": "status",
                                  outlined: "",
                                  dense: "",
                                  "deletable-chips": "",
                                  "item-value": "value",
                                  "error-messages": _vm.errors.status,
                                  placeholder: "Select",
                                  disabled: _vm.processing,
                                  loading: _vm.processing,
                                  rules: _vm.required,
                                },
                                model: {
                                  value: _vm.form.status,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "status", $$v)
                                  },
                                  expression: "form.status",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Blog Content"),
                              ]),
                              _vm._v(" "),
                              _c("VueEditor", {
                                attrs: {
                                  placeholder: "Type here..",
                                  "error-messages": _vm.errors.content,
                                  disabled: _vm.processing,
                                },
                                model: {
                                  value: _vm.form.content,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "content", $$v)
                                  },
                                  expression: "form.content",
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.content
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "error--text text-xs pt-2",
                                      domProps: {
                                        textContent: _vm._s(_vm.errors.content),
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                hhfhfhf\n              "
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c(
                              "div",
                              { staticClass: "grid justify-end" },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "white--text",
                                    attrs: {
                                      elevation: "",
                                      left: "",
                                      color: " blue",
                                    },
                                    on: { click: _vm.update },
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "white" } },
                                      [_vm._v("mdi-upload")]
                                    ),
                                    _vm._v(
                                      "\n                  Update Blog\n                "
                                    ),
                                  ],
                                  1
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
        "v-row",
        [
          _c(
            "v-snackbar",
            {
              staticClass: "white--text",
              attrs: {
                timeout: _vm.timeout,
                color: _vm.color,
                tile: "",
                absolute: "",
                right: "",
                transition: "slide-x-reverse-transition",
              },
              model: {
                value: _vm.processing,
                callback: function ($$v) {
                  _vm.processing = $$v
                },
                expression: "processing",
              },
            },
            [
              _c("div", {
                staticClass: "font-sembold text-lg",
                domProps: { textContent: _vm._s(_vm.text) },
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
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);