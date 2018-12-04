var el = document.getElementById('cropme')

var cropme = new Cropme(el, {
    container: {
        width: 300,
        height: 300
    },
    viewport: {
        width: 150,
        height: 150,
        type: 'circle'
    },
    zoom:{
        slider: true
    }
})
cropme.bind({
    url: '/images/pic.jpeg'
})

var cropButton = document.getElementById('crop')
cropButton.addEventListener('click', function () {
    let img = document.getElementById('cropme-result')
    cropme.export({
        width: 600
    }).then(res => {
        img.src = res
        $('#cropmeModal').modal()
    })
})