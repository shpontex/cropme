import './cropme.sass'

(function (global) {
  const nestedObjectAssign = require('./polyfills')
  if (window.jQuery) {
    jQuery.fn.cropme = function (options, obj) {

      if (typeof options === 'object') {

        return this.each(function () {
          var cropme = new Cropme(this, options)
          $(this).data('cropme', cropme)
        });

      } else if (typeof options === 'string') {

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
        throw 'Error: ' + options + ' method not found';

      } else {
        throw 'Error: the argument must be an object or a string'

      }
    }
  }

  function transform() {
    return 'translate(' + this.properties.x + 'px,' + this.properties.y + 'px) scale(' + this.properties.scale + ') rotate(' + this.properties.deg + 'deg)'
  }

  function createSlider() {
    const sliderContainer = document.createElement('div')
    sliderContainer.classList.add('cropme-slider')
    const slider = this.properties.slider = document.createElement('input')
    slider.type = 'range'
    
    slider.setAttribute('min', this.options.zoom.min)
    slider.setAttribute('max', this.options.zoom.max)
    slider.setAttribute('step', 0.000001)
    slider.style.width = this.options.container.width + 'px'
    sliderContainer.appendChild(slider)
    this.properties.wrapper.appendChild(sliderContainer)
  }

  function createContainer() {
    const container = document.createElement('div')
    container.classList.add('cropme-container')
    container.style.width = this.options.container.width + 'px'
    container.style.height = this.options.container.height + 'px'
    this.properties.container = container
    this.properties.wrapper.appendChild(container)
  }

  function createImage() {
    if (!this.properties.image) {
      this.properties.image = document.createElement('img')
    }
    this.properties.image.ondragstart = () => false
    this.properties.container.appendChild(this.properties.image)
  }

  function createViewport() {
    const viewport = this.properties.viewport = document.createElement('div')
    const options = this.options
    options.viewport.width = options.viewport.width > options.container.width ? options.container.width : options.viewport.width
    options.viewport.height = options.viewport.height > options.container.height ? options.container.height : options.viewport.height
    viewport.style.width = options.viewport.width + 'px'
    viewport.style.height = options.viewport.height + 'px'
    viewport.className = 'viewport'
    if (options.viewport.type === 'circle') {
      viewport.className = 'viewport circle'
    }
    let border = 0;
    if (options.viewport.border) {
      let viewport_border = (options.container.width - options.viewport.width) / 2
      border = viewport_border < this.properties.viewport.clientLeft ? viewport_border : this.properties.viewport.clientLeft
    }
    this.properties.viewport.style.borderWidth = border + 'px'
    this.properties.viewport.border = border
    this.properties.container.appendChild(viewport)
  }

  function createContext() {
    createContainer.call(this)
    createSlider.call(this)
    createImage.call(this)
    createViewport.call(this)
    

    let x, movex = 0,
      y, movey = 0,
      self = this


    function setCoordinates(e) {
      if (e.touches) {
        let touches = e.touches[0]
        e.pageX = touches.pageX
        e.pageY = touches.pageY
      }
      return e
    }
    let down = function (e) {
      e.preventDefault();
      e = setCoordinates(e)
      movex = self.properties.x || movex
      movey = self.properties.y || movey
      x = e.pageX - movex
      y = e.pageY - movey
      document.addEventListener('mousemove', move)
      document.addEventListener("touchmove", move);
    }
    self.properties.image.addEventListener('mousedown', down)
    self.properties.image.addEventListener("touchstart", down);

    let move = function (e) {
      e.preventDefault();
      e = setCoordinates(e)
      if (e.touches && e.touches.length > 1) {
        let second_touches = e.touches[1]
        let touches = e.touches[0]
        let x = touches.pageX - second_touches.pageX
        let y = touches.pageY - second_touches.pageY
        let deg = 90 - Math.atan(x / y) * 180 / Math.PI;

        if (!self.properties.odeg) {
          self.properties.odeg = deg - self.properties.deg
        }
        self.properties.deg = deg - self.properties.odeg

        let touches_dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        if (!self.properties.od) {
          self.properties.od = touches_dist / self.properties.scale;
        }
        self.properties.scale = self.properties.slider.value = touches_dist / self.properties.od;
      }
      self.properties.x = e.pageX - x
      self.properties.y = e.pageY - y
      self.properties.image.style.transform = transform.call(self)
    }

    let up = function () {
      document.removeEventListener('touchmove', move);
      document.removeEventListener('mousemove', move);
      self.properties.od = 0;
      self.properties.odeg = 0;
    }
    document.addEventListener('mouseup', up)
    document.addEventListener("touchend", up);

    self.properties.slider.addEventListener('input', function (e) {
      self.properties.scale = parseFloat(e.target.value)
      self.properties.image.style.transform = transform.call(self)
    })
    let mousewheel = function (e) {
      e.preventDefault()
      let scale = self.properties.slider.value = self.properties.scale + (e.wheelDelta / 1200 * self.properties.scale)
      if (scale > self.options.zoom.min && scale < self.options.zoom.max) {
        self.properties.scale = scale
        self.properties.image.style.transform = transform.call(self)
      }
    }
    self.properties.container.addEventListener('mousewheel', mousewheel)
  }

  function createCanvas(options) {
    let canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');

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
    if (deg !== 0) {
      transformImage.call(this, 0, this.properties.ox, this.properties.oy)
    }

    const imageData = this.properties.image.getBoundingClientRect()
    const viewportData = this.properties.viewport.getBoundingClientRect()

    const x = xs * (imageData.x - viewportData.x - this.properties.viewport.border)
    const y = ys * (imageData.y - viewportData.y - this.properties.viewport.border)
    if (deg !== 0) {
      ctx.translate((nx - this.properties.x) * xs, (ny - this.properties.y) * ys)
      ctx.translate(width / 2, height / 2);
      ctx.rotate(deg * Math.PI / 180);
      ctx.translate(-width / 2, -height / 2);
    }

    ctx.drawImage(this.properties.image, x, y, imageData.width * xs, imageData.height * ys)

    if (this.options.viewport.type === 'circle') {
      ctx.translate(width / 2, height / 2);
      ctx.rotate(-deg * Math.PI / 180);
      ctx.translate(-width / 2, -height / 2);
      ctx.scale(1, this.options.viewport.height / this.options.viewport.width);
      let diff = (this.options.viewport.width - this.options.viewport.height) / 2 * xs
      let x_coordinate = (this.properties.x - nx) * xs
      let y_coordinate = (this.properties.y - ny) * ys
      if (diff > 0) {
        y_coordinate = diff + y_coordinate * 2
      } else if (diff < 0) {
        y_coordinate = diff + y_coordinate / 2
      }
      ctx.translate(x_coordinate, y_coordinate)

      ctx.globalCompositeOperation = 'destination-in'
      ctx.arc(width / 2, height / 2, width / 2, 0, 2 * Math.PI)
      ctx.fill();
    }
    if (this.options.viewport.type === 'triangle') {
      ctx.translate(width / 2, height / 2);
      ctx.rotate(-deg * Math.PI / 180);
      ctx.translate(-width / 2, -height / 2);
      ctx.translate((this.properties.x - nx) * xs, (this.properties.y - ny) * ys)
      ctx.beginPath();
      ctx.globalCompositeOperation = 'destination-in'
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();
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
      this.properties.wrapper = el
      if (el.tagName.toLowerCase() === 'img') {
        this.properties.image = el
        this.properties.wrapper = document.createElement('div')
        el.parentNode.insertBefore(this.properties.wrapper, el.previousSibling);
      }
      this.properties.wrapper.classList.add('cropme-wrapper')
      createContext.call(this)
      
      if (this.properties.image.src) {
        this.bind({
          url: this.properties.image.src
        })
      }
    }
    bind(obj) {
      this.properties.image.src = obj.url
      let properties = this.properties
      let options = this.options
      let self = this
      
      properties.image.onload = function () {
        let imageData = properties.image.getBoundingClientRect()
        let containerData = properties.container.getBoundingClientRect()
        let cx = (containerData.width - imageData.width) / 2
        let cy = (containerData.height - imageData.height) / 2
        properties.ox = cx
        properties.oy = cy

        if (typeof obj.position == 'object') {
          cx = obj.position.x || cx
          cy = obj.position.y || cy
        }

        let scale = obj.scale ? obj.scale : containerData.height / imageData.height
        
        if(scale < options.zoom.min) {
          scale = options.zoom.min
        }
        if( scale > options.zoom.max) {
          scale = options.zoom.max
        }
        
        properties.x = cx
        properties.y = cy
        properties.scale = scale
        properties.slider.value = scale
        properties.deg = obj.deg || 0
        properties.image.style.transform = transform.call(self)
        properties.image.style.opacity = 1

      }
    }
    rotate(deg) {
      this.properties.deg = deg
      this.properties.image.style.transform = transform.call(this)
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
      this.properties.wrapper.innerHTML = ''
      this.properties.wrapper.className = this.properties.wrapper.className.replace('cropme-wrapper', '');
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
    },
    zoom: {
      min: 0.01,
      max: 3
    }
  }
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = Cropme
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return Cropme
    });
  } else {
    global.Cropme = Cropme
  }
})(window)