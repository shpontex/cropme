# Cropme
Cropme is a customizable and easy to use javascript image cropper plugin
## Features
 support: zooming, 360 rotation, touch: scale, rotate, move (mobile), multiple croppers
## Example
https://shpontex.github.io/cropme
## Architechture
```
dist/
├── cropme.min.css   (compressed)
└── cropme.min.js    (UMD, compressed)
```
## Installation
**npm**
```
npm install cropme
```

**Download**
 [source Code](https://github.com/shpontex/cropme/archive/master.zip), then
```html
<link rel="stylesheet" href="path-to/cropme.css">
<script src="path-to/cropme.js"></script>
```
**CDN**
```html
<script src="path-to-cdn/cropme.js"></script>
```
## Usage
### Syntax
```js
new Cropme(element,options)
```
- element: `HTMLElement`, image or div tag
  - the html image element or the html div container element 

- options: `Object`
  - the options form cropme , [options](#options)
### Example
**Vanilla javascript**
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

**JQuery**
```html
<div id="container"></div>

<script>
var example = $('#container').cropme(method,options)
example.cropme('bind',{
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
the values in the examples below are the default values
### container
the container of the cropper
```js
 container: {
     width: 300, // the outer container width
     height: 300 // the outer container height
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
the image rotation options
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

### bind({url,position,scale,angle})
bind the image and return a promise after the image is loaded
#### parameters:
* url: the url of the image to bind
* position: an object that contains the x and y coordinates
* scale: the scale of the image, 1 is the default image size
* angle: the rotation of the image by an angle in degree
```js
$('#myImage').cropme('bind',{
    url: 'images/naruto.jpg',
    position:{
        x: 230,
        y: 30
    },
    scale: 1.3,
    angle: 90

})
```
### rotate(angle)
rotate the image by the given angle
#### options: required
* an int of the angle of rotation in degree
```js
$('#myImage').cropme('rotate',90)
```
### export({type,width,scale})
return a promise that return the cropped image result
#### parameters
* type: the canvas export type , default is `base64`
* width: the width of the output images, the height will be proportional
* scale: scale 1 is the original image size, this will override the width params  
> export() without options return 'base64' image and the original viewport size
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
### destroy()
destroy the cropme instance
```js
$('#myImage').cropme('destroy')
```
