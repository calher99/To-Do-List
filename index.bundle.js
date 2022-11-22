/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --superLight:#f8fafc;\n    --light: #e2e8f0;\n    --medium: #94a3b8;\n    --dark: #475569;\n    --superDark: #0f172a;\n    font-family: sans-serif;\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 20% 80%;\n    margin: 0;\n    min-height: 100vh;\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n    background-color: var(--light);\n    \n    \n}\n\n.sidebarField{\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    margin-bottom: 30px;\n    gap: 10px;\n}\n\n.sidebar{\n    color: black;\n    padding: 10px;\n}\n\n.icon{\n    background-color: #0f172a;\n    border-radius: 100%;\n    height: 30px;\n    width: 30px;\n}\n\nnav{\n    display: flex;\n    flex-direction: column;\n    /* gap: 10px; */\n    align-items: center;\n}\n\n.project{\n    cursor: pointer;\n    width: 100%;\n    text-align: center;\n    \n    padding: 15px;\n}\n\n.project.active{\n    background-color: var(--light);\n    font-weight: bold;\n}\n\nhr{\n    margin: 2px;\n    width: 60%;\n}\n\n\n.add{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--superDark);\n    color: var(--superLight);\n    font-weight: bold;\n    border-radius: 100%;\n    width: 30px;\n    height: 30px;\n    font-size: 1.3rem;\n    cursor: pointer;\n    margin-top: 15px;\n}\n\n.todo{\n    display: grid;\n    grid-template-columns: auto 1fr auto auto;\n    align-items: center;\n    gap: 15px;\n    height: 50px;\n    width: 95%;\n    background-color: white;\n    border-radius: 4px;\n    padding: 5px;\n    cursor: pointer;\n}\n\n.todo.crossed{\n    color: var(--medium);\n}\n\n.checkBox{\n    width: 10px;\n    height: 10px;\n    border: 1px solid black;\n}\n\n.checkBox:hover{\n    background-color: var(--superDark);\n}\n\n.priority{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n    width: 100px;\n    height: 23px;\n}\n\ninput[type=\"radio\"]{\n    width: 1.2rem;\n}\n\n.overlay{\n    /* Transparent */\n    opacity: 0;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transition: 200ms ease-in-out;\n    background-color: rgba(0,0,0,0.7);\n    pointer-events: none;\n    /* What happens is that overlay now is covering\n    all the page. Everything is under overay, so that it\n    is now blocking buttons. To eliminate that we say\n    it does not have any pointer events*/\n}\n\n.overlay.active{\n    opacity: 1;\n    pointer-events: all;\n}\n\n.modal{\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%)scale(0);\n    transition: 200ms ease-in-out;\n    z-index: 10;\n    width: 40%;\n    height: 50%;\n    background-color: var(--light);\n    border-radius: 5px;\n    padding: 30px;\n\n}\n\n.modal.active{\n    transform: translate(-50%, -50%)scale(1);\n}\n\n\n/* Form styles */\n\nform{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\ninput:focus{\n    outline: none; /*Remove default blue outline from Safari*/\n    border: 2px solid var(--dark);\n  }\n\nbutton,\nlabel,\ninput,\nselect\n   {\n    width: 85%;\n    font-family: inherit;\n    font-size: 100%;\n    margin: 0;\n    box-sizing: border-box;\n    padding: 5px;\n    height: 30px;\n    border-radius: 6px;\n  }\ninput, textarea, button{\n    border: 1px solid black;\n   \n  }\n button {\n    width: 50%;\n    background-color: var(--superDark);\n    color: var(--superLight);\n    cursor: pointer;\n }\n button:hover{\n    background-color: var(--superLight);\n    color: var(--superDark);\n}\n\ntextarea{\n    font-family: inherit;\n    width: 85%;\n}\n\n  .field{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,aAAa;IACb,8BAA8B;;;AAGlC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;;IAElB,aAAa;AACjB;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,UAAU;AACd;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kCAAkC;IAClC,wBAAwB;IACxB,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,yCAAyC;IACzC,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,UAAU;IACV,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,iCAAiC;IACjC,oBAAoB;IACpB;;;wCAGoC;AACxC;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,wCAAwC;IACxC,6BAA6B;IAC7B,WAAW;IACX,UAAU;IACV,WAAW;IACX,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;;AAEjB;;AAEA;IACI,wCAAwC;AAC5C;;;AAGA,gBAAgB;;AAEhB;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,aAAa,EAAE,0CAA0C;IACzD,6BAA6B;EAC/B;;AAEF;;;;;IAKI,UAAU;IACV,oBAAoB;IACpB,eAAe;IACf,SAAS;IACT,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,kBAAkB;EACpB;AACF;IACI,uBAAuB;;EAEzB;CACD;IACG,UAAU;IACV,kCAAkC;IAClC,wBAAwB;IACxB,eAAe;CAClB;CACA;IACG,mCAAmC;IACnC,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,UAAU;AACd;;EAEE;IACE,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB","sourcesContent":[":root{\n    --superLight:#f8fafc;\n    --light: #e2e8f0;\n    --medium: #94a3b8;\n    --dark: #475569;\n    --superDark: #0f172a;\n    font-family: sans-serif;\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 20% 80%;\n    margin: 0;\n    min-height: 100vh;\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n    background-color: var(--light);\n    \n    \n}\n\n.sidebarField{\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    margin-bottom: 30px;\n    gap: 10px;\n}\n\n.sidebar{\n    color: black;\n    padding: 10px;\n}\n\n.icon{\n    background-color: #0f172a;\n    border-radius: 100%;\n    height: 30px;\n    width: 30px;\n}\n\nnav{\n    display: flex;\n    flex-direction: column;\n    /* gap: 10px; */\n    align-items: center;\n}\n\n.project{\n    cursor: pointer;\n    width: 100%;\n    text-align: center;\n    \n    padding: 15px;\n}\n\n.project.active{\n    background-color: var(--light);\n    font-weight: bold;\n}\n\nhr{\n    margin: 2px;\n    width: 60%;\n}\n\n\n.add{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--superDark);\n    color: var(--superLight);\n    font-weight: bold;\n    border-radius: 100%;\n    width: 30px;\n    height: 30px;\n    font-size: 1.3rem;\n    cursor: pointer;\n    margin-top: 15px;\n}\n\n.todo{\n    display: grid;\n    grid-template-columns: auto 1fr auto auto;\n    align-items: center;\n    gap: 15px;\n    height: 50px;\n    width: 95%;\n    background-color: white;\n    border-radius: 4px;\n    padding: 5px;\n    cursor: pointer;\n}\n\n.todo.crossed{\n    color: var(--medium);\n}\n\n.checkBox{\n    width: 10px;\n    height: 10px;\n    border: 1px solid black;\n}\n\n.checkBox:hover{\n    background-color: var(--superDark);\n}\n\n.priority{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n    width: 100px;\n    height: 23px;\n}\n\ninput[type=\"radio\"]{\n    width: 1.2rem;\n}\n\n.overlay{\n    /* Transparent */\n    opacity: 0;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transition: 200ms ease-in-out;\n    background-color: rgba(0,0,0,0.7);\n    pointer-events: none;\n    /* What happens is that overlay now is covering\n    all the page. Everything is under overay, so that it\n    is now blocking buttons. To eliminate that we say\n    it does not have any pointer events*/\n}\n\n.overlay.active{\n    opacity: 1;\n    pointer-events: all;\n}\n\n.modal{\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%)scale(0);\n    transition: 200ms ease-in-out;\n    z-index: 10;\n    width: 40%;\n    height: 50%;\n    background-color: var(--light);\n    border-radius: 5px;\n    padding: 30px;\n\n}\n\n.modal.active{\n    transform: translate(-50%, -50%)scale(1);\n}\n\n\n/* Form styles */\n\nform{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\ninput:focus{\n    outline: none; /*Remove default blue outline from Safari*/\n    border: 2px solid var(--dark);\n  }\n\nbutton,\nlabel,\ninput,\nselect\n   {\n    width: 85%;\n    font-family: inherit;\n    font-size: 100%;\n    margin: 0;\n    box-sizing: border-box;\n    padding: 5px;\n    height: 30px;\n    border-radius: 6px;\n  }\ninput, textarea, button{\n    border: 1px solid black;\n   \n  }\n button {\n    width: 50%;\n    background-color: var(--superDark);\n    color: var(--superLight);\n    cursor: pointer;\n }\n button:hover{\n    background-color: var(--superLight);\n    color: var(--superDark);\n}\n\ntextarea{\n    font-family: inherit;\n    width: 85%;\n}\n\n  .field{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domRender.js":
/*!**************************!*\
  !*** ./src/domRender.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeDom": () => (/* binding */ initializeDom),
/* harmony export */   "initializeModals": () => (/* binding */ initializeModals),
/* harmony export */   "printProjectList": () => (/* binding */ printProjectList),
/* harmony export */   "printToDoList": () => (/* binding */ printToDoList)
/* harmony export */ });
/* harmony import */ var _svgs_flag_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgs/flag.svg */ "./src/svgs/flag.svg");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



//functions to append

const createDivClass = (className) =>{
    const div = document.createElement('div')
    div.classList.add(className);
    return div;
}
const createDivText = (text) =>{
    const div = document.createElement('div')
    div.textContent=text
    return div;
}

const appendElements = (parent, ...children) =>{
    children.forEach(child => {
        parent.appendChild(child);
    })
}

//Print structure of page

