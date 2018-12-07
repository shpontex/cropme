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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */\r\nmodule.exports = __webpack_amd_options__;\r\n\n/* WEBPACK VAR INJECTION */}.call(this, {}))\n\n//# sourceURL=webpack:///(webpack)/buildin/amd-options.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/cropme.sass":
/*!*************************!*\
  !*** ./src/cropme.sass ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/cropme.sass?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _cropme_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cropme.sass */ \"./src/cropme.sass\");\n/* harmony import */ var _cropme_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cropme_sass__WEBPACK_IMPORTED_MODULE_0__);\n\n\n(function (global) {\n  const nestedObjectAssign = __webpack_require__(/*! ./polyfills */ \"./src/polyfills.js\")\n  if (window.jQuery) {\n    jQuery.fn.cropme = function (options, obj) {\n\n      if (typeof options === 'object') {\n\n        return this.each(function () {\n          var cropme = new Cropme(this, options)\n          $(this).data('cropme', cropme)\n        });\n\n      } else if (typeof options === 'string') {\n\n        let cropme = this.data('cropme')\n\n        if (options === 'position') {\n          return cropme.position()\n        }\n        if (options === 'bind') {\n          return cropme.bind(obj)\n        }\n        if (options === 'export') {\n          return cropme.export(obj)\n        }\n        if (options === 'rotate') {\n          return cropme.rotate(obj)\n        }\n        if (options === 'destroy') {\n          return cropme.destroy()\n        }\n        throw 'Error: ' + options + ' method not found';\n\n      } else {\n        throw 'Error: the argument must be an object or a string'\n\n      }\n    }\n  }\n\n  function transform() {\n    return 'translate(' + this.properties.x + 'px,' + this.properties.y + 'px) scale(' + this.properties.scale + ') rotate(' + this.properties.deg + 'deg)'\n  }\n\n  function transformOrigin(x, y) {\n    return x + 'px ' + y + 'px'\n  }\n\n  function createSlider() {\n    const sliderContainer = document.createElement('div')\n    sliderContainer.classList.add('cropme-slider')\n    const slider = this.properties.slider = document.createElement('input')\n    slider.type = 'range'\n\n    slider.setAttribute('min', this.options.zoom.min)\n    slider.setAttribute('max', this.options.zoom.max)\n    slider.setAttribute('step', 0.000001)\n    slider.style.width = this.options.container.width + 'px'\n    sliderContainer.appendChild(slider)\n    this.properties.wrapper.appendChild(sliderContainer)\n  }\n\n  function createContainer() {\n    const container = document.createElement('div')\n    container.classList.add('cropme-container')\n    container.style.width = this.options.container.width + 'px'\n    container.style.height = this.options.container.height + 'px'\n    this.properties.container = container\n    this.properties.wrapper.appendChild(container)\n  }\n\n  function createImage() {\n    if (!this.properties.image) {\n      this.properties.image = new Image()\n    }\n    this.properties.image.ondragstart = () => false\n    this.properties.container.appendChild(this.properties.image)\n  }\n\n  function createViewport() {\n    const viewport = this.properties.viewport = document.createElement('div')\n    const options = this.options\n    options.viewport.width = options.viewport.width > options.container.width ? options.container.width : options.viewport.width\n    options.viewport.height = options.viewport.height > options.container.height ? options.container.height : options.viewport.height\n    viewport.style.width = options.viewport.width + 'px'\n    viewport.style.height = options.viewport.height + 'px'\n    viewport.className = 'viewport'\n    if (options.viewport.type === 'circle') {\n      viewport.className = 'viewport circle'\n    }\n\n    if (options.viewport.border.enable) {\n      let viewport_border = (options.container.width - options.viewport.width) / 2\n      options.viewport.border.width = viewport_border < options.viewport.border.width ? viewport_border : options.viewport.border.width\n    } else {\n      options.viewport.border.width = 0\n    }\n\n    this.properties.viewport.style.borderWidth = options.viewport.border.width + 'px'\n    this.properties.viewport.style.borderColor = options.viewport.border.color\n    this.properties.container.appendChild(viewport)\n  }\n\n  function createContext() {\n    createContainer.call(this)\n    createSlider.call(this)\n    createImage.call(this)\n    createViewport.call(this)\n\n\n    let x, movex = 0,\n      y, movey = 0,\n      diffx, diffy,\n      self = this\n\n\n    let down = function (e) {\n      e.preventDefault();\n      let pageX = e.pageX\n      let pageY = e.pageY\n      if (e.touches) {\n        let touches = e.touches[0]\n        pageX = touches.pageX\n        pageY = touches.pageY\n      }\n      movex = self.properties.x || movex\n      movey = self.properties.y || movey\n      x = pageX - movex\n      y = pageY - movey\n\n      document.addEventListener('mousemove', move)\n      document.addEventListener(\"touchmove\", move);\n    }\n    self.properties.image.addEventListener('mousedown', down)\n    self.properties.image.addEventListener(\"touchstart\", down);\n\n    let move = function (e) {\n      e.preventDefault();\n      let pageX = e.pageX\n      let pageY = e.pageY\n      if (e.touches) {\n        let touches = e.touches[0]\n        pageX = touches.pageX\n        pageY = touches.pageY\n      }\n      if (e.touches && e.touches.length > 1) {\n        let second_touches = e.touches[1]\n        let x = pageX - second_touches.pageX\n        let y = pageY - second_touches.pageY\n        let deg = 90 - Math.atan2(x, y) * 180 / Math.PI;\n\n        if (!self.properties.odeg) {\n          self.properties.odeg = deg - self.properties.deg\n        }\n        self.properties.deg = deg - self.properties.odeg\n\n        let touches_dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));\n        if (!self.properties.od) {\n          self.properties.od = touches_dist / self.properties.scale;\n        }\n        self.properties.scale = self.properties.slider.value = touches_dist / self.properties.od;\n      } else {\n        self.properties.x = pageX - x\n        self.properties.y = pageY - y\n      }\n      self.properties.image.style.transform = transform.call(self)\n    }\n\n    let up = function () {\n      document.removeEventListener('touchmove', move);\n      document.removeEventListener('mousemove', move);\n      self.properties.od = 0;\n      self.properties.odeg = 0;\n\n      let scale = self.properties.scale,\n        imageData = self.properties.image.getBoundingClientRect(),\n        viewportData = self.properties.viewport.getBoundingClientRect(),\n        top = (viewportData.top - imageData.top) + (viewportData.height / 2),\n        left = (viewportData.left - imageData.left) + (viewportData.width / 2),\n        origin = self.properties.image.style.transformOrigin.split('px '),\n        cx,\n        cy\n      let ox = parseInt(origin[0])\n      let oy = parseInt(origin[1])\n\n      let angle = self.properties.deg\n        cx = left / scale;\n        cy = top / scale;\n      if (angle) {\n        let y = self.properties.image.height - oy\n        let dottob = Math.sqrt(Math.pow(ox,2) + Math.pow(y,2))\n        let addedx = dottob * Math.cos(angle) - ox\n        console.log(angle,addedx);\n        \n        // let width = Math.abs(imageData.width * Math.cos(angle)) + Math.abs(imageData.height * Math.sin(angle));\n        // let height = Math.abs(imageData.width * Math.sin(angle)) + Math.abs(imageData.height * Math.cos(angle));\n        let angx = 90 - angle\n        let ab = ox - imageData.left\n        \n        \n        // var crx = ox;\n        // var cry = oy;\n        // var tx = self.properties.x;\n        // var ty = self.properties.y;\n\n        // cy = crx;\n        // cx = cry;\n        // self.properties.y = tx;\n        // self.properties.x = ty;\n      } else {\n        // change origin form not rotate ----------------------\n\n        self.properties.image.style.transformOrigin = transformOrigin.call(self, cx, cy)\n\n        self.properties.x -= (cx - ox) * (1 - scale);\n        self.properties.y -= (cy - oy) * (1 - scale);\n        self.properties.image.style.transform = transform.call(self)\n      }\n\n    }\n    document.addEventListener('mouseup', up)\n    document.addEventListener(\"touchend\", up);\n\n    self.properties.slider.addEventListener('input', function (e) {\n      self.properties.scale = parseFloat(e.target.value)\n      self.properties.image.style.transform = transform.call(self)\n    })\n\n    let mousewheel = function (e) {\n      e.preventDefault()\n      let scale = self.properties.scale + (e.wheelDelta / 1200 * self.properties.scale)\n      if (scale > self.options.zoom.min && scale < self.options.zoom.max && self.options.zoom.mouseWheel) {\n\n        self.properties.scale = self.properties.slider.value = scale\n        self.properties.image.style.transform = transform.call(self)\n      }\n    }\n    self.properties.container.addEventListener('mousewheel', mousewheel)\n    if (!self.options.zoom.slider) {\n      let slider = this.properties.slider.parentNode\n      self.properties.wrapper.removeChild(slider)\n    }\n  }\n\n  function createCanvas(options) {\n    let canvas = document.createElement('canvas'),\n      ctx = canvas.getContext('2d');\n\n    let width = this.options.viewport.width\n    let height = this.options.viewport.height\n\n    if (typeof options === 'object') {\n      if (options.scale) {\n        width = width * options.scale\n        height = height * options.scale\n      } else if (options.width) {\n        height = options.width * height / width\n        width = options.width\n      }\n    }\n\n    canvas.width = width\n    canvas.height = height\n\n    const xs = width / this.options.viewport.width\n    const ys = height / this.options.viewport.height\n\n    const deg = this.properties.deg\n    const nx = this.properties.x\n    const ny = this.properties.y\n\n    function transformImage(deg, ox, oy) {\n      this.properties.deg = deg\n      this.properties.x = ox\n      this.properties.y = oy\n      this.properties.image.style.transform = transform.call(this)\n    }\n    if (deg !== 0) {\n      transformImage.call(this, 0, this.properties.ox, this.properties.oy)\n    }\n\n    const imageData = this.properties.image.getBoundingClientRect()\n    const viewportData = this.properties.viewport.getBoundingClientRect()\n\n    const x = xs * (imageData.x - viewportData.x - this.options.viewport.border.width)\n    const y = ys * (imageData.y - viewportData.y - this.options.viewport.border.width)\n    if (deg !== 0) {\n      ctx.translate((nx - this.properties.x) * xs, (ny - this.properties.y) * ys)\n      ctx.translate(width / 2, height / 2);\n      ctx.rotate(deg * Math.PI / 180);\n      ctx.translate(-width / 2, -height / 2);\n    }\n\n    ctx.drawImage(this.properties.image, x, y, imageData.width * xs, imageData.height * ys)\n\n    if (this.options.viewport.type === 'circle') {\n      ctx.translate(width / 2, height / 2);\n      ctx.rotate(-deg * Math.PI / 180);\n      ctx.translate(-width / 2, -height / 2);\n      ctx.scale(1, this.options.viewport.height / this.options.viewport.width);\n      let diff = (this.options.viewport.width - this.options.viewport.height) / 2 * xs\n      let x_coordinate = (this.properties.x - nx) * xs\n      let y_coordinate = (this.properties.y - ny) * ys\n      if (diff > 0) {\n        y_coordinate = diff + y_coordinate * 2\n      } else if (diff < 0) {\n        y_coordinate = diff + y_coordinate / 2\n      }\n      ctx.translate(x_coordinate, y_coordinate)\n\n      ctx.globalCompositeOperation = 'destination-in'\n      ctx.arc(width / 2, height / 2, width / 2, 0, 2 * Math.PI)\n      ctx.fill();\n    }\n    if (this.options.viewport.type === 'triangle') {\n      ctx.translate(width / 2, height / 2);\n      ctx.rotate(-deg * Math.PI / 180);\n      ctx.translate(-width / 2, -height / 2);\n      ctx.translate((this.properties.x - nx) * xs, (this.properties.y - ny) * ys)\n      ctx.beginPath();\n      ctx.globalCompositeOperation = 'destination-in'\n      ctx.moveTo(width / 2, 0);\n      ctx.lineTo(width, height);\n      ctx.lineTo(0, height);\n      ctx.closePath();\n      ctx.fill();\n    }\n\n    transformImage.call(this, deg, nx, ny)\n\n    return canvas\n  }\n\n\n  class Cropme {\n    constructor(el, options) {\n      if (el.className.indexOf('cropme-wrapper') > -1) {\n        throw 'Error: Cropme is already initialized'\n      }\n      this.properties = {}\n      this.options = nestedObjectAssign(defaultOptions, options)\n      this.properties.wrapper = el\n      if (el.tagName.toLowerCase() === 'img') {\n        this.properties.image = new Image()\n        this.properties.image.src = el.src\n        this.properties.wrapper = document.createElement('div')\n        el.parentNode.insertBefore(this.properties.wrapper, el.previousSibling);\n        el.parentNode.removeChild(el)\n      }\n      this.properties.wrapper.className += 'cropme-wrapper ' + this.options.customClass\n      createContext.call(this)\n\n      if (this.properties.image.src) {\n        this.bind({\n          url: this.properties.image.src\n        })\n      }\n    }\n    bind(obj) {\n      this.properties.image.src = obj.url\n      let properties = this.properties\n      let options = this.options\n      let self = this\n      this.properties.image.onload = function () {\n\n        let imageData = properties.image.getBoundingClientRect()\n        let containerData = properties.container.getBoundingClientRect()\n        let cx = (containerData.width - imageData.width) / 2\n        let cy = (containerData.height - imageData.height) / 2\n        properties.ox = cx\n        properties.oy = cy\n\n        if (typeof obj.position == 'object') {\n          cx = obj.position.x || cx\n          cy = obj.position.y || cy\n        }\n\n        let scale = obj.scale ? obj.scale : containerData.height / imageData.height\n        if (options.zoom.max <= options.zoom.min) {\n          throw 'Error: max zoom cannot be less or equal to min zoom'\n        }\n\n        if (scale < options.zoom.min) {\n          scale = options.zoom.min\n        }\n        if (scale > options.zoom.max) {\n          scale = options.zoom.max\n        }\n\n\n        properties.x = cx\n        properties.y = cy\n\n        properties.origin_x = imageData.width / 2\n        properties.origin_y = imageData.height / 2\n\n        properties.scale = scale\n        properties.slider.value = scale\n        properties.deg = obj.deg || 0\n        properties.image.style.transform = transform.call(self)\n        properties.image.style.transformOrigin = transformOrigin.call(self, properties.origin_x, properties.origin_y)\n        properties.image.style.opacity = 1\n      }\n    }\n    rotate(deg) {\n      this.properties.deg = deg\n      this.properties.image.style.transform = transform.call(this)\n    }\n    export (options) {\n      let canvas = createCanvas.call(this, options)\n      options = typeof options === 'object' ? options.type : options\n      return new Promise((resolve) => {\n        options === 'blob' ? canvas.toBlob(blob => resolve(URL.createObjectURL(blob))) : resolve(canvas.toDataURL())\n      })\n    }\n    position() {\n      return {\n        x: this.properties.x,\n        y: this.properties.y,\n        scale: this.properties.scale,\n        deg: parseInt(this.properties.deg)\n      }\n    }\n    destroy() {\n      this.properties.wrapper.innerHTML = ''\n      this.properties.wrapper.className = this.properties.wrapper.className.replace('cropme-wrapper', '');\n      delete this.options\n      delete this.properties\n\n    }\n  }\n\n  const defaultOptions = {\n    container: {\n      width: 300,\n      height: 300,\n\n    },\n    viewport: {\n      width: 100,\n      height: 100,\n      border: {\n        enable: true,\n        width: 2,\n        color: '#fff'\n      }\n    },\n    zoom: {\n      min: 0.01,\n      max: 3,\n      enable: true,\n      mouseWheel: true,\n      slider: false\n    },\n    customClass: '',\n  }\n\n  if ( true && typeof module.exports === \"object\") {\n    module.exports = Cropme\n  } else if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n    define([], function () {\n      return Cropme\n    });\n  } else {\n    global.Cropme = Cropme\n  }\n})(window)\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/polyfills.js":
