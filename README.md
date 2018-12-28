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
## Options
the values in the example are the default values
### container: Object
the container of the cropper
```js
{
    container: {
        width: 300,
        height: 300
    }
}
```
### Viewport
the part that will be cropped
```js
viewport: {
  width: 100, // viewport width, Int
  height: 100, // viewport height, Int
  border: {
    enable: true, // enable or diable border, Bool
    width: 2, // viewport border width, Int
    color: '#fff' // viewport border color, String: 'Hex, RGBA or HSL Code'
  }
}
```
### Zoom
the image zoom options
```js
zoom: {
  min: 0.01, // minimum zoom, Int
  max: 3, // maximum zoom, Int
  enable: true, // enable or disable zoom, Bool
  mouseWheel: true, // enable or disable mouse wheel zoom, Bool
  slider: false // show or hide the slider, Bool
}
```
### Rotation
the rotation oprions
```js
rotation: {
  slider: false, // show or hide the slider, Bool
  enable: true, // enable or disable the rotaion, Bool
  position: 'right' // the slider position ,String: 'left','right'
}
```
### Custom class
this class will be added to the cropme container to add custom css
```js
{
    customClass: 'my-custom-class', // String
}