const initializeDom = () => {

    const sideBar = createDivClass("sidebar");
    document.body.appendChild(sideBar);
        const sideBarField = createDivClass("sidebarField");
            const sidebarIcon = createDivClass("icon");
            const usernameDiv = createDivText("Username");
        appendElements(sideBarField,sidebarIcon,usernameDiv);
    sideBar.appendChild(sideBarField);
        const nav = document.createElement('nav');
        nav.setAttribute('id','projectList')
    sideBar.appendChild(nav)
    const divAddProject = document.createElement('div');
        const divAdd2 = createDivClass("add");
                divAdd2.dataset.openModal = "#addProject"
                divAdd2.textContent = "+"
        divAddProject.appendChild(divAdd2);
    nav.appendChild(divAddProject);
    // <div><div class="add">+</div></div>
    const content = createDivClass("content");
    content.setAttribute('id', 'content');
        const divAddContainer = document.createElement('div');
            const divAdd = createDivClass("add");
            // divAdd.setAttribute('id' , 'addToDo');
            divAdd.dataset.openModal = "#addToDo"
            divAdd.textContent = "+"
            divAddContainer.appendChild(divAdd);
        content.appendChild(divAddContainer);
    document.body.appendChild(content);
    const overlay = createDivClass("overlay");
    overlay.setAttribute('id' , "overlay");
    document.body.appendChild(overlay);
    const modal = createDivClass("modal");
    modal.setAttribute('id' , "addToDo");
        const form = document.createElement('form');
        form.setAttribute('id' , 'newToDo');
            const field1 = createDivClass("field");
                const labelTitle = document.createElement('label');
                labelTitle.setAttribute('for','title');
                labelTitle.textContent = "Title: *";
                const inputTitle = document.createElement("input");
                inputTitle.setAttribute('type' , 'text');
                inputTitle.setAttribute('id' , 'title');
                inputTitle.setAttribute('name' , 'title');
            appendElements(field1,labelTitle,inputTitle);
            const field2 = createDivClass("field");
                const labelNotes = document.createElement('label');
                labelNotes.textContent = "Notes:"
                labelNotes.setAttribute('for','notes');
                const inputNotes = document.createElement("textarea");
                inputNotes.setAttribute('id' , 'notes');
                inputNotes.setAttribute('name' , 'notes');
                inputNotes.setAttribute('rows' , '4');
                inputNotes.setAttribute('cols' , '50');
            appendElements(field2,labelNotes,inputNotes);
            const field3 = createDivClass("field");
                const labelDate = document.createElement('label');
                labelDate.setAttribute('for','date');
                labelDate.textContent = "Date:";
                const inputDate = document.createElement("input");
                inputDate.setAttribute('type' , 'date');
                inputDate.setAttribute('id' , 'date');
                inputDate.setAttribute('name' , 'date');
            appendElements(field3,labelDate,inputDate);
            const field4= createDivClass("field");
                const labelPriority = document.createElement('label');
                labelPriority.setAttribute('for','priority');
                labelPriority.textContent = "Select a priority level:";
                const selectPriority = document.createElement("select");
                selectPriority.setAttribute('name' , 'priority');
                selectPriority.setAttribute('id' , 'priority');
                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '');
                    option1.textContent = "none";
                    const option2 = document.createElement('option');
                    option2.setAttribute('value', 'High');
                    option2.textContent = "High";
                    const option3 = document.createElement('option');
                    option3.setAttribute('value', 'Medium');
                    option3.textContent = "Medium";
                    const option4 = document.createElement('option');
                    option4.setAttribute('value', 'Low');
                    option4.textContent = "Low";
                appendElements(selectPriority,option1,option2,option3,option4);
            appendElements(field4,labelPriority,selectPriority);
            
            const button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.classList.add('addToDo');
            button.dataset.closeModal="addToDo";
            button.textContent = "Add Note";
        appendElements(form,field1,field2,field3,field4,button);

        modal.appendChild(form);
    document.body.appendChild(modal);
///////////////////////////////MODAL 2
        const modalProject = createDivClass("modal");
        modalProject.setAttribute('id' , "addProject");
        const form2 = document.createElement('form');
        form2.setAttribute('id' , 'newProject');
            const field5 = createDivClass("field");
                const labelName = document.createElement('label');
                labelName.setAttribute('for','name');
                labelName.textContent = "Name: *";
                const inputName = document.createElement("input");
                inputName.setAttribute('type' , 'name');
                inputName.setAttribute('id' , 'name');
                inputName.setAttribute('name' , 'name');
            appendElements(field5,labelName,inputName);
            const field6 = createDivClass("field");
                const labelDescription = document.createElement('label');
                labelDescription.textContent = "Description:"
                labelDescription.setAttribute('for','description');
                const inputDescription = document.createElement("textarea");
                inputDescription.setAttribute('id' , 'description');
                inputDescription.setAttribute('name' , 'description');
                inputDescription.setAttribute('rows' , '4');
                inputDescription.setAttribute('cols' , '50');
            appendElements(field6,labelDescription,inputDescription);
            
            const buttonProject = document.createElement('button');
            buttonProject.setAttribute('type', 'button');
            buttonProject.classList.add('addProject');
            buttonProject.dataset.closeModal="addProject";
            buttonProject.textContent = "Add Project";
        appendElements(form2,field5,field6,buttonProject);

        modalProject.appendChild(form2);
    document.body.appendChild(modalProject);

// CALL LOCAL STORAGE

    //  const projectListStored = retrieveStoredProject()
    //  console.log(projectListStored)
    //  printProjectList(projectListStored)
// if (storageAvailable('localStorage')) {
//     let StoredProjects = JSON.parse(localStorage.getItem('ProjectsStored'));
//     console.log(StoredProjects);
//   }
//   else {
//     console.log("NO LOCAL STORAGEEEEE")
//   }
    

}

const initializeModals = () => {

    const openModalButtons = document.querySelectorAll("[data-open-modal]");
    const closeModalButtons = document.querySelectorAll("[data-close-modal]")
    const overlay = document.querySelector('#overlay');

    openModalButtons.forEach( button =>{
        button.addEventListener('click' , (e) => {
            const idOpen = e.target.dataset.openModal;
            const modalToOpen = document.querySelector(idOpen);
            openModal(modalToOpen);
        })
    })

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () =>{
            const modalToClose= button.closest('.modal');
            closeModal(modalToClose);
        });

    });

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
        closeModal(modal)
        })
    })
    

    function openModal (modal) {
        modal.classList.add('active');
        overlay.classList.add('active');
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

}


const printToDoList = (list) =>{

    const content = document.querySelector('#content');
    while (content.firstChild) {
            content.removeChild(content.lastChild);
    }
    list.forEach( (toDo) =>{
        printToDo(toDo)
    })

    const divAddContainer = document.createElement('div');
            const divAdd = createDivClass("add");
            // divAdd.setAttribute('id' , 'addToDo');
            divAdd.dataset.openModal = "#addToDo"
            divAdd.textContent = "+"
            divAddContainer.appendChild(divAdd);
    content.appendChild(divAddContainer);

    initializeModals();


}
const printToDo = (toDo) =>{
    const content = document.querySelector('#content');
    const toDoContainer = createDivClass("todo");
        const divCheck = document.createElement('div');
            const check = createDivClass("checkBox");
            check.addEventListener('click', ()=>{
                toDo.clickCheck();

                while (toDoContainer.firstChild) {
                    toDoContainer.removeChild(toDoContainer.lastChild); 
                }
                setCheck();
                (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.updateToDoStorage)(_index_js__WEBPACK_IMPORTED_MODULE_1__.toDoList);

            });
        divCheck.appendChild(check);

        const title = document.createElement('div');
        title.textContent = toDo.title;

        const date = document.createElement('div');
        date.textContent = toDo.dueDate;
           
        const svgContainer = createDivClass("priority");
        svgContainer.textContent = toDo.priority;
        setColorPriority(svgContainer,toDo);
        // const svgImage = document.createElement('img');
        // svgImage.src = flag;
        // svgContainer.appendChild(svgImage);
        setCheck();
        
    
    
    content.appendChild(toDoContainer);

    function setCheck() {
        
        if(toDo.checklist===1){
            toDoContainer.classList.add("crossed")
            const crossOut1 = document.createElement('s');
            crossOut1.appendChild(title);
    
            const crossOut2 = document.createElement('s');
            crossOut2.appendChild(date);
    
            const crossOut3 = document.createElement('s');
            crossOut3.appendChild(svgContainer);

            appendElements(toDoContainer,divCheck,crossOut1,crossOut2,crossOut3);

        }else{
            toDoContainer.classList.remove("crossed")
            appendElements(toDoContainer,divCheck,title,date,svgContainer);
        }
    }
}


function setColorPriority(div , toDo){
    if(toDo.priority === ""){
        return;
    }else if (toDo.priority  === "High"){
        div.setAttribute("style", "color: red;");
    }else if (toDo.priority  === "Medium"){
        div.setAttribute("style", "color: blue;");
    }else{
        div.setAttribute("style", "color: green;");
    }
    return;
}

const printProjectList = (projects) => {
    
    const navPointer = document.querySelector('#projectList');
    while (navPointer.firstChild) {
        navPointer.removeChild(navPointer.lastChild);
    }

    projects.forEach( (project) =>{
        printProject(project)
    })

    const divAddContainer = document.createElement('div');
            const divAdd = createDivClass("add");
            // divAdd.setAttribute('id' , 'addToDo');
            divAdd.dataset.openModal = "#addProject"
            divAdd.textContent = "+"
            divAddContainer.appendChild(divAdd);
    navPointer.appendChild(divAddContainer);
    
    initializeModals();
    
}

const printProject = (project) => {
     
    const navPointer = document.querySelector('#projectList');
        const div = createDivClass("project");
        div.textContent = project.title;
        const hr = document.createElement('hr');
        const listToDo = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.filterToDo)(project.title);

        if(project.selected === 1){
            div.classList.add('active');
            printToDoList(listToDo);
        }
      
        div.addEventListener('click', (e) => {
            //get dataset
            // console.log(e.target.dataset.projectName);
             //remove active from othes
            removeActiveClass(navPointer);
            //add active class
            e.target.classList.add('active')
            //actualProject to store the dataset and add it to new created toDo
            ;(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.resetSelectedProject)();
            project.selected =1;
            (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectStorage)(_index_js__WEBPACK_IMPORTED_MODULE_1__.projectList);
            //displayList: to display todos with that name
            const listToDo = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.filterToDo)(project.title);
            printToDoList(listToDo);



        });
    appendElements(navPointer,div,hr);
    
}

