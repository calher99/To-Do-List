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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --superLight:#f8fafc;\n    --light: #e2e8f0;\n    --medium: #94a3b8;\n    --dark: #475569;\n    --superDark: #0f172a;\n    font-family: sans-serif;\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 20% 80%;\n    margin: 0;\n    min-height: 100vh;\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n    background-color: var(--light);\n    \n    \n}\n\n.sidebar{\n    color: black;\n    padding: 10px;\n}\n\nnav{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n}\n\n.project{\n    cursor: pointer;\n    width: 100%;\n    text-align: center;\n}\n\nhr{\n    width: 60%;\n}\n\n.add{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--superDark);\n    color: var(--superLight);\n    font-weight: bold;\n    border-radius: 100%;\n    width: 30px;\n    height: 30px;\n    font-size: 1.3rem;\n    cursor: pointer;\n}\n\n.todo{\n    display: grid;\n    grid-template-columns: auto 1fr auto auto;\n    align-items: center;\n    gap: 15px;\n    height: 50px;\n    width: 95%;\n    background-color: white;\n    border-radius: 4px;\n    padding: 5px;\n    cursor: pointer;\n}\n\n.todo.crossed{\n    color: var(--medium);\n}\n\n.checkBox{\n    width: 10px;\n    height: 10px;\n    border: 1px solid black;\n}\n\n.checkBox:hover{\n    background-color: var(--superDark);\n}\n\n.priority{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: red;\n    border-radius: 10px;\n    width: 100px;\n    height: 23px;\n}\n\ninput[type=\"radio\"]{\n    width: 1.2rem;\n}\n\n.overlay{\n    /* Transparent */\n    opacity: 0;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transition: 200ms ease-in-out;\n    background-color: rgba(0,0,0,0.7);\n    pointer-events: none;\n    /* What happens is that overlay now is covering\n    all the page. Everything is under overay, so that it\n    is now blocking buttons. To eliminate that we say\n    it does not have any pointer events*/\n}\n\n.overlay.active{\n    opacity: 1;\n    pointer-events: all;\n}\n\n.modal{\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%)scale(0);\n    transition: 200ms ease-in-out;\n    z-index: 10;\n    width: 60%;\n    height: 50%;\n    background-color: white;\n    border-radius: 5px;\n    padding: 10px;\n\n}\n\n.modal.active{\n    transform: translate(-50%, -50%)scale(1);\n}\n\n\n/* Form styles */\n\nform{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\ninput:focus{\n    outline: none; /*Remove default blue outline from Safari*/\n    border: 2px solid var(--dark);\n  }\n\nbutton,\nlabel,\ninput,\nselect\n   {\n    width: 70%;\n    font-family: inherit;\n    font-size: 100%;\n    margin: 0;\n    box-sizing: border-box;\n    padding: 5px;\n    height: 30px;\n    border-radius: 6px;\n  }\ninput, textarea{\n    border: 1px solid black;\n  }\n\ntextarea{\n    font-family: inherit;\n    width: 70%;\n}\n\n  .field{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,oBAAoB;IACpB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,aAAa;IACb,8BAA8B;;;AAGlC;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kCAAkC;IAClC,wBAAwB;IACxB,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,yCAAyC;IACzC,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,UAAU;IACV,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,mBAAmB;IACnB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,iCAAiC;IACjC,oBAAoB;IACpB;;;wCAGoC;AACxC;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,wCAAwC;IACxC,6BAA6B;IAC7B,WAAW;IACX,UAAU;IACV,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;;AAEjB;;AAEA;IACI,wCAAwC;AAC5C;;;AAGA,gBAAgB;;AAEhB;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,aAAa,EAAE,0CAA0C;IACzD,6BAA6B;EAC/B;;AAEF;;;;;IAKI,UAAU;IACV,oBAAoB;IACpB,eAAe;IACf,SAAS;IACT,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,kBAAkB;EACpB;AACF;IACI,uBAAuB;EACzB;;AAEF;IACI,oBAAoB;IACpB,UAAU;AACd;;EAEE;IACE,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB","sourcesContent":[":root{\n    --superLight:#f8fafc;\n    --light: #e2e8f0;\n    --medium: #94a3b8;\n    --dark: #475569;\n    --superDark: #0f172a;\n    font-family: sans-serif;\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 20% 80%;\n    margin: 0;\n    min-height: 100vh;\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n    background-color: var(--light);\n    \n    \n}\n\n.sidebar{\n    color: black;\n    padding: 10px;\n}\n\nnav{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n}\n\n.project{\n    cursor: pointer;\n    width: 100%;\n    text-align: center;\n}\n\nhr{\n    width: 60%;\n}\n\n.add{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--superDark);\n    color: var(--superLight);\n    font-weight: bold;\n    border-radius: 100%;\n    width: 30px;\n    height: 30px;\n    font-size: 1.3rem;\n    cursor: pointer;\n}\n\n.todo{\n    display: grid;\n    grid-template-columns: auto 1fr auto auto;\n    align-items: center;\n    gap: 15px;\n    height: 50px;\n    width: 95%;\n    background-color: white;\n    border-radius: 4px;\n    padding: 5px;\n    cursor: pointer;\n}\n\n.todo.crossed{\n    color: var(--medium);\n}\n\n.checkBox{\n    width: 10px;\n    height: 10px;\n    border: 1px solid black;\n}\n\n.checkBox:hover{\n    background-color: var(--superDark);\n}\n\n.priority{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: red;\n    border-radius: 10px;\n    width: 100px;\n    height: 23px;\n}\n\ninput[type=\"radio\"]{\n    width: 1.2rem;\n}\n\n.overlay{\n    /* Transparent */\n    opacity: 0;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transition: 200ms ease-in-out;\n    background-color: rgba(0,0,0,0.7);\n    pointer-events: none;\n    /* What happens is that overlay now is covering\n    all the page. Everything is under overay, so that it\n    is now blocking buttons. To eliminate that we say\n    it does not have any pointer events*/\n}\n\n.overlay.active{\n    opacity: 1;\n    pointer-events: all;\n}\n\n.modal{\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%)scale(0);\n    transition: 200ms ease-in-out;\n    z-index: 10;\n    width: 60%;\n    height: 50%;\n    background-color: white;\n    border-radius: 5px;\n    padding: 10px;\n\n}\n\n.modal.active{\n    transform: translate(-50%, -50%)scale(1);\n}\n\n\n/* Form styles */\n\nform{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\ninput:focus{\n    outline: none; /*Remove default blue outline from Safari*/\n    border: 2px solid var(--dark);\n  }\n\nbutton,\nlabel,\ninput,\nselect\n   {\n    width: 70%;\n    font-family: inherit;\n    font-size: 100%;\n    margin: 0;\n    box-sizing: border-box;\n    padding: 5px;\n    height: 30px;\n    border-radius: 6px;\n  }\ninput, textarea{\n    border: 1px solid black;\n  }\n\ntextarea{\n    font-family: inherit;\n    width: 70%;\n}\n\n  .field{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }"],"sourceRoot":""}]);
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
                    option1.setAttribute('value', 'High');
                    option1.textContent = "High";
                    const option2 = document.createElement('option');
                    option2.setAttribute('value', 'Medium');
                    option2.textContent = "Medium";
                    const option3 = document.createElement('option');
                    option3.setAttribute('value', 'Low');
                    option3.textContent = "Low";
                appendElements(selectPriority,option1,option2,option3);
            appendElements(field4,labelPriority,selectPriority);
            
            const button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.classList.add('addToDo');
            button.dataset.closeModal="addToDo";
            button.textContent = "Add Note";
        appendElements(form,field1,field2,field3,field4,button);

        modal.appendChild(form);
    document.body.appendChild(modal);
