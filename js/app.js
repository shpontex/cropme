new Vue({
    el: "#app",
    data: {
        options: {},
        defaultOptions: {
            container: {
                width: 400,
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
            }
        },
        cropme: {},
        el: {}
    },
    watch: {
        options: {
            handler(val) {
                this.cropme.reload(val)
            },
            deep: true
        }
    },
    created() {
        this.options = JSON.parse(JSON.stringify(this.defaultOptions))
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.el = document.getElementById('cropme')
            this.cropme = new Cropme(this.el, this.options)
            this.cropme.bind({
                url: 'images/pic.jpeg'
            })
        },
        crop() {
            let img = document.getElementById('cropme-result')
            this.cropme.export({
                width: 600
            }).then(res => {
                img.src = res
                $('#cropmeModal').modal()
            })
        },
        reset() {
            this.options = JSON.parse(JSON.stringify(this.defaultOptions))
            this.cropme.destroy()
            this.init()
        }
    }
})
