new Vue({
    el: "#app",
    data: {
        options: {},
        defaultOptions: {
            container: {
                width: 300,
                height: 300
            },
            viewport: {
                width: 150,
                height: 150,
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
                slider: true
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
                url: '/images/owndays.png'
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