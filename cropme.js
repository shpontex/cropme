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

  function transform(x, y, scale) {
    return 'translate(' + x + 'px,' + y + 'px) scale(' + scale + ')'
  }

  function createContext() {
    const container = this.container = document.createElement('div')
    container.classList.add('cropme-container')
    container.style.width = this.options.viewport.width + 'px'
    container.style.height = this.options.viewport.height + 'px'
    const preview = this.preview = document.createElement('img')
    const boundary = this.boundary = document.createElement('div')

    boundary.width = this.options.boundary.width || 100
    boundary.height = this.options.boundary.height || 100
    boundary.style.width = boundary.width + 'px'
    boundary.style.height = boundary.height + 'px'
    boundary.className = 'boundary'
    if (this.options.viewport.type === 'circle') {
      boundary.className = 'boundary circle'
    }

    this.el.appendChild(container)
    container.appendChild(preview)
    container.appendChild(boundary)
    preview.ondragstart = () => false
    let x = 0,
      y = 0,
      movex = 0,
      movey = 0
    this.scale = 1
    let self = this


    preview.addEventListener('mousedown', function (e) {
      movex = self.x || movex
      movey = self.y || movey
      x = e.pageX - movex
      y = e.pageY - movey
      self.x = self.y = null
      window.addEventListener('mousemove', mousemove)

    })
    let mousemove = function (e) {
      let previewData = preview.getBoundingClientRect()
      let boundaryData = boundary.getBoundingClientRect()

      if (previewData.x > boundaryData.x) {
        movex = -950
      } else {
        movex = e.pageX - x
      }
      if (previewData.y > boundaryData.y) {} else {

      }
      console.log(previewData.x > boundaryData.x);
      
      movey = e.pageY - y

      // console.log(boundaryData,previewData)
      // console.log(previewData.x , boundaryData.x + 2);

      console.log(movex);
      
      preview.style.transform = transform(movex, movey, self.scale)

    }
    document.addEventListener('mouseup', function (e) {
      window.removeEventListener('mousemove', mousemove);
    })
    container.addEventListener('mousewheel', function (e) {
      e.preventDefault()

      self.scale = self.scale + (e.wheelDelta / 1200 * self.scale)

      movex = self.x || movex
      movey = self.y || movey
      preview.style.transform = transform(movex, movey, self.scale)

    })

  }

  function createCanvas() {
    let canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');

    let viewportData = this.preview.getBoundingClientRect()
    let boundaryData = this.boundary.getBoundingClientRect()

    canvas.width = this.boundary.width
    canvas.height = this.boundary.height
    let x = viewportData.x - boundaryData.x - 2
    let y = viewportData.y - boundaryData.y - 2

    ctx.drawImage(this.preview, x, y, viewportData.width, viewportData.height)
    if (this.options.viewport.type === 'circle') {
      ctx.globalCompositeOperation = 'destination-in'
      ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2, true)
      ctx.fill();
    }
    if (this.options.viewport.type === 'triangle') {
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
      this.preview.src = obj.url
      let self = this
      this.preview.onload = function () {
        let viewportData = self.preview.getBoundingClientRect()
        let containerData = self.container.getBoundingClientRect()
        let scale = containerData.height / viewportData.height
        let cx = containerData.width / 2 - viewportData.width / 2
        let cy = containerData.height / 2 - viewportData.height / 2
        self.preview.style.transform = transform(cx, cy, scale)
        self.x = cx
        self.y = cy
        self.scale = scale
      }
    }
    export (type, cb) {
      let canvas = createCanvas.call(this)
      if (typeof type === 'function') {
        cb = type
      }
      return type == 'blob' ? canvas.toBlob(blob => cb(URL.createObjectURL(blob))) : cb(canvas.toDataURL())
    }
  }

  const defaultOptions = {
    viewport: {
      width: 100,
      height: 100,
      type: 'square'
    },
    boundary: {},
  }
  global.Cropme = Cropme
})(window)