/*!**************************!*\
  !*** ./src/polyfills.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("    // ----------------- Pollyfils ---------------------------\n  // promise-pollyfil\n  // !function (e, n) { \"object\" == typeof exports && \"undefined\" != typeof module ? n() : \"function\" == typeof define && define.amd ? define(n) : n() }(0, function () { \"use strict\"; function e(e) { var n = this.constructor; return this.then(function (t) { return n.resolve(e()).then(function () { return t }) }, function (t) { return n.resolve(e()).then(function () { return n.reject(t) }) }) } function n() {} function t(e) { if (!(this instanceof t)) throw new TypeError(\"Promises must be constructed via new\"); if (\"function\" != typeof e) throw new TypeError(\"not a function\"); this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], u(e, this) } function o(e, n) { for (; 3 === e._state;) e = e._value; 0 !== e._state ? (e._handled = !0, t._immediateFn(function () { var t = 1 === e._state ? n.onFulfilled : n.onRejected; if (null !== t) { var o; try { o = t(e._value) } catch (f) { return void i(n.promise, f) } r(n.promise, o) } else(1 === e._state ? r : i)(n.promise, e._value) })) : e._deferreds.push(n) } function r(e, n) { try { if (n === e) throw new TypeError(\"A promise cannot be resolved with itself.\"); if (n && (\"object\" == typeof n || \"function\" == typeof n)) { var o = n.then; if (n instanceof t) return e._state = 3, e._value = n, void f(e); if (\"function\" == typeof o) return void u(function (e, n) { return function () { e.apply(n, arguments) } }(o, n), e) } e._state = 1, e._value = n, f(e) } catch (r) { i(e, r) } } function i(e, n) { e._state = 2, e._value = n, f(e) } function f(e) { 2 === e._state && 0 === e._deferreds.length && t._immediateFn(function () { e._handled || t._unhandledRejectionFn(e._value) }); for (var n = 0, r = e._deferreds.length; r > n; n++) o(e, e._deferreds[n]); e._deferreds = null } function u(e, n) { var t = !1; try { e(function (e) { t || (t = !0, r(n, e)) }, function (e) { t || (t = !0, i(n, e)) }) } catch (o) { if (t) return; t = !0, i(n, o) } } var c = setTimeout; t.prototype[\"catch\"] = function (e) { return this.then(null, e) }, t.prototype.then = function (e, t) { var r = new this.constructor(n); return o(this, new function (e, n, t) { this.onFulfilled = \"function\" == typeof e ? e : null, this.onRejected = \"function\" == typeof n ? n : null, this.promise = t }(e, t, r)), r }, t.prototype[\"finally\"] = e, t.all = function (e) { return new t(function (n, t) { function o(e, f) { try { if (f && (\"object\" == typeof f || \"function\" == typeof f)) { var u = f.then; if (\"function\" == typeof u) return void u.call(f, function (n) { o(e, n) }, t) } r[e] = f, 0 == --i && n(r) } catch (c) { t(c) } } if (!e || \"undefined\" == typeof e.length) throw new TypeError(\"Promise.all accepts an array\"); var r = Array.prototype.slice.call(e); if (0 === r.length) return n([]); for (var i = r.length, f = 0; r.length > f; f++) o(f, r[f]) }) }, t.resolve = function (e) { return e && \"object\" == typeof e && e.constructor === t ? e : new t(function (n) { n(e) }) }, t.reject = function (e) { return new t(function (n, t) { t(e) }) }, t.race = function (e) { return new t(function (n, t) { for (var o = 0, r = e.length; r > o; o++) e[o].then(n, t) }) }, t._immediateFn = \"function\" == typeof setImmediate && function (e) { setImmediate(e) } || function (e) { c(e, 0) }, t._unhandledRejectionFn = function (e) { void 0 !== console && console && console.warn(\"Possible Unhandled Promise Rejection:\", e) }; var l = function () { if (\"undefined\" != typeof self) return self; if (\"undefined\" != typeof window) return window; if (\"undefined\" != typeof global) return global; throw Error(\"unable to locate global object\") }(); \"Promise\" in l ? l.Promise.prototype[\"finally\"] || (l.Promise.prototype[\"finally\"] = e) : l.Promise = t });\n\n  // Nested Object assign\n  !function (e, t) {  true ? module.exports = t() : undefined }(this, function () { return function (e) { function t(n) { if (r[n]) return r[n].exports; var o = r[n] = { exports: {}, id: n, loaded: !1 }; return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports } var r = {}; return t.m = e, t.c = r, t.p = \"\", t(0) }([function (e, t, r) { \"use strict\"; function n(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } function o(e) { for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), c = 1; c < t; c++) r[c - 1] = arguments[c]; if (!r.length) return e; var u = r.shift(); if ((0, i.isObject)(e) && (0, i.isObject)(u)) for (var f in u)(0, i.isObject)(u[f]) ? (e[f] || Object.assign(e, n({}, f, {})), o(e[f], u[f])) : (0, s.isArray)(u[f]) ? (e[f] || Object.assign(e, n({}, f, [])), e[f] = e[f].concat(u[f])) : Object.assign(e, n({}, f, u[f])); return o.apply(void 0, [e].concat(r)) } Object.defineProperty(t, \"__esModule\", { value: !0 }), t.default = o; var i = r(1), s = r(2); e.exports = t.default }, function (e, t) { \"use strict\"; function r(e) { return e && \"object\" === (\"undefined\" == typeof e ? \"undefined\" : n(e)) && !Array.isArray(e) } Object.defineProperty(t, \"__esModule\", { value: !0 }); var n = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && \"function\" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? \"symbol\" : typeof e }; t.isObject = r }, function (e, t) { \"use strict\"; function r(e) { return e && Array.isArray(e) } Object.defineProperty(t, \"__esModule\", { value: !0 }), t.isArray = r }]) });\n\n\n\n//# sourceURL=webpack:///./src/polyfills.js?");

/***/ })

/******/ });