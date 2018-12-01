(function (global) {

  var o, p

  function transform() {
    return 'translate(' + p.x + 'px,' + p.y + 'px) scale(' + p.scale + ') rotate(' + p.deg + 'deg)'
  }

  function createContext() {
    createContainer.call(this)
    createSlider.call(this)
    const image = p.image = document.createElement('img')
    image.ondragstart = () => false
    const boundary = p.boundary = document.createElement('div')

    o.boundary.width = o.boundary.width > o.container.width ? o.container.width : o.boundary.width
    o.boundary.height = o.boundary.height > o.container.height ? o.container.height : o.boundary.height
    boundary.style.width = o.boundary.width + 'px'
    boundary.style.height = o.boundary.height + 'px'
    boundary.className = 'boundary'

    if (o.boundary.type === 'circle') {
      boundary.className = 'boundary circle'
    }

    p.container.appendChild(image)
    p.container.appendChild(boundary)

    let border = 0;
    if (o.boundary.border) {
      let boundary_border = (o.container.width - o.boundary.width) / 2
      border = boundary_border < p.boundary.clientLeft ? boundary_border : p.boundary.clientLeft
    }

    p.boundary.style.borderWidth = border + 'px'
    p.boundary.border = border

    let x, movex = 0,
      y, movey = 0


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
      movex = p.x || movex
      movey = p.y || movey
      x = e.pageX - movex
      y = e.pageY - movey
      document.addEventListener('mousemove', move)
      document.addEventListener("touchmove", move);
    }

    image.addEventListener('mousedown', down)
    image.addEventListener("touchstart", down);

    let move = function (e) {
      e.preventDefault();
      e = setCoordinates(e)
      if (e.touches && e.touches.length > 1) {
        let second_touches = e.touches[1]
        let touches = e.touches[0]
        let x = touches.pageX - second_touches.pageX
        let y = touches.pageY - second_touches.pageY
        let touches_dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        if (!p.od) {
          p.od = touches_dist / p.scale;
        }
        p.scale = p.slider.value = touches_dist / p.od;
      }
      p.x = e.pageX - x
      p.y = e.pageY - y
      image.style.transform = transform()
    }

    let up = function () {
      document.removeEventListener('touchmove', move);
      document.removeEventListener('mousemove', move);
      p.od = 0;
    }
    document.addEventListener('mouseup', up)
    document.addEventListener("touchend", up);

    p.slider.addEventListener('input', function (e) {
      p.scale = parseFloat(e.target.value)
      image.style.transform = transform()
    })
    let mousewheel = function (e) {
      e.preventDefault()
      p.scale = p.slider.value = p.scale + (e.wheelDelta / 1200 * p.scale)
      image.style.transform = transform()
    }
    p.container.addEventListener('mousewheel', mousewheel)
  }

  function createCanvas(options) {
    let canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');

    let width = o.boundary.width
    let height = o.boundary.height

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

    const xs = width / o.boundary.width
    const ys = height / o.boundary.height

    const deg = p.deg
    const nx = p.x
    const ny = p.y

    function transformImage(deg, ox, oy) {
      p.deg = deg
      p.x = ox
      p.y = oy
      p.image.style.transform = transform()
    }
    if (deg !== 0) {
      transformImage.call(this, 0, p.ox, p.oy)
    }

    const imageData = p.image.getBoundingClientRect()
    const boundaryData = p.boundary.getBoundingClientRect()

    const x = xs * (imageData.x - boundaryData.x - p.boundary.border)
    const y = ys * (imageData.y - boundaryData.y - p.boundary.border)
    if (deg !== 0) {
      ctx.translate((nx - p.x) * xs, (ny - p.y) * ys)
      ctx.translate(width / 2, height / 2);
      ctx.rotate(deg * Math.PI / 180);
      ctx.translate(-width / 2, -height / 2);
    }

    ctx.drawImage(p.image, x, y, imageData.width * xs, imageData.height * ys)

    if (o.boundary.type === 'circle') {
      ctx.translate(width / 2, height / 2);
      ctx.rotate(-deg * Math.PI / 180);
      ctx.translate(-width / 2, -height / 2);
      ctx.scale(1, o.boundary.height / o.boundary.width);
      let diff = (o.boundary.width - o.boundary.height) / 2 * xs
      let x_coordinate = (p.x - nx) * xs
      let y_coordinate = (p.y - ny) * ys
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
    if (o.boundary.type === 'triangle') {
      ctx.translate(width / 2, height / 2);
      ctx.rotate(-deg * Math.PI / 180);
      ctx.translate(-width / 2, -height / 2);
      ctx.translate((p.x - nx) * xs, (p.y - ny) * ys)
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

  function createSlider() {
    const sliderContainer = document.createElement('div')
    sliderContainer.classList.add('cropme-slider')
    const slider = p.slider = document.createElement('input')
    slider.type = 'range'
    slider.setAttribute('min', 0.01)
    slider.setAttribute('max', 1.5)
    slider.setAttribute('step', 0.000001)
    slider.style.width = o.container.width + 'px'
    sliderContainer.appendChild(slider)
    p.wrapper.appendChild(sliderContainer)
  }

  function createContainer() {
    const container = document.createElement('div')
    container.classList.add('cropme-container')
    container.style.width = o.container.width + 'px'
    container.style.height = o.container.height + 'px'
    p.container = container
    p.wrapper.appendChild(container)
  }

  class Cropme {
    constructor(el, options) {
      if (el.className.indexOf('cropme-wrapper') > -1) {
        throw 'Error: Cropme is already initialized'
      }
      el.classList.add('cropme-wrapper')
      this.properties = {}
      p = this.properties
      p.wrapper = el
      o = p.options = nestedObjectAssign(defaultOptions, options)
      createContext.call(this)
    }
    bind(obj) {
      p.image.src = obj.url
      p.image.onload = function () {
        let imageData = p.image.getBoundingClientRect()
        let containerData = p.container.getBoundingClientRect()
        let cx = (containerData.width - imageData.width) / 2
        let cy = (containerData.height - imageData.height) / 2
        p.ox = cx
        p.oy = cy

        if (typeof obj.position == 'object') {
          cx = obj.position.x || cx
          cy = obj.position.y || cy
        }

        let scale = obj.scale ? obj.scale : containerData.height / imageData.height
        p.x = cx
        p.y = cy
        p.scale = scale
        p.slider.value = scale
        p.deg = obj.deg || 0
        p.image.style.transform = transform()
        p.image.style.opacity = 1

      }
    }
    rotate(deg) {
      p.deg = deg
      p.image.style.transform = transform()
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
        x: p.x,
        y: p.y,
        scale: p.scale,
        deg: parseInt(p.deg)
      }
    }
    destroy() {
      p.wrapper.innerHTML = ''
      p.wrapper.className = p.wrapper.className.replace('cropme-wrapper', '');
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
    },
  }
  global.Cropme = Cropme
})(window)
