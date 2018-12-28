# CropME
Cropme is a customizable and easy to use javascript image cropping plugin
## Example
www.shpontex.github.io/cropme
## Installation
NPM: `npm install cropme`

Download: [source Code](https://github.com/shpontex/cropme/archive/master.zip), then
```html
<link rel="stylesheet" href="cropme.css">
<script src="cropme.js"></script>
```
## Usage
### Vanilla javascript
```html
<div id="container"></div>

<script>
var el = document.getElementById('container')
var cropme = new Cropme(el,options)
cropme.bind({
    url: 'images/naruto.jpg'
})
</script>
<!-- or use image tag -->
<img src="images/naruto.jpg" id="myImage" />
<script>
var el = document.getElementById('myImage')
new Cropme(el,options)
</script>

```

### Jquery
```html
<div id="container"></div>

<script>
$('#container').cropme(options)
$('#container').cropme('bind',{
    url: 'images/naruto.jpg'
})
</script>
<!-- or use image tag -->
<img src="images/naruto.jpg" id="myImage" />
<script>
$('#myImage').cropme()
</script>
```
