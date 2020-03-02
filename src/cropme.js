  import nestedObjectAssign from '../js/nestedObjectAssign/index'

  (function(undefined) {!function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=100)}({100:function(n,t,e){(function(n){var t=e(5);try{n.Promise=t,window.Promise=t}catch(r){}}).call(t,e(2))},2:function(n,t){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(r){"object"==typeof window&&(e=window)}n.exports=e},5:function(n,t,e){(function(t){!function(){"use strict";function e(){return rn[q][B]||D}function r(n){return n&&"object"==typeof n}function o(n){return"function"==typeof n}function i(n,t){return n instanceof t}function u(n){return i(n,M)}function c(n,t,e){if(!t(n))throw h(e)}function f(){try{return R.apply(S,arguments)}catch(n){return nn.e=n,nn}}function s(n,t){return R=n,S=t,f}function a(n,t){function e(){for(var e=0;e<o;)t(r[e],r[e+1]),r[e++]=P,r[e++]=P;o=0,r.length>n&&(r.length=n)}var r=A(n),o=0;return function(n,t){r[o++]=n,r[o++]=t,2===o&&rn.nextTick(e)}}function l(n,t){var e,r,u,c,f=0;if(!n)throw h(Q);var a=n[rn[q][z]];if(o(a))r=a.call(n);else{if(!o(n.next)){if(i(n,A)){for(e=n.length;f<e;)t(n[f],f++);return f}throw h(Q)}r=n}for(;!(u=r.next()).done;)if((c=s(t)(u.value,f++))===nn)throw o(r[G])&&r[G](),c.e;return f}function h(n){return new TypeError(n)}function v(n){return(n?"":V)+(new M).stack}function _(n,t){var e="on"+n.toLowerCase(),r=O[e];H&&H.listeners(n).length?n===Z?H.emit(n,t._v,t):H.emit(n,t):r?r({reason:t._v,promise:t}):rn[n](t._v,t)}function p(n){return n&&n._s}function d(n){if(p(n))return new n(tn);var t,e,r;return t=new n(function(n,o){if(t)throw h();e=n,r=o}),c(e,o),c(r,o),t}function w(n,t){var e=!1;return function(r){e||(e=!0,L&&(n[N]=v(!0)),t===Y?k(n,r):x(n,t,r))}}function y(n,t,e,r){return o(e)&&(t._onFulfilled=e),o(r)&&(n[J]&&_(X,n),t._onRejected=r),L&&(t._p=n),n[n._c++]=t,n._s!==$&&on(n,t),t}function m(n){if(n._umark)return!0;n._umark=!0;for(var t,e=0,r=n._c;e<r;)if(t=n[e++],t._onRejected||m(t))return!0}function j(n,t){function e(n){return r.push(n.replace(/^\s+|\s+$/g,""))}var r=[];return L&&(t[N]&&e(t[N]),function o(n){n&&K in n&&(o(n._next),e(n[K]+""),o(n._p))}(t)),(n&&n.stack?n.stack:n)+("\n"+r.join("\n")).replace(en,"")}function g(n,t){return n(t)}function x(n,t,e){var r=0,o=n._c;if(n._s===$)for(n._s=t,n._v=e,t===U&&(L&&u(e)&&(e.longStack=j(e,n)),un(n));r<o;)on(n,n[r++]);return n}function k(n,t){if(t===n&&t)return x(n,U,h(W)),n;if(t!==C&&(o(t)||r(t))){var e=s(b)(t);if(e===nn)return x(n,U,e.e),n;o(e)?(L&&p(t)&&(n._next=t),p(t)?T(n,t,e):rn.nextTick(function(){T(n,t,e)})):x(n,Y,t)}else x(n,Y,t);return n}function b(n){return n.then}function T(n,t,e){var r=s(e,t)(function(e){t&&(t=C,k(n,e))},function(e){t&&(t=C,x(n,U,e))});r===nn&&t&&(x(n,U,r.e),t=C)}var P,R,S,C=null,F="object"==typeof self,O=F?self:t,E=O.Promise,H=O.process,I=O.console,L=!1,A=Array,M=Error,U=1,Y=2,$=3,q="Symbol",z="iterator",B="species",D=q+"("+B+")",G="return",J="_uh",K="_pt",N="_st",Q="Invalid argument",V="\nFrom previous ",W="Chaining cycle detected for promise",X="rejectionHandled",Z="unhandledRejection",nn={e:C},tn=function(){},en=/^.+\/node_modules\/yaku\/.+\n?/gm,rn=function(n){var t,e=this;if(!r(e)||e._s!==P)throw h("Invalid this");if(e._s=$,L&&(e[K]=v()),n!==tn){if(!o(n))throw h(Q);(t=s(n)(w(e,Y),w(e,U)))===nn&&x(e,U,t.e)}};rn["default"]=rn,function(n,t){for(var e in t)n[e]=t[e]}(rn.prototype,{then:function(n,t){if(this._s===undefined)throw h();return y(this,d(rn.speciesConstructor(this,rn)),n,t)},"catch":function(n){return this.then(P,n)},"finally":function(n){return this.then(function(t){return rn.resolve(n()).then(function(){return t})},function(t){return rn.resolve(n()).then(function(){throw t})})},_c:0,_p:C}),rn.resolve=function(n){return p(n)?n:k(d(this),n)},rn.reject=function(n){return x(d(this),U,n)},rn.race=function(n){var t=this,e=d(t),r=function(n){x(e,Y,n)},o=function(n){x(e,U,n)},i=s(l)(n,function(n){t.resolve(n).then(r,o)});return i===nn?t.reject(i.e):e},rn.all=function(n){function t(n){x(o,U,n)}var e,r=this,o=d(r),i=[];return(e=s(l)(n,function(n,u){r.resolve(n).then(function(n){i[u]=n,--e||x(o,Y,i)},t)}))===nn?r.reject(e.e):(e||x(o,Y,[]),o)},rn.Symbol=O[q]||{},s(function(){Object.defineProperty(rn,e(),{get:function(){return this}})})(),rn.speciesConstructor=function(n,t){var r=n.constructor;return r?r[e()]||t:t},rn.unhandledRejection=function(n,t){I&&I.error("Uncaught (in promise)",L?t.longStack:j(n,t))},rn.rejectionHandled=tn,rn.enableLongStackTrace=function(){L=!0},rn.nextTick=F?function(n){E?new E(function(n){n()}).then(n):setTimeout(n)}:H.nextTick,rn._s=1;var on=a(999,function(n,t){var e,r;return(r=n._s!==U?t._onFulfilled:t._onRejected)===P?void x(t,n._s,n._v):(e=s(g)(r,n._v))===nn?void x(t,U,e.e):void k(t,e)}),un=a(9,function(n){m(n)||(n[J]=1,_(Z,n))});try{n.exports=rn}catch(cn){O.Yaku=rn}}()}).call(t,e(2))}});}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

  if (window.jQuery) {
    jQuery.fn.cropme = function (options = {}, obj) {
      if (typeof options === 'object') {
        return this.each(function () {
          var cropme = new Cropme(this, options)
          $(this).data('cropme', cropme)
        })
      } else if (typeof options === 'string') {
        var cropme = $(this).data('cropme');
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
        throw 'Error: the argument must be an object or a string'
      }
    }
  }

  function transform() {
    return 'translate3d(' + this.properties.x + 'px,' + this.properties.y + 'px, 0) scale(' + this.properties.scale + ') rotate(' + this.properties.deg + 'deg)'
  }

  function transformOrigin(x, y) {
    return x + 'px ' + y + 'px'
  }

  function createRotationSlider() {
    if (this.properties.rotation_slider) {
      if (!this.options.rotation.slider) {
        this.properties.wrapper.removeChild(this.properties.rotation_slider.parentNode)
        delete this.properties.rotation_slider
      } else {
        this.properties.rotation_slider.disabled = !this.options.rotation.enable
      }
      if(this.properties.rotation_slider){
        this.properties.rotation_slider.style.width = this.properties.container.offsetWidth + 'px'
      }
    } else {
      if (this.options.rotation.slider) {
        const sliderContainer = document.createElement('div')
        sliderContainer.classList.add('cropme-rotation-slider')
        const slider = this.properties.rotation_slider = document.createElement('input')
        slider.type = 'range'
        slider.setAttribute('min', -180)
        slider.setAttribute('max', 180)
        slider.setAttribute('step', 1)
        slider.value = 0

        slider.style.width = this.properties.container.offsetWidth + 'px'
        sliderContainer.appendChild(slider)
        this.properties.wrapper.appendChild(sliderContainer)
        let self = this
        this.properties.rotation_slider.addEventListener(detectIE() ? 'change' : 'input', function (e) {
          self.rotate(e.target.value)
        })
        this.properties.rotation_slider.disabled = !this.options.rotation.enable
      }
    }
  }
  function detectIE() {
	  var ua = window.navigator.userAgent;

	  var msie = ua.indexOf('MSIE ');
	  if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	  }

	  var trident = ua.indexOf('Trident/');
	  if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	  }

	  var edge = ua.indexOf('Edge/');
	  if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	  }

	  // other browser
	  return false;
	}

  function createSlider() {
    function changeSliderParameter() {
      let diff = (this.properties.wrapper.offsetWidth - this.properties.container.offsetWidth) / 2
      let positionX = this.properties.container.offsetWidth / 2 + 12 + diff
      if (this.options.rotation.position === 'left') {
        positionX = -this.properties.container.offsetWidth / 2 - 20 + diff
      }
      let diffH = (this.properties.container.offsetWidth - this.properties.container.offsetHeight) / 2
      const positionY = this.properties.container.offsetHeight / 2 + 12 - diffH
      this.properties.sliderContainer.style.transform = 'translate3d(' + positionX + 'px, ' + positionY + 'px, 0) rotate(-90deg)'
      let sliderOrigin = this.properties.container.offsetWidth / 2
      this.properties.sliderContainer.style.transformOrigin = sliderOrigin + 'px 12px'

      this.properties.sliderContainer.style.marginTop = '-24px'
      this.properties.slider.disabled = !this.options.zoom.enable
    }
    if (this.properties.slider) {
      if (!this.options.zoom.slider) {
        this.properties.wrapper.removeChild(this.properties.slider.parentNode)
        delete this.properties.slider
      } else {
        changeSliderParameter.call(this)
      }
    } else {
      if (this.options.zoom.slider) {
        let self = this
        const sliderContainer = this.properties.sliderContainer = document.createElement('div')
        sliderContainer.classList.add('cropme-slider')
        const slider = this.properties.slider = document.createElement('input')
        slider.type = 'range'

        slider.setAttribute('min', this.options.zoom.min)
        slider.setAttribute('max', this.options.zoom.max)
        slider.setAttribute('step', 0.000001)
        slider.style.width = this.properties.container.offsetHeight + 'px'
        sliderContainer.style.width = this.properties.container.offsetHeight + 'px'

        sliderContainer.appendChild(slider)
        this.properties.wrapper.insertBefore(sliderContainer, this.properties.wrapper.firstChild)
        this.properties.slider.value = this.properties.scale
        this.properties.slider.addEventListener(detectIE() ? 'change' : 'input', function (e) {
          self.properties.scale = parseFloat(e.target.value)
          self.properties.image.style.transform = transform.call(self)
        })
        changeSliderParameter.call(this)
      }
    }
  }

  function createContainer() {
    let container = this.properties.container

    if (!container) {
      container = this.properties.container = document.createElement('div')
      this.properties.wrapper.appendChild(container)
    }
    container.classList.add('cropme-container')
    container.style.width = this.options.container.width + (typeof this.options.container.width === 'string' ? '' : 'px')
    container.style.height = this.options.container.height + 'px'
  }

  function createImage() {
    if (!this.properties.image) {
      this.properties.image = new Image()
    }
    this.properties.image.ondragstart = () => false
    this.properties.container.appendChild(this.properties.image)
  }

  function createViewport() {

    const viewport = this.properties.viewport = this.properties.viewport || document.createElement('div')
    const container = this.properties.container
    const options = this.options


    const border_width = options.viewport.border.width
    container.style.width = options.viewport.width > container.offsetWidth ? (options.viewport.width + border_width * 2) + "px" : container.offsetWidth
    container.style.height = options.viewport.height > container.offsetHeight ? (options.viewport.height + border_width * 2) + "px" : container.offsetHeight
    viewport.style.width = options.viewport.width + 'px'
    viewport.style.height = options.viewport.height + 'px'

    viewport.className = 'viewport'
    if (options.viewport.type === 'circle') {
      viewport.className = 'viewport circle'
    }

    if (options.viewport.border.enable) {
      let viewport_border = (container.offsetWidth - options.viewport.width) / 2
      options.viewport.border.width = viewport_border < options.viewport.border.width ? viewport_border : options.viewport.border.width
    } else {
      options.viewport.border.width = 0
    }

    this.properties.viewport.style.borderWidth = options.viewport.border.width + 'px'
    this.properties.viewport.style.borderColor = options.viewport.border.color
    this.properties.container.appendChild(viewport)
  }

  function getOrigin() {
    const origin = this.properties.image.style.transformOrigin.split('px ')
    return {
      x: parseFloat(origin[0]),
      y: parseFloat(origin[1])
    }
  }

  function setRotationOrigin() {
    let origin = getOrigin.call(this)
    let ox = origin.x
    let oy = origin.y
    let angle = -parseInt(this.properties.deg) * Math.PI / 180
    if (this.options.transformOrigin === 'viewport') {
      let deg = this.properties.deg
      this.properties.deg = 0
      this.properties.image.style.transform = transform.call(this)
      let scale = this.properties.scale,
        container = this.properties.container,
        imageData = this.properties.image.getBoundingClientRect(),
        viewportData = this.properties.viewport.getBoundingClientRect(),
        top = (viewportData.top - imageData.top) + (viewportData.height / 2),
        left = (viewportData.left - imageData.left) + (viewportData.width / 2),
        cx,
        cy

      let bx = left / scale
      let by = top / scale

      let npx = (bx - ox)
      let npy = (by - oy)

      let x = npx * Math.cos(angle) - npy * Math.sin(angle)
      let y = npx * Math.sin(angle) + npy * Math.cos(angle)
      cx = ox + x
      cy = oy + y

      this.properties.x = container.offsetWidth / 2 - cx
      this.properties.y = container.offsetHeight / 2 - cy
      this.properties.image.style.transformOrigin = transformOrigin.call(this, cx, cy)
      this.properties.deg = deg
      this.properties.image.style.transform = transform.call(this)
    } else {
      this.properties.x -= this.properties.origin_x - ox
      this.properties.y -= this.properties.origin_y - oy
      this.properties.image.style.transformOrigin = transformOrigin.call(this, this.properties.origin_x, this.properties.origin_y)
      this.properties.image.style.transform = transform.call(this)
    }
  }

  function createContext() {
    createContainer.call(this)
    createRotationSlider.call(this)
    createSlider.call(this)
    createImage.call(this)
    createViewport.call(this)

    let x, y, moveX = 0,
      moveY = 0,
      self = this

    let down = function (e) {
      e.preventDefault()
      let pageX = e.pageX
      let pageY = e.pageY
      if (e.touches) {
        pageX = e.touches[0].pageX
        pageY = e.touches[0].pageY
      }
      moveX = self.properties.x || moveX
      moveY = self.properties.y || moveY
      x = pageX - moveX
      y = pageY - moveY

      document.addEventListener('mousemove', move)
      document.addEventListener('touchmove', move)
      document.addEventListener('mouseup', up)
      document.addEventListener('touchend', up)
    }
    self.properties.image.addEventListener('mousedown', down)
    self.properties.image.addEventListener('touchstart', down)

    let move = function (e) {
      e.preventDefault()
      let pageX = e.pageX
      let pageY = e.pageY
      if (e.touches) {
        pageX = e.touches[0].pageX
        pageY = e.touches[0].pageY
      }
      if (e.touches && e.touches.length > 1) {
        let second_touches = e.touches[1]
        let x = pageX - second_touches.pageX
        let y = pageY - second_touches.pageY

        if (self.options.rotation.enable) {
          let deg = 90 - Math.atan2(x, y) * 180 / Math.PI
          if (!self.properties.odeg) {
            self.properties.odeg = deg - self.properties.deg
          }
          self.properties.deg = deg - self.properties.odeg
        }

        if (self.options.zoom.enable) {
          let touches_dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
          if (!self.properties.od) {
            self.properties.od = touches_dist / self.properties.scale
          }
          self.properties.scale = touches_dist / self.properties.od
          if(self.properties.slider) {
            self.properties.slider.value = self.properties.scale
          }
        }
      } else {
        self.properties.x = pageX - x
        self.properties.y = pageY - y
      }
      self.properties.image.style.transform = transform.call(self)
    }

    let up = function () {
      document.removeEventListener('touchmove', move)
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', up)
      document.removeEventListener('touchend', up)
      self.properties.od = 0
      self.properties.odeg = 0
      setRotationOrigin.call(self)
    }

    let mousewheel = function (e) {
      e.preventDefault()
      let scale = self.properties.scale + (e.wheelDelta / 1200 * self.properties.scale)
      if (scale > self.options.zoom.min && scale < self.options.zoom.max && self.options.zoom.mouseWheel && self.options.zoom.enable) {
        if (self.options.zoom.slider) {
          self.properties.slider.value = scale
        }
        self.properties.scale = scale
        self.properties.image.style.transform = transform.call(self)
      }
    }
    self.properties.container.addEventListener('mousewheel', mousewheel)
  }

  function createCanvas(options) {
    let canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d')

    let width = this.options.viewport.width
    let height = this.options.viewport.height

    if (typeof options === 'object') {
      if (options.scale) {
        width = width * options.scale
        height = height * options.scale
      } else if (options.width) {
        height = options.width * height / width
        width = options.width
      }
    }

    canvas.width = width
    canvas.height = height

    const xs = width / this.options.viewport.width
    const ys = height / this.options.viewport.height

    const deg = this.properties.deg
    const nx = this.properties.x
    const ny = this.properties.y

    function transformImage(deg, ox, oy) {
      this.properties.deg = deg
      this.properties.x = ox
      this.properties.y = oy
      this.properties.image.style.transform = transform.call(this)
    }

    transformImage.call(this, 0, this.properties.ox, this.properties.oy)

    const imageData = this.properties.image.getBoundingClientRect()
    const viewportData = this.properties.viewport.getBoundingClientRect()
    const x = xs * (imageData.left - viewportData.left - this.options.viewport.border.width)
    const y = ys * (imageData.top - viewportData.top - this.options.viewport.border.width)
    const image_origin_rotation = this.options.transformOrigin

    const tx = (nx - this.properties.x) * xs
    const ty = (ny - this.properties.y) * ys

    if (image_origin_rotation === 'image') {
      ctx.translate(tx, ty)
    }
    ctx.translate(width / 2, height / 2)
    ctx.rotate(deg * Math.PI / 180)

    if (image_origin_rotation === 'image') {
      ctx.translate(-width / 2, -height / 2)
    } else {
      ctx.translate(-width / 2 + tx, -height / 2 + ty)
    }

    ctx.drawImage(this.properties.image, x, y, imageData.width * xs, imageData.height * ys)

    if (this.options.viewport.type === 'circle') {
      if (image_origin_rotation === 'image') {
        ctx.translate(width / 2, height / 2)
      } else {
        ctx.translate(width / 2 - tx, height / 2 - ty)
      }
      ctx.rotate(-deg * Math.PI / 180)
      ctx.translate(-width / 2, -height / 2)
      ctx.scale(1, this.options.viewport.height / this.options.viewport.width)
      if (image_origin_rotation === 'image') {
        ctx.translate(-tx * 2, -ty * 2)
      } else {
        ctx.translate(-tx, -ty)
      }
      ctx.globalCompositeOperation = 'destination-in'
      ctx.arc(width / 2 + tx, height / 2 + ty, width / 2, 0, 2 * Math.PI)
      ctx.fill()
    }

    transformImage.call(this, deg, nx, ny)
    return canvas
  }


  class Cropme {
    constructor(el, options) {
      if (el.className.indexOf('cropme-wrapper') > -1) {
        throw 'Error: Cropme is already initialized'
      }
      this.properties = {}
      this.options = nestedObjectAssign(defaultOptions, options)
      if (this.options.viewport.width > this.options.container.width) {
        throw 'Error: Viewport width cannot be greater that container width'
      }
      if (this.options.viewport.height > this.options.container.height) {
        throw 'Error: Viewport height cannot be greater that container height'
      }
      this.properties.wrapper = el
      if (el.tagName.toLowerCase() === 'img') {
        this.properties.image = el
        this.properties.wrapper = document.createElement('div')
        el.parentNode.insertBefore(this.properties.wrapper, el.previousSibling)
        el.parentNode.removeChild(el)
      }
      this.properties.wrapper.className += ' cropme-wrapper ' + this.options.customClass
      createContext.call(this)

      if (this.properties.image.src) {
        this.bind({
          url: this.properties.image.src
        })
      }
    }
    resize() {
      const container = this.properties.container
      let newW = this.properties.container_w - container.offsetWidth
      let newH = this.properties.container_h - container.offsetHeight
      container.style.width = this.options.container.width + (typeof this.options.container.width === 'string' ? '' : 'px')

      if (container.offsetWidth > this.options.viewport.width) {
        this.properties.x -= newW / 2
        this.properties.y -= newH / 2

        this.properties.container_w = container.offsetWidth
        this.properties.container_h = container.offsetHeight

        this.properties.ox -= newW / 2
        this.properties.oy -= newH / 2

        this.properties.image.style.transform = transform.call(this)
        createSlider.call(this)
        createRotationSlider.call(this)
      } else {
        container.style.width = (this.options.viewport.width + this.options.viewport.border.width * 2) + 'px'
      }

    }
    bind(obj) {
      window.onresize = this.resize.bind(this)
      this.properties.image.src = obj.url
      let properties = this.properties
      let options = this.options
      let self = this
      return new Promise(resolve => {
        this.properties.image.onload = function () {

          let imageData = properties.image.getBoundingClientRect()
          let containerData = properties.container.getBoundingClientRect()

          let cx = (containerData.width - imageData.width) / 2
          let cy = (containerData.height - imageData.height) / 2
          let scale = containerData.height / imageData.height
          let deg = 0
          properties.ox = cx
          properties.oy = cy
          let origin = {}

          if (typeof obj.position === 'object') {
            cx = obj.position.x ? obj.position.x + cx : cx
            cy = obj.position.y ? obj.position.y + cy : cy
            scale = obj.position.scale || scale
            deg = obj.position.angle || deg
            origin = obj.position.origin || origin
            options.transformOrigin = obj.position.origin === 'object' ? 'viewport' : 'image'
          }

          if (options.zoom.max <= options.zoom.min) {
            throw 'Error: max zoom cannot be less or equal to min zoom'
          }

          if (scale < options.zoom.min) {
            scale = options.zoom.min
          }
          if (scale > options.zoom.max) {
            scale = options.zoom.max
          }

          properties.x = cx
          properties.y = cy

          properties.container_w = containerData.width
          properties.container_h = containerData.height
          properties.origin_x = imageData.width / 2
          properties.origin_y = imageData.height / 2

          properties.scale = scale
          if (self.options.zoom.slider) {
            properties.slider.value = scale
          }
          if (self.options.rotation.slider) {
            properties.rotation_slider.value = deg
          }
          properties.deg = deg
          properties.image.style.transform = transform.call(self)

          properties.image.style.transformOrigin = transformOrigin.call(self, origin.x || properties.origin_x, origin.y || properties.origin_y)
          properties.image.style.opacity = 1
          setRotationOrigin.call(self)
          resolve(self.properties.image)
        }
      })
    }
    rotate(deg) {
      this.properties.deg = deg
      let origin = this.properties.image.style.transformOrigin.split('px ')
      let ox = parseInt(origin[0])
      let oy = parseInt(origin[1])
      this.properties.rotate_originx = ox
      this.properties.rotate_originy = oy
      this.properties.image.style.transform = transform.call(this)
    }
    crop(options) {
      const canvas = createCanvas.call(this, options)
      const output = (typeof options === 'object') ? options.type : options
      return new Promise(resolve => {
        if (output === 'blob') {
          canvas.toBlob(
            blob => resolve(URL.createObjectURL(blob)),
            options.mimetype,
            options.quality
          )
        } else {
          if (typeof options === 'object') {
            resolve(canvas.toDataURL(options.mimetype, options.quality))
          } else {
            resolve(canvas.toDataURL())
          }
        }
      })
    }
    position() {
      let position = {
        x: parseFloat((this.properties.x - this.properties.ox).toFixed(3)),
        y: parseFloat((this.properties.y - this.properties.oy).toFixed(3)),
        scale: parseFloat(this.properties.scale.toFixed(4)),
        angle: parseInt(this.properties.deg),
      }
      if (this.options.transformOrigin === 'viewport') {
        position.origin = getOrigin.call(this)
      }
      return position
    }
    reload(options) {
      this.options = nestedObjectAssign(defaultOptions, options)
      createSlider.call(this)
      createContainer.call(this)
      createRotationSlider.call(this)
      createViewport.call(this)
      setRotationOrigin.call(this)
    }
    destroy() {
      this.properties.wrapper.innerHTML = ''
      this.properties.wrapper.className = this.properties.wrapper.className.replace('cropme-wrapper', '')
      delete this.options
      delete this.properties
    }
  }

  const defaultOptions = {
    container: {
      width: 300,
      height: 300,
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
  }
  export default Cropme
