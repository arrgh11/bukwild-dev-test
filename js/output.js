/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_PageUI_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/PageUI.vue */ "./js/components/PageUI.vue");
Vue.component('layout-ui', __webpack_require__(/*! ./components/LayoutUI.vue */ "./js/components/LayoutUI.vue")["default"]);


var data = __webpack_require__(/*! ./content.json */ "./js/content.json");

var routes = [];

for (var page in data.pages) {
  var obj = {
    path: '/' + data.pages[page]['slug'],
    component: _components_PageUI_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    props: {
      headline: data.pages[page]['blocks'][0]['headline'],
      subhead: data.pages[page]['blocks'][0]['subhead'],
      cta: data.pages[page]['blocks'][0]['cta'],
      background: data.pages[page]['blocks'][0]['background']
    }
  };
  routes.push(obj);
} // routes.push({
//     path :'*',
//     component: PageUI,
// });


var router = new VueRouter({
  // mode: 'history',
  routes: routes
});
var app = new Vue({
  router: router
}).$mount('#app');
var event = new CustomEvent("fade", {
  detail: {}
});

function initE() {
  window.dispatchEvent(event);
}

router.beforeEach(function (to, from, next) {
  /* must call `next` */
  window.dispatchEvent(event);
  setTimeout(function () {
    next();
  }, 600);
});
router.afterEach(function (to, from) {
  setTimeout(function () {
    window.dispatchEvent(event);
  }, 600);
});
router.onReady(initE);
router.push('/' + data.pages[0]['slug'], function () {});

/***/ }),

/***/ "./js/components/LayoutUI.vue":
/*!************************************!*\
  !*** ./js/components/LayoutUI.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutUI_vue_vue_type_template_id_2c83c202___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutUI.vue?vue&type=template&id=2c83c202& */ "./js/components/LayoutUI.vue?vue&type=template&id=2c83c202&");
/* harmony import */ var _LayoutUI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutUI.vue?vue&type=script&lang=js& */ "./js/components/LayoutUI.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutUI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutUI_vue_vue_type_template_id_2c83c202___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutUI_vue_vue_type_template_id_2c83c202___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/LayoutUI.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/LayoutUI.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./js/components/LayoutUI.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutUI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./LayoutUI.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/LayoutUI.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutUI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/LayoutUI.vue?vue&type=template&id=2c83c202&":
/*!*******************************************************************!*\
  !*** ./js/components/LayoutUI.vue?vue&type=template&id=2c83c202& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutUI_vue_vue_type_template_id_2c83c202___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./LayoutUI.vue?vue&type=template&id=2c83c202& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/LayoutUI.vue?vue&type=template&id=2c83c202&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutUI_vue_vue_type_template_id_2c83c202___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutUI_vue_vue_type_template_id_2c83c202___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/components/PageUI.vue":
/*!**********************************!*\
  !*** ./js/components/PageUI.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageUI_vue_vue_type_template_id_32dd9ce4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageUI.vue?vue&type=template&id=32dd9ce4& */ "./js/components/PageUI.vue?vue&type=template&id=32dd9ce4&");
/* harmony import */ var _PageUI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageUI.vue?vue&type=script&lang=js& */ "./js/components/PageUI.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageUI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageUI_vue_vue_type_template_id_32dd9ce4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageUI_vue_vue_type_template_id_32dd9ce4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "js/components/PageUI.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/components/PageUI.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./js/components/PageUI.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageUI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./PageUI.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/PageUI.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageUI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./js/components/PageUI.vue?vue&type=template&id=32dd9ce4&":
/*!*****************************************************************!*\
  !*** ./js/components/PageUI.vue?vue&type=template&id=32dd9ce4& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageUI_vue_vue_type_template_id_32dd9ce4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./PageUI.vue?vue&type=template&id=32dd9ce4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/PageUI.vue?vue&type=template&id=32dd9ce4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageUI_vue_vue_type_template_id_32dd9ce4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageUI_vue_vue_type_template_id_32dd9ce4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./js/content.json":
/*!*************************!*\
  !*** ./js/content.json ***!
  \*************************/
