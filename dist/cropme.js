/*!
 * cropme v1.2.0
 * https://shpontex.github.io/cropme
 *
 * Copyright 2019 shpontex
 * Released under the MIT license
 *
 * Date: 2019-01-08T08:46:02.592Z
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Cropme = factory());
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function isObject(item) {
    return item && _typeof(item) === 'object' && !Array.isArray(item);
  }

  function isArray(item) {
    return item && Array.isArray(item);
  }

  function nestedObjectAssign(target) {
    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();

    if (isObject(target) && isObject(source)) {
      for (var key in source) {
        if (isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }

          nestedObjectAssign(target[key], source[key]);
        } else if (isArray(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, []));
          }

          target[key] = target[key].concat(source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }

    return nestedObjectAssign.apply(void 0, [target].concat(sources));
  }

  if (window.jQuery) {
    jQuery.fn.cropme = function (options, obj) {
      if (_typeof(options) === 'object') {
        return this.each(function () {
          var cropme = new Cropme(this, options);
          $(this).data('cropme', cropme);
        });
      } else if (typeof options === 'string') {
        var cropme = this.data('cropme');

        switch (options) {
          case 'position':
            return cropme.position();

          case 'bind':
            return cropme.bind(obj);

          case 'crop':
            return cropme.crop(obj);

          case 'rotate':
            return cropme.rotate(obj);

          case 'reload':
            return cropme.reload(obj);

          case 'destroy':
            return cropme.destroy();

          default:
            throw 'Error: ' + options + ' method not found';
        }
      } else {
        throw 'Error: the argument must be an object or a string';
      }
    };
  }

  function transform() {
    return 'translate(' + this.properties.x + 'px,' + this.properties.y + 'px) scale(' + this.properties.scale + ') rotate(' + this.properties.deg + 'deg)';
  }

  function transformOrigin(x, y) {
    return x + 'px ' + y + 'px';
  }

  function createRotationSlider() {
    if (this.properties.rotation_slider) {
      if (!this.options.rotation.slider) {
        this.properties.wrapper.removeChild(this.properties.rotation_slider.parentNode);
        delete this.properties.rotation_slider;
      } else {
        this.properties.rotation_slider.disabled = !this.options.rotation.enable;
      }

      this.properties.rotation_slider.style.width = this.properties.container.offsetWidth + 'px';
    } else {
      if (this.options.rotation.slider) {
        var sliderContainer = document.createElement('div');
        sliderContainer.classList.add('cropme-rotation-slider');
        var slider = this.properties.rotation_slider = document.createElement('input');
        slider.type = 'range';
        slider.setAttribute('min', -180);
        slider.setAttribute('max', 180);
        slider.setAttribute('step', 1);
        slider.value = 0;
        slider.style.width = this.properties.container.offsetWidth + 'px';
        sliderContainer.appendChild(slider);
        this.properties.wrapper.appendChild(sliderContainer);
        var self = this;
        this.properties.rotation_slider.addEventListener('input', function (e) {
          self.rotate(e.target.value);
        });
        this.properties.rotation_slider.disabled = !this.options.rotation.enable;
      }
    }
  }

  function createSlider() {
    function changeSliderParameter() {
      var diff = (this.properties.wrapper.offsetWidth - this.properties.container.offsetWidth) / 2;
      var positionX = this.properties.container.offsetWidth / 2 + 12 + diff;

      if (this.options.rotation.position === 'left') {
        positionX = -this.properties.container.offsetWidth / 2 - 20 + diff;
      }

      var diffH = (this.properties.container.offsetWidth - this.properties.container.offsetHeight) / 2;
      var positionY = this.properties.container.offsetHeight / 2 + 12 - diffH;
      this.properties.sliderContainer.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px) rotate(-90deg)';
      var sliderOrigin = this.properties.container.offsetWidth / 2;
      this.properties.sliderContainer.style.transformOrigin = sliderOrigin + 'px 12px';
      this.properties.sliderContainer.style.marginTop = '-24px';
      this.properties.slider.disabled = !this.options.zoom.enable;
    }

    if (this.properties.slider) {
      if (!this.options.zoom.slider) {
        this.properties.wrapper.removeChild(this.properties.slider.parentNode);
        delete this.properties.slider;
      } else {
        changeSliderParameter.call(this);
      }
    } else {
      if (this.options.zoom.slider) {
        var self = this;
        var sliderContainer = this.properties.sliderContainer = document.createElement('div');
        sliderContainer.classList.add('cropme-slider');
        var slider = this.properties.slider = document.createElement('input');
        slider.type = 'range';
        slider.setAttribute('min', this.options.zoom.min);
        slider.setAttribute('max', this.options.zoom.max);
        slider.setAttribute('step', 0.000001);
        slider.style.width = this.properties.container.offsetHeight + 'px';
        sliderContainer.style.width = this.properties.container.offsetHeight + 'px';
        sliderContainer.appendChild(slider);
        this.properties.wrapper.insertBefore(sliderContainer, this.properties.wrapper.firstChild);
        this.properties.slider.value = this.properties.scale;
        this.properties.slider.addEventListener('input', function (e) {
          self.properties.scale = parseFloat(e.target.value);
          self.properties.image.style.transform = transform.call(self);
        });
        changeSliderParameter.call(this);
      }
    }
  }

  function createContainer() {
    var container = this.properties.container;

    if (!container) {
      container = this.properties.container = document.createElement('div');
      this.properties.wrapper.appendChild(container);
    }

    container.classList.add('cropme-container');
    container.style.width = this.options.container.width + (typeof this.options.container.width === 'string' ? '' : 'px');
    container.style.height = this.options.container.height + 'px';
  }

  function createImage() {
    if (!this.properties.image) {
      this.properties.image = new Image();
    }

    this.properties.image.ondragstart = function () {
      return false;
    };

    this.properties.container.appendChild(this.properties.image);
  }

  function createViewport() {
    var viewport = this.properties.viewport = this.properties.viewport || document.createElement('div');
    var container = this.properties.container;
    var options = this.options;
    var border_width = options.viewport.border.width;
    container.style.width = options.viewport.width > container.offsetWidth ? options.viewport.width + border_width * 2 + "px" : container.offsetWidth;
    container.style.height = options.viewport.height > container.offsetHeight ? options.viewport.height + border_width * 2 + "px" : container.offsetHeight;
    viewport.style.width = options.viewport.width + 'px';
    viewport.style.height = options.viewport.height + 'px';
    viewport.className = 'viewport';

    if (options.viewport.type === 'circle') {
      viewport.className = 'viewport circle';
    }

    if (options.viewport.border.enable) {
      var viewport_border = (container.offsetWidth - options.viewport.width) / 2;
      options.viewport.border.width = viewport_border < options.viewport.border.width ? viewport_border : options.viewport.border.width;
    } else {
      options.viewport.border.width = 0;
    }

    this.properties.viewport.style.borderWidth = options.viewport.border.width + 'px';
    this.properties.viewport.style.borderColor = options.viewport.border.color;
    this.properties.container.appendChild(viewport);
  }

  function getOrigin() {
    var origin = this.properties.image.style.transformOrigin.split('px ');
    return {
      x: parseFloat(origin[0]),
      y: parseFloat(origin[1])
    };
  }

  function setRotationOrigin() {
    var origin = getOrigin.call(this);
    var ox = origin.x;
    var oy = origin.y;
    var angle = -parseInt(this.properties.deg) * Math.PI / 180;

    if (this.options.transformOrigin === 'viewport') {
      var deg = this.properties.deg;
      this.properties.deg = 0;
      this.properties.image.style.transform = transform.call(this);
      var scale = this.properties.scale,
          container = this.properties.container,
          imageData = this.properties.image.getBoundingClientRect(),
          viewportData = this.properties.viewport.getBoundingClientRect(),
          top = viewportData.top - imageData.top + viewportData.height / 2,
          left = viewportData.left - imageData.left + viewportData.width / 2,
          cx,
          cy;
      var bx = left / scale;
      var by = top / scale;
      var npx = bx - ox;
      var npy = by - oy;
      var x = npx * Math.cos(angle) - npy * Math.sin(angle);
      var y = npx * Math.sin(angle) + npy * Math.cos(angle);
      cx = ox + x;
      cy = oy + y;
      this.properties.x = container.offsetWidth / 2 - cx;
      this.properties.y = container.offsetHeight / 2 - cy;
      this.properties.image.style.transformOrigin = transformOrigin.call(this, cx, cy);
      this.properties.deg = deg;
      this.properties.image.style.transform = transform.call(this);
    } else {
      this.properties.x -= this.properties.origin_x - ox;
      this.properties.y -= this.properties.origin_y - oy;
      this.properties.image.style.transformOrigin = transformOrigin.call(this, this.properties.origin_x, this.properties.origin_y);
      this.properties.image.style.transform = transform.call(this);
    }
  }

  function createContext() {
    createContainer.call(this);
    createRotationSlider.call(this);
    createSlider.call(this);
    createImage.call(this);
    createViewport.call(this);
    var x,
        y,
        moveX = 0,
        moveY = 0,
        self = this;

    var down = function down(e) {
      e.preventDefault();
      var pageX = e.pageX;
      var pageY = e.pageY;

      if (e.touches) {
        pageX = e.touches[0].pageX;
        pageY = e.touches[0].pageY;
      }

      moveX = self.properties.x || moveX;
      moveY = self.properties.y || moveY;
      x = pageX - moveX;
      y = pageY - moveY;
      document.addEventListener('mousemove', move);
      document.addEventListener('touchmove', move);
      document.addEventListener('mouseup', up);
      document.addEventListener('touchend', up);
    };

    self.properties.image.addEventListener('mousedown', down);
    self.properties.image.addEventListener('touchstart', down);

    var move = function move(e) {
      e.preventDefault();
      var pageX = e.pageX;
      var pageY = e.pageY;

      if (e.touches) {
        pageX = e.touches[0].pageX;
        pageY = e.touches[0].pageY;
      }

      if (e.touches && e.touches.length > 1) {
        var second_touches = e.touches[1];

        var _x = pageX - second_touches.pageX;

        var _y = pageY - second_touches.pageY;

        if (self.options.rotation.enable) {
          var deg = 90 - Math.atan2(_x, _y) * 180 / Math.PI;

          if (!self.properties.odeg) {
            self.properties.odeg = deg - self.properties.deg;
          }

          self.properties.deg = deg - self.properties.odeg;
        }

        if (self.options.zoom.enable) {
          var touches_dist = Math.sqrt(Math.pow(_x, 2) + Math.pow(_y, 2));

          if (!self.properties.od) {
            self.properties.od = touches_dist / self.properties.scale;
          }

          self.properties.scale = self.properties.slider.value = touches_dist / self.properties.od;
        }
      } else {
        self.properties.x = pageX - x;
        self.properties.y = pageY - y;
      }

      self.properties.image.style.transform = transform.call(self);
    };

    var up = function up() {
      document.removeEventListener('touchmove', move);
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
      document.removeEventListener('touchend', up);
      self.properties.od = 0;
      self.properties.odeg = 0;
      setRotationOrigin.call(self);
    };

    var mousewheel = function mousewheel(e) {
      e.preventDefault();
      var scale = self.properties.scale + e.wheelDelta / 1200 * self.properties.scale;

      if (scale > self.options.zoom.min && scale < self.options.zoom.max && self.options.zoom.mouseWheel && self.options.zoom.enable) {
        if (self.options.zoom.slider) {
          self.properties.slider.value = scale;
        }

        self.properties.scale = scale;
        self.properties.image.style.transform = transform.call(self);
      }
    };

    self.properties.container.addEventListener('mousewheel', mousewheel);
  }

  function createCanvas(options) {
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
    var width = this.options.viewport.width;
    var height = this.options.viewport.height;

    if (_typeof(options) === 'object') {
      if (options.scale) {
        width = width * options.scale;
        height = height * options.scale;
      } else if (options.width) {
        height = options.width * height / width;
        width = options.width;
      }
    }

    canvas.width = width;
    canvas.height = height;
    var xs = width / this.options.viewport.width;
    var ys = height / this.options.viewport.height;
    var deg = this.properties.deg;
    var nx = this.properties.x;
    var ny = this.properties.y;

    function transformImage(deg, ox, oy) {
      this.properties.deg = deg;
      this.properties.x = ox;
      this.properties.y = oy;
      this.properties.image.style.transform = transform.call(this);
    }

    transformImage.call(this, 0, this.properties.ox, this.properties.oy);
    var imageData = this.properties.image.getBoundingClientRect();
    var viewportData = this.properties.viewport.getBoundingClientRect();
    var x = xs * (imageData.x - viewportData.x - this.options.viewport.border.width);
    var y = ys * (imageData.y - viewportData.y - this.options.viewport.border.width);
    var image_origin_rotation = this.options.transformOrigin;
    var tx = (nx - this.properties.x) * xs;
    var ty = (ny - this.properties.y) * ys;

    if (image_origin_rotation === 'image') {
      ctx.translate(tx, ty);
    }

    ctx.translate(width / 2, height / 2);
    ctx.rotate(deg * Math.PI / 180);

    if (image_origin_rotation === 'image') {
      ctx.translate(-width / 2, -height / 2);
    } else {
      ctx.translate(-width / 2 + tx, -height / 2 + ty);
    }

    ctx.drawImage(this.properties.image, x, y, imageData.width * xs, imageData.height * ys);

    if (this.options.viewport.type === 'circle') {
      if (image_origin_rotation === 'image') {
        ctx.translate(width / 2, height / 2);
      } else {
        ctx.translate(width / 2 - tx, height / 2 - ty);
      }

      ctx.rotate(-deg * Math.PI / 180);
      ctx.translate(-width / 2, -height / 2);
      ctx.scale(1, this.options.viewport.height / this.options.viewport.width);

      if (image_origin_rotation === 'image') {
        ctx.translate(-tx * 2, -ty * 2);
      } else {
        ctx.translate(-tx, -ty);
      }

      ctx.globalCompositeOperation = 'destination-in';
      ctx.arc(width / 2 + tx, height / 2 + ty, width / 2, 0, 2 * Math.PI);
      ctx.fill();
    }

    transformImage.call(this, deg, nx, ny);
    return canvas;
  }

  var Cropme =
  /*#__PURE__*/
  function () {
    function Cropme(el, options) {
      _classCallCheck(this, Cropme);

      if (el.className.indexOf('cropme-wrapper') > -1) {
        throw 'Error: Cropme is already initialized';
      }

      this.properties = {};
      this.options = nestedObjectAssign(defaultOptions, options);

      if (this.options.viewport.width > this.options.container.width) {
        throw 'Error: Viewport width cannot be greater that container width';
      }

      if (this.options.viewport.height > this.options.container.height) {
        throw 'Error: Viewport height cannot be greater that container height';
      }

      this.properties.wrapper = el;

      if (el.tagName.toLowerCase() === 'img') {
        this.properties.image = new Image();
        this.properties.image.src = el.src;
        this.properties.wrapper = document.createElement('div');
        el.parentNode.insertBefore(this.properties.wrapper, el.previousSibling);
        el.parentNode.removeChild(el);
      }

      this.properties.wrapper.className += ' cropme-wrapper ' + this.options.customClass;
      createContext.call(this);

      if (this.properties.image.src) {
        this.bind({
          url: this.properties.image.src
        });
      }
    }

    _createClass(Cropme, [{
      key: "resize",
      value: function resize() {
        var container = this.properties.container;
        var newW = this.properties.container_w - container.offsetWidth;
        var newH = this.properties.container_h - container.offsetHeight;
        container.style.width = this.options.container.width + (typeof this.options.container.width === 'string' ? '' : 'px');

        if (container.offsetWidth > this.options.viewport.width) {
          this.properties.x -= newW / 2;
          this.properties.y -= newH / 2;
          this.properties.container_w = container.offsetWidth;
          this.properties.container_h = container.offsetHeight;
          this.properties.ox -= newW / 2;
          this.properties.oy -= newH / 2;
          this.properties.image.style.transform = transform.call(this);
          createSlider.call(this);
          createRotationSlider.call(this);
        } else {
          container.style.width = this.options.viewport.width + this.options.viewport.border.width * 2 + 'px';
        }
      }
    }, {
      key: "bind",
      value: function bind(obj) {
        var _this = this;

        window.onresize = this.resize.bind(this);
        this.properties.image.src = obj.url;
        var properties = this.properties;
        var options = this.options;
        var self = this;
        return new Promise(function (resolve) {
          _this.properties.image.onload = function () {
            var imageData = properties.image.getBoundingClientRect();
            var containerData = properties.container.getBoundingClientRect();
            var cx = (containerData.width - imageData.width) / 2;
            var cy = (containerData.height - imageData.height) / 2;
            var scale = containerData.height / imageData.height;
            var deg = 0;
            properties.ox = cx;
            properties.oy = cy;
            var origin = {};

            if (_typeof(obj.position) === 'object') {
              cx = obj.position.x ? obj.position.x + cx : cx;
              cy = obj.position.y ? obj.position.y + cy : cy;
              scale = obj.position.scale || scale;
              deg = obj.position.angle || deg;
              origin = obj.position.origin || origin;
              options.transformOrigin = obj.position.origin === 'object' ? 'viewport' : 'image';
            }

            if (options.zoom.max <= options.zoom.min) {
              throw 'Error: max zoom cannot be less or equal to min zoom';
            }

            if (scale < options.zoom.min) {
              scale = options.zoom.min;
            }

            if (scale > options.zoom.max) {
              scale = options.zoom.max;
            }

            properties.x = cx;
            properties.y = cy;
            properties.container_w = containerData.width;
            properties.container_h = containerData.height;
            properties.origin_x = imageData.width / 2;
            properties.origin_y = imageData.height / 2;
            properties.scale = scale;

            if (self.options.zoom.slider) {
              properties.slider.value = scale;
            }

            if (self.options.rotation.slider) {
              properties.rotation_slider.value = deg;
            }

            properties.deg = deg;
            properties.image.style.transform = transform.call(self);
            properties.image.style.transformOrigin = transformOrigin.call(self, origin.x || properties.origin_x, origin.y || properties.origin_y);
            properties.image.style.opacity = 1;
            setRotationOrigin.call(self);
            resolve(self.properties.image);
          };
        });
      }
    }, {
      key: "rotate",
      value: function rotate(deg) {
        this.properties.deg = deg;
        var origin = this.properties.image.style.transformOrigin.split('px ');
        var ox = parseInt(origin[0]);
        var oy = parseInt(origin[1]);
        this.properties.rotate_originx = ox;
        this.properties.rotate_originy = oy;
        this.properties.image.style.transform = transform.call(this);
      }
    }, {
      key: "crop",
      value: function crop(options) {
        var canvas = createCanvas.call(this, options);
        options = _typeof(options) === 'object' ? options.type : options;
        return new Promise(function (resolve) {
          options === 'blob' ? canvas.toBlob(function (blob) {
            return resolve(URL.createObjectURL(blob));
          }) : resolve(canvas.toDataURL());
        });
      }
    }, {
      key: "position",
      value: function position() {
        var position = {
          x: parseFloat((this.properties.x - this.properties.ox).toFixed(3)),
          y: parseFloat((this.properties.y - this.properties.oy).toFixed(3)),
          scale: parseFloat(this.properties.scale.toFixed(4)),
          angle: parseInt(this.properties.deg)
        };

        if (this.options.transformOrigin === 'viewport') {
          position.origin = getOrigin.call(this);
        }

        return position;
      }
    }, {
      key: "reload",
      value: function reload(options) {
        this.options = nestedObjectAssign(defaultOptions, options);
        createSlider.call(this);
        createContainer.call(this);
        createRotationSlider.call(this);
        createViewport.call(this);
        setRotationOrigin.call(this);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.properties.wrapper.innerHTML = '';
        this.properties.wrapper.className = this.properties.wrapper.className.replace('cropme-wrapper', '');
        delete this.options;
        delete this.properties;
      }
    }]);

    return Cropme;
  }();

  var defaultOptions = {
    container: {
      width: 300,
      height: 300
    },
    viewport: {
      width: 100,
      height: 100,
      border: {
        enable: true,
        width: 2,
        color: '#fff'
      }
    },
    transformOrigin: 'viewport',
    zoom: {
      min: 0.01,
      max: 3,
      enable: true,
      mouseWheel: true,
      slider: false
    },
    customClass: '',
    rotation: {
      slider: false,
      enable: true,
      position: 'right'
    }
  };

  return Cropme;

}));