function removeActiveClass (element) {
    const children = Array.from(element.childNodes);
    children.forEach(child => {
        child.classList.remove('active');
    })
}






/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterToDo": () => (/* binding */ filterToDo),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "resetSelectedProject": () => (/* binding */ resetSelectedProject),
/* harmony export */   "retrieveStoredProject": () => (/* binding */ retrieveStoredProject),
/* harmony export */   "toDoList": () => (/* binding */ toDoList),
/* harmony export */   "updateProjectStorage": () => (/* binding */ updateProjectStorage),
/* harmony export */   "updateToDoStorage": () => (/* binding */ updateToDoStorage)
/* harmony export */ });
/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo.js */ "./src/toDo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _domRender_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domRender.js */ "./src/domRender.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(0,_domRender_js__WEBPACK_IMPORTED_MODULE_2__.initializeDom)();
(0,_domRender_js__WEBPACK_IMPORTED_MODULE_2__.initializeModals)();

const toDoList = [];
if (localStorage.getItem('ToDoStored')) {
    retrieveStoredToDo(toDoList);
} 
//print project list

const title = document.querySelector('#title');
const notes = document.querySelector('#notes');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');

const projectList = [];
// const defaultProject = projectFactory();
//     //NEEDS IMPROVEMENT
// defaultProject.setTitle("Default Project");
// defaultProject.setDescription("Default");
// defaultProject.setSelected(1);

if (!localStorage.getItem('ProjectsStored')) {
    const defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Default Project", "Default",1);
    projectList.push(defaultProject);
  } else {
    retrieveStoredProject(projectList);
  }

(0,_domRender_js__WEBPACK_IMPORTED_MODULE_2__.printProjectList)(projectList);


let buttonSubmit = document.querySelector("[data-close-modal = 'addToDo']")
buttonSubmit.addEventListener('click' , submitForm)
let ToDoList_serialized = [];


function submitForm () {
    
    
    //Filter projectList to see which one has getSelected === 1 y le metemos esa property
    const projectSelected = getSelected(projectList);
    const NewToDo = new _toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"](title.value,date.value,priority.value,notes.value,projectSelected,0);
    toDoList.push(NewToDo);
    
    const listWithProject = filterToDo(projectSelected);

    // STORE THE LIST 
    updateToDoStorage(toDoList)
    ToDoList_serialized = JSON.stringify(toDoList);
    localStorage.setItem("ToDoStored" , ToDoList_serialized);
    
    (0,_domRender_js__WEBPACK_IMPORTED_MODULE_2__.printToDoList)(listWithProject);
    
    clearInputs();
  
}

function updateToDoStorage (list) {
    ToDoList_serialized = JSON.stringify(list);
    localStorage.setItem("ToDoStored" , ToDoList_serialized);
}


let buttonProject = document.querySelector("[data-close-modal = 'addProject']")
buttonProject.addEventListener('click' , submitProject)


const name = document.querySelector('#name');
const description = document.querySelector('#description');
let projectList_serialized= [];
function submitProject () {
    

    const NewProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](name.value,description.value,0)

    projectList.push(NewProject);
    
    // STORE THE LIST 
    
    
    updateProjectStorage(projectList);
    
    (0,_domRender_js__WEBPACK_IMPORTED_MODULE_2__.printProjectList)(projectList);
    
    
    clearInputs();
  
}

function updateProjectStorage (list) {
    projectList_serialized = JSON.stringify(list);
    localStorage.setItem("ProjectsStored" , projectList_serialized);
}

function getSelected (projects) {
    
    // const projectSelected = projects.filter(project => project.getSelected() ===1);
    for (let i= 0 ; i<projects.length ; i++){
        // if (projects[i].getSelected() ===1){
        //     return projects[i].getTitle();
        // }
        if (projects[i].selected ===1){
            return projects[i].title;
        }
    }
}

function resetSelectedProject () {
    projectList.forEach( project => {
        project.selected =0;
    })
}

function clearInputs () {
    title.value = "";
    notes.value = "";
    date.value = "";
    name.value= "";
    description.value= "";
}

function filterToDo (projectName) {
    const newList = [];

    for (let i= 0 ; i<toDoList.length ; i++){
        if (toDoList[i].project === projectName){
            newList.push(toDoList[i])
        }
    }
    return newList;
}
 
function retrieveStoredProject(list) {
    
    const normalObject = JSON.parse(localStorage.getItem('ProjectsStored'));
    for (let i=0; i<normalObject.length;i++){
        const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](normalObject[i].title,normalObject[i].description,normalObject[i].selected);
        list.push(newProject);
    
    }
}

function retrieveStoredToDo(list){

    const normalObject = JSON.parse(localStorage.getItem('ToDoStored'));

    for (let i=0; i<normalObject.length;i++){
        const newToDo = new _toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"](normalObject[i].title, normalObject[i].dueDate, normalObject[i].priority, normalObject[i].description, normalObject[i].project, normalObject[i].checklist);
        list.push(newToDo);
    
    }
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });


// function projectFactory () {

//     let _title = '';
//     let _description = '';
//     let _selected = 0;
//     let _toDoList = [];
    
//     const setTitle = (word) => _title = word;
//     const setDescription = (text) => _description = text;
//     const setSelected = (boolean) => _selected = boolean;
//     const getTitle = () => _title;
//     const getDescription = () => _description;
//     const getSelected = () => _selected;
//     const addToDo = (toDo)  => {
//         _toDoList.push(toDo);
//     }

//     return{
//         setTitle,
//         setDescription,
//         setSelected,
//         getTitle,
//         getDescription,
//         getSelected,
//         addToDo
//     }
// }

// export default projectFactory

class Project {
    constructor (_title , _description, _selected) {
        this.title = _title;
        this.description = _description;
        this.selected = _selected;
    }
}

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
class ToDo {
    constructor (_title , _dueDate, _priority, _description, _project, _checklist) {
        this.title = _title;
        this.dueDate = _dueDate;
        this.priority = _priority;
        this.description = _description;
        this.project = _project;
        this.checklist= _checklist;
    }

    clickCheck(){
        if (this.checklist === 0){
            this.checklist=1;
        }else{
            this.checklist=0;
        }
    }
}



// function toDoFactory () {
    
//     let _title = '';
//     let _dueDate = '';
//     let _priority = '';
//     let _notes = '';
//     let _checklist = 0;
//     let _project = '';

//     const initializeToDo = (word,note,date,level,project) => {
//         _title = word;
//         _notes = note;
//         _dueDate = date;
//         _priority = level;
//         _project = project;
//     }
//     const setTitle = (word) => _title = word;
//     const setDueDate = (date) => _dueDate = date;
//     const setPriority = (level) => _priority = level;
//     const setNotes = (note) => _notes = note;
//     const setChecklist = (check) => _checklist = check;
//     const clickCheck = () =>{
//         if (_checklist === 0){
//             _checklist=1;
//         }else{
//             _checklist=0;
//         }
//     }

//     const getTitle = () => _title;
//     const getDueDate = () => _dueDate;
//     const getPriority = () => _priority;
//     const getNotes = () => _notes;
//     const getChecklist = () => _checklist;
//     const getProject = () => _project;
    

//     return{

//         initializeToDo,
//         setTitle,
//         setDueDate,
//         setPriority,
//         setNotes,
//         setChecklist,
//         getTitle,
//         getDueDate,
//         getPriority,
//         getNotes,
//         getChecklist,
//         getProject,
//         clickCheck
//     }
// }

// export default toDoFactory

/***/ }),

