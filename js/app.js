new Vue({
  el: "#app",
  data: {
    options: {},
    position: {},
    defaultOptions: {
      container: {
        width: '100%',
        height: 400
      },
      viewport: {
        width: 200,
        height: 200,
        type: 'circle',
        border: {
          width: 2,
          enable: true,
          color: '#fff'
        }
      },
      zoom: {
        enable: true,
        mouseWheel: true,
        slider: true
      },
      rotation: {
        slider: true,
        enable: true,
        position: 'left'
      },
      transformOrigin: 'viewport',
    },
    cropme: {},
    el: {}
  },
  watch: {
    options: {
      handler: function(val) {
        this.cropme.reload(val)
      },
      deep: true
    }
  },
  created:function() {
    this.options = JSON.parse(JSON.stringify(this.defaultOptions))
  },
  mounted:function() {
    this.init()
  },
  methods: {
    init:function() {
      this.el = document.getElementById('cropme')
      this.cropme = new Cropme(this.el, this.options)
      this.cropme.bind({
        url: 'images/pic.jpeg',
      })
    },
    getPosition:function() {
      this.position = this.cropme.position()
      $('#cropmePosition').modal()
    },
    crop:function() {
      let img = document.getElementById('cropme-result')
      this.cropme.crop({
        width: 600
      }).then(function(res) {
        img.src = res
        $('#cropmeModal').modal()
      })
    },
    reset:function() {
      this.options = JSON.parse(JSON.stringify(this.defaultOptions))
      this.cropme.destroy()
      this.init()
    }
  }
})
