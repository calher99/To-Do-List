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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmtDO0FBQzRGO0FBQzFFO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBaUIsQ0FBQywrQ0FBUTs7QUFFMUMsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw4Q0FBOEM7QUFDOUMsS0FBSztBQUNMLCtDQUErQztBQUMvQyxLQUFLO0FBQ0wsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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Q0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbVJlbmRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tc3VwZXJMaWdodDojZjhmYWZjO1xcbiAgICAtLWxpZ2h0OiAjZTJlOGYwO1xcbiAgICAtLW1lZGl1bTogIzk0YTNiODtcXG4gICAgLS1kYXJrOiAjNDc1NTY5O1xcbiAgICAtLXN1cGVyRGFyazogIzBmMTcyYTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLnNpZGViYXJGaWVsZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5pY29ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNzJhO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG5uYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGdhcDogMTBweDsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0LmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaHJ7XFxuICAgIG1hcmdpbjogMnB4O1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG5cXG4uYWRke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VwZXJEYXJrKTtcXG4gICAgY29sb3I6IHZhcigtLXN1cGVyTGlnaHQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG97XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLmNyb3NzZWR7XFxuICAgIGNvbG9yOiB2YXIoLS1tZWRpdW0pO1xcbn1cXG5cXG4uY2hlY2tCb3h7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2hlY2tCb3g6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cGVyRGFyayk7XFxufVxcblxcbi5wcmlvcml0eXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAyM3B4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJde1xcbiAgICB3aWR0aDogMS4ycmVtO1xcbn1cXG5cXG4ub3ZlcmxheXtcXG4gICAgLyogVHJhbnNwYXJlbnQgKi9cXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAvKiBXaGF0IGhhcHBlbnMgaXMgdGhhdCBvdmVybGF5IG5vdyBpcyBjb3ZlcmluZ1xcbiAgICBhbGwgdGhlIHBhZ2UuIEV2ZXJ5dGhpbmcgaXMgdW5kZXIgb3ZlcmF5LCBzbyB0aGF0IGl0XFxuICAgIGlzIG5vdyBibG9ja2luZyBidXR0b25zLiBUbyBlbGltaW5hdGUgdGhhdCB3ZSBzYXlcXG4gICAgaXQgZG9lcyBub3QgaGF2ZSBhbnkgcG9pbnRlciBldmVudHMqL1xcbn1cXG5cXG4ub3ZlcmxheS5hY3RpdmV7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5tb2RhbHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKXNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbn1cXG5cXG4ubW9kYWwuYWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKXNjYWxlKDEpO1xcbn1cXG5cXG5cXG4vKiBGb3JtIHN0eWxlcyAqL1xcblxcbmZvcm17XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5pbnB1dDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTsgLypSZW1vdmUgZGVmYXVsdCBibHVlIG91dGxpbmUgZnJvbSBTYWZhcmkqL1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrKTtcXG4gIH1cXG5cXG5idXR0b24sXFxubGFiZWwsXFxuaW5wdXQsXFxuc2VsZWN0XFxuICAge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB9XFxuaW5wdXQsIHRleHRhcmVhe1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIH1cXG5cXG50ZXh0YXJlYXtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcbiAgLmZpZWxke1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsYUFBYTtJQUNiLDhCQUE4Qjs7O0FBR2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7O0lBRWxCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0lBQ1osVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEI7Ozt3Q0FHb0M7QUFDeEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQXdDO0lBQ3hDLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOzs7QUFHQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYSxFQUFFLDBDQUEwQztJQUN6RCw2QkFBNkI7RUFDL0I7O0FBRUY7Ozs7O0lBS0ksVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsU0FBUztJQUNULHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtBQUNGO0lBQ0ksdUJBQXVCO0VBQ3pCOztBQUVGO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDs7RUFFRTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1zdXBlckxpZ2h0OiNmOGZhZmM7XFxuICAgIC0tbGlnaHQ6ICNlMmU4ZjA7XFxuICAgIC0tbWVkaXVtOiAjOTRhM2I4O1xcbiAgICAtLWRhcms6ICM0NzU1Njk7XFxuICAgIC0tc3VwZXJEYXJrOiAjMGYxNzJhO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhckZpZWxke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmljb257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogZ2FwOiAxMHB4OyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnByb2plY3QuYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5ocntcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcblxcblxcbi5hZGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXBlckRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tc3VwZXJMaWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8uY3Jvc3NlZHtcXG4gICAgY29sb3I6IHZhcigtLW1lZGl1bSk7XFxufVxcblxcbi5jaGVja0JveHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jaGVja0JveDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VwZXJEYXJrKTtcXG59XFxuXFxuLnByaW9yaXR5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDIzcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl17XFxuICAgIHdpZHRoOiAxLjJyZW07XFxufVxcblxcbi5vdmVybGF5e1xcbiAgICAvKiBUcmFuc3BhcmVudCAqL1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIC8qIFdoYXQgaGFwcGVucyBpcyB0aGF0IG92ZXJsYXkgbm93IGlzIGNvdmVyaW5nXFxuICAgIGFsbCB0aGUgcGFnZS4gRXZlcnl0aGluZyBpcyB1bmRlciBvdmVyYXksIHNvIHRoYXQgaXRcXG4gICAgaXMgbm93IGJsb2NraW5nIGJ1dHRvbnMuIFRvIGVsaW1pbmF0ZSB0aGF0IHdlIHNheVxcbiAgICBpdCBkb2VzIG5vdCBoYXZlIGFueSBwb2ludGVyIGV2ZW50cyovXFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZXtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLm1vZGFse1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxufVxcblxcbi5tb2RhbC5hY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpc2NhbGUoMSk7XFxufVxcblxcblxcbi8qIEZvcm0gc3R5bGVzICovXFxuXFxuZm9ybXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbmlucHV0OmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lOyAvKlJlbW92ZSBkZWZhdWx0IGJsdWUgb3V0bGluZSBmcm9tIFNhZmFyaSovXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmspO1xcbiAgfVxcblxcbmJ1dHRvbixcXG5sYWJlbCxcXG5pbnB1dCxcXG5zZWxlY3RcXG4gICB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIH1cXG5pbnB1dCwgdGV4dGFyZWF7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcblxcbnRleHRhcmVhe1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuICAuZmllbGR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGZsYWcgZnJvbSAnLi9zdmdzL2ZsYWcuc3ZnJ1xuaW1wb3J0IHtyZXNldFNlbGVjdGVkUHJvamVjdCAsIGZpbHRlclRvRG8gLCByZXRyaWV2ZVN0b3JlZFByb2plY3QsIHVwZGF0ZVByb2plY3RTdG9yYWdlLCB1cGRhdGVUb0RvU3RvcmFnZX0gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCAsIHRvRG9MaXN0IH0gZnJvbSAnLi9pbmRleC5qcyc7XG4vL2Z1bmN0aW9ucyB0byBhcHBlbmRcblxuY29uc3QgY3JlYXRlRGl2Q2xhc3MgPSAoY2xhc3NOYW1lKSA9PntcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmNvbnN0IGNyZWF0ZURpdlRleHQgPSAodGV4dCkgPT57XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYudGV4dENvbnRlbnQ9dGV4dFxuICAgIHJldHVybiBkaXY7XG59XG5cbmNvbnN0IGFwcGVuZEVsZW1lbnRzID0gKHBhcmVudCwgLi4uY2hpbGRyZW4pID0+e1xuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH0pXG59XG5cbi8vUHJpbnQgc3RydWN0dXJlIG9mIHBhZ2VcblxuY29uc3QgaW5pdGlhbGl6ZURvbSA9ICgpID0+IHtcblxuICAgIGNvbnN0IHNpZGVCYXIgPSBjcmVhdGVEaXZDbGFzcyhcInNpZGViYXJcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaWRlQmFyKTtcbiAgICAgICAgY29uc3Qgc2lkZUJhckZpZWxkID0gY3JlYXRlRGl2Q2xhc3MoXCJzaWRlYmFyRmllbGRcIik7XG4gICAgICAgICAgICBjb25zdCBzaWRlYmFySWNvbiA9IGNyZWF0ZURpdkNsYXNzKFwiaWNvblwiKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lRGl2ID0gY3JlYXRlRGl2VGV4dChcIlVzZXJuYW1lXCIpO1xuICAgICAgICBhcHBlbmRFbGVtZW50cyhzaWRlQmFyRmllbGQsc2lkZWJhckljb24sdXNlcm5hbWVEaXYpO1xuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoc2lkZUJhckZpZWxkKTtcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdExpc3QnKVxuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQobmF2KVxuICAgIGNvbnN0IGRpdkFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGl2QWRkMiA9IGNyZWF0ZURpdkNsYXNzKFwiYWRkXCIpO1xuICAgICAgICAgICAgICAgIGRpdkFkZDIuZGF0YXNldC5vcGVuTW9kYWwgPSBcIiNhZGRQcm9qZWN0XCJcbiAgICAgICAgICAgICAgICBkaXZBZGQyLnRleHRDb250ZW50ID0gXCIrXCJcbiAgICAgICAgZGl2QWRkUHJvamVjdC5hcHBlbmRDaGlsZChkaXZBZGQyKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2QWRkUHJvamVjdCk7XG4gICAgLy8gPGRpdj48ZGl2IGNsYXNzPVwiYWRkXCI+KzwvZGl2PjwvZGl2PlxuICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVEaXZDbGFzcyhcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgZGl2QWRkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkaXZBZGQgPSBjcmVhdGVEaXZDbGFzcyhcImFkZFwiKTtcbiAgICAgICAgICAgIC8vIGRpdkFkZC5zZXRBdHRyaWJ1dGUoJ2lkJyAsICdhZGRUb0RvJyk7XG4gICAgICAgICAgICBkaXZBZGQuZGF0YXNldC5vcGVuTW9kYWwgPSBcIiNhZGRUb0RvXCJcbiAgICAgICAgICAgIGRpdkFkZC50ZXh0Q29udGVudCA9IFwiK1wiXG4gICAgICAgICAgICBkaXZBZGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2QWRkKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXZBZGRDb250YWluZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGNyZWF0ZURpdkNsYXNzKFwib3ZlcmxheVwiKTtcbiAgICBvdmVybGF5LnNldEF0dHJpYnV0ZSgnaWQnICwgXCJvdmVybGF5XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgY29uc3QgbW9kYWwgPSBjcmVhdGVEaXZDbGFzcyhcIm1vZGFsXCIpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnaWQnICwgXCJhZGRUb0RvXCIpO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnICwgJ25ld1RvRG8nKTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkMSA9IGNyZWF0ZURpdkNsYXNzKFwiZmllbGRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWxUaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgbGFiZWxUaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGU6ICpcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJyAsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJyAsICd0aXRsZScpO1xuICAgICAgICAgICAgICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCduYW1lJyAsICd0aXRsZScpO1xuICAgICAgICAgICAgYXBwZW5kRWxlbWVudHMoZmllbGQxLGxhYmVsVGl0bGUsaW5wdXRUaXRsZSk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZDIgPSBjcmVhdGVEaXZDbGFzcyhcImZpZWxkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsTm90ZXMudGV4dENvbnRlbnQgPSBcIk5vdGVzOlwiXG4gICAgICAgICAgICAgICAgbGFiZWxOb3Rlcy5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25vdGVzJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXROb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgICAgICBpbnB1dE5vdGVzLnNldEF0dHJpYnV0ZSgnaWQnICwgJ25vdGVzJyk7XG4gICAgICAgICAgICAgICAgaW5wdXROb3Rlcy5zZXRBdHRyaWJ1dGUoJ25hbWUnICwgJ25vdGVzJyk7XG4gICAgICAgICAgICAgICAgaW5wdXROb3Rlcy5zZXRBdHRyaWJ1dGUoJ3Jvd3MnICwgJzQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dE5vdGVzLnNldEF0dHJpYnV0ZSgnY29scycgLCAnNTAnKTtcbiAgICAgICAgICAgIGFwcGVuZEVsZW1lbnRzKGZpZWxkMixsYWJlbE5vdGVzLGlucHV0Tm90ZXMpO1xuICAgICAgICAgICAgY29uc3QgZmllbGQzID0gY3JlYXRlRGl2Q2xhc3MoXCJmaWVsZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsRGF0ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2RhdGUnKTtcbiAgICAgICAgICAgICAgICBsYWJlbERhdGUudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnICwgJ2RhdGUnKTtcbiAgICAgICAgICAgICAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKCdpZCcgLCAnZGF0ZScpO1xuICAgICAgICAgICAgICAgIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnICwgJ2RhdGUnKTtcbiAgICAgICAgICAgIGFwcGVuZEVsZW1lbnRzKGZpZWxkMyxsYWJlbERhdGUsaW5wdXREYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkND0gY3JlYXRlRGl2Q2xhc3MoXCJmaWVsZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywncHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBsYWJlbFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJTZWxlY3QgYSBwcmlvcml0eSBsZXZlbDpcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgICAgICAgICAgc2VsZWN0UHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJyAsICdwcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIHNlbGVjdFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnICwgJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uMS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24xLnRleHRDb250ZW50ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0hpZ2gnKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uMi50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdNZWRpdW0nKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uMy50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uNC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0xvdycpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb240LnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICAgICAgICAgICAgICBhcHBlbmRFbGVtZW50cyhzZWxlY3RQcmlvcml0eSxvcHRpb24xLG9wdGlvbjIsb3B0aW9uMyxvcHRpb240KTtcbiAgICAgICAgICAgIGFwcGVuZEVsZW1lbnRzKGZpZWxkNCxsYWJlbFByaW9yaXR5LHNlbGVjdFByaW9yaXR5KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFRvRG8nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5kYXRhc2V0LmNsb3NlTW9kYWw9XCJhZGRUb0RvXCI7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBOb3RlXCI7XG4gICAgICAgIGFwcGVuZEVsZW1lbnRzKGZvcm0sZmllbGQxLGZpZWxkMixmaWVsZDMsZmllbGQ0LGJ1dHRvbik7XG5cbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vTU9EQUwgMlxuICAgICAgICBjb25zdCBtb2RhbFByb2plY3QgPSBjcmVhdGVEaXZDbGFzcyhcIm1vZGFsXCIpO1xuICAgICAgICBtb2RhbFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcgLCBcImFkZFByb2plY3RcIik7XG4gICAgICAgIGNvbnN0IGZvcm0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtMi5zZXRBdHRyaWJ1dGUoJ2lkJyAsICduZXdQcm9qZWN0Jyk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZDUgPSBjcmVhdGVEaXZDbGFzcyhcImZpZWxkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWxOYW1lLnNldEF0dHJpYnV0ZSgnZm9yJywnbmFtZScpO1xuICAgICAgICAgICAgICAgIGxhYmVsTmFtZS50ZXh0Q29udGVudCA9IFwiTmFtZTogKlwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJyAsICduYW1lJyk7XG4gICAgICAgICAgICAgICAgaW5wdXROYW1lLnNldEF0dHJpYnV0ZSgnaWQnICwgJ25hbWUnKTtcbiAgICAgICAgICAgICAgICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKCduYW1lJyAsICduYW1lJyk7XG4gICAgICAgICAgICBhcHBlbmRFbGVtZW50cyhmaWVsZDUsbGFiZWxOYW1lLGlucHV0TmFtZSk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZDYgPSBjcmVhdGVEaXZDbGFzcyhcImZpZWxkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiXG4gICAgICAgICAgICAgICAgbGFiZWxEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgICAgICBpbnB1dERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnICwgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnICwgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3Jvd3MnICwgJzQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY29scycgLCAnNTAnKTtcbiAgICAgICAgICAgIGFwcGVuZEVsZW1lbnRzKGZpZWxkNixsYWJlbERlc2NyaXB0aW9uLGlucHV0RGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBidXR0b25Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b25Qcm9qZWN0LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvblByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdCcpO1xuICAgICAgICAgICAgYnV0dG9uUHJvamVjdC5kYXRhc2V0LmNsb3NlTW9kYWw9XCJhZGRQcm9qZWN0XCI7XG4gICAgICAgICAgICBidXR0b25Qcm9qZWN0LnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuICAgICAgICBhcHBlbmRFbGVtZW50cyhmb3JtMixmaWVsZDUsZmllbGQ2LGJ1dHRvblByb2plY3QpO1xuXG4gICAgICAgIG1vZGFsUHJvamVjdC5hcHBlbmRDaGlsZChmb3JtMik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbFByb2plY3QpO1xuXG4vLyBDQUxMIExPQ0FMIFNUT1JBR0VcblxuICAgIC8vICBjb25zdCBwcm9qZWN0TGlzdFN0b3JlZCA9IHJldHJpZXZlU3RvcmVkUHJvamVjdCgpXG4gICAgLy8gIGNvbnNvbGUubG9nKHByb2plY3RMaXN0U3RvcmVkKVxuICAgIC8vICBwcmludFByb2plY3RMaXN0KHByb2plY3RMaXN0U3RvcmVkKVxuLy8gaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4vLyAgICAgbGV0IFN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdHNTdG9yZWQnKSk7XG4vLyAgICAgY29uc29sZS5sb2coU3RvcmVkUHJvamVjdHMpO1xuLy8gICB9XG4vLyAgIGVsc2Uge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiTk8gTE9DQUwgU1RPUkFHRUVFRUVcIilcbi8vICAgfVxuICAgIFxuXG59XG5cbmNvbnN0IGluaXRpYWxpemVNb2RhbHMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBvcGVuTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW9wZW4tbW9kYWxdXCIpO1xuICAgIGNvbnN0IGNsb3NlTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNsb3NlLW1vZGFsXVwiKVxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpO1xuXG4gICAgb3Blbk1vZGFsQnV0dG9ucy5mb3JFYWNoKCBidXR0b24gPT57XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWRPcGVuID0gZS50YXJnZXQuZGF0YXNldC5vcGVuTW9kYWw7XG4gICAgICAgICAgICBjb25zdCBtb2RhbFRvT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWRPcGVuKTtcbiAgICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbFRvT3Blbik7XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNsb3NlTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBjb25zdCBtb2RhbFRvQ2xvc2U9IGJ1dHRvbi5jbG9zZXN0KCcubW9kYWwnKTtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWxUb0Nsb3NlKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC5hY3RpdmUnKVxuICAgICAgICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XG4gICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBcblxuICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbCAobW9kYWwpIHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG5cbn1cblxuXG5jb25zdCBwcmludFRvRG9MaXN0ID0gKGxpc3QpID0+e1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGxpc3QuZm9yRWFjaCggKHRvRG8pID0+e1xuICAgICAgICBwcmludFRvRG8odG9EbylcbiAgICB9KVxuXG4gICAgY29uc3QgZGl2QWRkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkaXZBZGQgPSBjcmVhdGVEaXZDbGFzcyhcImFkZFwiKTtcbiAgICAgICAgICAgIC8vIGRpdkFkZC5zZXRBdHRyaWJ1dGUoJ2lkJyAsICdhZGRUb0RvJyk7XG4gICAgICAgICAgICBkaXZBZGQuZGF0YXNldC5vcGVuTW9kYWwgPSBcIiNhZGRUb0RvXCJcbiAgICAgICAgICAgIGRpdkFkZC50ZXh0Q29udGVudCA9IFwiK1wiXG4gICAgICAgICAgICBkaXZBZGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2QWRkKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdkFkZENvbnRhaW5lcik7XG5cbiAgICBpbml0aWFsaXplTW9kYWxzKCk7XG5cblxufVxuY29uc3QgcHJpbnRUb0RvID0gKHRvRG8pID0+e1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IHRvRG9Db250YWluZXIgPSBjcmVhdGVEaXZDbGFzcyhcInRvZG9cIik7XG4gICAgICAgIGNvbnN0IGRpdkNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBjaGVjayA9IGNyZWF0ZURpdkNsYXNzKFwiY2hlY2tCb3hcIik7XG4gICAgICAgICAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgdG9Eby5jbGlja0NoZWNrKCk7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAodG9Eb0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9Eb0NvbnRhaW5lci5sYXN0Q2hpbGQpOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0Q2hlY2soKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVUb0RvU3RvcmFnZSh0b0RvTGlzdCk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICBkaXZDaGVjay5hcHBlbmRDaGlsZChjaGVjayk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b0RvLnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRvRG8uZHVlRGF0ZTtcbiAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGNyZWF0ZURpdkNsYXNzKFwicHJpb3JpdHlcIik7XG4gICAgICAgIHN2Z0NvbnRhaW5lci50ZXh0Q29udGVudCA9IHRvRG8ucHJpb3JpdHk7XG4gICAgICAgIHNldENvbG9yUHJpb3JpdHkoc3ZnQ29udGFpbmVyLHRvRG8pO1xuICAgICAgICAvLyBjb25zdCBzdmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAvLyBzdmdJbWFnZS5zcmMgPSBmbGFnO1xuICAgICAgICAvLyBzdmdDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ZnSW1hZ2UpO1xuICAgICAgICBzZXRDaGVjaygpO1xuICAgICAgICBcbiAgICBcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvRG9Db250YWluZXIpO1xuXG4gICAgZnVuY3Rpb24gc2V0Q2hlY2soKSB7XG4gICAgICAgIFxuICAgICAgICBpZih0b0RvLmNoZWNrbGlzdD09PTEpe1xuICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY3Jvc3NlZFwiKVxuICAgICAgICAgICAgY29uc3QgY3Jvc3NPdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncycpO1xuICAgICAgICAgICAgY3Jvc3NPdXQxLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGNyb3NzT3V0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3MnKTtcbiAgICAgICAgICAgIGNyb3NzT3V0Mi5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGNyb3NzT3V0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3MnKTtcbiAgICAgICAgICAgIGNyb3NzT3V0My5hcHBlbmRDaGlsZChzdmdDb250YWluZXIpO1xuXG4gICAgICAgICAgICBhcHBlbmRFbGVtZW50cyh0b0RvQ29udGFpbmVyLGRpdkNoZWNrLGNyb3NzT3V0MSxjcm9zc091dDIsY3Jvc3NPdXQzKTtcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImNyb3NzZWRcIilcbiAgICAgICAgICAgIGFwcGVuZEVsZW1lbnRzKHRvRG9Db250YWluZXIsZGl2Q2hlY2ssdGl0bGUsZGF0ZSxzdmdDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHNldENvbG9yUHJpb3JpdHkoZGl2ICwgdG9Ebyl7XG4gICAgaWYodG9Eby5wcmlvcml0eSA9PT0gXCJcIil7XG4gICAgICAgIHJldHVybjtcbiAgICB9ZWxzZSBpZiAodG9Eby5wcmlvcml0eSAgPT09IFwiSGlnaFwiKXtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiY29sb3I6IHJlZDtcIik7XG4gICAgfWVsc2UgaWYgKHRvRG8ucHJpb3JpdHkgID09PSBcIk1lZGl1bVwiKXtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiY29sb3I6IGJsdWU7XCIpO1xuICAgIH1lbHNle1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJjb2xvcjogZ3JlZW47XCIpO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5cbmNvbnN0IHByaW50UHJvamVjdExpc3QgPSAocHJvamVjdHMpID0+IHtcbiAgICBcbiAgICBjb25zdCBuYXZQb2ludGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RMaXN0Jyk7XG4gICAgd2hpbGUgKG5hdlBvaW50ZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBuYXZQb2ludGVyLnJlbW92ZUNoaWxkKG5hdlBvaW50ZXIubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKCAocHJvamVjdCkgPT57XG4gICAgICAgIHByaW50UHJvamVjdChwcm9qZWN0KVxuICAgIH0pXG5cbiAgICBjb25zdCBkaXZBZGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdkFkZCA9IGNyZWF0ZURpdkNsYXNzKFwiYWRkXCIpO1xuICAgICAgICAgICAgLy8gZGl2QWRkLnNldEF0dHJpYnV0ZSgnaWQnICwgJ2FkZFRvRG8nKTtcbiAgICAgICAgICAgIGRpdkFkZC5kYXRhc2V0Lm9wZW5Nb2RhbCA9IFwiI2FkZFByb2plY3RcIlxuICAgICAgICAgICAgZGl2QWRkLnRleHRDb250ZW50ID0gXCIrXCJcbiAgICAgICAgICAgIGRpdkFkZENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZBZGQpO1xuICAgIG5hdlBvaW50ZXIuYXBwZW5kQ2hpbGQoZGl2QWRkQ29udGFpbmVyKTtcbiAgICBcbiAgICBpbml0aWFsaXplTW9kYWxzKCk7XG4gICAgXG59XG5cbmNvbnN0IHByaW50UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgIFxuICAgIGNvbnN0IG5hdlBvaW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKTtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlRGl2Q2xhc3MoXCJwcm9qZWN0XCIpO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgICAgIGNvbnN0IGxpc3RUb0RvID0gZmlsdGVyVG9Ebyhwcm9qZWN0LnRpdGxlKTtcblxuICAgICAgICBpZihwcm9qZWN0LnNlbGVjdGVkID09PSAxKXtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHByaW50VG9Eb0xpc3QobGlzdFRvRG8pO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vZ2V0IGRhdGFzZXRcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgIC8vcmVtb3ZlIGFjdGl2ZSBmcm9tIG90aGVzXG4gICAgICAgICAgICByZW1vdmVBY3RpdmVDbGFzcyhuYXZQb2ludGVyKTtcbiAgICAgICAgICAgIC8vYWRkIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIC8vYWN0dWFsUHJvamVjdCB0byBzdG9yZSB0aGUgZGF0YXNldCBhbmQgYWRkIGl0IHRvIG5ldyBjcmVhdGVkIHRvRG9cbiAgICAgICAgICAgIHJlc2V0U2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgICAgICAgICBwcm9qZWN0LnNlbGVjdGVkID0xO1xuICAgICAgICAgICAgdXBkYXRlUHJvamVjdFN0b3JhZ2UocHJvamVjdExpc3QpO1xuICAgICAgICAgICAgLy9kaXNwbGF5TGlzdDogdG8gZGlzcGxheSB0b2RvcyB3aXRoIHRoYXQgbmFtZVxuICAgICAgICAgICAgY29uc3QgbGlzdFRvRG8gPSBmaWx0ZXJUb0RvKHByb2plY3QudGl0bGUpO1xuICAgICAgICAgICAgcHJpbnRUb0RvTGlzdChsaXN0VG9Ebyk7XG5cblxuXG4gICAgICAgIH0pO1xuICAgIGFwcGVuZEVsZW1lbnRzKG5hdlBvaW50ZXIsZGl2LGhyKTtcbiAgICBcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlQ2xhc3MgKGVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSlcbn1cblxuXG5cbmV4cG9ydCB7aW5pdGlhbGl6ZURvbSAsIGluaXRpYWxpemVNb2RhbHMgLCBwcmludFRvRG9MaXN0LCBwcmludFByb2plY3RMaXN0fVxuIiwiaW1wb3J0IFRvRG8gZnJvbSBcIi4vdG9Eby5qc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHtpbml0aWFsaXplRG9tICwgaW5pdGlhbGl6ZU1vZGFscyAsIHByaW50VG9Eb0xpc3QsIHByaW50UHJvamVjdExpc3R9IGZyb20gXCIuL2RvbVJlbmRlci5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuaW5pdGlhbGl6ZURvbSgpO1xuaW5pdGlhbGl6ZU1vZGFscygpO1xuXG5leHBvcnQgY29uc3QgdG9Eb0xpc3QgPSBbXTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9Eb1N0b3JlZCcpKSB7XG4gICAgcmV0cmlldmVTdG9yZWRUb0RvKHRvRG9MaXN0KTtcbn0gXG4vL3ByaW50IHByb2plY3QgbGlzdFxuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMnKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RMaXN0ID0gW107XG4vLyBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCk7XG4vLyAgICAgLy9ORUVEUyBJTVBST1ZFTUVOVFxuLy8gZGVmYXVsdFByb2plY3Quc2V0VGl0bGUoXCJEZWZhdWx0IFByb2plY3RcIik7XG4vLyBkZWZhdWx0UHJvamVjdC5zZXREZXNjcmlwdGlvbihcIkRlZmF1bHRcIik7XG4vLyBkZWZhdWx0UHJvamVjdC5zZXRTZWxlY3RlZCgxKTtcblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdHNTdG9yZWQnKSkge1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0IFByb2plY3RcIiwgXCJEZWZhdWx0XCIsMSk7XG4gICAgcHJvamVjdExpc3QucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0cmlldmVTdG9yZWRQcm9qZWN0KHByb2plY3RMaXN0KTtcbiAgfVxuXG5wcmludFByb2plY3RMaXN0KHByb2plY3RMaXN0KTtcblxuXG5cbmxldCBidXR0b25TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2xvc2UtbW9kYWwgPSAnYWRkVG9EbyddXCIpXG5idXR0b25TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgc3VibWl0Rm9ybSlcbmxldCBUb0RvTGlzdF9zZXJpYWxpemVkID0gW107XG5cblxuZnVuY3Rpb24gc3VibWl0Rm9ybSAoKSB7XG4gICAgXG4gICAgXG4gICAgLy9GaWx0ZXIgcHJvamVjdExpc3QgdG8gc2VlIHdoaWNoIG9uZSBoYXMgZ2V0U2VsZWN0ZWQgPT09IDEgeSBsZSBtZXRlbW9zIGVzYSBwcm9wZXJ0eVxuICAgIGNvbnN0IHByb2plY3RTZWxlY3RlZCA9IGdldFNlbGVjdGVkKHByb2plY3RMaXN0KTtcbiAgICBjb25zdCBOZXdUb0RvID0gbmV3IFRvRG8odGl0bGUudmFsdWUsZGF0ZS52YWx1ZSxwcmlvcml0eS52YWx1ZSxub3Rlcy52YWx1ZSxwcm9qZWN0U2VsZWN0ZWQsMCk7XG4gICAgdG9Eb0xpc3QucHVzaChOZXdUb0RvKTtcbiAgICBcbiAgICBjb25zdCBsaXN0V2l0aFByb2plY3QgPSBmaWx0ZXJUb0RvKHByb2plY3RTZWxlY3RlZCk7XG5cbiAgICAvLyBTVE9SRSBUSEUgTElTVCBcbiAgICB1cGRhdGVUb0RvU3RvcmFnZSh0b0RvTGlzdClcbiAgICBUb0RvTGlzdF9zZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVG9Eb1N0b3JlZFwiICwgVG9Eb0xpc3Rfc2VyaWFsaXplZCk7XG4gICAgXG4gICAgcHJpbnRUb0RvTGlzdChsaXN0V2l0aFByb2plY3QpO1xuICAgIFxuICAgIGNsZWFySW5wdXRzKCk7XG4gIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG9Eb1N0b3JhZ2UgKGxpc3QpIHtcbiAgICBUb0RvTGlzdF9zZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkobGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUb0RvU3RvcmVkXCIgLCBUb0RvTGlzdF9zZXJpYWxpemVkKTtcbn1cblxuXG5sZXQgYnV0dG9uUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jbG9zZS1tb2RhbCA9ICdhZGRQcm9qZWN0J11cIilcbmJ1dHRvblByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgc3VibWl0UHJvamVjdClcblxuXG5jb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG5sZXQgcHJvamVjdExpc3Rfc2VyaWFsaXplZD0gW107XG5mdW5jdGlvbiBzdWJtaXRQcm9qZWN0ICgpIHtcbiAgICBcblxuICAgIGNvbnN0IE5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLnZhbHVlLGRlc2NyaXB0aW9uLnZhbHVlLDApXG5cbiAgICBwcm9qZWN0TGlzdC5wdXNoKE5ld1Byb2plY3QpO1xuICAgIFxuICAgIC8vIFNUT1JFIFRIRSBMSVNUIFxuICAgIFxuICAgIFxuICAgIHVwZGF0ZVByb2plY3RTdG9yYWdlKHByb2plY3RMaXN0KTtcbiAgICBcbiAgICBwcmludFByb2plY3RMaXN0KHByb2plY3RMaXN0KTtcbiAgICBcbiAgICBcbiAgICBjbGVhcklucHV0cygpO1xuICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RTdG9yYWdlIChsaXN0KSB7XG4gICAgcHJvamVjdExpc3Rfc2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KGxpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdHNTdG9yZWRcIiAsIHByb2plY3RMaXN0X3NlcmlhbGl6ZWQpO1xufVxuXG5mdW5jdGlvbiBnZXRTZWxlY3RlZCAocHJvamVjdHMpIHtcbiAgICBcbiAgICAvLyBjb25zdCBwcm9qZWN0U2VsZWN0ZWQgPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmdldFNlbGVjdGVkKCkgPT09MSk7XG4gICAgZm9yIChsZXQgaT0gMCA7IGk8cHJvamVjdHMubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgLy8gaWYgKHByb2plY3RzW2ldLmdldFNlbGVjdGVkKCkgPT09MSl7XG4gICAgICAgIC8vICAgICByZXR1cm4gcHJvamVjdHNbaV0uZ2V0VGl0bGUoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAocHJvamVjdHNbaV0uc2VsZWN0ZWQgPT09MSl7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdHNbaV0udGl0bGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0U2VsZWN0ZWRQcm9qZWN0ICgpIHtcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKCBwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdC5zZWxlY3RlZCA9MDtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0cyAoKSB7XG4gICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgIG5vdGVzLnZhbHVlID0gXCJcIjtcbiAgICBkYXRlLnZhbHVlID0gXCJcIjtcbiAgICBuYW1lLnZhbHVlPSBcIlwiO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJUb0RvIChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBbXTtcblxuICAgIGZvciAobGV0IGk9IDAgOyBpPHRvRG9MaXN0Lmxlbmd0aCA7IGkrKyl7XG4gICAgICAgIGlmICh0b0RvTGlzdFtpXS5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSl7XG4gICAgICAgICAgICBuZXdMaXN0LnB1c2godG9Eb0xpc3RbaV0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0xpc3Q7XG59XG4gXG5mdW5jdGlvbiByZXRyaWV2ZVN0b3JlZFByb2plY3QobGlzdCkge1xuICAgIFxuICAgIGNvbnN0IG5vcm1hbE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RzU3RvcmVkJykpO1xuICAgIGZvciAobGV0IGk9MDsgaTxub3JtYWxPYmplY3QubGVuZ3RoO2krKyl7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChub3JtYWxPYmplY3RbaV0udGl0bGUsbm9ybWFsT2JqZWN0W2ldLmRlc2NyaXB0aW9uLG5vcm1hbE9iamVjdFtpXS5zZWxlY3RlZCk7XG4gICAgICAgIGxpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlU3RvcmVkVG9EbyhsaXN0KXtcblxuICAgIGNvbnN0IG5vcm1hbE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RvRG9TdG9yZWQnKSk7XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8bm9ybWFsT2JqZWN0Lmxlbmd0aDtpKyspe1xuICAgICAgICBjb25zdCBuZXdUb0RvID0gbmV3IFRvRG8obm9ybWFsT2JqZWN0W2ldLnRpdGxlLCBub3JtYWxPYmplY3RbaV0uZHVlRGF0ZSwgbm9ybWFsT2JqZWN0W2ldLnByaW9yaXR5LCBub3JtYWxPYmplY3RbaV0uZGVzY3JpcHRpb24sIG5vcm1hbE9iamVjdFtpXS5wcm9qZWN0LCBub3JtYWxPYmplY3RbaV0uY2hlY2tsaXN0KTtcbiAgICAgICAgbGlzdC5wdXNoKG5ld1RvRG8pO1xuICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IHtyZXNldFNlbGVjdGVkUHJvamVjdCAsIGZpbHRlclRvRG8sIHJldHJpZXZlU3RvcmVkUHJvamVjdH07IiwiXG5cbi8vIGZ1bmN0aW9uIHByb2plY3RGYWN0b3J5ICgpIHtcblxuLy8gICAgIGxldCBfdGl0bGUgPSAnJztcbi8vICAgICBsZXQgX2Rlc2NyaXB0aW9uID0gJyc7XG4vLyAgICAgbGV0IF9zZWxlY3RlZCA9IDA7XG4vLyAgICAgbGV0IF90b0RvTGlzdCA9IFtdO1xuICAgIFxuLy8gICAgIGNvbnN0IHNldFRpdGxlID0gKHdvcmQpID0+IF90aXRsZSA9IHdvcmQ7XG4vLyAgICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAodGV4dCkgPT4gX2Rlc2NyaXB0aW9uID0gdGV4dDtcbi8vICAgICBjb25zdCBzZXRTZWxlY3RlZCA9IChib29sZWFuKSA9PiBfc2VsZWN0ZWQgPSBib29sZWFuO1xuLy8gICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gX3RpdGxlO1xuLy8gICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gX2Rlc2NyaXB0aW9uO1xuLy8gICAgIGNvbnN0IGdldFNlbGVjdGVkID0gKCkgPT4gX3NlbGVjdGVkO1xuLy8gICAgIGNvbnN0IGFkZFRvRG8gPSAodG9EbykgID0+IHtcbi8vICAgICAgICAgX3RvRG9MaXN0LnB1c2godG9Ebyk7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJue1xuLy8gICAgICAgICBzZXRUaXRsZSxcbi8vICAgICAgICAgc2V0RGVzY3JpcHRpb24sXG4vLyAgICAgICAgIHNldFNlbGVjdGVkLFxuLy8gICAgICAgICBnZXRUaXRsZSxcbi8vICAgICAgICAgZ2V0RGVzY3JpcHRpb24sXG4vLyAgICAgICAgIGdldFNlbGVjdGVkLFxuLy8gICAgICAgICBhZGRUb0RvXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBwcm9qZWN0RmFjdG9yeVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvciAoX3RpdGxlICwgX2Rlc2NyaXB0aW9uLCBfc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IF90aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IF9kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IF9zZWxlY3RlZDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG4gICAgY29uc3RydWN0b3IgKF90aXRsZSAsIF9kdWVEYXRlLCBfcHJpb3JpdHksIF9kZXNjcmlwdGlvbiwgX3Byb2plY3QsIF9jaGVja2xpc3QpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IF90aXRsZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gX2R1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBfcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBfZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJvamVjdCA9IF9wcm9qZWN0O1xuICAgICAgICB0aGlzLmNoZWNrbGlzdD0gX2NoZWNrbGlzdDtcbiAgICB9XG5cbiAgICBjbGlja0NoZWNrKCl7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrbGlzdCA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLmNoZWNrbGlzdD0xO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tsaXN0PTA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBmdW5jdGlvbiB0b0RvRmFjdG9yeSAoKSB7XG4gICAgXG4vLyAgICAgbGV0IF90aXRsZSA9ICcnO1xuLy8gICAgIGxldCBfZHVlRGF0ZSA9ICcnO1xuLy8gICAgIGxldCBfcHJpb3JpdHkgPSAnJztcbi8vICAgICBsZXQgX25vdGVzID0gJyc7XG4vLyAgICAgbGV0IF9jaGVja2xpc3QgPSAwO1xuLy8gICAgIGxldCBfcHJvamVjdCA9ICcnO1xuXG4vLyAgICAgY29uc3QgaW5pdGlhbGl6ZVRvRG8gPSAod29yZCxub3RlLGRhdGUsbGV2ZWwscHJvamVjdCkgPT4ge1xuLy8gICAgICAgICBfdGl0bGUgPSB3b3JkO1xuLy8gICAgICAgICBfbm90ZXMgPSBub3RlO1xuLy8gICAgICAgICBfZHVlRGF0ZSA9IGRhdGU7XG4vLyAgICAgICAgIF9wcmlvcml0eSA9IGxldmVsO1xuLy8gICAgICAgICBfcHJvamVjdCA9IHByb2plY3Q7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IHNldFRpdGxlID0gKHdvcmQpID0+IF90aXRsZSA9IHdvcmQ7XG4vLyAgICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChkYXRlKSA9PiBfZHVlRGF0ZSA9IGRhdGU7XG4vLyAgICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobGV2ZWwpID0+IF9wcmlvcml0eSA9IGxldmVsO1xuLy8gICAgIGNvbnN0IHNldE5vdGVzID0gKG5vdGUpID0+IF9ub3RlcyA9IG5vdGU7XG4vLyAgICAgY29uc3Qgc2V0Q2hlY2tsaXN0ID0gKGNoZWNrKSA9PiBfY2hlY2tsaXN0ID0gY2hlY2s7XG4vLyAgICAgY29uc3QgY2xpY2tDaGVjayA9ICgpID0+e1xuLy8gICAgICAgICBpZiAoX2NoZWNrbGlzdCA9PT0gMCl7XG4vLyAgICAgICAgICAgICBfY2hlY2tsaXN0PTE7XG4vLyAgICAgICAgIH1lbHNle1xuLy8gICAgICAgICAgICAgX2NoZWNrbGlzdD0wO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBfdGl0bGU7XG4vLyAgICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IF9kdWVEYXRlO1xuLy8gICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gX3ByaW9yaXR5O1xuLy8gICAgIGNvbnN0IGdldE5vdGVzID0gKCkgPT4gX25vdGVzO1xuLy8gICAgIGNvbnN0IGdldENoZWNrbGlzdCA9ICgpID0+IF9jaGVja2xpc3Q7XG4vLyAgICAgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IF9wcm9qZWN0O1xuICAgIFxuXG4vLyAgICAgcmV0dXJue1xuXG4vLyAgICAgICAgIGluaXRpYWxpemVUb0RvLFxuLy8gICAgICAgICBzZXRUaXRsZSxcbi8vICAgICAgICAgc2V0RHVlRGF0ZSxcbi8vICAgICAgICAgc2V0UHJpb3JpdHksXG4vLyAgICAgICAgIHNldE5vdGVzLFxuLy8gICAgICAgICBzZXRDaGVja2xpc3QsXG4vLyAgICAgICAgIGdldFRpdGxlLFxuLy8gICAgICAgICBnZXREdWVEYXRlLFxuLy8gICAgICAgICBnZXRQcmlvcml0eSxcbi8vICAgICAgICAgZ2V0Tm90ZXMsXG4vLyAgICAgICAgIGdldENoZWNrbGlzdCxcbi8vICAgICAgICAgZ2V0UHJvamVjdCxcbi8vICAgICAgICAgY2xpY2tDaGVja1xuLy8gICAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgdG9Eb0ZhY3RvcnkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=