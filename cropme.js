(function (global) {
  // ----------------- Pollyfils ---------------------------

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

    let boundary_border = (o.container.width - o.boundary.width) / 2
    let border = boundary_border < p.boundary.clientLeft ? boundary_border : p.boundary.clientLeft

    p.boundary.style.borderWidth = border + 'px'
    p.boundary.border = border

    let x, movex = 0,
      y, movey = 0

    let mousemove = function (e) {
      p.x = e.pageX - x
      p.y = e.pageY - y
      image.style.transform = transform()
    }
    image.addEventListener('mousedown', function (e) {
      movex = p.x || movex
      movey = p.y || movey
      x = e.pageX - movex
      y = e.pageY - movey
      window.addEventListener('mousemove', mousemove)
    })

    document.addEventListener('mouseup', function (e) {
      window.removeEventListener('mousemove', mousemove);
    })

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
      } else {
        if (options.size && options.size.width) {
          width = options.size.width
        }
        if (options.size && options.size.height) {
          height = options.size.height
        }
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
      ctx.translate((p.x - nx) * xs, (p.y - ny) * ys)
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
      console.log(this);


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
