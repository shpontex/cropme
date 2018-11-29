(function (global) {
  // ----------------- Pollyfils ---------------------------

  // promise-pollyfil
  ! function (e, n) {
    "object" == typeof exports && "undefined" != typeof module ? n() : "function" == typeof define && define.amd ? define(n) : n()
  }(0, function () {
    "use strict";

    function e(e) {
      var n = this.constructor;
      return this.then(function (t) {
        return n.resolve(e()).then(function () {
          return t
        })
      }, function (t) {
        return n.resolve(e()).then(function () {
          return n.reject(t)
        })
      })
    }

    function n() {}

    function t(e) {
      if (!(this instanceof t)) throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof e) throw new TypeError("not a function");
      this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], u(e, this)
    }

    function o(e, n) {
      for (; 3 === e._state;) e = e._value;
      0 !== e._state ? (e._handled = !0, t._immediateFn(function () {
        var t = 1 === e._state ? n.onFulfilled : n.onRejected;
        if (null !== t) {
          var o;
          try {
            o = t(e._value)
          } catch (f) {
            return void i(n.promise, f)
          }
          r(n.promise, o)
        } else(1 === e._state ? r : i)(n.promise, e._value)
      })) : e._deferreds.push(n)
    }

    function r(e, n) {
      try {
        if (n === e) throw new TypeError("A promise cannot be resolved with itself.");
        if (n && ("object" == typeof n || "function" == typeof n)) {
          var o = n.then;
          if (n instanceof t) return e._state = 3, e._value = n, void f(e);
          if ("function" == typeof o) return void u(function (e, n) {
            return function () {
              e.apply(n, arguments)
            }
          }(o, n), e)
        }
        e._state = 1, e._value = n, f(e)
      } catch (r) {
        i(e, r)
      }
    }

    function i(e, n) {
      e._state = 2, e._value = n, f(e)
    }

    function f(e) {
      2 === e._state && 0 === e._deferreds.length && t._immediateFn(function () {
        e._handled || t._unhandledRejectionFn(e._value)
      });
      for (var n = 0, r = e._deferreds.length; r > n; n++) o(e, e._deferreds[n]);
      e._deferreds = null
    }

    function u(e, n) {
      var t = !1;
      try {
        e(function (e) {
          t || (t = !0, r(n, e))
        }, function (e) {
          t || (t = !0, i(n, e))
        })
      } catch (o) {
        if (t) return;
        t = !0, i(n, o)
      }
    }
    var c = setTimeout;
    t.prototype["catch"] = function (e) {
      return this.then(null, e)
    }, t.prototype.then = function (e, t) {
      var r = new this.constructor(n);
      return o(this, new function (e, n, t) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, this.promise = t
      }(e, t, r)), r
    }, t.prototype["finally"] = e, t.all = function (e) {
      return new t(function (n, t) {
        function o(e, f) {
          try {
            if (f && ("object" == typeof f || "function" == typeof f)) {
              var u = f.then;
              if ("function" == typeof u) return void u.call(f, function (n) {
                o(e, n)
              }, t)
            }
            r[e] = f, 0 == --i && n(r)
          } catch (c) {
            t(c)
          }
        }
        if (!e || "undefined" == typeof e.length) throw new TypeError("Promise.all accepts an array");
        var r = Array.prototype.slice.call(e);
        if (0 === r.length) return n([]);
        for (var i = r.length, f = 0; r.length > f; f++) o(f, r[f])
      })
    }, t.resolve = function (e) {
      return e && "object" == typeof e && e.constructor === t ? e : new t(function (n) {
        n(e)
      })
    }, t.reject = function (e) {
      return new t(function (n, t) {
        t(e)
      })
    }, t.race = function (e) {
      return new t(function (n, t) {
        for (var o = 0, r = e.length; r > o; o++) e[o].then(n, t)
      })
    }, t._immediateFn = "function" == typeof setImmediate && function (e) {
      setImmediate(e)
    } || function (e) {
      c(e, 0)
    }, t._unhandledRejectionFn = function (e) {
      void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var l = function () {
      if ("undefined" != typeof self) return self;
      if ("undefined" != typeof window) return window;
      if ("undefined" != typeof global) return global;
      throw Error("unable to locate global object")
    }();
    "Promise" in l ? l.Promise.prototype["finally"] || (l.Promise.prototype["finally"] = e) : l.Promise = t
  });

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

  if (window.jQuery) {
    jQuery.fn.cropme = function (options, obj) {
      if (typeof options === 'string') {

        let cropme = this.data('cropme')

        if (options === 'position') {
          return cropme.position()
        }
        if (options === 'bind') {
          return cropme.bind(obj)
        }
        if (options === 'export') {
          return cropme.export(obj)
        }
        if (options === 'rotate') {
          return cropme.rotate(obj)
        }
        if (options === 'destroy') {
          return cropme.destroy()
        }

      } else {

        return this.each(function () {
          var cropme = new Cropme(this, options)
          $(this).data('cropme', cropme)
        });

      }
    }
  }

  function transform(self) {
    return 'translate(' + self.properties.x + 'px,' + self.properties.y + 'px) scale(' + self.properties.scale + ') rotate(' + self.properties.deg + 'deg)'
  }

  function createContext() {
    this.properties.container.classList.add('cropme-container')
    this.properties.container.style.width = this.properties.options.container.width + 'px'
    this.properties.container.style.height = this.properties.options.container.height + 'px'
    const image = this.properties.image = document.createElement('img')
    this.properties.scale = 1
    const zoom = this.properties.zoom = document.createElement('input')
        zoom.value = this.properties.scale
        zoom.type = 'range'

    image.ondragstart = () => false
    const boundary = this.properties.boundary = document.createElement('div')
    boundary.width = this.properties.options.boundary.width || 100
    boundary.height = this.properties.options.boundary.height || 100
    boundary.style.width = boundary.width + 'px'
    boundary.style.height = boundary.height + 'px'
    boundary.className = 'boundary'
    if (this.properties.options.boundary.type === 'circle') {
      boundary.className = 'boundary circle'
    }

    this.properties.container.appendChild(image)
    this.properties.container.appendChild(boundary)
    this.properties.container.appendChild(zoom)

    let x, movex = 0,
      y, movey = 0,
      self = this

    let mousemove = function (e) {
      self.properties.x = e.pageX - x
      self.properties.y = e.pageY - y
      image.style.transform = transform(self)
    }
    image.addEventListener('mousedown', function (e) {
      movex = self.properties.x || movex
      movey = self.properties.y || movey
      x = e.pageX - movex
      y = e.pageY - movey
      self.properties.x = self.properties.y = null
      window.addEventListener('mousemove', mousemove)
    })

    document.addEventListener('mouseup', function (e) {
      window.removeEventListener('mousemove', mousemove);
    })

    this.properties.container.addEventListener('mousewheel', function (e) {
      e.preventDefault()
      mousemove(e)
      self.properties.scale = self.properties.scale + (e.wheelDelta / 1200 * self.properties.scale)
      image.style.transform = transform(self)
    })

  }

  function createCanvas(options) {
    let canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');

    let width = this.properties.options.boundary.width
    let height = this.properties.options.boundary.height

    if (typeof options === 'object') {
      if (options.size && options.size.width) {
        width = options.size.width
      }
      if (options.size && options.size.height) {
        height = options.size.height
      }
    }
    let xs = width / this.properties.boundary.width
    let ys = height / this.properties.boundary.height

    canvas.width = width
    canvas.height = height

    let deg = this.properties.deg
    let nx = this.properties.x
    let ny = this.properties.y
    if (deg !== 0) {
      this.properties.deg = 0
      this.properties.x = this.properties.ox
      this.properties.y = this.properties.oy
      this.properties.image.style.transform = transform(this)
    }



    let imageData = this.properties.image.getBoundingClientRect()
    let boundaryData = this.properties.boundary.getBoundingClientRect()
    let x = xs * (imageData.x - boundaryData.x - 2)
    let y = ys * (imageData.y - boundaryData.y - 2)
    if (deg !== 0) {
      ctx.translate(nx - this.properties.x, ny - this.properties.y)
      ctx.translate(width / 2, height / 2);
      ctx.rotate(deg * Math.PI / 180);
      ctx.translate(-width / 2, -height / 2);
      this.properties.deg = deg
      this.properties.x = nx
      this.properties.y = ny
      this.properties.image.style.transform = transform(this)
    }

    ctx.drawImage(this.properties.image, x, y, imageData.width * xs, imageData.height * ys)
    if (this.properties.options.boundary.type === 'circle') {
      ctx.globalCompositeOperation = 'destination-in'
      ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2)
      ctx.fill();
    }
    if (this.properties.options.boundary.type === 'triangle') {
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
      this.properties = {}
      this.properties.container = el
      this.properties.options = nestedObjectAssign(defaultOptions, options)
      createContext.call(this)
    }
    bind(obj) {
      this.properties.image.src = obj.url
      let self = this
      this.properties.image.onload = function () {
        let imageData = self.properties.image.getBoundingClientRect()
        let containerData = self.properties.container.getBoundingClientRect()
        let cx = (containerData.width - imageData.width) / 2
        let cy = (containerData.height - imageData.height) / 2
        self.properties.ox = cx
        self.properties.oy = cy

        if (typeof obj.position == 'object') {
          cx = obj.position.x || cx
          cy = obj.position.y || cy
        }

        let scale = obj.scale ? obj.scale : containerData.height / imageData.height
        self.properties.x = cx
        self.properties.y = cy
        self.properties.scale = scale
        self.properties.deg = obj.deg || 0
        self.properties.image.style.transform = transform(self)
        self.properties.image.style.opacity = 1

      }
    }
    rotate(deg) {
      this.properties.deg = deg
      this.properties.image.style.transform = transform(this)
    }
    export (options) {
      let canvas = createCanvas.call(this, options)
      options = typeof options === 'object' ? options.type : options
      return new Promise((resolve) => {
        options === 'blob' ? canvas.toBlob(blob => resolve(URL.createObjectURL(blob))) : resolve(canvas.toDataURL())
      })
    }
    position() {
      return {
        x: this.properties.x,
        y: this.properties.y,
        scale: this.properties.scale,
        deg: parseInt(this.properties.deg)
      }
    }
    destroy() {
      this.properties.container.innerHTML = ''
      this.properties.container.className = this.properties.container.className.replace('cropme-container', '');
      delete this.properties
    }
  }

  const defaultOptions = {
    container: {
      width: 300,
      height: 300,

    },
    boundary: {
      width: 100,
      height: 100,
      type: 'square'
    },
  }
  global.Cropme = Cropme
})(window)
