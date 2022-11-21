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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --superLight:#f8fafc;\n    --light: #e2e8f0;\n    --medium: #94a3b8;\n    --dark: #475569;\n    --superDark: #0f172a;\n    font-family: sans-serif;\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 20% 80%;\n    margin: 0;\n    min-height: 100vh;\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n    background-color: var(--light);\n    \n    \n}\n\n.sidebarField{\n    display: flex;\n    align-items: center;\n    padding-left: 30px;\n    margin-bottom: 30px;\n    gap: 10px;\n}\n\n.sidebar{\n    color: black;\n    padding: 10px;\n}\n\n.icon{\n    background-color: #0f172a;\n    border-radius: 100%;\n    height: 30px;\n    width: 30px;\n}\n\nnav{\n    display: flex;\n    flex-direction: column;\n    /* gap: 10px; */\n    align-items: center;\n}\n\n.project{\n    cursor: pointer;\n    width: 100%;\n    text-align: center;\n    \n    padding: 15px;\n}\n\n.project.active{\n    background-color: var(--light);\n    font-weight: bold;\n}\n\nhr{\n    margin: 2px;\n    width: 60%;\n}\n\n\n.add{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--superDark);\n    color: var(--superLight);\n    font-weight: bold;\n    border-radius: 100%;\n    width: 30px;\n    height: 30px;\n    font-size: 1.3rem;\n    cursor: pointer;\n}\n\n.todo{\n    display: grid;\n    grid-template-columns: auto 1fr auto auto;\n    align-items: center;\n    gap: 15px;\n    height: 50px;\n    width: 95%;\n    background-color: white;\n    border-radius: 4px;\n    padding: 5px;\n    cursor: pointer;\n}\n\n.todo.crossed{\n    color: var(--medium);\n}\n\n.checkBox{\n    width: 10px;\n    height: 10px;\n    border: 1px solid black;\n}\n\n.checkBox:hover{\n    background-color: var(--superDark);\n}\n\n.priority{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n    width: 100px;\n    height: 23px;\n}\n\ninput[type=\"radio\"]{\n    width: 1.2rem;\n}\n\n.overlay{\n    /* Transparent */\n    opacity: 0;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transition: 200ms ease-in-out;\n    background-color: rgba(0,0,0,0.7);\n    pointer-events: none;\n    /* What happens is that overlay now is covering\n    all the page. Everything is under overay, so that it\n    is now blocking buttons. To eliminate that we say\n    it does not have any pointer events*/\n}\n\n.overlay.active{\n    opacity: 1;\n    pointer-events: all;\n}\n\n.modal{\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%)scale(0);\n    transition: 200ms ease-in-out;\n    z-index: 10;\n    width: 60%;\n    height: 50%;\n    background-color: white;\n    border-radius: 5px;\n    padding: 10px;\n\n}\n\n.modal.active{\n    transform: translate(-50%, -50%)scale(1);\n}\n\n\n/* Form styles */\n\nform{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\ninput:focus{\n    outline: none; /*Remove default blue outline from Safari*/\n    border: 2px solid var(--dark);\n  }\n\nbutton,\nlabel,\ninput,\nselect\n   {\n    width: 70%;\n    font-family: inherit;\n    font-size: 100%;\n    margin: 0;\n    box-sizing: border-box;\n    padding: 5px;\n    height: 30px;\n    border-radius: 6px;\n  }\ninput, textarea{\n    border: 1px solid black;\n  }\n\ntextarea{\n    font-family: inherit;\n    width: 70%;\n}\n\n  .field{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,aAAa;IACb,8BAA8B;;;AAGlC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;;IAElB,aAAa;AACjB;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,UAAU;AACd;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kCAAkC;IAClC,wBAAwB;IACxB,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,yCAAyC;IACzC,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,UAAU;IACV,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,iCAAiC;IACjC,oBAAoB;IACpB;;;wCAGoC;AACxC;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,wCAAwC;IACxC,6BAA6B;IAC7B,WAAW;IACX,UAAU;IACV,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;;AAEjB;;AAEA;IACI,wCAAwC;AAC5C;;;AAGA,gBAAgB;;AAEhB;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,aAAa,EAAE,0CAA0C;IACzD,6BAA6B;EAC/B;;AAEF;;;;;IAKI,UAAU;IACV,oBAAoB;IACpB,eAAe;IACf,SAAS;IACT,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,kBAAkB;EACpB;AACF;IACI,uBAAuB;EACzB;;AAEF;IACI,oBAAoB;IACpB,UAAU;AACd;;EAEE;IACE,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB","sourcesContent":[":root{\n    --superLight:#f8fafc;\n    --light: #e2e8f0;\n    --medium: #94a3b8;\n    --dark: #475569;\n    --superDark: #0f172a;\n    font-family: sans-serif;\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 20% 80%;\n    margin: 0;\n    min-height: 100vh;\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n    background-color: var(--light);\n    \n    \n}\n\n.sidebarField{\n    display: flex;\n    align-items: center;\n    padding-left: 30px;\n    margin-bottom: 30px;\n    gap: 10px;\n}\n\n.sidebar{\n    color: black;\n    padding: 10px;\n}\n\n.icon{\n    background-color: #0f172a;\n    border-radius: 100%;\n    height: 30px;\n    width: 30px;\n}\n\nnav{\n    display: flex;\n    flex-direction: column;\n    /* gap: 10px; */\n    align-items: center;\n}\n\n.project{\n    cursor: pointer;\n    width: 100%;\n    text-align: center;\n    \n    padding: 15px;\n}\n\n.project.active{\n    background-color: var(--light);\n    font-weight: bold;\n}\n\nhr{\n    margin: 2px;\n    width: 60%;\n}\n\n\n.add{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--superDark);\n    color: var(--superLight);\n    font-weight: bold;\n    border-radius: 100%;\n    width: 30px;\n    height: 30px;\n    font-size: 1.3rem;\n    cursor: pointer;\n}\n\n.todo{\n    display: grid;\n    grid-template-columns: auto 1fr auto auto;\n    align-items: center;\n    gap: 15px;\n    height: 50px;\n    width: 95%;\n    background-color: white;\n    border-radius: 4px;\n    padding: 5px;\n    cursor: pointer;\n}\n\n.todo.crossed{\n    color: var(--medium);\n}\n\n.checkBox{\n    width: 10px;\n    height: 10px;\n    border: 1px solid black;\n}\n\n.checkBox:hover{\n    background-color: var(--superDark);\n}\n\n.priority{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n    width: 100px;\n    height: 23px;\n}\n\ninput[type=\"radio\"]{\n    width: 1.2rem;\n}\n\n.overlay{\n    /* Transparent */\n    opacity: 0;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transition: 200ms ease-in-out;\n    background-color: rgba(0,0,0,0.7);\n    pointer-events: none;\n    /* What happens is that overlay now is covering\n    all the page. Everything is under overay, so that it\n    is now blocking buttons. To eliminate that we say\n    it does not have any pointer events*/\n}\n\n.overlay.active{\n    opacity: 1;\n    pointer-events: all;\n}\n\n.modal{\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%)scale(0);\n    transition: 200ms ease-in-out;\n    z-index: 10;\n    width: 60%;\n    height: 50%;\n    background-color: white;\n    border-radius: 5px;\n    padding: 10px;\n\n}\n\n.modal.active{\n    transform: translate(-50%, -50%)scale(1);\n}\n\n\n/* Form styles */\n\nform{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\ninput:focus{\n    outline: none; /*Remove default blue outline from Safari*/\n    border: 2px solid var(--dark);\n  }\n\nbutton,\nlabel,\ninput,\nselect\n   {\n    width: 70%;\n    font-family: inherit;\n    font-size: 100%;\n    margin: 0;\n    box-sizing: border-box;\n    padding: 5px;\n    height: 30px;\n    border-radius: 6px;\n  }\ninput, textarea{\n    border: 1px solid black;\n  }\n\ntextarea{\n    font-family: inherit;\n    width: 70%;\n}\n\n  .field{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }"],"sourceRoot":""}]);
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
        // if(project.getSelected() === 1){
        if(project.selected === 1){
            div.classList.add('active');
        }
        // div.dataset.projectName = project.getTitle();
        const hr = document.createElement('hr');

        const listToDo = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.filterToDo)(project.title);
        console.log(project.title);
        console.log("This is its list:")
        console.log(listToDo);
        if(listToDo .length !== 0){
            printToDoList(listToDo);
        }else{
            console.log("NOOO ARRAYY")
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
/* harmony export */   "resetSelectedProject": () => (/* binding */ resetSelectedProject),
/* harmony export */   "retrieveStoredProject": () => (/* binding */ retrieveStoredProject)
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



function submitForm () {
    
    
    //Filter projectList to see which one has getSelected === 1 y le metemos esa property
    const projectSelected = getSelected(projectList);
    const NewToDo = new _toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"](title.value,date.value,priority.value,notes.value,projectSelected);
    toDoList.push(NewToDo);
    
    const listWithProject = filterToDo(projectSelected);

    // STORE THE LIST 
    
    let ToDoList_serialized = JSON.stringify(toDoList);
    localStorage.setItem("ToDoStored" , ToDoList_serialized);
    
    (0,_domRender_js__WEBPACK_IMPORTED_MODULE_2__.printToDoList)(listWithProject);
    
    clearInputs();
  
}




let buttonProject = document.querySelector("[data-close-modal = 'addProject']")
buttonProject.addEventListener('click' , submitProject)


const name = document.querySelector('#name');
const description = document.querySelector('#description');

function submitProject () {
    

    const NewProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](name.value,description.value,0)

    projectList.push(NewProject);
    
    // STORE THE LIST 
    
    let projectList_serialized = JSON.stringify(projectList);
    localStorage.setItem("ProjectsStored" , projectList_serialized);

    
    (0,_domRender_js__WEBPACK_IMPORTED_MODULE_2__.printProjectList)(projectList);
    
    
    clearInputs();
  
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
    console.log(projectName);
    console.log("This are the toDos that match")
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
        const newToDo = new _toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"](normalObject[i].title, normalObject[i].dueDate, normalObject[i].priority, normalObject[i].description, normalObject[i].project);
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
    constructor (_title , _dueDate, _priority, _description, _project) {
        this.title = _title;
        this.dueDate = _dueDate;
        this.priority = _priority;
        this.description = _description;
        this.project = _project;
        this.checklist = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmtDO0FBQ21EOztBQUVyRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsOENBQThDO0FBQzlDLEtBQUs7QUFDTCwrQ0FBK0M7QUFDL0MsS0FBSztBQUNMLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb21SZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLXN1cGVyTGlnaHQ6I2Y4ZmFmYztcXG4gICAgLS1saWdodDogI2UyZThmMDtcXG4gICAgLS1tZWRpdW06ICM5NGEzYjg7XFxuICAgIC0tZGFyazogIzQ3NTU2OTtcXG4gICAgLS1zdXBlckRhcms6ICMwZjE3MmE7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBcXG4gICAgXFxufVxcblxcbi5zaWRlYmFyRmllbGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uaWNvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxubmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBnYXA6IDEwcHg7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC5hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmhye1xcbiAgICBtYXJnaW46IDJweDtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuXFxuLmFkZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cGVyRGFyayk7XFxuICAgIGNvbG9yOiB2YXIoLS1zdXBlckxpZ2h0KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2Rve1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby5jcm9zc2Vke1xcbiAgICBjb2xvcjogdmFyKC0tbWVkaXVtKTtcXG59XFxuXFxuLmNoZWNrQm94e1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNoZWNrQm94OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXBlckRhcmspO1xcbn1cXG5cXG4ucHJpb3JpdHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMjNweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXXtcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG59XFxuXFxuLm92ZXJsYXl7XFxuICAgIC8qIFRyYW5zcGFyZW50ICovXFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgLyogV2hhdCBoYXBwZW5zIGlzIHRoYXQgb3ZlcmxheSBub3cgaXMgY292ZXJpbmdcXG4gICAgYWxsIHRoZSBwYWdlLiBFdmVyeXRoaW5nIGlzIHVuZGVyIG92ZXJheSwgc28gdGhhdCBpdFxcbiAgICBpcyBub3cgYmxvY2tpbmcgYnV0dG9ucy4gVG8gZWxpbWluYXRlIHRoYXQgd2Ugc2F5XFxuICAgIGl0IGRvZXMgbm90IGhhdmUgYW55IHBvaW50ZXIgZXZlbnRzKi9cXG59XFxuXFxuLm92ZXJsYXkuYWN0aXZle1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ubW9kYWx7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG59XFxuXFxuLm1vZGFsLmFjdGl2ZXtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlzY2FsZSgxKTtcXG59XFxuXFxuXFxuLyogRm9ybSBzdHlsZXMgKi9cXG5cXG5mb3Jte1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuaW5wdXQ6Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7IC8qUmVtb3ZlIGRlZmF1bHQgYmx1ZSBvdXRsaW5lIGZyb20gU2FmYXJpKi9cXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyayk7XFxuICB9XFxuXFxuYnV0dG9uLFxcbmxhYmVsLFxcbmlucHV0LFxcbnNlbGVjdFxcbiAgIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgfVxcbmlucHV0LCB0ZXh0YXJlYXtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB9XFxuXFxudGV4dGFyZWF7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG4gIC5maWVsZHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGFBQWE7SUFDYiw4QkFBOEI7OztBQUdsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCOztJQUVsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCOzs7d0NBR29DO0FBQ3hDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUF3QztJQUN4Qyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7O0FBR0EsZ0JBQWdCOztBQUVoQjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWEsRUFBRSwwQ0FBMEM7SUFDekQsNkJBQTZCO0VBQy9COztBQUVGOzs7OztJQUtJLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7QUFDRjtJQUNJLHVCQUF1QjtFQUN6Qjs7QUFFRjtJQUNJLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0VBRUU7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tc3VwZXJMaWdodDojZjhmYWZjO1xcbiAgICAtLWxpZ2h0OiAjZTJlOGYwO1xcbiAgICAtLW1lZGl1bTogIzk0YTNiODtcXG4gICAgLS1kYXJrOiAjNDc1NTY5O1xcbiAgICAtLXN1cGVyRGFyazogIzBmMTcyYTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLnNpZGViYXJGaWVsZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5pY29ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNzJhO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG5uYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGdhcDogMTBweDsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0LmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaHJ7XFxuICAgIG1hcmdpbjogMnB4O1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG5cXG4uYWRke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VwZXJEYXJrKTtcXG4gICAgY29sb3I6IHZhcigtLXN1cGVyTGlnaHQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG97XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLmNyb3NzZWR7XFxuICAgIGNvbG9yOiB2YXIoLS1tZWRpdW0pO1xcbn1cXG5cXG4uY2hlY2tCb3h7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2hlY2tCb3g6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cGVyRGFyayk7XFxufVxcblxcbi5wcmlvcml0eXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAyM3B4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJde1xcbiAgICB3aWR0aDogMS4ycmVtO1xcbn1cXG5cXG4ub3ZlcmxheXtcXG4gICAgLyogVHJhbnNwYXJlbnQgKi9cXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAvKiBXaGF0IGhhcHBlbnMgaXMgdGhhdCBvdmVybGF5IG5vdyBpcyBjb3ZlcmluZ1xcbiAgICBhbGwgdGhlIHBhZ2UuIEV2ZXJ5dGhpbmcgaXMgdW5kZXIgb3ZlcmF5LCBzbyB0aGF0IGl0XFxuICAgIGlzIG5vdyBibG9ja2luZyBidXR0b25zLiBUbyBlbGltaW5hdGUgdGhhdCB3ZSBzYXlcXG4gICAgaXQgZG9lcyBub3QgaGF2ZSBhbnkgcG9pbnRlciBldmVudHMqL1xcbn1cXG5cXG4ub3ZlcmxheS5hY3RpdmV7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5tb2RhbHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKXNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbn1cXG5cXG4ubW9kYWwuYWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKXNjYWxlKDEpO1xcbn1cXG5cXG5cXG4vKiBGb3JtIHN0eWxlcyAqL1xcblxcbmZvcm17XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5pbnB1dDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTsgLypSZW1vdmUgZGVmYXVsdCBibHVlIG91dGxpbmUgZnJvbSBTYWZhcmkqL1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrKTtcXG4gIH1cXG5cXG5idXR0b24sXFxubGFiZWwsXFxuaW5wdXQsXFxuc2VsZWN0XFxuICAge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB9XFxuaW5wdXQsIHRleHRhcmVhe1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIH1cXG5cXG50ZXh0YXJlYXtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcbiAgLmZpZWxke1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBmbGFnIGZyb20gJy4vc3Zncy9mbGFnLnN2ZydcbmltcG9ydCB7cmVzZXRTZWxlY3RlZFByb2plY3QgLCBmaWx0ZXJUb0RvICwgcmV0cmlldmVTdG9yZWRQcm9qZWN0fSBmcm9tICcuL2luZGV4LmpzJztcblxuLy9mdW5jdGlvbnMgdG8gYXBwZW5kXG5cbmNvbnN0IGNyZWF0ZURpdkNsYXNzID0gKGNsYXNzTmFtZSkgPT57XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiBkaXY7XG59XG5jb25zdCBjcmVhdGVEaXZUZXh0ID0gKHRleHQpID0+e1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LnRleHRDb250ZW50PXRleHRcbiAgICByZXR1cm4gZGl2O1xufVxuXG5jb25zdCBhcHBlbmRFbGVtZW50cyA9IChwYXJlbnQsIC4uLmNoaWxkcmVuKSA9PntcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9KVxufVxuXG4vL1ByaW50IHN0cnVjdHVyZSBvZiBwYWdlXG5cbmNvbnN0IGluaXRpYWxpemVEb20gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBzaWRlQmFyID0gY3JlYXRlRGl2Q2xhc3MoXCJzaWRlYmFyXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG4gICAgICAgIGNvbnN0IHNpZGVCYXJGaWVsZCA9IGNyZWF0ZURpdkNsYXNzKFwic2lkZWJhckZpZWxkXCIpO1xuICAgICAgICAgICAgY29uc3Qgc2lkZWJhckljb24gPSBjcmVhdGVEaXZDbGFzcyhcImljb25cIik7XG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZURpdiA9IGNyZWF0ZURpdlRleHQoXCJVc2VybmFtZVwiKTtcbiAgICAgICAgYXBwZW5kRWxlbWVudHMoc2lkZUJhckZpZWxkLHNpZGViYXJJY29uLHVzZXJuYW1lRGl2KTtcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHNpZGVCYXJGaWVsZCk7XG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3RMaXN0JylcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKG5hdilcbiAgICBjb25zdCBkaXZBZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdkFkZDIgPSBjcmVhdGVEaXZDbGFzcyhcImFkZFwiKTtcbiAgICAgICAgICAgICAgICBkaXZBZGQyLmRhdGFzZXQub3Blbk1vZGFsID0gXCIjYWRkUHJvamVjdFwiXG4gICAgICAgICAgICAgICAgZGl2QWRkMi50ZXh0Q29udGVudCA9IFwiK1wiXG4gICAgICAgIGRpdkFkZFByb2plY3QuYXBwZW5kQ2hpbGQoZGl2QWRkMik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGRpdkFkZFByb2plY3QpO1xuICAgIC8vIDxkaXY+PGRpdiBjbGFzcz1cImFkZFwiPis8L2Rpdj48L2Rpdj5cbiAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlRGl2Q2xhc3MoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGRpdkFkZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZGl2QWRkID0gY3JlYXRlRGl2Q2xhc3MoXCJhZGRcIik7XG4gICAgICAgICAgICAvLyBkaXZBZGQuc2V0QXR0cmlidXRlKCdpZCcgLCAnYWRkVG9EbycpO1xuICAgICAgICAgICAgZGl2QWRkLmRhdGFzZXQub3Blbk1vZGFsID0gXCIjYWRkVG9Eb1wiXG4gICAgICAgICAgICBkaXZBZGQudGV4dENvbnRlbnQgPSBcIitcIlxuICAgICAgICAgICAgZGl2QWRkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkFkZCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2QWRkQ29udGFpbmVyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBjcmVhdGVEaXZDbGFzcyhcIm92ZXJsYXlcIik7XG4gICAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2lkJyAsIFwib3ZlcmxheVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIGNvbnN0IG1vZGFsID0gY3JlYXRlRGl2Q2xhc3MoXCJtb2RhbFwiKTtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJyAsIFwiYWRkVG9Eb1wiKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJyAsICduZXdUb0RvJyk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZDEgPSBjcmVhdGVEaXZDbGFzcyhcImZpZWxkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsVGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCd0aXRsZScpO1xuICAgICAgICAgICAgICAgIGxhYmVsVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOiAqXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScgLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcgLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgnbmFtZScgLCAndGl0bGUnKTtcbiAgICAgICAgICAgIGFwcGVuZEVsZW1lbnRzKGZpZWxkMSxsYWJlbFRpdGxlLGlucHV0VGl0bGUpO1xuICAgICAgICAgICAgY29uc3QgZmllbGQyID0gY3JlYXRlRGl2Q2xhc3MoXCJmaWVsZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbE5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbE5vdGVzLnRleHRDb250ZW50ID0gXCJOb3RlczpcIlxuICAgICAgICAgICAgICAgIGxhYmVsTm90ZXMuc2V0QXR0cmlidXRlKCdmb3InLCdub3RlcycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Tm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgICAgICAgICAgaW5wdXROb3Rlcy5zZXRBdHRyaWJ1dGUoJ2lkJyAsICdub3RlcycpO1xuICAgICAgICAgICAgICAgIGlucHV0Tm90ZXMuc2V0QXR0cmlidXRlKCduYW1lJyAsICdub3RlcycpO1xuICAgICAgICAgICAgICAgIGlucHV0Tm90ZXMuc2V0QXR0cmlidXRlKCdyb3dzJyAsICc0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXROb3Rlcy5zZXRBdHRyaWJ1dGUoJ2NvbHMnICwgJzUwJyk7XG4gICAgICAgICAgICBhcHBlbmRFbGVtZW50cyhmaWVsZDIsbGFiZWxOb3RlcyxpbnB1dE5vdGVzKTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkMyA9IGNyZWF0ZURpdkNsYXNzKFwiZmllbGRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbERhdGUuc2V0QXR0cmlidXRlKCdmb3InLCdkYXRlJyk7XG4gICAgICAgICAgICAgICAgbGFiZWxEYXRlLnRleHRDb250ZW50ID0gXCJEYXRlOlwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKCd0eXBlJyAsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZSgnaWQnICwgJ2RhdGUnKTtcbiAgICAgICAgICAgICAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKCduYW1lJyAsICdkYXRlJyk7XG4gICAgICAgICAgICBhcHBlbmRFbGVtZW50cyhmaWVsZDMsbGFiZWxEYXRlLGlucHV0RGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZDQ9IGNyZWF0ZURpdkNsYXNzKFwiZmllbGRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWxQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgbGFiZWxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiU2VsZWN0IGEgcHJpb3JpdHkgbGV2ZWw6XCI7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScgLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJyAsICdwcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uMS50ZXh0Q29udGVudCA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjIuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdIaWdoJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjIudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24zLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTWVkaXVtJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjMudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdMb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uNC50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgICAgICAgICAgICAgYXBwZW5kRWxlbWVudHMoc2VsZWN0UHJpb3JpdHksb3B0aW9uMSxvcHRpb24yLG9wdGlvbjMsb3B0aW9uNCk7XG4gICAgICAgICAgICBhcHBlbmRFbGVtZW50cyhmaWVsZDQsbGFiZWxQcmlvcml0eSxzZWxlY3RQcmlvcml0eSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRUb0RvJyk7XG4gICAgICAgICAgICBidXR0b24uZGF0YXNldC5jbG9zZU1vZGFsPVwiYWRkVG9Eb1wiO1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgTm90ZVwiO1xuICAgICAgICBhcHBlbmRFbGVtZW50cyhmb3JtLGZpZWxkMSxmaWVsZDIsZmllbGQzLGZpZWxkNCxidXR0b24pO1xuXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL01PREFMIDJcbiAgICAgICAgY29uc3QgbW9kYWxQcm9qZWN0ID0gY3JlYXRlRGl2Q2xhc3MoXCJtb2RhbFwiKTtcbiAgICAgICAgbW9kYWxQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnICwgXCJhZGRQcm9qZWN0XCIpO1xuICAgICAgICBjb25zdCBmb3JtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybTIuc2V0QXR0cmlidXRlKCdpZCcgLCAnbmV3UHJvamVjdCcpO1xuICAgICAgICAgICAgY29uc3QgZmllbGQ1ID0gY3JlYXRlRGl2Q2xhc3MoXCJmaWVsZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsTmFtZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25hbWUnKTtcbiAgICAgICAgICAgICAgICBsYWJlbE5hbWUudGV4dENvbnRlbnQgPSBcIk5hbWU6ICpcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaW5wdXROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScgLCAnbmFtZScpO1xuICAgICAgICAgICAgICAgIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJyAsICduYW1lJyk7XG4gICAgICAgICAgICAgICAgaW5wdXROYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScgLCAnbmFtZScpO1xuICAgICAgICAgICAgYXBwZW5kRWxlbWVudHMoZmllbGQ1LGxhYmVsTmFtZSxpbnB1dE5hbWUpO1xuICAgICAgICAgICAgY29uc3QgZmllbGQ2ID0gY3JlYXRlRGl2Q2xhc3MoXCJmaWVsZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIlxuICAgICAgICAgICAgICAgIGxhYmVsRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdmb3InLCdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJyAsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJyAsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyb3dzJyAsICc0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NvbHMnICwgJzUwJyk7XG4gICAgICAgICAgICBhcHBlbmRFbGVtZW50cyhmaWVsZDYsbGFiZWxEZXNjcmlwdGlvbixpbnB1dERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYnV0dG9uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b25Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3QnKTtcbiAgICAgICAgICAgIGJ1dHRvblByb2plY3QuZGF0YXNldC5jbG9zZU1vZGFsPVwiYWRkUHJvamVjdFwiO1xuICAgICAgICAgICAgYnV0dG9uUHJvamVjdC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICAgICAgYXBwZW5kRWxlbWVudHMoZm9ybTIsZmllbGQ1LGZpZWxkNixidXR0b25Qcm9qZWN0KTtcblxuICAgICAgICBtb2RhbFByb2plY3QuYXBwZW5kQ2hpbGQoZm9ybTIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxQcm9qZWN0KTtcblxuLy8gQ0FMTCBMT0NBTCBTVE9SQUdFXG5cbiAgICAvLyAgY29uc3QgcHJvamVjdExpc3RTdG9yZWQgPSByZXRyaWV2ZVN0b3JlZFByb2plY3QoKVxuICAgIC8vICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdFN0b3JlZClcbiAgICAvLyAgcHJpbnRQcm9qZWN0TGlzdChwcm9qZWN0TGlzdFN0b3JlZClcbi8vIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuLy8gICAgIGxldCBTdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RzU3RvcmVkJykpO1xuLy8gICAgIGNvbnNvbGUubG9nKFN0b3JlZFByb2plY3RzKTtcbi8vICAgfVxuLy8gICBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZyhcIk5PIExPQ0FMIFNUT1JBR0VFRUVFXCIpXG4vLyAgIH1cbiAgICBcblxufVxuXG5jb25zdCBpbml0aWFsaXplTW9kYWxzID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1vcGVuLW1vZGFsXVwiKTtcbiAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jbG9zZS1tb2RhbF1cIilcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKTtcblxuICAgIG9wZW5Nb2RhbEJ1dHRvbnMuZm9yRWFjaCggYnV0dG9uID0+e1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkT3BlbiA9IGUudGFyZ2V0LmRhdGFzZXQub3Blbk1vZGFsO1xuICAgICAgICAgICAgY29uc3QgbW9kYWxUb09wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkT3Blbik7XG4gICAgICAgICAgICBvcGVuTW9kYWwobW9kYWxUb09wZW4pO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjbG9zZU1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgY29uc3QgbW9kYWxUb0Nsb3NlPSBidXR0b24uY2xvc2VzdCgnLm1vZGFsJyk7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsVG9DbG9zZSk7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwuYWN0aXZlJylcbiAgICAgICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xuICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgXG5cbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwgKG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuXG59XG5cblxuY29uc3QgcHJpbnRUb0RvTGlzdCA9IChsaXN0KSA9PntcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG4gICAgbGlzdC5mb3JFYWNoKCAodG9EbykgPT57XG4gICAgICAgIHByaW50VG9Ebyh0b0RvKVxuICAgIH0pXG5cbiAgICBjb25zdCBkaXZBZGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdkFkZCA9IGNyZWF0ZURpdkNsYXNzKFwiYWRkXCIpO1xuICAgICAgICAgICAgLy8gZGl2QWRkLnNldEF0dHJpYnV0ZSgnaWQnICwgJ2FkZFRvRG8nKTtcbiAgICAgICAgICAgIGRpdkFkZC5kYXRhc2V0Lm9wZW5Nb2RhbCA9IFwiI2FkZFRvRG9cIlxuICAgICAgICAgICAgZGl2QWRkLnRleHRDb250ZW50ID0gXCIrXCJcbiAgICAgICAgICAgIGRpdkFkZENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZBZGQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2QWRkQ29udGFpbmVyKTtcblxuICAgIGluaXRpYWxpemVNb2RhbHMoKTtcblxuXG59XG5jb25zdCBwcmludFRvRG8gPSAodG9EbykgPT57XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGNyZWF0ZURpdkNsYXNzKFwidG9kb1wiKTtcbiAgICAgICAgY29uc3QgZGl2Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gY3JlYXRlRGl2Q2xhc3MoXCJjaGVja0JveFwiKTtcbiAgICAgICAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgICAgICB0b0RvLmNsaWNrQ2hlY2soKTtcblxuICAgICAgICAgICAgICAgIHdoaWxlICh0b0RvQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b0RvQ29udGFpbmVyLmxhc3RDaGlsZCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRDaGVjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGRpdkNoZWNrLmFwcGVuZENoaWxkKGNoZWNrKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvRG8udGl0bGU7XG5cbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gdG9Eby5kdWVEYXRlO1xuICAgICAgICAgICBcbiAgICAgICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gY3JlYXRlRGl2Q2xhc3MoXCJwcmlvcml0eVwiKTtcbiAgICAgICAgc3ZnQ29udGFpbmVyLnRleHRDb250ZW50ID0gdG9Eby5wcmlvcml0eTtcbiAgICAgICAgc2V0Q29sb3JQcmlvcml0eShzdmdDb250YWluZXIsdG9Ebyk7XG4gICAgICAgIC8vIGNvbnN0IHN2Z0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIC8vIHN2Z0ltYWdlLnNyYyA9IGZsYWc7XG4gICAgICAgIC8vIHN2Z0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdmdJbWFnZSk7XG5cbiAgICAgICAgc2V0Q2hlY2soKTtcbiAgICAgICAgXG4gICAgXG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b0RvQ29udGFpbmVyKTtcblxuICAgIGZ1bmN0aW9uIHNldENoZWNrKCkge1xuICAgICAgICBcbiAgICAgICAgaWYodG9Eby5jaGVja2xpc3Q9PT0xKXtcbiAgICAgICAgICAgIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImNyb3NzZWRcIilcbiAgICAgICAgICAgIGNvbnN0IGNyb3NzT3V0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3MnKTtcbiAgICAgICAgICAgIGNyb3NzT3V0MS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBjcm9zc091dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzJyk7XG4gICAgICAgICAgICBjcm9zc091dDIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBjcm9zc091dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzJyk7XG4gICAgICAgICAgICBjcm9zc091dDMuYXBwZW5kQ2hpbGQoc3ZnQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgYXBwZW5kRWxlbWVudHModG9Eb0NvbnRhaW5lcixkaXZDaGVjayxjcm9zc091dDEsY3Jvc3NPdXQyLGNyb3NzT3V0Myk7XG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjcm9zc2VkXCIpXG4gICAgICAgICAgICBhcHBlbmRFbGVtZW50cyh0b0RvQ29udGFpbmVyLGRpdkNoZWNrLHRpdGxlLGRhdGUsc3ZnQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBzZXRDb2xvclByaW9yaXR5KGRpdiAsIHRvRG8pe1xuICAgIGlmKHRvRG8ucHJpb3JpdHkgPT09IFwiXCIpe1xuICAgICAgICByZXR1cm47XG4gICAgfWVsc2UgaWYgKHRvRG8ucHJpb3JpdHkgID09PSBcIkhpZ2hcIil7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImNvbG9yOiByZWQ7XCIpO1xuICAgIH1lbHNlIGlmICh0b0RvLnByaW9yaXR5ICA9PT0gXCJNZWRpdW1cIil7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImNvbG9yOiBibHVlO1wiKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiY29sb3I6IGdyZWVuO1wiKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuXG5jb25zdCBwcmludFByb2plY3RMaXN0ID0gKHByb2plY3RzKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbmF2UG9pbnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpO1xuICAgIHdoaWxlIChuYXZQb2ludGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbmF2UG9pbnRlci5yZW1vdmVDaGlsZChuYXZQb2ludGVyLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgcHJvamVjdHMuZm9yRWFjaCggKHByb2plY3QpID0+e1xuICAgICAgICBwcmludFByb2plY3QocHJvamVjdClcbiAgICB9KVxuXG4gICAgY29uc3QgZGl2QWRkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkaXZBZGQgPSBjcmVhdGVEaXZDbGFzcyhcImFkZFwiKTtcbiAgICAgICAgICAgIC8vIGRpdkFkZC5zZXRBdHRyaWJ1dGUoJ2lkJyAsICdhZGRUb0RvJyk7XG4gICAgICAgICAgICBkaXZBZGQuZGF0YXNldC5vcGVuTW9kYWwgPSBcIiNhZGRQcm9qZWN0XCJcbiAgICAgICAgICAgIGRpdkFkZC50ZXh0Q29udGVudCA9IFwiK1wiXG4gICAgICAgICAgICBkaXZBZGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2QWRkKTtcbiAgICBuYXZQb2ludGVyLmFwcGVuZENoaWxkKGRpdkFkZENvbnRhaW5lcik7XG4gICAgXG4gICAgaW5pdGlhbGl6ZU1vZGFscygpO1xuICAgIFxufVxuXG5jb25zdCBwcmludFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICBcbiAgICBjb25zdCBuYXZQb2ludGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RMaXN0Jyk7XG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZURpdkNsYXNzKFwicHJvamVjdFwiKTtcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgLy8gaWYocHJvamVjdC5nZXRTZWxlY3RlZCgpID09PSAxKXtcbiAgICAgICAgaWYocHJvamVjdC5zZWxlY3RlZCA9PT0gMSl7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGl2LmRhdGFzZXQucHJvamVjdE5hbWUgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcblxuICAgICAgICBjb25zdCBsaXN0VG9EbyA9IGZpbHRlclRvRG8ocHJvamVjdC50aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QudGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgaXRzIGxpc3Q6XCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3RUb0RvKTtcbiAgICAgICAgaWYobGlzdFRvRG8gLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICBwcmludFRvRG9MaXN0KGxpc3RUb0RvKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5PT08gQVJSQVlZXCIpXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vZ2V0IGRhdGFzZXRcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgIC8vcmVtb3ZlIGFjdGl2ZSBmcm9tIG90aGVzXG4gICAgICAgICAgICByZW1vdmVBY3RpdmVDbGFzcyhuYXZQb2ludGVyKTtcbiAgICAgICAgICAgIC8vYWRkIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIC8vYWN0dWFsUHJvamVjdCB0byBzdG9yZSB0aGUgZGF0YXNldCBhbmQgYWRkIGl0IHRvIG5ldyBjcmVhdGVkIHRvRG9cbiAgICAgICAgICAgIHJlc2V0U2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgICAgICAgICBwcm9qZWN0LnNlbGVjdGVkID0xO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2Rpc3BsYXlMaXN0OiB0byBkaXNwbGF5IHRvZG9zIHdpdGggdGhhdCBuYW1lXG4gICAgICAgICAgICBjb25zdCBsaXN0VG9EbyA9IGZpbHRlclRvRG8ocHJvamVjdC50aXRsZSk7XG4gICAgICAgICAgICBwcmludFRvRG9MaXN0KGxpc3RUb0RvKTtcblxuICAgICAgICB9KTtcbiAgICBhcHBlbmRFbGVtZW50cyhuYXZQb2ludGVyLGRpdixocik7XG4gICAgXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUNsYXNzIChlbGVtZW50KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pXG59XG5cblxuXG5leHBvcnQge2luaXRpYWxpemVEb20gLCBpbml0aWFsaXplTW9kYWxzICwgcHJpbnRUb0RvTGlzdCwgcHJpbnRQcm9qZWN0TGlzdH1cbiIsImltcG9ydCBUb0RvIGZyb20gXCIuL3RvRG8uanNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7aW5pdGlhbGl6ZURvbSAsIGluaXRpYWxpemVNb2RhbHMgLCBwcmludFRvRG9MaXN0LCBwcmludFByb2plY3RMaXN0fSBmcm9tIFwiLi9kb21SZW5kZXIuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cbmluaXRpYWxpemVEb20oKTtcbmluaXRpYWxpemVNb2RhbHMoKTtcblxuY29uc3QgdG9Eb0xpc3QgPSBbXTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9Eb1N0b3JlZCcpKSB7XG4gICAgcmV0cmlldmVTdG9yZWRUb0RvKHRvRG9MaXN0KTtcbn0gXG4vL3ByaW50IHByb2plY3QgbGlzdFxuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMnKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcblxuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcbi8vIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoKTtcbi8vICAgICAvL05FRURTIElNUFJPVkVNRU5UXG4vLyBkZWZhdWx0UHJvamVjdC5zZXRUaXRsZShcIkRlZmF1bHQgUHJvamVjdFwiKTtcbi8vIGRlZmF1bHRQcm9qZWN0LnNldERlc2NyaXB0aW9uKFwiRGVmYXVsdFwiKTtcbi8vIGRlZmF1bHRQcm9qZWN0LnNldFNlbGVjdGVkKDEpO1xuXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0c1N0b3JlZCcpKSB7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHQgUHJvamVjdFwiLCBcIkRlZmF1bHRcIiwxKTtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbiAgfSBlbHNlIHtcbiAgICByZXRyaWV2ZVN0b3JlZFByb2plY3QocHJvamVjdExpc3QpO1xuICB9XG5cbnByaW50UHJvamVjdExpc3QocHJvamVjdExpc3QpO1xuXG5cblxubGV0IGJ1dHRvblN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jbG9zZS1tb2RhbCA9ICdhZGRUb0RvJ11cIilcbmJ1dHRvblN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCBzdWJtaXRGb3JtKVxuXG5cblxuZnVuY3Rpb24gc3VibWl0Rm9ybSAoKSB7XG4gICAgXG4gICAgXG4gICAgLy9GaWx0ZXIgcHJvamVjdExpc3QgdG8gc2VlIHdoaWNoIG9uZSBoYXMgZ2V0U2VsZWN0ZWQgPT09IDEgeSBsZSBtZXRlbW9zIGVzYSBwcm9wZXJ0eVxuICAgIGNvbnN0IHByb2plY3RTZWxlY3RlZCA9IGdldFNlbGVjdGVkKHByb2plY3RMaXN0KTtcbiAgICBjb25zdCBOZXdUb0RvID0gbmV3IFRvRG8odGl0bGUudmFsdWUsZGF0ZS52YWx1ZSxwcmlvcml0eS52YWx1ZSxub3Rlcy52YWx1ZSxwcm9qZWN0U2VsZWN0ZWQpO1xuICAgIHRvRG9MaXN0LnB1c2goTmV3VG9Ebyk7XG4gICAgXG4gICAgY29uc3QgbGlzdFdpdGhQcm9qZWN0ID0gZmlsdGVyVG9Ebyhwcm9qZWN0U2VsZWN0ZWQpO1xuXG4gICAgLy8gU1RPUkUgVEhFIExJU1QgXG4gICAgXG4gICAgbGV0IFRvRG9MaXN0X3NlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeSh0b0RvTGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUb0RvU3RvcmVkXCIgLCBUb0RvTGlzdF9zZXJpYWxpemVkKTtcbiAgICBcbiAgICBwcmludFRvRG9MaXN0KGxpc3RXaXRoUHJvamVjdCk7XG4gICAgXG4gICAgY2xlYXJJbnB1dHMoKTtcbiAgXG59XG5cblxuXG5cbmxldCBidXR0b25Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNsb3NlLW1vZGFsID0gJ2FkZFByb2plY3QnXVwiKVxuYnV0dG9uUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCBzdWJtaXRQcm9qZWN0KVxuXG5cbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcblxuZnVuY3Rpb24gc3VibWl0UHJvamVjdCAoKSB7XG4gICAgXG5cbiAgICBjb25zdCBOZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZS52YWx1ZSxkZXNjcmlwdGlvbi52YWx1ZSwwKVxuXG4gICAgcHJvamVjdExpc3QucHVzaChOZXdQcm9qZWN0KTtcbiAgICBcbiAgICAvLyBTVE9SRSBUSEUgTElTVCBcbiAgICBcbiAgICBsZXQgcHJvamVjdExpc3Rfc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3RzU3RvcmVkXCIgLCBwcm9qZWN0TGlzdF9zZXJpYWxpemVkKTtcblxuICAgIFxuICAgIHByaW50UHJvamVjdExpc3QocHJvamVjdExpc3QpO1xuICAgIFxuICAgIFxuICAgIGNsZWFySW5wdXRzKCk7XG4gIFxufVxuXG5mdW5jdGlvbiBnZXRTZWxlY3RlZCAocHJvamVjdHMpIHtcbiAgICBcbiAgICAvLyBjb25zdCBwcm9qZWN0U2VsZWN0ZWQgPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmdldFNlbGVjdGVkKCkgPT09MSk7XG4gICAgZm9yIChsZXQgaT0gMCA7IGk8cHJvamVjdHMubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgLy8gaWYgKHByb2plY3RzW2ldLmdldFNlbGVjdGVkKCkgPT09MSl7XG4gICAgICAgIC8vICAgICByZXR1cm4gcHJvamVjdHNbaV0uZ2V0VGl0bGUoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAocHJvamVjdHNbaV0uc2VsZWN0ZWQgPT09MSl7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdHNbaV0udGl0bGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0U2VsZWN0ZWRQcm9qZWN0ICgpIHtcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKCBwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdC5zZWxlY3RlZCA9MDtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0cyAoKSB7XG4gICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgIG5vdGVzLnZhbHVlID0gXCJcIjtcbiAgICBkYXRlLnZhbHVlID0gXCJcIjtcbiAgICBuYW1lLnZhbHVlPSBcIlwiO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJUb0RvIChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBbXTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZSk7XG4gICAgY29uc29sZS5sb2coXCJUaGlzIGFyZSB0aGUgdG9Eb3MgdGhhdCBtYXRjaFwiKVxuICAgIGZvciAobGV0IGk9IDAgOyBpPHRvRG9MaXN0Lmxlbmd0aCA7IGkrKyl7XG4gICAgICAgIGlmICh0b0RvTGlzdFtpXS5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSl7XG4gICAgICAgICAgICBuZXdMaXN0LnB1c2godG9Eb0xpc3RbaV0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0xpc3Q7XG59XG4gXG5mdW5jdGlvbiByZXRyaWV2ZVN0b3JlZFByb2plY3QobGlzdCkge1xuICAgIFxuICAgIGNvbnN0IG5vcm1hbE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RzU3RvcmVkJykpO1xuICAgIGZvciAobGV0IGk9MDsgaTxub3JtYWxPYmplY3QubGVuZ3RoO2krKyl7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChub3JtYWxPYmplY3RbaV0udGl0bGUsbm9ybWFsT2JqZWN0W2ldLmRlc2NyaXB0aW9uLG5vcm1hbE9iamVjdFtpXS5zZWxlY3RlZCk7XG4gICAgICAgIGxpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlU3RvcmVkVG9EbyhsaXN0KXtcbiAgICBcbiAgICBjb25zdCBub3JtYWxPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUb0RvU3RvcmVkJykpO1xuXG4gICAgZm9yIChsZXQgaT0wOyBpPG5vcm1hbE9iamVjdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgY29uc3QgbmV3VG9EbyA9IG5ldyBUb0RvKG5vcm1hbE9iamVjdFtpXS50aXRsZSwgbm9ybWFsT2JqZWN0W2ldLmR1ZURhdGUsIG5vcm1hbE9iamVjdFtpXS5wcmlvcml0eSwgbm9ybWFsT2JqZWN0W2ldLmRlc2NyaXB0aW9uLCBub3JtYWxPYmplY3RbaV0ucHJvamVjdCk7XG4gICAgICAgIGxpc3QucHVzaChuZXdUb0RvKTtcbiAgICBcbiAgICB9XG59XG5cbmV4cG9ydCB7cmVzZXRTZWxlY3RlZFByb2plY3QgLCBmaWx0ZXJUb0RvLCByZXRyaWV2ZVN0b3JlZFByb2plY3R9OyIsIlxuXG4vLyBmdW5jdGlvbiBwcm9qZWN0RmFjdG9yeSAoKSB7XG5cbi8vICAgICBsZXQgX3RpdGxlID0gJyc7XG4vLyAgICAgbGV0IF9kZXNjcmlwdGlvbiA9ICcnO1xuLy8gICAgIGxldCBfc2VsZWN0ZWQgPSAwO1xuLy8gICAgIGxldCBfdG9Eb0xpc3QgPSBbXTtcbiAgICBcbi8vICAgICBjb25zdCBzZXRUaXRsZSA9ICh3b3JkKSA9PiBfdGl0bGUgPSB3b3JkO1xuLy8gICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKHRleHQpID0+IF9kZXNjcmlwdGlvbiA9IHRleHQ7XG4vLyAgICAgY29uc3Qgc2V0U2VsZWN0ZWQgPSAoYm9vbGVhbikgPT4gX3NlbGVjdGVkID0gYm9vbGVhbjtcbi8vICAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IF90aXRsZTtcbi8vICAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IF9kZXNjcmlwdGlvbjtcbi8vICAgICBjb25zdCBnZXRTZWxlY3RlZCA9ICgpID0+IF9zZWxlY3RlZDtcbi8vICAgICBjb25zdCBhZGRUb0RvID0gKHRvRG8pICA9PiB7XG4vLyAgICAgICAgIF90b0RvTGlzdC5wdXNoKHRvRG8pO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybntcbi8vICAgICAgICAgc2V0VGl0bGUsXG4vLyAgICAgICAgIHNldERlc2NyaXB0aW9uLFxuLy8gICAgICAgICBzZXRTZWxlY3RlZCxcbi8vICAgICAgICAgZ2V0VGl0bGUsXG4vLyAgICAgICAgIGdldERlc2NyaXB0aW9uLFxuLy8gICAgICAgICBnZXRTZWxlY3RlZCxcbi8vICAgICAgICAgYWRkVG9Eb1xuLy8gICAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgcHJvamVjdEZhY3RvcnlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IgKF90aXRsZSAsIF9kZXNjcmlwdGlvbiwgX3NlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBfdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBfZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBfc2VsZWN0ZWQ7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG8ge1xuICAgIGNvbnN0cnVjdG9yIChfdGl0bGUgLCBfZHVlRGF0ZSwgX3ByaW9yaXR5LCBfZGVzY3JpcHRpb24sIF9wcm9qZWN0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBfdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IF9kdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gX3ByaW9yaXR5O1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gX2Rlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBfcHJvamVjdDtcbiAgICAgICAgdGhpcy5jaGVja2xpc3QgPSAwO1xuICAgIH1cblxuICAgIGNsaWNrQ2hlY2soKXtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tsaXN0ID09PSAwKXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tsaXN0PTE7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5jaGVja2xpc3Q9MDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIGZ1bmN0aW9uIHRvRG9GYWN0b3J5ICgpIHtcbiAgICBcbi8vICAgICBsZXQgX3RpdGxlID0gJyc7XG4vLyAgICAgbGV0IF9kdWVEYXRlID0gJyc7XG4vLyAgICAgbGV0IF9wcmlvcml0eSA9ICcnO1xuLy8gICAgIGxldCBfbm90ZXMgPSAnJztcbi8vICAgICBsZXQgX2NoZWNrbGlzdCA9IDA7XG4vLyAgICAgbGV0IF9wcm9qZWN0ID0gJyc7XG5cbi8vICAgICBjb25zdCBpbml0aWFsaXplVG9EbyA9ICh3b3JkLG5vdGUsZGF0ZSxsZXZlbCxwcm9qZWN0KSA9PiB7XG4vLyAgICAgICAgIF90aXRsZSA9IHdvcmQ7XG4vLyAgICAgICAgIF9ub3RlcyA9IG5vdGU7XG4vLyAgICAgICAgIF9kdWVEYXRlID0gZGF0ZTtcbi8vICAgICAgICAgX3ByaW9yaXR5ID0gbGV2ZWw7XG4vLyAgICAgICAgIF9wcm9qZWN0ID0gcHJvamVjdDtcbi8vICAgICB9XG4vLyAgICAgY29uc3Qgc2V0VGl0bGUgPSAod29yZCkgPT4gX3RpdGxlID0gd29yZDtcbi8vICAgICBjb25zdCBzZXREdWVEYXRlID0gKGRhdGUpID0+IF9kdWVEYXRlID0gZGF0ZTtcbi8vICAgICBjb25zdCBzZXRQcmlvcml0eSA9IChsZXZlbCkgPT4gX3ByaW9yaXR5ID0gbGV2ZWw7XG4vLyAgICAgY29uc3Qgc2V0Tm90ZXMgPSAobm90ZSkgPT4gX25vdGVzID0gbm90ZTtcbi8vICAgICBjb25zdCBzZXRDaGVja2xpc3QgPSAoY2hlY2spID0+IF9jaGVja2xpc3QgPSBjaGVjaztcbi8vICAgICBjb25zdCBjbGlja0NoZWNrID0gKCkgPT57XG4vLyAgICAgICAgIGlmIChfY2hlY2tsaXN0ID09PSAwKXtcbi8vICAgICAgICAgICAgIF9jaGVja2xpc3Q9MTtcbi8vICAgICAgICAgfWVsc2V7XG4vLyAgICAgICAgICAgICBfY2hlY2tsaXN0PTA7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IF90aXRsZTtcbi8vICAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gX2R1ZURhdGU7XG4vLyAgICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBfcHJpb3JpdHk7XG4vLyAgICAgY29uc3QgZ2V0Tm90ZXMgPSAoKSA9PiBfbm90ZXM7XG4vLyAgICAgY29uc3QgZ2V0Q2hlY2tsaXN0ID0gKCkgPT4gX2NoZWNrbGlzdDtcbi8vICAgICBjb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4gX3Byb2plY3Q7XG4gICAgXG5cbi8vICAgICByZXR1cm57XG5cbi8vICAgICAgICAgaW5pdGlhbGl6ZVRvRG8sXG4vLyAgICAgICAgIHNldFRpdGxlLFxuLy8gICAgICAgICBzZXREdWVEYXRlLFxuLy8gICAgICAgICBzZXRQcmlvcml0eSxcbi8vICAgICAgICAgc2V0Tm90ZXMsXG4vLyAgICAgICAgIHNldENoZWNrbGlzdCxcbi8vICAgICAgICAgZ2V0VGl0bGUsXG4vLyAgICAgICAgIGdldER1ZURhdGUsXG4vLyAgICAgICAgIGdldFByaW9yaXR5LFxuLy8gICAgICAgICBnZXROb3Rlcyxcbi8vICAgICAgICAgZ2V0Q2hlY2tsaXN0LFxuLy8gICAgICAgICBnZXRQcm9qZWN0LFxuLy8gICAgICAgICBjbGlja0NoZWNrXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCB0b0RvRmFjdG9yeSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==