/***/ "./src/svgs/flag.svg":
/*!***************************!*\
  !*** ./src/svgs/flag.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3012d16cfe3f9a198839.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnREFBZ0QsMkJBQTJCLHVCQUF1Qix3QkFBd0Isc0JBQXNCLDJCQUEyQiw4QkFBOEIsR0FBRyxTQUFTLG9CQUFvQixxQ0FBcUMsZ0JBQWdCLHdCQUF3QixHQUFHLGFBQWEsb0JBQW9CLDZCQUE2QiwwQkFBMEIsZUFBZSxvQkFBb0IscUNBQXFDLGVBQWUsa0JBQWtCLG9CQUFvQiwwQkFBMEIsNkJBQTZCLDBCQUEwQixnQkFBZ0IsR0FBRyxhQUFhLG1CQUFtQixvQkFBb0IsR0FBRyxVQUFVLGdDQUFnQywwQkFBMEIsbUJBQW1CLGtCQUFrQixHQUFHLFFBQVEsb0JBQW9CLDZCQUE2QixvQkFBb0IsNEJBQTRCLEdBQUcsYUFBYSxzQkFBc0Isa0JBQWtCLHlCQUF5QiwwQkFBMEIsR0FBRyxvQkFBb0IscUNBQXFDLHdCQUF3QixHQUFHLE9BQU8sa0JBQWtCLGlCQUFpQixHQUFHLFdBQVcsb0JBQW9CLDhCQUE4QiwwQkFBMEIseUNBQXlDLCtCQUErQix3QkFBd0IsMEJBQTBCLGtCQUFrQixtQkFBbUIsd0JBQXdCLHNCQUFzQix1QkFBdUIsR0FBRyxVQUFVLG9CQUFvQixnREFBZ0QsMEJBQTBCLGdCQUFnQixtQkFBbUIsaUJBQWlCLDhCQUE4Qix5QkFBeUIsbUJBQW1CLHNCQUFzQixHQUFHLGtCQUFrQiwyQkFBMkIsR0FBRyxjQUFjLGtCQUFrQixtQkFBbUIsOEJBQThCLEdBQUcsb0JBQW9CLHlDQUF5QyxHQUFHLGNBQWMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsMEJBQTBCLG1CQUFtQixtQkFBbUIsR0FBRywwQkFBMEIsb0JBQW9CLEdBQUcsYUFBYSx3Q0FBd0Msc0JBQXNCLGFBQWEsY0FBYyxlQUFlLGdCQUFnQixvQ0FBb0Msd0NBQXdDLDJCQUEyQixvTkFBb04sb0JBQW9CLGlCQUFpQiwwQkFBMEIsR0FBRyxXQUFXLHNCQUFzQixlQUFlLGdCQUFnQiwrQ0FBK0Msb0NBQW9DLGtCQUFrQixpQkFBaUIsa0JBQWtCLHFDQUFxQyx5QkFBeUIsb0JBQW9CLEtBQUssa0JBQWtCLCtDQUErQyxHQUFHLGdDQUFnQyxtQkFBbUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEdBQUcsY0FBYyxxQkFBcUIsK0VBQStFLEtBQUsseUNBQXlDLGlCQUFpQiwyQkFBMkIsc0JBQXNCLGdCQUFnQiw2QkFBNkIsbUJBQW1CLG1CQUFtQix5QkFBeUIsS0FBSywwQkFBMEIsOEJBQThCLFVBQVUsV0FBVyxpQkFBaUIseUNBQXlDLCtCQUErQixzQkFBc0IsSUFBSSxnQkFBZ0IsMENBQTBDLDhCQUE4QixHQUFHLGFBQWEsMkJBQTJCLGlCQUFpQixHQUFHLGFBQWEsa0JBQWtCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLEtBQUssT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLHNCQUFzQixhQUFhLE9BQU8sU0FBUyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGdDQUFnQywyQkFBMkIsdUJBQXVCLHdCQUF3QixzQkFBc0IsMkJBQTJCLDhCQUE4QixHQUFHLFNBQVMsb0JBQW9CLHFDQUFxQyxnQkFBZ0Isd0JBQXdCLEdBQUcsYUFBYSxvQkFBb0IsNkJBQTZCLDBCQUEwQixlQUFlLG9CQUFvQixxQ0FBcUMsZUFBZSxrQkFBa0Isb0JBQW9CLDBCQUEwQiw2QkFBNkIsMEJBQTBCLGdCQUFnQixHQUFHLGFBQWEsbUJBQW1CLG9CQUFvQixHQUFHLFVBQVUsZ0NBQWdDLDBCQUEwQixtQkFBbUIsa0JBQWtCLEdBQUcsUUFBUSxvQkFBb0IsNkJBQTZCLG9CQUFvQiw0QkFBNEIsR0FBRyxhQUFhLHNCQUFzQixrQkFBa0IseUJBQXlCLDBCQUEwQixHQUFHLG9CQUFvQixxQ0FBcUMsd0JBQXdCLEdBQUcsT0FBTyxrQkFBa0IsaUJBQWlCLEdBQUcsV0FBVyxvQkFBb0IsOEJBQThCLDBCQUEwQix5Q0FBeUMsK0JBQStCLHdCQUF3QiwwQkFBMEIsa0JBQWtCLG1CQUFtQix3QkFBd0Isc0JBQXNCLHVCQUF1QixHQUFHLFVBQVUsb0JBQW9CLGdEQUFnRCwwQkFBMEIsZ0JBQWdCLG1CQUFtQixpQkFBaUIsOEJBQThCLHlCQUF5QixtQkFBbUIsc0JBQXNCLEdBQUcsa0JBQWtCLDJCQUEyQixHQUFHLGNBQWMsa0JBQWtCLG1CQUFtQiw4QkFBOEIsR0FBRyxvQkFBb0IseUNBQXlDLEdBQUcsY0FBYyxvQkFBb0IsOEJBQThCLDBCQUEwQiwwQkFBMEIsbUJBQW1CLG1CQUFtQixHQUFHLDBCQUEwQixvQkFBb0IsR0FBRyxhQUFhLHdDQUF3QyxzQkFBc0IsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLG9DQUFvQyx3Q0FBd0MsMkJBQTJCLG9OQUFvTixvQkFBb0IsaUJBQWlCLDBCQUEwQixHQUFHLFdBQVcsc0JBQXNCLGVBQWUsZ0JBQWdCLCtDQUErQyxvQ0FBb0Msa0JBQWtCLGlCQUFpQixrQkFBa0IscUNBQXFDLHlCQUF5QixvQkFBb0IsS0FBSyxrQkFBa0IsK0NBQStDLEdBQUcsZ0NBQWdDLG1CQUFtQixvQkFBb0IsNkJBQTZCLDBCQUEwQixnQkFBZ0IsR0FBRyxjQUFjLHFCQUFxQiwrRUFBK0UsS0FBSyx5Q0FBeUMsaUJBQWlCLDJCQUEyQixzQkFBc0IsZ0JBQWdCLDZCQUE2QixtQkFBbUIsbUJBQW1CLHlCQUF5QixLQUFLLDBCQUEwQiw4QkFBOEIsVUFBVSxXQUFXLGlCQUFpQix5Q0FBeUMsK0JBQStCLHNCQUFzQixJQUFJLGdCQUFnQiwwQ0FBMEMsOEJBQThCLEdBQUcsYUFBYSwyQkFBMkIsaUJBQWlCLEdBQUcsYUFBYSxrQkFBa0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsS0FBSyxtQkFBbUI7QUFDdi9TO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0M7QUFDNEY7QUFDMUU7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFpQixDQUFDLCtDQUFROztBQUUxQyxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztVQzVFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb21SZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLXN1cGVyTGlnaHQ6I2Y4ZmFmYztcXG4gICAgLS1saWdodDogI2UyZThmMDtcXG4gICAgLS1tZWRpdW06ICM5NGEzYjg7XFxuICAgIC0tZGFyazogIzQ3NTU2OTtcXG4gICAgLS1zdXBlckRhcms6ICMwZjE3MmE7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBcXG4gICAgXFxufVxcblxcbi5zaWRlYmFyRmllbGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmljb257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZ2FwOiAxMHB4OyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnByb2plY3QuYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5ocntcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcblxcblxcbi5hZGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXBlckRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tc3VwZXJMaWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4udG9kb3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8uY3Jvc3NlZHtcXG4gICAgY29sb3I6IHZhcigtLW1lZGl1bSk7XFxufVxcblxcbi5jaGVja0JveHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jaGVja0JveDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VwZXJEYXJrKTtcXG59XFxuXFxuLnByaW9yaXR5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDIzcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl17XFxuICAgIHdpZHRoOiAxLjJyZW07XFxufVxcblxcbi5vdmVybGF5e1xcbiAgICAvKiBUcmFuc3BhcmVudCAqL1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIC8qIFdoYXQgaGFwcGVucyBpcyB0aGF0IG92ZXJsYXkgbm93IGlzIGNvdmVyaW5nXFxuICAgIGFsbCB0aGUgcGFnZS4gRXZlcnl0aGluZyBpcyB1bmRlciBvdmVyYXksIHNvIHRoYXQgaXRcXG4gICAgaXMgbm93IGJsb2NraW5nIGJ1dHRvbnMuIFRvIGVsaW1pbmF0ZSB0aGF0IHdlIHNheVxcbiAgICBpdCBkb2VzIG5vdCBoYXZlIGFueSBwb2ludGVyIGV2ZW50cyovXFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZXtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLm1vZGFse1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcblxcbn1cXG5cXG4ubW9kYWwuYWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKXNjYWxlKDEpO1xcbn1cXG5cXG5cXG4vKiBGb3JtIHN0eWxlcyAqL1xcblxcbmZvcm17XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5pbnB1dDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTsgLypSZW1vdmUgZGVmYXVsdCBibHVlIG91dGxpbmUgZnJvbSBTYWZhcmkqL1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrKTtcXG4gIH1cXG5cXG5idXR0b24sXFxubGFiZWwsXFxuaW5wdXQsXFxuc2VsZWN0XFxuICAge1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB9XFxuaW5wdXQsIHRleHRhcmVhLCBidXR0b257XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgIFxcbiAgfVxcbiBidXR0b24ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXBlckRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tc3VwZXJMaWdodCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gfVxcbiBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cGVyTGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tc3VwZXJEYXJrKTtcXG59XFxuXFxudGV4dGFyZWF7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICB3aWR0aDogODUlO1xcbn1cXG5cXG4gIC5maWVsZHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGFBQWE7SUFDYiw4QkFBOEI7OztBQUdsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCOztJQUVsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCOzs7d0NBR29DO0FBQ3hDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUF3QztJQUN4Qyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7O0FBR0EsZ0JBQWdCOztBQUVoQjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWEsRUFBRSwwQ0FBMEM7SUFDekQsNkJBQTZCO0VBQy9COztBQUVGOzs7OztJQUtJLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7QUFDRjtJQUNJLHVCQUF1Qjs7RUFFekI7Q0FDRDtJQUNHLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLGVBQWU7Q0FDbEI7Q0FDQTtJQUNHLG1DQUFtQztJQUNuQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztFQUVFO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLXN1cGVyTGlnaHQ6I2Y4ZmFmYztcXG4gICAgLS1saWdodDogI2UyZThmMDtcXG4gICAgLS1tZWRpdW06ICM5NGEzYjg7XFxuICAgIC0tZGFyazogIzQ3NTU2OTtcXG4gICAgLS1zdXBlckRhcms6ICMwZjE3MmE7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBcXG4gICAgXFxufVxcblxcbi5zaWRlYmFyRmllbGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmljb257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZ2FwOiAxMHB4OyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnByb2plY3QuYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5ocntcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcblxcblxcbi5hZGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXBlckRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tc3VwZXJMaWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4udG9kb3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8uY3Jvc3NlZHtcXG4gICAgY29sb3I6IHZhcigtLW1lZGl1bSk7XFxufVxcblxcbi5jaGVja0JveHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jaGVja0JveDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VwZXJEYXJrKTtcXG59XFxuXFxuLnByaW9yaXR5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDIzcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl17XFxuICAgIHdpZHRoOiAxLjJyZW07XFxufVxcblxcbi5vdmVybGF5e1xcbiAgICAvKiBUcmFuc3BhcmVudCAqL1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIC8qIFdoYXQgaGFwcGVucyBpcyB0aGF0IG92ZXJsYXkgbm93IGlzIGNvdmVyaW5nXFxuICAgIGFsbCB0aGUgcGFnZS4gRXZlcnl0aGluZyBpcyB1bmRlciBvdmVyYXksIHNvIHRoYXQgaXRcXG4gICAgaXMgbm93IGJsb2NraW5nIGJ1dHRvbnMuIFRvIGVsaW1pbmF0ZSB0aGF0IHdlIHNheVxcbiAgICBpdCBkb2VzIG5vdCBoYXZlIGFueSBwb2ludGVyIGV2ZW50cyovXFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZXtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLm1vZGFse1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcblxcbn1cXG5cXG4ubW9kYWwuYWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKXNjYWxlKDEpO1xcbn1cXG5cXG5cXG4vKiBGb3JtIHN0eWxlcyAqL1xcblxcbmZvcm17XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5pbnB1dDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTsgLypSZW1vdmUgZGVmYXVsdCBibHVlIG91dGxpbmUgZnJvbSBTYWZhcmkqL1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrKTtcXG4gIH1cXG5cXG5idXR0b24sXFxubGFiZWwsXFxuaW5wdXQsXFxuc2VsZWN0XFxuICAge1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB9XFxuaW5wdXQsIHRleHRhcmVhLCBidXR0b257XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgIFxcbiAgfVxcbiBidXR0b24ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXBlckRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tc3VwZXJMaWdodCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gfVxcbiBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cGVyTGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tc3VwZXJEYXJrKTtcXG59XFxuXFxudGV4dGFyZWF7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICB3aWR0aDogODUlO1xcbn1cXG5cXG4gIC5maWVsZHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZmxhZyBmcm9tICcuL3N2Z3MvZmxhZy5zdmcnXG5pbXBvcnQge3Jlc2V0U2VsZWN0ZWRQcm9qZWN0ICwgZmlsdGVyVG9EbyAsIHJldHJpZXZlU3RvcmVkUHJvamVjdCwgdXBkYXRlUHJvamVjdFN0b3JhZ2UsIHVwZGF0ZVRvRG9TdG9yYWdlfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7IHByb2plY3RMaXN0ICwgdG9Eb0xpc3QgfSBmcm9tICcuL2luZGV4LmpzJztcbi8vZnVuY3Rpb25zIHRvIGFwcGVuZFxuXG5jb25zdCBjcmVhdGVEaXZDbGFzcyA9IChjbGFzc05hbWUpID0+e1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gZGl2O1xufVxuY29uc3QgY3JlYXRlRGl2VGV4dCA9ICh0ZXh0KSA9PntcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi50ZXh0Q29udGVudD10ZXh0XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuY29uc3QgYXBwZW5kRWxlbWVudHMgPSAocGFyZW50LCAuLi5jaGlsZHJlbikgPT57XG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfSlcbn1cblxuLy9QcmludCBzdHJ1Y3R1cmUgb2YgcGFnZVxuXG5jb25zdCBpbml0aWFsaXplRG9tID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgc2lkZUJhciA9IGNyZWF0ZURpdkNsYXNzKFwic2lkZWJhclwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuICAgICAgICBjb25zdCBzaWRlQmFyRmllbGQgPSBjcmVhdGVEaXZDbGFzcyhcInNpZGViYXJGaWVsZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXJJY29uID0gY3JlYXRlRGl2Q2xhc3MoXCJpY29uXCIpO1xuICAgICAgICAgICAgY29uc3QgdXNlcm5hbWVEaXYgPSBjcmVhdGVEaXZUZXh0KFwiVXNlcm5hbWVcIik7XG4gICAgICAgIGFwcGVuZEVsZW1lbnRzKHNpZGVCYXJGaWVsZCxzaWRlYmFySWNvbix1c2VybmFtZURpdik7XG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChzaWRlQmFyRmllbGQpO1xuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0TGlzdCcpXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChuYXYpXG4gICAgY29uc3QgZGl2QWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkaXZBZGQyID0gY3JlYXRlRGl2Q2xhc3MoXCJhZGRcIik7XG4gICAgICAgICAgICAgICAgZGl2QWRkMi5kYXRhc2V0Lm9wZW5Nb2RhbCA9IFwiI2FkZFByb2plY3RcIlxuICAgICAgICAgICAgICAgIGRpdkFkZDIudGV4dENvbnRlbnQgPSBcIitcIlxuICAgICAgICBkaXZBZGRQcm9qZWN0LmFwcGVuZENoaWxkKGRpdkFkZDIpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChkaXZBZGRQcm9qZWN0KTtcbiAgICAvLyA8ZGl2PjxkaXYgY2xhc3M9XCJhZGRcIj4rPC9kaXY+PC9kaXY+XG4gICAgY29uc3QgY29udGVudCA9IGNyZWF0ZURpdkNsYXNzKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuICAgICAgICBjb25zdCBkaXZBZGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdkFkZCA9IGNyZWF0ZURpdkNsYXNzKFwiYWRkXCIpO1xuICAgICAgICAgICAgLy8gZGl2QWRkLnNldEF0dHJpYnV0ZSgnaWQnICwgJ2FkZFRvRG8nKTtcbiAgICAgICAgICAgIGRpdkFkZC5kYXRhc2V0Lm9wZW5Nb2RhbCA9IFwiI2FkZFRvRG9cIlxuICAgICAgICAgICAgZGl2QWRkLnRleHRDb250ZW50ID0gXCIrXCJcbiAgICAgICAgICAgIGRpdkFkZENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZBZGQpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdkFkZENvbnRhaW5lcik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjb25zdCBvdmVybGF5ID0gY3JlYXRlRGl2Q2xhc3MoXCJvdmVybGF5XCIpO1xuICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdpZCcgLCBcIm92ZXJsYXlcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICBjb25zdCBtb2RhbCA9IGNyZWF0ZURpdkNsYXNzKFwibW9kYWxcIik7XG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKCdpZCcgLCBcImFkZFRvRG9cIik7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcgLCAnbmV3VG9EbycpO1xuICAgICAgICAgICAgY29uc3QgZmllbGQxID0gY3JlYXRlRGl2Q2xhc3MoXCJmaWVsZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbFRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywndGl0bGUnKTtcbiAgICAgICAgICAgICAgICBsYWJlbFRpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZTogKlwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnICwgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnICwgJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnICwgJ3RpdGxlJyk7XG4gICAgICAgICAgICBhcHBlbmRFbGVtZW50cyhmaWVsZDEsbGFiZWxUaXRsZSxpbnB1dFRpdGxlKTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkMiA9IGNyZWF0ZURpdkNsYXNzKFwiZmllbGRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWxOb3Rlcy50ZXh0Q29udGVudCA9IFwiTm90ZXM6XCJcbiAgICAgICAgICAgICAgICBsYWJlbE5vdGVzLnNldEF0dHJpYnV0ZSgnZm9yJywnbm90ZXMnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dE5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICAgICAgICAgIGlucHV0Tm90ZXMuc2V0QXR0cmlidXRlKCdpZCcgLCAnbm90ZXMnKTtcbiAgICAgICAgICAgICAgICBpbnB1dE5vdGVzLnNldEF0dHJpYnV0ZSgnbmFtZScgLCAnbm90ZXMnKTtcbiAgICAgICAgICAgICAgICBpbnB1dE5vdGVzLnNldEF0dHJpYnV0ZSgncm93cycgLCAnNCcpO1xuICAgICAgICAgICAgICAgIGlucHV0Tm90ZXMuc2V0QXR0cmlidXRlKCdjb2xzJyAsICc1MCcpO1xuICAgICAgICAgICAgYXBwZW5kRWxlbWVudHMoZmllbGQyLGxhYmVsTm90ZXMsaW5wdXROb3Rlcyk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZDMgPSBjcmVhdGVEaXZDbGFzcyhcImZpZWxkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWxEYXRlLnNldEF0dHJpYnV0ZSgnZm9yJywnZGF0ZScpO1xuICAgICAgICAgICAgICAgIGxhYmVsRGF0ZS50ZXh0Q29udGVudCA9IFwiRGF0ZTpcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZSgndHlwZScgLCAnZGF0ZScpO1xuICAgICAgICAgICAgICAgIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJyAsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScgLCAnZGF0ZScpO1xuICAgICAgICAgICAgYXBwZW5kRWxlbWVudHMoZmllbGQzLGxhYmVsRGF0ZSxpbnB1dERhdGUpO1xuICAgICAgICAgICAgY29uc3QgZmllbGQ0PSBjcmVhdGVEaXZDbGFzcyhcImZpZWxkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCdwcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGxhYmVsUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlNlbGVjdCBhIHByaW9yaXR5IGxldmVsOlwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnICwgJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcgLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24xLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjEudGV4dENvbnRlbnQgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24yLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnSGlnaCcpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24yLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uMy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ01lZGl1bScpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24zLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb240LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjQudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgICAgICAgICAgICAgIGFwcGVuZEVsZW1lbnRzKHNlbGVjdFByaW9yaXR5LG9wdGlvbjEsb3B0aW9uMixvcHRpb24zLG9wdGlvbjQpO1xuICAgICAgICAgICAgYXBwZW5kRWxlbWVudHMoZmllbGQ0LGxhYmVsUHJpb3JpdHksc2VsZWN0UHJpb3JpdHkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkVG9EbycpO1xuICAgICAgICAgICAgYnV0dG9uLmRhdGFzZXQuY2xvc2VNb2RhbD1cImFkZFRvRG9cIjtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIE5vdGVcIjtcbiAgICAgICAgYXBwZW5kRWxlbWVudHMoZm9ybSxmaWVsZDEsZmllbGQyLGZpZWxkMyxmaWVsZDQsYnV0dG9uKTtcblxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9NT0RBTCAyXG4gICAgICAgIGNvbnN0IG1vZGFsUHJvamVjdCA9IGNyZWF0ZURpdkNsYXNzKFwibW9kYWxcIik7XG4gICAgICAgIG1vZGFsUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJyAsIFwiYWRkUHJvamVjdFwiKTtcbiAgICAgICAgY29uc3QgZm9ybTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0yLnNldEF0dHJpYnV0ZSgnaWQnICwgJ25ld1Byb2plY3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkNSA9IGNyZWF0ZURpdkNsYXNzKFwiZmllbGRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbE5hbWUuc2V0QXR0cmlidXRlKCdmb3InLCduYW1lJyk7XG4gICAgICAgICAgICAgICAgbGFiZWxOYW1lLnRleHRDb250ZW50ID0gXCJOYW1lOiAqXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnICwgJ25hbWUnKTtcbiAgICAgICAgICAgICAgICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKCdpZCcgLCAnbmFtZScpO1xuICAgICAgICAgICAgICAgIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnICwgJ25hbWUnKTtcbiAgICAgICAgICAgIGFwcGVuZEVsZW1lbnRzKGZpZWxkNSxsYWJlbE5hbWUsaW5wdXROYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkNiA9IGNyZWF0ZURpdkNsYXNzKFwiZmllbGRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWxEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCJcbiAgICAgICAgICAgICAgICBsYWJlbERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcgLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICBpbnB1dERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScgLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICBpbnB1dERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncm93cycgLCAnNCcpO1xuICAgICAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjb2xzJyAsICc1MCcpO1xuICAgICAgICAgICAgYXBwZW5kRWxlbWVudHMoZmllbGQ2LGxhYmVsRGVzY3JpcHRpb24saW5wdXREZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvblByb2plY3Quc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhZGRQcm9qZWN0Jyk7XG4gICAgICAgICAgICBidXR0b25Qcm9qZWN0LmRhdGFzZXQuY2xvc2VNb2RhbD1cImFkZFByb2plY3RcIjtcbiAgICAgICAgICAgIGJ1dHRvblByb2plY3QudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgICAgIGFwcGVuZEVsZW1lbnRzKGZvcm0yLGZpZWxkNSxmaWVsZDYsYnV0dG9uUHJvamVjdCk7XG5cbiAgICAgICAgbW9kYWxQcm9qZWN0LmFwcGVuZENoaWxkKGZvcm0yKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsUHJvamVjdCk7XG5cbi8vIENBTEwgTE9DQUwgU1RPUkFHRVxuXG4gICAgLy8gIGNvbnN0IHByb2plY3RMaXN0U3RvcmVkID0gcmV0cmlldmVTdG9yZWRQcm9qZWN0KClcbiAgICAvLyAgY29uc29sZS5sb2cocHJvamVjdExpc3RTdG9yZWQpXG4gICAgLy8gIHByaW50UHJvamVjdExpc3QocHJvamVjdExpc3RTdG9yZWQpXG4vLyBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbi8vICAgICBsZXQgU3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0c1N0b3JlZCcpKTtcbi8vICAgICBjb25zb2xlLmxvZyhTdG9yZWRQcm9qZWN0cyk7XG4vLyAgIH1cbi8vICAgZWxzZSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJOTyBMT0NBTCBTVE9SQUdFRUVFRVwiKVxuLy8gICB9XG4gICAgXG5cbn1cblxuY29uc3QgaW5pdGlhbGl6ZU1vZGFscyA9ICgpID0+IHtcblxuICAgIGNvbnN0IG9wZW5Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtb3Blbi1tb2RhbF1cIik7XG4gICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtY2xvc2UtbW9kYWxdXCIpXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jyk7XG5cbiAgICBvcGVuTW9kYWxCdXR0b25zLmZvckVhY2goIGJ1dHRvbiA9PntcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZE9wZW4gPSBlLnRhcmdldC5kYXRhc2V0Lm9wZW5Nb2RhbDtcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsVG9PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZE9wZW4pO1xuICAgICAgICAgICAgb3Blbk1vZGFsKG1vZGFsVG9PcGVuKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgY2xvc2VNb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsVG9DbG9zZT0gYnV0dG9uLmNsb3Nlc3QoJy5tb2RhbCcpO1xuICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbFRvQ2xvc2UpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLmFjdGl2ZScpXG4gICAgICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbiAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIFxuXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsIChtb2RhbCkge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cblxufVxuXG5cbmNvbnN0IHByaW50VG9Eb0xpc3QgPSAobGlzdCkgPT57XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG4gICAgbGlzdC5mb3JFYWNoKCAodG9EbykgPT57XG4gICAgICAgIHByaW50VG9Ebyh0b0RvKVxuICAgIH0pXG5cbiAgICBjb25zdCBkaXZBZGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdkFkZCA9IGNyZWF0ZURpdkNsYXNzKFwiYWRkXCIpO1xuICAgICAgICAgICAgLy8gZGl2QWRkLnNldEF0dHJpYnV0ZSgnaWQnICwgJ2FkZFRvRG8nKTtcbiAgICAgICAgICAgIGRpdkFkZC5kYXRhc2V0Lm9wZW5Nb2RhbCA9IFwiI2FkZFRvRG9cIlxuICAgICAgICAgICAgZGl2QWRkLnRleHRDb250ZW50ID0gXCIrXCJcbiAgICAgICAgICAgIGRpdkFkZENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZBZGQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2QWRkQ29udGFpbmVyKTtcblxuICAgIGluaXRpYWxpemVNb2RhbHMoKTtcblxuXG59XG5jb25zdCBwcmludFRvRG8gPSAodG9EbykgPT57XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGNyZWF0ZURpdkNsYXNzKFwidG9kb1wiKTtcbiAgICAgICAgY29uc3QgZGl2Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gY3JlYXRlRGl2Q2xhc3MoXCJjaGVja0JveFwiKTtcbiAgICAgICAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgICAgICB0b0RvLmNsaWNrQ2hlY2soKTtcblxuICAgICAgICAgICAgICAgIHdoaWxlICh0b0RvQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b0RvQ29udGFpbmVyLmxhc3RDaGlsZCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRDaGVjaygpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVRvRG9TdG9yYWdlKHRvRG9MaXN0KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGRpdkNoZWNrLmFwcGVuZENoaWxkKGNoZWNrKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvRG8udGl0bGU7XG5cbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gdG9Eby5kdWVEYXRlO1xuICAgICAgICAgICBcbiAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gY3JlYXRlRGl2Q2xhc3MoXCJwcmlvcml0eVwiKTtcbiAgICAgICAgc3ZnQ29udGFpbmVyLnRleHRDb250ZW50ID0gdG9Eby5wcmlvcml0eTtcbiAgICAgICAgc2V0Q29sb3JQcmlvcml0eShzdmdDb250YWluZXIsdG9Ebyk7XG4gICAgICAgIC8vIGNvbnN0IHN2Z0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIC8vIHN2Z0ltYWdlLnNyYyA9IGZsYWc7XG4gICAgICAgIC8vIHN2Z0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdmdJbWFnZSk7XG4gICAgICAgIHNldENoZWNrKCk7XG4gICAgICAgIFxuICAgIFxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9Eb0NvbnRhaW5lcik7XG5cbiAgICBmdW5jdGlvbiBzZXRDaGVjaygpIHtcbiAgICAgICAgXG4gICAgICAgIGlmKHRvRG8uY2hlY2tsaXN0PT09MSl7XG4gICAgICAgICAgICB0b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjcm9zc2VkXCIpXG4gICAgICAgICAgICBjb25zdCBjcm9zc091dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzJyk7XG4gICAgICAgICAgICBjcm9zc091dDEuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgY3Jvc3NPdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncycpO1xuICAgICAgICAgICAgY3Jvc3NPdXQyLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgY3Jvc3NPdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncycpO1xuICAgICAgICAgICAgY3Jvc3NPdXQzLmFwcGVuZENoaWxkKHN2Z0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGFwcGVuZEVsZW1lbnRzKHRvRG9Db250YWluZXIsZGl2Q2hlY2ssY3Jvc3NPdXQxLGNyb3NzT3V0Mixjcm9zc091dDMpO1xuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiY3Jvc3NlZFwiKVxuICAgICAgICAgICAgYXBwZW5kRWxlbWVudHModG9Eb0NvbnRhaW5lcixkaXZDaGVjayx0aXRsZSxkYXRlLHN2Z0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZnVuY3Rpb24gc2V0Q29sb3JQcmlvcml0eShkaXYgLCB0b0RvKXtcbiAgICBpZih0b0RvLnByaW9yaXR5ID09PSBcIlwiKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1lbHNlIGlmICh0b0RvLnByaW9yaXR5ICA9PT0gXCJIaWdoXCIpe1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJjb2xvcjogcmVkO1wiKTtcbiAgICB9ZWxzZSBpZiAodG9Eby5wcmlvcml0eSAgPT09IFwiTWVkaXVtXCIpe1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJjb2xvcjogYmx1ZTtcIik7XG4gICAgfWVsc2V7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImNvbG9yOiBncmVlbjtcIik7XG4gICAgfVxuICAgIHJldHVybjtcbn1cblxuY29uc3QgcHJpbnRQcm9qZWN0TGlzdCA9IChwcm9qZWN0cykgPT4ge1xuICAgIFxuICAgIGNvbnN0IG5hdlBvaW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKTtcbiAgICB3aGlsZSAobmF2UG9pbnRlci5maXJzdENoaWxkKSB7XG4gICAgICAgIG5hdlBvaW50ZXIucmVtb3ZlQ2hpbGQobmF2UG9pbnRlci5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHByb2plY3RzLmZvckVhY2goIChwcm9qZWN0KSA9PntcbiAgICAgICAgcHJpbnRQcm9qZWN0KHByb2plY3QpXG4gICAgfSlcblxuICAgIGNvbnN0IGRpdkFkZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZGl2QWRkID0gY3JlYXRlRGl2Q2xhc3MoXCJhZGRcIik7XG4gICAgICAgICAgICAvLyBkaXZBZGQuc2V0QXR0cmlidXRlKCdpZCcgLCAnYWRkVG9EbycpO1xuICAgICAgICAgICAgZGl2QWRkLmRhdGFzZXQub3Blbk1vZGFsID0gXCIjYWRkUHJvamVjdFwiXG4gICAgICAgICAgICBkaXZBZGQudGV4dENvbnRlbnQgPSBcIitcIlxuICAgICAgICAgICAgZGl2QWRkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkFkZCk7XG4gICAgbmF2UG9pbnRlci5hcHBlbmRDaGlsZChkaXZBZGRDb250YWluZXIpO1xuICAgIFxuICAgIGluaXRpYWxpemVNb2RhbHMoKTtcbiAgICBcbn1cblxuY29uc3QgcHJpbnRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgXG4gICAgY29uc3QgbmF2UG9pbnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpO1xuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVEaXZDbGFzcyhcInByb2plY3RcIik7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICAgICAgY29uc3QgbGlzdFRvRG8gPSBmaWx0ZXJUb0RvKHByb2plY3QudGl0bGUpO1xuXG4gICAgICAgIGlmKHByb2plY3Quc2VsZWN0ZWQgPT09IDEpe1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgcHJpbnRUb0RvTGlzdChsaXN0VG9Ebyk7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy9nZXQgZGF0YXNldFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgLy9yZW1vdmUgYWN0aXZlIGZyb20gb3RoZXNcbiAgICAgICAgICAgIHJlbW92ZUFjdGl2ZUNsYXNzKG5hdlBvaW50ZXIpO1xuICAgICAgICAgICAgLy9hZGQgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgLy9hY3R1YWxQcm9qZWN0IHRvIHN0b3JlIHRoZSBkYXRhc2V0IGFuZCBhZGQgaXQgdG8gbmV3IGNyZWF0ZWQgdG9Eb1xuICAgICAgICAgICAgcmVzZXRTZWxlY3RlZFByb2plY3QoKTtcbiAgICAgICAgICAgIHByb2plY3Quc2VsZWN0ZWQgPTE7XG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0U3RvcmFnZShwcm9qZWN0TGlzdCk7XG4gICAgICAgICAgICAvL2Rpc3BsYXlMaXN0OiB0byBkaXNwbGF5IHRvZG9zIHdpdGggdGhhdCBuYW1lXG4gICAgICAgICAgICBjb25zdCBsaXN0VG9EbyA9IGZpbHRlclRvRG8ocHJvamVjdC50aXRsZSk7XG4gICAgICAgICAgICBwcmludFRvRG9MaXN0KGxpc3RUb0RvKTtcblxuXG5cbiAgICAgICAgfSk7XG4gICAgYXBwZW5kRWxlbWVudHMobmF2UG9pbnRlcixkaXYsaHIpO1xuICAgIFxufVxuXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVDbGFzcyAoZWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KVxufVxuXG5cblxuZXhwb3J0IHtpbml0aWFsaXplRG9tICwgaW5pdGlhbGl6ZU1vZGFscyAsIHByaW50VG9Eb0xpc3QsIHByaW50UHJvamVjdExpc3R9XG4iLCJpbXBvcnQgVG9EbyBmcm9tIFwiLi90b0RvLmpzXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQge2luaXRpYWxpemVEb20gLCBpbml0aWFsaXplTW9kYWxzICwgcHJpbnRUb0RvTGlzdCwgcHJpbnRQcm9qZWN0TGlzdH0gZnJvbSBcIi4vZG9tUmVuZGVyLmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuXG5pbml0aWFsaXplRG9tKCk7XG5pbml0aWFsaXplTW9kYWxzKCk7XG5cbmV4cG9ydCBjb25zdCB0b0RvTGlzdCA9IFtdO1xuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUb0RvU3RvcmVkJykpIHtcbiAgICByZXRyaWV2ZVN0b3JlZFRvRG8odG9Eb0xpc3QpO1xufSBcbi8vcHJpbnQgcHJvamVjdCBsaXN0XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG5jb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlcycpO1xuY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG5jb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdExpc3QgPSBbXTtcbi8vIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoKTtcbi8vICAgICAvL05FRURTIElNUFJPVkVNRU5UXG4vLyBkZWZhdWx0UHJvamVjdC5zZXRUaXRsZShcIkRlZmF1bHQgUHJvamVjdFwiKTtcbi8vIGRlZmF1bHRQcm9qZWN0LnNldERlc2NyaXB0aW9uKFwiRGVmYXVsdFwiKTtcbi8vIGRlZmF1bHRQcm9qZWN0LnNldFNlbGVjdGVkKDEpO1xuXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0c1N0b3JlZCcpKSB7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHQgUHJvamVjdFwiLCBcIkRlZmF1bHRcIiwxKTtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbiAgfSBlbHNlIHtcbiAgICByZXRyaWV2ZVN0b3JlZFByb2plY3QocHJvamVjdExpc3QpO1xuICB9XG5cbnByaW50UHJvamVjdExpc3QocHJvamVjdExpc3QpO1xuXG5cbmxldCBidXR0b25TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2xvc2UtbW9kYWwgPSAnYWRkVG9EbyddXCIpXG5idXR0b25TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgc3VibWl0Rm9ybSlcbmxldCBUb0RvTGlzdF9zZXJpYWxpemVkID0gW107XG5cblxuZnVuY3Rpb24gc3VibWl0Rm9ybSAoKSB7XG4gICAgXG4gICAgXG4gICAgLy9GaWx0ZXIgcHJvamVjdExpc3QgdG8gc2VlIHdoaWNoIG9uZSBoYXMgZ2V0U2VsZWN0ZWQgPT09IDEgeSBsZSBtZXRlbW9zIGVzYSBwcm9wZXJ0eVxuICAgIGNvbnN0IHByb2plY3RTZWxlY3RlZCA9IGdldFNlbGVjdGVkKHByb2plY3RMaXN0KTtcbiAgICBjb25zdCBOZXdUb0RvID0gbmV3IFRvRG8odGl0bGUudmFsdWUsZGF0ZS52YWx1ZSxwcmlvcml0eS52YWx1ZSxub3Rlcy52YWx1ZSxwcm9qZWN0U2VsZWN0ZWQsMCk7XG4gICAgdG9Eb0xpc3QucHVzaChOZXdUb0RvKTtcbiAgICBcbiAgICBjb25zdCBsaXN0V2l0aFByb2plY3QgPSBmaWx0ZXJUb0RvKHByb2plY3RTZWxlY3RlZCk7XG5cbiAgICAvLyBTVE9SRSBUSEUgTElTVCBcbiAgICB1cGRhdGVUb0RvU3RvcmFnZSh0b0RvTGlzdClcbiAgICBUb0RvTGlzdF9zZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVG9Eb1N0b3JlZFwiICwgVG9Eb0xpc3Rfc2VyaWFsaXplZCk7XG4gICAgXG4gICAgcHJpbnRUb0RvTGlzdChsaXN0V2l0aFByb2plY3QpO1xuICAgIFxuICAgIGNsZWFySW5wdXRzKCk7XG4gIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG9Eb1N0b3JhZ2UgKGxpc3QpIHtcbiAgICBUb0RvTGlzdF9zZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkobGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUb0RvU3RvcmVkXCIgLCBUb0RvTGlzdF9zZXJpYWxpemVkKTtcbn1cblxuXG5sZXQgYnV0dG9uUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jbG9zZS1tb2RhbCA9ICdhZGRQcm9qZWN0J11cIilcbmJ1dHRvblByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgc3VibWl0UHJvamVjdClcblxuXG5jb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG5sZXQgcHJvamVjdExpc3Rfc2VyaWFsaXplZD0gW107XG5mdW5jdGlvbiBzdWJtaXRQcm9qZWN0ICgpIHtcbiAgICBcblxuICAgIGNvbnN0IE5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLnZhbHVlLGRlc2NyaXB0aW9uLnZhbHVlLDApXG5cbiAgICBwcm9qZWN0TGlzdC5wdXNoKE5ld1Byb2plY3QpO1xuICAgIFxuICAgIC8vIFNUT1JFIFRIRSBMSVNUIFxuICAgIFxuICAgIFxuICAgIHVwZGF0ZVByb2plY3RTdG9yYWdlKHByb2plY3RMaXN0KTtcbiAgICBcbiAgICBwcmludFByb2plY3RMaXN0KHByb2plY3RMaXN0KTtcbiAgICBcbiAgICBcbiAgICBjbGVhcklucHV0cygpO1xuICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RTdG9yYWdlIChsaXN0KSB7XG4gICAgcHJvamVjdExpc3Rfc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KGxpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdHNTdG9yZWRcIiAsIHByb2plY3RMaXN0X3NlcmlhbGl6ZWQpO1xufVxuXG5mdW5jdGlvbiBnZXRTZWxlY3RlZCAocHJvamVjdHMpIHtcbiAgICBcbiAgICAvLyBjb25zdCBwcm9qZWN0U2VsZWN0ZWQgPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmdldFNlbGVjdGVkKCkgPT09MSk7XG4gICAgZm9yIChsZXQgaT0gMCA7IGk8cHJvamVjdHMubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgLy8gaWYgKHByb2plY3RzW2ldLmdldFNlbGVjdGVkKCkgPT09MSl7XG4gICAgICAgIC8vICAgICByZXR1cm4gcHJvamVjdHNbaV0uZ2V0VGl0bGUoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAocHJvamVjdHNbaV0uc2VsZWN0ZWQgPT09MSl7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdHNbaV0udGl0bGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0U2VsZWN0ZWRQcm9qZWN0ICgpIHtcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKCBwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdC5zZWxlY3RlZCA9MDtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0cyAoKSB7XG4gICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgIG5vdGVzLnZhbHVlID0gXCJcIjtcbiAgICBkYXRlLnZhbHVlID0gXCJcIjtcbiAgICBuYW1lLnZhbHVlPSBcIlwiO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJUb0RvIChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBbXTtcblxuICAgIGZvciAobGV0IGk9IDAgOyBpPHRvRG9MaXN0Lmxlbmd0aCA7IGkrKyl7XG4gICAgICAgIGlmICh0b0RvTGlzdFtpXS5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSl7XG4gICAgICAgICAgICBuZXdMaXN0LnB1c2godG9Eb0xpc3RbaV0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0xpc3Q7XG59XG4gXG5mdW5jdGlvbiByZXRyaWV2ZVN0b3JlZFByb2plY3QobGlzdCkge1xuICAgIFxuICAgIGNvbnN0IG5vcm1hbE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RzU3RvcmVkJykpO1xuICAgIGZvciAobGV0IGk9MDsgaTxub3JtYWxPYmplY3QubGVuZ3RoO2krKyl7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChub3JtYWxPYmplY3RbaV0udGl0bGUsbm9ybWFsT2JqZWN0W2ldLmRlc2NyaXB0aW9uLG5vcm1hbE9iamVjdFtpXS5zZWxlY3RlZCk7XG4gICAgICAgIGxpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlU3RvcmVkVG9EbyhsaXN0KXtcblxuICAgIGNvbnN0IG5vcm1hbE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RvRG9TdG9yZWQnKSk7XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8bm9ybWFsT2JqZWN0Lmxlbmd0aDtpKyspe1xuICAgICAgICBjb25zdCBuZXdUb0RvID0gbmV3IFRvRG8obm9ybWFsT2JqZWN0W2ldLnRpdGxlLCBub3JtYWxPYmplY3RbaV0uZHVlRGF0ZSwgbm9ybWFsT2JqZWN0W2ldLnByaW9yaXR5LCBub3JtYWxPYmplY3RbaV0uZGVzY3JpcHRpb24sIG5vcm1hbE9iamVjdFtpXS5wcm9qZWN0LCBub3JtYWxPYmplY3RbaV0uY2hlY2tsaXN0KTtcbiAgICAgICAgbGlzdC5wdXNoKG5ld1RvRG8pO1xuICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IHtyZXNldFNlbGVjdGVkUHJvamVjdCAsIGZpbHRlclRvRG8sIHJldHJpZXZlU3RvcmVkUHJvamVjdH07IiwiXG5cbi8vIGZ1bmN0aW9uIHByb2plY3RGYWN0b3J5ICgpIHtcblxuLy8gICAgIGxldCBfdGl0bGUgPSAnJztcbi8vICAgICBsZXQgX2Rlc2NyaXB0aW9uID0gJyc7XG4vLyAgICAgbGV0IF9zZWxlY3RlZCA9IDA7XG4vLyAgICAgbGV0IF90b0RvTGlzdCA9IFtdO1xuICAgIFxuLy8gICAgIGNvbnN0IHNldFRpdGxlID0gKHdvcmQpID0+IF90aXRsZSA9IHdvcmQ7XG4vLyAgICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAodGV4dCkgPT4gX2Rlc2NyaXB0aW9uID0gdGV4dDtcbi8vICAgICBjb25zdCBzZXRTZWxlY3RlZCA9IChib29sZWFuKSA9PiBfc2VsZWN0ZWQgPSBib29sZWFuO1xuLy8gICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gX3RpdGxlO1xuLy8gICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gX2Rlc2NyaXB0aW9uO1xuLy8gICAgIGNvbnN0IGdldFNlbGVjdGVkID0gKCkgPT4gX3NlbGVjdGVkO1xuLy8gICAgIGNvbnN0IGFkZFRvRG8gPSAodG9EbykgID0+IHtcbi8vICAgICAgICAgX3RvRG9MaXN0LnB1c2godG9Ebyk7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJue1xuLy8gICAgICAgICBzZXRUaXRsZSxcbi8vICAgICAgICAgc2V0RGVzY3JpcHRpb24sXG4vLyAgICAgICAgIHNldFNlbGVjdGVkLFxuLy8gICAgICAgICBnZXRUaXRsZSxcbi8vICAgICAgICAgZ2V0RGVzY3JpcHRpb24sXG4vLyAgICAgICAgIGdldFNlbGVjdGVkLFxuLy8gICAgICAgICBhZGRUb0RvXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBwcm9qZWN0RmFjdG9yeVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvciAoX3RpdGxlICwgX2Rlc2NyaXB0aW9uLCBfc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IF90aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IF9kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IF9zZWxlY3RlZDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG4gICAgY29uc3RydWN0b3IgKF90aXRsZSAsIF9kdWVEYXRlLCBfcHJpb3JpdHksIF9kZXNjcmlwdGlvbiwgX3Byb2plY3QsIF9jaGVja2xpc3QpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IF90aXRsZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gX2R1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBfcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBfZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJvamVjdCA9IF9wcm9qZWN0O1xuICAgICAgICB0aGlzLmNoZWNrbGlzdD0gX2NoZWNrbGlzdDtcbiAgICB9XG5cbiAgICBjbGlja0NoZWNrKCl7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrbGlzdCA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLmNoZWNrbGlzdD0xO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tsaXN0PTA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBmdW5jdGlvbiB0b0RvRmFjdG9yeSAoKSB7XG4gICAgXG4vLyAgICAgbGV0IF90aXRsZSA9ICcnO1xuLy8gICAgIGxldCBfZHVlRGF0ZSA9ICcnO1xuLy8gICAgIGxldCBfcHJpb3JpdHkgPSAnJztcbi8vICAgICBsZXQgX25vdGVzID0gJyc7XG4vLyAgICAgbGV0IF9jaGVja2xpc3QgPSAwO1xuLy8gICAgIGxldCBfcHJvamVjdCA9ICcnO1xuXG4vLyAgICAgY29uc3QgaW5pdGlhbGl6ZVRvRG8gPSAod29yZCxub3RlLGRhdGUsbGV2ZWwscHJvamVjdCkgPT4ge1xuLy8gICAgICAgICBfdGl0bGUgPSB3b3JkO1xuLy8gICAgICAgICBfbm90ZXMgPSBub3RlO1xuLy8gICAgICAgICBfZHVlRGF0ZSA9IGRhdGU7XG4vLyAgICAgICAgIF9wcmlvcml0eSA9IGxldmVsO1xuLy8gICAgICAgICBfcHJvamVjdCA9IHByb2plY3Q7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IHNldFRpdGxlID0gKHdvcmQpID0+IF90aXRsZSA9IHdvcmQ7XG4vLyAgICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChkYXRlKSA9PiBfZHVlRGF0ZSA9IGRhdGU7XG4vLyAgICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobGV2ZWwpID0+IF9wcmlvcml0eSA9IGxldmVsO1xuLy8gICAgIGNvbnN0IHNldE5vdGVzID0gKG5vdGUpID0+IF9ub3RlcyA9IG5vdGU7XG4vLyAgICAgY29uc3Qgc2V0Q2hlY2tsaXN0ID0gKGNoZWNrKSA9PiBfY2hlY2tsaXN0ID0gY2hlY2s7XG4vLyAgICAgY29uc3QgY2xpY2tDaGVjayA9ICgpID0+e1xuLy8gICAgICAgICBpZiAoX2NoZWNrbGlzdCA9PT0gMCl7XG4vLyAgICAgICAgICAgICBfY2hlY2tsaXN0PTE7XG4vLyAgICAgICAgIH1lbHNle1xuLy8gICAgICAgICAgICAgX2NoZWNrbGlzdD0wO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBfdGl0bGU7XG4vLyAgICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IF9kdWVEYXRlO1xuLy8gICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gX3ByaW9yaXR5O1xuLy8gICAgIGNvbnN0IGdldE5vdGVzID0gKCkgPT4gX25vdGVzO1xuLy8gICAgIGNvbnN0IGdldENoZWNrbGlzdCA9ICgpID0+IF9jaGVja2xpc3Q7XG4vLyAgICAgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IF9wcm9qZWN0O1xuICAgIFxuXG4vLyAgICAgcmV0dXJue1xuXG4vLyAgICAgICAgIGluaXRpYWxpemVUb0RvLFxuLy8gICAgICAgICBzZXRUaXRsZSxcbi8vICAgICAgICAgc2V0RHVlRGF0ZSxcbi8vICAgICAgICAgc2V0UHJpb3JpdHksXG4vLyAgICAgICAgIHNldE5vdGVzLFxuLy8gICAgICAgICBzZXRDaGVja2xpc3QsXG4vLyAgICAgICAgIGdldFRpdGxlLFxuLy8gICAgICAgICBnZXREdWVEYXRlLFxuLy8gICAgICAgICBnZXRQcmlvcml0eSxcbi8vICAgICAgICAgZ2V0Tm90ZXMsXG4vLyAgICAgICAgIGdldENoZWNrbGlzdCxcbi8vICAgICAgICAgZ2V0UHJvamVjdCxcbi8vICAgICAgICAgY2xpY2tDaGVja1xuLy8gICAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgdG9Eb0ZhY3RvcnkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=