///////////////////////////////
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
        title.textContent = toDo.getTitle();

        const date = document.createElement('div');
        date.textContent = toDo.getDueDate();

        const svgContainer = createDivClass("priority");
        svgContainer.textContent = toDo.getPriority();
        setColorPriority(svgContainer,toDo);

        setCheck();
        
    
    
    content.appendChild(toDoContainer);

    function setCheck() {
        if(toDo.getChecklist()===1){
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
    if(toDo.getPriority() === ""){
        div.setAttribute('style' , 'background-color: red;');
    }else if (toDo.getPriority() === "High"){
        div.setAttribute("style", "background-color: red;");
    }else if (toDo.getPriority() === "Medium"){
        div.setAttribute("style", "background-color: blue;");
    }else{
        div.setAttribute("style", "background-color: green;");
    }
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
        div.textContent = project.getTitle();
        const hr = document.createElement('hr');
    appendElements(navPointer,div,hr);
}




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function projectFactory () {

    let _title = '';
    let _description = '';
    let _toDoList = [];
    
    const setTitle = (word) => _title = word;
    const setDescription = (text) => _description = text;
    const getTitle = () => _title;
    const getDescription = () => _description;
    const addToDo = (toDo)  => {
        _toDoList.push(toDo);
    }

    return{

        setTitle,
        setDescription,
        getTitle,
        getDescription,
        addToDo
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectFactory);

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function toDoFactory () {
    
    let _title = '';
    let _dueDate = '';
    let _priority = '';
    let _notes = '';
    let _checklist = 0;
    let _project = '';

    const initializeToDo = (word,note,date,level,project) => {
        _title = word;
        _notes = note;
        _dueDate = date;
        _priority = level;
        _project = project;
    }
    const setTitle = (word) => _title = word;
    const setDueDate = (date) => _dueDate = date;
    const setPriority = (level) => _priority = level;
    const setNotes = (note) => _notes = note;
    const setChecklist = (check) => _checklist = check;
    const clickCheck = () =>{
        if (_checklist === 0){
            _checklist=1;
        }else{
            _checklist=0;
        }
    }

    const getTitle = () => _title;
    const getDueDate = () => _dueDate;
    const getPriority = () => _priority;
    const getNotes = () => _notes;
    const getChecklist = () => _checklist;
    const getProject = () => _project;
    

    return{

        initializeToDo,
        setTitle,
        setDueDate,
        setPriority,
        setNotes,
        setChecklist,
        getTitle,
        getDueDate,
        getPriority,
        getNotes,
        getChecklist,
        getProject,
        clickCheck
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoFactory);

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo.js */ "./src/toDo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _domRender_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domRender.js */ "./src/domRender.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(0,_domRender_js__WEBPACK_IMPORTED_MODULE_2__.initializeDom)();
(0,_domRender_js__WEBPACK_IMPORTED_MODULE_2__.initializeModals)();

const toDoList = [];

const title = document.querySelector('#title');
const notes = document.querySelector('#notes');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
console.log(title)


let buttonSubmit = document.querySelector("[data-close-modal = 'addToDo']")
buttonSubmit.addEventListener('click' , submitForm)


function submitForm () {
    
    const newToDo = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    newToDo.initializeToDo(title.value,notes.value,date.value,priority.value,"defaultProject");
    toDoList.push(newToDo);

    (0,_domRender_js__WEBPACK_IMPORTED_MODULE_2__.printToDoList)(toDoList);
    
    clearInputs();
  
}
const projectList = [];
let buttonProject = document.querySelector("[data-close-modal = 'addProject']")
buttonProject.addEventListener('click' , submitProject)

const name = document.querySelector('#name');
const description = document.querySelector('#description');

function submitProject () {
    const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    //NEEDS IMPROVEMENT
    newProject.setTitle(name.value);
    newProject.setDescription(description.value);
    projectList.push(newProject);

    (0,_domRender_js__WEBPACK_IMPORTED_MODULE_2__.printProjectList)(projectList);
    
    clearInputs();
  
}




function clearInputs () {
    title.value = "";
    notes.value = "";
    date.value = "";
    name.value= "";
    description.value= "";
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFELEtBQUs7QUFDTCx5REFBeUQ7QUFDekQsS0FBSztBQUNMLDBEQUEwRDtBQUMxRCxLQUFLO0FBQ0wsMkRBQTJEO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJFOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9TM0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDekJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7OztVQ3hEZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ007QUFDd0Q7QUFDN0U7OztBQUdyQiw0REFBYTtBQUNiLCtEQUFnQjs7QUFFaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG9CQUFvQixvREFBVztBQUMvQjtBQUNBOztBQUVBLElBQUksNERBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qix1REFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLCtEQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbVJlbmRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1zdXBlckxpZ2h0OiNmOGZhZmM7XFxuICAgIC0tbGlnaHQ6ICNlMmU4ZjA7XFxuICAgIC0tbWVkaXVtOiAjOTRhM2I4O1xcbiAgICAtLWRhcms6ICM0NzU1Njk7XFxuICAgIC0tc3VwZXJEYXJrOiAjMGYxNzJhO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5uYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaHJ7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcblxcbi5hZGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXBlckRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tc3VwZXJMaWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8uY3Jvc3NlZHtcXG4gICAgY29sb3I6IHZhcigtLW1lZGl1bSk7XFxufVxcblxcbi5jaGVja0JveHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jaGVja0JveDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VwZXJEYXJrKTtcXG59XFxuXFxuLnByaW9yaXR5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMjNweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXXtcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG59XFxuXFxuLm92ZXJsYXl7XFxuICAgIC8qIFRyYW5zcGFyZW50ICovXFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgLyogV2hhdCBoYXBwZW5zIGlzIHRoYXQgb3ZlcmxheSBub3cgaXMgY292ZXJpbmdcXG4gICAgYWxsIHRoZSBwYWdlLiBFdmVyeXRoaW5nIGlzIHVuZGVyIG92ZXJheSwgc28gdGhhdCBpdFxcbiAgICBpcyBub3cgYmxvY2tpbmcgYnV0dG9ucy4gVG8gZWxpbWluYXRlIHRoYXQgd2Ugc2F5XFxuICAgIGl0IGRvZXMgbm90IGhhdmUgYW55IHBvaW50ZXIgZXZlbnRzKi9cXG59XFxuXFxuLm92ZXJsYXkuYWN0aXZle1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ubW9kYWx7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG59XFxuXFxuLm1vZGFsLmFjdGl2ZXtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlzY2FsZSgxKTtcXG59XFxuXFxuXFxuLyogRm9ybSBzdHlsZXMgKi9cXG5cXG5mb3Jte1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuaW5wdXQ6Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7IC8qUmVtb3ZlIGRlZmF1bHQgYmx1ZSBvdXRsaW5lIGZyb20gU2FmYXJpKi9cXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyayk7XFxuICB9XFxuXFxuYnV0dG9uLFxcbmxhYmVsLFxcbmlucHV0LFxcbnNlbGVjdFxcbiAgIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgfVxcbmlucHV0LCB0ZXh0YXJlYXtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB9XFxuXFxudGV4dGFyZWF7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG4gIC5maWVsZHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGFBQWE7SUFDYiw4QkFBOEI7OztBQUdsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0lBQ1osVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCOzs7d0NBR29DO0FBQ3hDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUF3QztJQUN4Qyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7O0FBR0EsZ0JBQWdCOztBQUVoQjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWEsRUFBRSwwQ0FBMEM7SUFDekQsNkJBQTZCO0VBQy9COztBQUVGOzs7OztJQUtJLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7QUFDRjtJQUNJLHVCQUF1QjtFQUN6Qjs7QUFFRjtJQUNJLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0VBRUU7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tc3VwZXJMaWdodDojZjhmYWZjO1xcbiAgICAtLWxpZ2h0OiAjZTJlOGYwO1xcbiAgICAtLW1lZGl1bTogIzk0YTNiODtcXG4gICAgLS1kYXJrOiAjNDc1NTY5O1xcbiAgICAtLXN1cGVyRGFyazogIzBmMTcyYTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxubmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmhye1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uYWRke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VwZXJEYXJrKTtcXG4gICAgY29sb3I6IHZhcigtLXN1cGVyTGlnaHQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG97XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLmNyb3NzZWR7XFxuICAgIGNvbG9yOiB2YXIoLS1tZWRpdW0pO1xcbn1cXG5cXG4uY2hlY2tCb3h7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2hlY2tCb3g6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cGVyRGFyayk7XFxufVxcblxcbi5wcmlvcml0eXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDIzcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl17XFxuICAgIHdpZHRoOiAxLjJyZW07XFxufVxcblxcbi5vdmVybGF5e1xcbiAgICAvKiBUcmFuc3BhcmVudCAqL1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIC8qIFdoYXQgaGFwcGVucyBpcyB0aGF0IG92ZXJsYXkgbm93IGlzIGNvdmVyaW5nXFxuICAgIGFsbCB0aGUgcGFnZS4gRXZlcnl0aGluZyBpcyB1bmRlciBvdmVyYXksIHNvIHRoYXQgaXRcXG4gICAgaXMgbm93IGJsb2NraW5nIGJ1dHRvbnMuIFRvIGVsaW1pbmF0ZSB0aGF0IHdlIHNheVxcbiAgICBpdCBkb2VzIG5vdCBoYXZlIGFueSBwb2ludGVyIGV2ZW50cyovXFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZXtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLm1vZGFse1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxufVxcblxcbi5tb2RhbC5hY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpc2NhbGUoMSk7XFxufVxcblxcblxcbi8qIEZvcm0gc3R5bGVzICovXFxuXFxuZm9ybXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbmlucHV0OmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lOyAvKlJlbW92ZSBkZWZhdWx0IGJsdWUgb3V0bGluZSBmcm9tIFNhZmFyaSovXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmspO1xcbiAgfVxcblxcbmJ1dHRvbixcXG5sYWJlbCxcXG5pbnB1dCxcXG5zZWxlY3RcXG4gICB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIH1cXG5pbnB1dCwgdGV4dGFyZWF7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcblxcbnRleHRhcmVhe1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuICAuZmllbGR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9mdW5jdGlvbnMgdG8gYXBwZW5kXG5cbmNvbnN0IGNyZWF0ZURpdkNsYXNzID0gKGNsYXNzTmFtZSkgPT57XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIHJldHVybiBkaXY7XG59XG5jb25zdCBjcmVhdGVEaXZUZXh0ID0gKHRleHQpID0+e1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LnRleHRDb250ZW50PXRleHRcbiAgICByZXR1cm4gZGl2O1xufVxuXG5jb25zdCBhcHBlbmRFbGVtZW50cyA9IChwYXJlbnQsIC4uLmNoaWxkcmVuKSA9PntcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9KVxufVxuXG4vL1ByaW50IHN0cnVjdHVyZSBvZiBwYWdlXG5cbmNvbnN0IGluaXRpYWxpemVEb20gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBzaWRlQmFyID0gY3JlYXRlRGl2Q2xhc3MoXCJzaWRlYmFyXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3RMaXN0JylcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKG5hdilcbiAgICBjb25zdCBkaXZBZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdkFkZDIgPSBjcmVhdGVEaXZDbGFzcyhcImFkZFwiKTtcbiAgICAgICAgICAgICAgICBkaXZBZGQyLmRhdGFzZXQub3Blbk1vZGFsID0gXCIjYWRkUHJvamVjdFwiXG4gICAgICAgICAgICAgICAgZGl2QWRkMi50ZXh0Q29udGVudCA9IFwiK1wiXG4gICAgICAgIGRpdkFkZFByb2plY3QuYXBwZW5kQ2hpbGQoZGl2QWRkMik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGRpdkFkZFByb2plY3QpO1xuICAgIC8vIDxkaXY+PGRpdiBjbGFzcz1cImFkZFwiPis8L2Rpdj48L2Rpdj5cbiAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlRGl2Q2xhc3MoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGRpdkFkZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZGl2QWRkID0gY3JlYXRlRGl2Q2xhc3MoXCJhZGRcIik7XG4gICAgICAgICAgICAvLyBkaXZBZGQuc2V0QXR0cmlidXRlKCdpZCcgLCAnYWRkVG9EbycpO1xuICAgICAgICAgICAgZGl2QWRkLmRhdGFzZXQub3Blbk1vZGFsID0gXCIjYWRkVG9Eb1wiXG4gICAgICAgICAgICBkaXZBZGQudGV4dENvbnRlbnQgPSBcIitcIlxuICAgICAgICAgICAgZGl2QWRkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkFkZCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2QWRkQ29udGFpbmVyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBjcmVhdGVEaXZDbGFzcyhcIm92ZXJsYXlcIik7XG4gICAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2lkJyAsIFwib3ZlcmxheVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIGNvbnN0IG1vZGFsID0gY3JlYXRlRGl2Q2xhc3MoXCJtb2RhbFwiKTtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJyAsIFwiYWRkVG9Eb1wiKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJyAsICduZXdUb0RvJyk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZDEgPSBjcmVhdGVEaXZDbGFzcyhcImZpZWxkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsVGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCd0aXRsZScpO1xuICAgICAgICAgICAgICAgIGxhYmVsVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOiAqXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScgLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcgLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgnbmFtZScgLCAndGl0bGUnKTtcbiAgICAgICAgICAgIGFwcGVuZEVsZW1lbnRzKGZpZWxkMSxsYWJlbFRpdGxlLGlucHV0VGl0bGUpO1xuICAgICAgICAgICAgY29uc3QgZmllbGQyID0gY3JlYXRlRGl2Q2xhc3MoXCJmaWVsZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbE5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbE5vdGVzLnRleHRDb250ZW50ID0gXCJOb3RlczpcIlxuICAgICAgICAgICAgICAgIGxhYmVsTm90ZXMuc2V0QXR0cmlidXRlKCdmb3InLCdub3RlcycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Tm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgICAgICAgICAgaW5wdXROb3Rlcy5zZXRBdHRyaWJ1dGUoJ2lkJyAsICdub3RlcycpO1xuICAgICAgICAgICAgICAgIGlucHV0Tm90ZXMuc2V0QXR0cmlidXRlKCduYW1lJyAsICdub3RlcycpO1xuICAgICAgICAgICAgICAgIGlucHV0Tm90ZXMuc2V0QXR0cmlidXRlKCdyb3dzJyAsICc0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXROb3Rlcy5zZXRBdHRyaWJ1dGUoJ2NvbHMnICwgJzUwJyk7XG4gICAgICAgICAgICBhcHBlbmRFbGVtZW50cyhmaWVsZDIsbGFiZWxOb3RlcyxpbnB1dE5vdGVzKTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkMyA9IGNyZWF0ZURpdkNsYXNzKFwiZmllbGRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbERhdGUuc2V0QXR0cmlidXRlKCdmb3InLCdkYXRlJyk7XG4gICAgICAgICAgICAgICAgbGFiZWxEYXRlLnRleHRDb250ZW50ID0gXCJEYXRlOlwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKCd0eXBlJyAsICdkYXRlJyk7XG4gICAgICAgICAgICAgICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZSgnaWQnICwgJ2RhdGUnKTtcbiAgICAgICAgICAgICAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKCduYW1lJyAsICdkYXRlJyk7XG4gICAgICAgICAgICBhcHBlbmRFbGVtZW50cyhmaWVsZDMsbGFiZWxEYXRlLGlucHV0RGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZDQ9IGNyZWF0ZURpdkNsYXNzKFwiZmllbGRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWxQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgbGFiZWxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiU2VsZWN0IGEgcHJpb3JpdHkgbGV2ZWw6XCI7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScgLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJyAsICdwcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdIaWdoJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjEudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24yLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTWVkaXVtJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjIudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdMb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uMy50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgICAgICAgICAgICAgYXBwZW5kRWxlbWVudHMoc2VsZWN0UHJpb3JpdHksb3B0aW9uMSxvcHRpb24yLG9wdGlvbjMpO1xuICAgICAgICAgICAgYXBwZW5kRWxlbWVudHMoZmllbGQ0LGxhYmVsUHJpb3JpdHksc2VsZWN0UHJpb3JpdHkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkVG9EbycpO1xuICAgICAgICAgICAgYnV0dG9uLmRhdGFzZXQuY2xvc2VNb2RhbD1cImFkZFRvRG9cIjtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIE5vdGVcIjtcbiAgICAgICAgYXBwZW5kRWxlbWVudHMoZm9ybSxmaWVsZDEsZmllbGQyLGZpZWxkMyxmaWVsZDQsYnV0dG9uKTtcblxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgY29uc3QgbW9kYWxQcm9qZWN0ID0gY3JlYXRlRGl2Q2xhc3MoXCJtb2RhbFwiKTtcbiAgICAgICAgbW9kYWxQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnICwgXCJhZGRQcm9qZWN0XCIpO1xuICAgICAgICBjb25zdCBmb3JtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybTIuc2V0QXR0cmlidXRlKCdpZCcgLCAnbmV3UHJvamVjdCcpO1xuICAgICAgICAgICAgY29uc3QgZmllbGQ1ID0gY3JlYXRlRGl2Q2xhc3MoXCJmaWVsZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsTmFtZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25hbWUnKTtcbiAgICAgICAgICAgICAgICBsYWJlbE5hbWUudGV4dENvbnRlbnQgPSBcIk5hbWU6ICpcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaW5wdXROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScgLCAnbmFtZScpO1xuICAgICAgICAgICAgICAgIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJyAsICduYW1lJyk7XG4gICAgICAgICAgICAgICAgaW5wdXROYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScgLCAnbmFtZScpO1xuICAgICAgICAgICAgYXBwZW5kRWxlbWVudHMoZmllbGQ1LGxhYmVsTmFtZSxpbnB1dE5hbWUpO1xuICAgICAgICAgICAgY29uc3QgZmllbGQ2ID0gY3JlYXRlRGl2Q2xhc3MoXCJmaWVsZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIlxuICAgICAgICAgICAgICAgIGxhYmVsRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdmb3InLCdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJyAsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJyAsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyb3dzJyAsICc0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NvbHMnICwgJzUwJyk7XG4gICAgICAgICAgICBhcHBlbmRFbGVtZW50cyhmaWVsZDYsbGFiZWxEZXNjcmlwdGlvbixpbnB1dERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYnV0dG9uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b25Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3QnKTtcbiAgICAgICAgICAgIGJ1dHRvblByb2plY3QuZGF0YXNldC5jbG9zZU1vZGFsPVwiYWRkUHJvamVjdFwiO1xuICAgICAgICAgICAgYnV0dG9uUHJvamVjdC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICAgICAgYXBwZW5kRWxlbWVudHMoZm9ybTIsZmllbGQ1LGZpZWxkNixidXR0b25Qcm9qZWN0KTtcblxuICAgICAgICBtb2RhbFByb2plY3QuYXBwZW5kQ2hpbGQoZm9ybTIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxQcm9qZWN0KTtcblxufVxuXG5jb25zdCBpbml0aWFsaXplTW9kYWxzID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1vcGVuLW1vZGFsXVwiKTtcbiAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jbG9zZS1tb2RhbF1cIilcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKTtcblxuICAgIG9wZW5Nb2RhbEJ1dHRvbnMuZm9yRWFjaCggYnV0dG9uID0+e1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkT3BlbiA9IGUudGFyZ2V0LmRhdGFzZXQub3Blbk1vZGFsO1xuICAgICAgICAgICAgY29uc3QgbW9kYWxUb09wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkT3Blbik7XG4gICAgICAgICAgICBvcGVuTW9kYWwobW9kYWxUb09wZW4pO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjbG9zZU1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgY29uc3QgbW9kYWxUb0Nsb3NlPSBidXR0b24uY2xvc2VzdCgnLm1vZGFsJyk7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsVG9DbG9zZSk7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwuYWN0aXZlJylcbiAgICAgICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xuICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgXG5cbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwgKG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuXG59XG5cblxuY29uc3QgcHJpbnRUb0RvTGlzdCA9IChsaXN0KSA9PntcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG4gICAgbGlzdC5mb3JFYWNoKCAodG9EbykgPT57XG4gICAgICAgIHByaW50VG9Ebyh0b0RvKVxuICAgIH0pXG5cbiAgICBjb25zdCBkaXZBZGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdkFkZCA9IGNyZWF0ZURpdkNsYXNzKFwiYWRkXCIpO1xuICAgICAgICAgICAgLy8gZGl2QWRkLnNldEF0dHJpYnV0ZSgnaWQnICwgJ2FkZFRvRG8nKTtcbiAgICAgICAgICAgIGRpdkFkZC5kYXRhc2V0Lm9wZW5Nb2RhbCA9IFwiI2FkZFRvRG9cIlxuICAgICAgICAgICAgZGl2QWRkLnRleHRDb250ZW50ID0gXCIrXCJcbiAgICAgICAgICAgIGRpdkFkZENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZBZGQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2QWRkQ29udGFpbmVyKTtcblxuICAgIGluaXRpYWxpemVNb2RhbHMoKTtcblxuXG59XG5jb25zdCBwcmludFRvRG8gPSAodG9EbykgPT57XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGNyZWF0ZURpdkNsYXNzKFwidG9kb1wiKTtcbiAgICAgICAgY29uc3QgZGl2Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gY3JlYXRlRGl2Q2xhc3MoXCJjaGVja0JveFwiKTtcbiAgICAgICAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgICAgICB0b0RvLmNsaWNrQ2hlY2soKTtcblxuICAgICAgICAgICAgICAgIHdoaWxlICh0b0RvQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b0RvQ29udGFpbmVyLmxhc3RDaGlsZCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRDaGVjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGRpdkNoZWNrLmFwcGVuZENoaWxkKGNoZWNrKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvRG8uZ2V0VGl0bGUoKTtcblxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0b0RvLmdldER1ZURhdGUoKTtcblxuICAgICAgICBjb25zdCBzdmdDb250YWluZXIgPSBjcmVhdGVEaXZDbGFzcyhcInByaW9yaXR5XCIpO1xuICAgICAgICBzdmdDb250YWluZXIudGV4dENvbnRlbnQgPSB0b0RvLmdldFByaW9yaXR5KCk7XG4gICAgICAgIHNldENvbG9yUHJpb3JpdHkoc3ZnQ29udGFpbmVyLHRvRG8pO1xuXG4gICAgICAgIHNldENoZWNrKCk7XG4gICAgICAgIFxuICAgIFxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9Eb0NvbnRhaW5lcik7XG5cbiAgICBmdW5jdGlvbiBzZXRDaGVjaygpIHtcbiAgICAgICAgaWYodG9Eby5nZXRDaGVja2xpc3QoKT09PTEpe1xuICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY3Jvc3NlZFwiKVxuICAgICAgICAgICAgY29uc3QgY3Jvc3NPdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncycpO1xuICAgICAgICAgICAgY3Jvc3NPdXQxLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGNyb3NzT3V0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3MnKTtcbiAgICAgICAgICAgIGNyb3NzT3V0Mi5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGNyb3NzT3V0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3MnKTtcbiAgICAgICAgICAgIGNyb3NzT3V0My5hcHBlbmRDaGlsZChzdmdDb250YWluZXIpO1xuXG4gICAgICAgICAgICBhcHBlbmRFbGVtZW50cyh0b0RvQ29udGFpbmVyLGRpdkNoZWNrLGNyb3NzT3V0MSxjcm9zc091dDIsY3Jvc3NPdXQzKTtcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImNyb3NzZWRcIilcbiAgICAgICAgICAgIGFwcGVuZEVsZW1lbnRzKHRvRG9Db250YWluZXIsZGl2Q2hlY2ssdGl0bGUsZGF0ZSxzdmdDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHNldENvbG9yUHJpb3JpdHkoZGl2ICwgdG9Ebyl7XG4gICAgaWYodG9Eby5nZXRQcmlvcml0eSgpID09PSBcIlwiKXtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnICwgJ2JhY2tncm91bmQtY29sb3I6IHJlZDsnKTtcbiAgICB9ZWxzZSBpZiAodG9Eby5nZXRQcmlvcml0eSgpID09PSBcIkhpZ2hcIil7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJlZDtcIik7XG4gICAgfWVsc2UgaWYgKHRvRG8uZ2V0UHJpb3JpdHkoKSA9PT0gXCJNZWRpdW1cIil7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IGJsdWU7XCIpO1xuICAgIH1lbHNle1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcIik7XG4gICAgfVxufVxuXG5jb25zdCBwcmludFByb2plY3RMaXN0ID0gKHByb2plY3RzKSA9PiB7XG4gICAgY29uc3QgbmF2UG9pbnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpO1xuICAgIHdoaWxlIChuYXZQb2ludGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbmF2UG9pbnRlci5yZW1vdmVDaGlsZChuYXZQb2ludGVyLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgcHJvamVjdHMuZm9yRWFjaCggKHByb2plY3QpID0+e1xuICAgICAgICAgcHJpbnRQcm9qZWN0KHByb2plY3QpXG4gICAgfSlcblxuICAgIGNvbnN0IGRpdkFkZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZGl2QWRkID0gY3JlYXRlRGl2Q2xhc3MoXCJhZGRcIik7XG4gICAgICAgICAgICAvLyBkaXZBZGQuc2V0QXR0cmlidXRlKCdpZCcgLCAnYWRkVG9EbycpO1xuICAgICAgICAgICAgZGl2QWRkLmRhdGFzZXQub3Blbk1vZGFsID0gXCIjYWRkUHJvamVjdFwiXG4gICAgICAgICAgICBkaXZBZGQudGV4dENvbnRlbnQgPSBcIitcIlxuICAgICAgICAgICAgZGl2QWRkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkFkZCk7XG4gICAgbmF2UG9pbnRlci5hcHBlbmRDaGlsZChkaXZBZGRDb250YWluZXIpO1xuXG4gICAgaW5pdGlhbGl6ZU1vZGFscygpO1xuICAgIFxufVxuXG5jb25zdCBwcmludFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IG5hdlBvaW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKTtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlRGl2Q2xhc3MoXCJwcm9qZWN0XCIpO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBhcHBlbmRFbGVtZW50cyhuYXZQb2ludGVyLGRpdixocik7XG59XG5cbmV4cG9ydCB7aW5pdGlhbGl6ZURvbSAsIGluaXRpYWxpemVNb2RhbHMgLCBwcmludFRvRG9MaXN0LCBwcmludFByb2plY3RMaXN0fVxuIiwiXG5cbmZ1bmN0aW9uIHByb2plY3RGYWN0b3J5ICgpIHtcblxuICAgIGxldCBfdGl0bGUgPSAnJztcbiAgICBsZXQgX2Rlc2NyaXB0aW9uID0gJyc7XG4gICAgbGV0IF90b0RvTGlzdCA9IFtdO1xuICAgIFxuICAgIGNvbnN0IHNldFRpdGxlID0gKHdvcmQpID0+IF90aXRsZSA9IHdvcmQ7XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAodGV4dCkgPT4gX2Rlc2NyaXB0aW9uID0gdGV4dDtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IF90aXRsZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IF9kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBhZGRUb0RvID0gKHRvRG8pICA9PiB7XG4gICAgICAgIF90b0RvTGlzdC5wdXNoKHRvRG8pO1xuICAgIH1cblxuICAgIHJldHVybntcblxuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgc2V0RGVzY3JpcHRpb24sXG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBnZXREZXNjcmlwdGlvbixcbiAgICAgICAgYWRkVG9Eb1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdEZhY3RvcnkiLCJcbmZ1bmN0aW9uIHRvRG9GYWN0b3J5ICgpIHtcbiAgICBcbiAgICBsZXQgX3RpdGxlID0gJyc7XG4gICAgbGV0IF9kdWVEYXRlID0gJyc7XG4gICAgbGV0IF9wcmlvcml0eSA9ICcnO1xuICAgIGxldCBfbm90ZXMgPSAnJztcbiAgICBsZXQgX2NoZWNrbGlzdCA9IDA7XG4gICAgbGV0IF9wcm9qZWN0ID0gJyc7XG5cbiAgICBjb25zdCBpbml0aWFsaXplVG9EbyA9ICh3b3JkLG5vdGUsZGF0ZSxsZXZlbCxwcm9qZWN0KSA9PiB7XG4gICAgICAgIF90aXRsZSA9IHdvcmQ7XG4gICAgICAgIF9ub3RlcyA9IG5vdGU7XG4gICAgICAgIF9kdWVEYXRlID0gZGF0ZTtcbiAgICAgICAgX3ByaW9yaXR5ID0gbGV2ZWw7XG4gICAgICAgIF9wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG4gICAgY29uc3Qgc2V0VGl0bGUgPSAod29yZCkgPT4gX3RpdGxlID0gd29yZDtcbiAgICBjb25zdCBzZXREdWVEYXRlID0gKGRhdGUpID0+IF9kdWVEYXRlID0gZGF0ZTtcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IChsZXZlbCkgPT4gX3ByaW9yaXR5ID0gbGV2ZWw7XG4gICAgY29uc3Qgc2V0Tm90ZXMgPSAobm90ZSkgPT4gX25vdGVzID0gbm90ZTtcbiAgICBjb25zdCBzZXRDaGVja2xpc3QgPSAoY2hlY2spID0+IF9jaGVja2xpc3QgPSBjaGVjaztcbiAgICBjb25zdCBjbGlja0NoZWNrID0gKCkgPT57XG4gICAgICAgIGlmIChfY2hlY2tsaXN0ID09PSAwKXtcbiAgICAgICAgICAgIF9jaGVja2xpc3Q9MTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBfY2hlY2tsaXN0PTA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IF90aXRsZTtcbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gX2R1ZURhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBfcHJpb3JpdHk7XG4gICAgY29uc3QgZ2V0Tm90ZXMgPSAoKSA9PiBfbm90ZXM7XG4gICAgY29uc3QgZ2V0Q2hlY2tsaXN0ID0gKCkgPT4gX2NoZWNrbGlzdDtcbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4gX3Byb2plY3Q7XG4gICAgXG5cbiAgICByZXR1cm57XG5cbiAgICAgICAgaW5pdGlhbGl6ZVRvRG8sXG4gICAgICAgIHNldFRpdGxlLFxuICAgICAgICBzZXREdWVEYXRlLFxuICAgICAgICBzZXRQcmlvcml0eSxcbiAgICAgICAgc2V0Tm90ZXMsXG4gICAgICAgIHNldENoZWNrbGlzdCxcbiAgICAgICAgZ2V0VGl0bGUsXG4gICAgICAgIGdldER1ZURhdGUsXG4gICAgICAgIGdldFByaW9yaXR5LFxuICAgICAgICBnZXROb3RlcyxcbiAgICAgICAgZ2V0Q2hlY2tsaXN0LFxuICAgICAgICBnZXRQcm9qZWN0LFxuICAgICAgICBjbGlja0NoZWNrXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0b0RvRmFjdG9yeSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB0b0RvRmFjdG9yeSBmcm9tIFwiLi90b0RvLmpzXCI7XG5pbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHtpbml0aWFsaXplRG9tICwgaW5pdGlhbGl6ZU1vZGFscyAsIHByaW50VG9Eb0xpc3QsIHByaW50UHJvamVjdExpc3R9IGZyb20gXCIuL2RvbVJlbmRlci5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuaW5pdGlhbGl6ZURvbSgpO1xuaW5pdGlhbGl6ZU1vZGFscygpO1xuXG5jb25zdCB0b0RvTGlzdCA9IFtdO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMnKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbmNvbnNvbGUubG9nKHRpdGxlKVxuXG5cbmxldCBidXR0b25TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2xvc2UtbW9kYWwgPSAnYWRkVG9EbyddXCIpXG5idXR0b25TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgc3VibWl0Rm9ybSlcblxuXG5mdW5jdGlvbiBzdWJtaXRGb3JtICgpIHtcbiAgICBcbiAgICBjb25zdCBuZXdUb0RvID0gdG9Eb0ZhY3RvcnkoKTtcbiAgICBuZXdUb0RvLmluaXRpYWxpemVUb0RvKHRpdGxlLnZhbHVlLG5vdGVzLnZhbHVlLGRhdGUudmFsdWUscHJpb3JpdHkudmFsdWUsXCJkZWZhdWx0UHJvamVjdFwiKTtcbiAgICB0b0RvTGlzdC5wdXNoKG5ld1RvRG8pO1xuXG4gICAgcHJpbnRUb0RvTGlzdCh0b0RvTGlzdCk7XG4gICAgXG4gICAgY2xlYXJJbnB1dHMoKTtcbiAgXG59XG5jb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xubGV0IGJ1dHRvblByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2xvc2UtbW9kYWwgPSAnYWRkUHJvamVjdCddXCIpXG5idXR0b25Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsIHN1Ym1pdFByb2plY3QpXG5cbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcblxuZnVuY3Rpb24gc3VibWl0UHJvamVjdCAoKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCk7XG4gICAgLy9ORUVEUyBJTVBST1ZFTUVOVFxuICAgIG5ld1Byb2plY3Quc2V0VGl0bGUobmFtZS52YWx1ZSk7XG4gICAgbmV3UHJvamVjdC5zZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbi52YWx1ZSk7XG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcblxuICAgIHByaW50UHJvamVjdExpc3QocHJvamVjdExpc3QpO1xuICAgIFxuICAgIGNsZWFySW5wdXRzKCk7XG4gIFxufVxuXG5cblxuXG5mdW5jdGlvbiBjbGVhcklucHV0cyAoKSB7XG4gICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgIG5vdGVzLnZhbHVlID0gXCJcIjtcbiAgICBkYXRlLnZhbHVlID0gXCJcIjtcbiAgICBuYW1lLnZhbHVlPSBcIlwiO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlPSBcIlwiO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==