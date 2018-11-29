(function (global) {
  // Nested Object assign
  ! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("nestedObjectAssign", [], t) : "object" == typeof exports ? exports.nestedObjectAssign = t() : e.nestedObjectAssign = t()
  }(this, function () {
    return function (e) {
      function t(n) {
        if (r[n]) return r[n].exports;
        var o = r[n] = {
          exports: {},
          id: n,
          loaded: !1
        };
        return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
      }
      var r = {};
      return t.m = e, t.c = r, t.p = "", t(0)
    }([function (e, t, r) {
      "use strict";

      function n(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function o(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), c = 1; c < t; c++) r[c - 1] = arguments[c];
        if (!r.length) return e;
        var u = r.shift();
        if ((0, i.isObject)(e) && (0, i.isObject)(u))
          for (var f in u)(0, i.isObject)(u[f]) ? (e[f] || Object.assign(e, n({}, f, {})), o(e[f], u[f])) : (0, s.isArray)(u[f]) ? (e[f] || Object.assign(e, n({}, f, [])), e[f] = e[f].concat(u[f])) : Object.assign(e, n({}, f, u[f]));
        return o.apply(void 0, [e].concat(r))
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = o;
      var i = r(1),
        s = r(2);
      e.exports = t.default
    }, function (e, t) {
      "use strict";

      function r(e) {
        return e && "object" === ("undefined" == typeof e ? "undefined" : n(e)) && !Array.isArray(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      t.isObject = r
    }, function (e, t) {
      "use strict";

      function r(e) {
        return e && Array.isArray(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.isArray = r
    }])
  });

  function transform(self) {
    return 'translate(' + self.x + 'px,' + self.y + 'px) scale(' + self.scale + ')'
  }

  function createContext() {
    const container = this.container = document.createElement('div')
    container.classList.add('cropme-container')
    container.style.width = this.options.container.width + 'px'
    container.style.height = this.options.container.height + 'px'
    const image = this.image = document.createElement('img')
    const boundary = this.boundary = document.createElement('div')
    boundary.width = this.options.boundary.width || 100
    boundary.height = this.options.boundary.height || 100
    boundary.style.width = boundary.width + 'px'
    boundary.style.height = boundary.height + 'px'
    boundary.className = 'boundary'
    if (this.options.boundary.type === 'circle') {
      boundary.className = 'boundary circle'
    }

    this.el.appendChild(container)
    container.appendChild(image)
    container.appendChild(boundary)
    image.ondragstart = () => false
    let x = 0,
      y = 0,
      movex = 0,
      movey = 0
    self = this
    this.scale = 1


    image.addEventListener('mousedown', function (e) {
      movex = self.x || movex
      movey = self.y || movey
      x = e.pageX - movex
      y = e.pageY - movey
      self.x = self.y = null
      window.addEventListener('mousemove', mousemove)

    })
    let mousemove = function (e) {
      let imageData = image.getBoundingClientRect()
      let boundaryData = boundary.getBoundingClientRect()

      if (imageData.x > boundaryData.x) {} else {}
      if (imageData.y > boundaryData.y) {} else {

      }

      self.x = e.pageX - x
      self.y = e.pageY - y

      image.style.transform = transform(self)

    }
    document.addEventListener('mouseup', function (e) {
      window.removeEventListener('mousemove', mousemove);
    })
    container.addEventListener('mousewheel', function (e) {
      e.preventDefault()

      self.scale = self.scale + (e.wheelDelta / 1200 * self.scale)
      image.style.transform = transform(self)

    })

  }

  function createCanvas(options) {
    let canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');

    let imageData = this.image.getBoundingClientRect()
    let boundaryData = this.boundary.getBoundingClientRect()

    let width = options.size && options.size.width ? options.size.width : this.options.boundary.width
    let height = options.size && options.size.height ? options.size.height : this.options.boundary.height
    let xs = width / this.boundary.width
    let ys = height / this.boundary.height

    canvas.width = width
    canvas.height = height

    let x = xs * (imageData.x - boundaryData.x - 2)
    let y = ys * (imageData.y - boundaryData.y - 2)

    ctx.drawImage(this.image, x, y, imageData.width * xs, imageData.height * ys)
    if (this.options.boundary.type === 'circle') {
      ctx.globalCompositeOperation = 'destination-in'
      ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2, true)
      ctx.fill();
    }
    if (this.options.boundary.type === 'triangle') {
      ctx.beginPath();
      ctx.globalCompositeOperation = 'destination-in'
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fill();
    }

    return canvas
  }
  class Cropme {
    constructor(el, options) {
      this.el = el
      this.options = nestedObjectAssign(defaultOptions, options)
      createContext.call(this)
    }
    bind(obj) {
      this.image.src = obj.url
      let self = this
      this.image.onload = function () {
        let imageData = self.image.getBoundingClientRect()
        let containerData = self.container.getBoundingClientRect()
        let cx = containerData.width / 2 - imageData.width / 2
        let cy = containerData.height / 2 - imageData.height / 2

        if (typeof obj.position == 'object') {
          cx = obj.position.x
          cy = obj.position.y
        }

        let scale = obj.scale ? obj.scale : containerData.height / imageData.height
        self.x = cx
        self.y = cy
        self.scale = scale
        self.image.style.transform = transform(self)
        self.image.style.opacity = 1

      }
    }
    export (options = {}) {
      let canvas = createCanvas.call(this, options)
      return new Promise((resolve) => {
        options.type === 'blob' ? canvas.toBlob(blob => resolve(URL.createObjectURL(blob))) : resolve(canvas.toDataURL())
      })

    }
    position() {
      return {
        x: this.x,
        y: this.y,
        scale: this.scale
      }
    }
  }

  const defaultOptions = {
    container: {
      width: 100,
      height: 100,

    },
    boundary: {
      type: 'square'
    },
  }
  global.Cropme = Cropme
})(window)
