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
the rotation options
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
```

## Methods

### bind(options)
```js
{
    url:
}
```
### export({type,width,scale})
return the cropped image result
#### parameters
* type: the canvas export type , default is `base64`
* width: // the with of the output images, the height will be proportional
* scale: 2 // scale 1 is the original image size, this will override the width params  
> export() without options return 'base64' image and original viewport size
```js
$('#myImage').cropme('export','blob')

$('#myImage').cropme('export',{
    type: 'base64',
    width: 800
})
```

### position() Object
return an object of the image position
```js
{
    x: 20, // the image x translate position
    y: 40, // the image y translate position
    scale: 1.4, // the image scale, 1 is the image default size
    deg: 45 // the image rotation in degree
}
```