/*! exports provided: pages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"pages\":[{\"title\":\"Industries\",\"slug\":\"industries\",\"blocks\":[{\"type\":\"marquee\",\"headline\":\"Industries\",\"subhead\":\"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\",\"cta\":\"Vestibulum id ligula porta felis euismod semper.\",\"background\":\"slide_one.jpg\"}]},{\"title\":\"Services\",\"slug\":\"services\",\"blocks\":[{\"type\":\"marquee\",\"headline\":\"Services\",\"subhead\":\"Cras mattis consectetur purus sit amet fermentum.\",\"cta\":\"Donec id elit non mi porta gravida at eget metus.\",\"background\":\"slide_two.jpg\"}]},{\"title\":\"About Us\",\"slug\":\"about-us\",\"blocks\":[{\"type\":\"marquee\",\"headline\":\"Maecenas sed diam eget risus varius blandit sit amet non magna\",\"subhead\":\"Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.\",\"cta\":\"Nullam quis risus eget urna mollis ornare vel eu leo.\",\"background\":\"slide_three.jpg\"}]}]}");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/LayoutUI.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/LayoutUI.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./js/components/PageUI.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./js/components/PageUI.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['headline', 'subhead', 'cta', 'background']
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/LayoutUI.vue?vue&type=template&id=2c83c202&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/LayoutUI.vue?vue&type=template&id=2c83c202& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "flex justify-between items-center pt-6 relative z-10" },
    [
      _c(
        "div",
        {
          staticClass: "relative",
          attrs: { "x-data": "{menu:false}", "x-on:click": "menu = !menu" }
        },
        [
          _c("img", {
            staticClass: "w-20 cursor-pointer",
            attrs: { src: "assets/abc_logo.svg" }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "absolute transform transition-all mt-4 text-white font-bold text-sm flex flex-col space-y-2",
              attrs: {
                "x-show": "menu",
                "x-transition:enter": "ease-in duration-200",
                "x-transition:enter-start": "opacity-0 translate-y-2",
                "x-transition:enter-end": "opacity-100 translate-y-0",
                "x-transition:leave": "ease-out duration-300",
                "x-transition:leave-start": "opacity-100 translate-y-0",
                "x-transition:leave-end": "opacity-0 translate-y-2",
                "x-on:click.away": "menu = false"
              }
            },
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "hover:text-bukwild-yellow-hover leading-relaxed",
                  attrs: { to: "/industries" }
                },
                [_vm._v("Industries")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass:
                    "hover:text-bukwild-yellow-hover leading-relaxed",
                  attrs: { to: "/services" }
                },
                [_vm._v("Services")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass:
                    "hover:text-bukwild-yellow-hover leading-relaxed",
                  attrs: { to: "/about-us" }
                },
                [_vm._v("About Us")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm._m(0)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "a",
        {
          staticClass:
            "border border-white rounded-none text-white bg-transparent hover:bg-white hover:text-gray-900 transition-colors duration-150 ease-out px-6 py-3 text-bukwild",
          attrs: { href: "#" }
        },
        [_vm._v("\n\t\t\tContact Us\n\t\t")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./js/components/PageUI.vue?vue&type=template&id=32dd9ce4&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./js/components/PageUI.vue?vue&type=template&id=32dd9ce4& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "flex-grow flex h-full flex-col space-y-32 justify-end",
      attrs: { "x-data": "{show:false}", "x-on:fade.window": "show = !show" }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 text-white items-center my-auto relative z-10"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "font-bold text-5xl lg:text-7xl leading-none tracking-tight transition-all duration-300 ease-in-out transform",
              attrs: {
                "x-bind:class":
                  "show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
              }
            },
            [_vm._v("\n\t\t\t" + _vm._s(_vm.headline) + "\n\t\t")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "lg:ml-auto lg:px-10 text-sm font-light leading-loose transition-all duration-300 delay-150 ease-in-out transform",
              staticStyle: { "max-width": "440px" },
              attrs: {
                "x-bind:class":
                  "show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
              }
            },
            [_vm._v("\n\t\t\t" + _vm._s(_vm.subhead) + "\n\t\t")]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "bg-white h-48 px-20 flex flex-col justify-center relative z-10"
        },
        [
          _c(
            "div",
            {
              staticClass: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "font-bold text-2xl leading-snug tracking-tight transform transition-all ease-in-out duration-150 delay-100",
                  attrs: {
                    "x-bind:class":
                      "show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
                  }
                },
                [_vm._v("\n\t\t\t\t" + _vm._s(_vm.cta) + "\n\t\t\t")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "text-center text-xs font-medium uppercase leading-relaxed tracking-widest "
                },
                [
                  _c("div", { staticClass: "inline-flex items-center" }, [
                    _vm._v("\n\t\t\t\t\tlet's talk.\n\t\t\t\t\t"),
                    _c("div", { staticClass: "text-bukwild-yellow" }, [
                      _c(
                        "svg",
                        {
                          staticClass: "w-5",
                          attrs: {
                            fill: "none",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }
                        },
                        [
                          _c("path", {
                            attrs: { d: "M17 8l4 4m0 0l-4 4m4-4H3" }
                          })
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", {
        staticClass:
          "absolute inset-0 z-0 bg-cover bg-center transition-all ease-in-out duration-300 delay-300",
        staticStyle: { "margin-top": "-8rem" },
        style: "background-image:url(assets/" + _vm.background + ")",
        attrs: { "x-bind:class": "show ? 'opacity-100' : 'opacity-0 '" }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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
  if (moduleIdentifier) { // server build
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
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sammiller/Code/bukwild/js/app.js */"./js/app.js");


/***/ })

/******/ });