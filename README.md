<a href="https://www.npmjs.com/package/cropme" target="_blank"><img src="https://img.shields.io/npm/v/cropme.svg" alt="Latest version" /></a>
<a href="https://www.npmjs.com/package/cropme" target="_blank"><img src="https://img.shields.io/npm/dt/cropme.svg" alt="NPM Downloads" /></a>
<a href="https://www.npmjs.com/package/cropme" target="_blank"><img src="https://img.shields.io/npm/l/cropme.svg" alt="Package License" /></a>
[![](https://data.jsdelivr.com/v1/package/npm/cropme/badge?style=rounded)](https://www.jsdelivr.com/package/npm/cropme)

# Cropme

Cropme is a customizable and easy to use javascript image cropper plugin.

[See the demo](https://shpontex.github.io/cropme)

## Features

Support:

- Two-dimensional translation
- Scaling
- Free rotation
- Rotation and scale around the image center or the viewport center
- Multi-touch support (pinch-zoom, two finger rotation, ...)
- Base64 and blob exportation
- Multiple croppers

## Architecture

```
dist/
├── cropme.css
├── cropme.min.css   (compressed)
├── cropme.js        (UMD)
└── cropme.min.js    (UMD, compressed)
```

## Installation

**npm**

```
npm install cropme
```

**Download**

[Download the project](https://github.com/shpontex/cropme/archive/master.zip) and extract it.\
then put the dist/cropme.min.css and the dist/cropme.min.js in you project.

```html
<link rel="stylesheet" href="path-to/cropme.min.css">
<script src="path-to/cropme.min.js"></script>
```

**CDN**

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cropme@latest/dist/cropme.min.css">
<script src="https://cdn.jsdelivr.net/npm/cropme@latest/dist/cropme.min.js"></script>
```

## Usage

### Syntax

```js
new Cropme(element, options);
```

- **element** (`HTMLElement`, required): *the cropper wrapping HTML element, can be a `<div>` or `<img>` tag.


- **options** (`Object`, optional): *The configuration options, see [**Options**](#options).*

### Example

**Vanilla javascript**

```html
<div id="container"></div>

<script>
  var element = document.getElementById('container');
  var cropme = new Cropme(element);
  cropme.bind({
    url: 'images/naruto.jpg'
  });
</script>

<!-- or use image tag -->
<img src="images/naruto.jpg" id="myImage" />
<script>
  var element = document.getElementById('myImage');
  new Cropme(element);
</script>
```

**JQuery**

```html
<div id="container"></div>

<script>
  var example = $('#container').cropme();
  example.cropme('bind', {
    url: 'images/naruto.jpg'
  });
</script>

<!-- or use image tag -->
<img src="images/naruto.jpg" id="myImage" />
<script>
  $('#myImage').cropme();
</script>
```

## Options

### Container

- Target: the container of the cropper.
- Key: `container`
- Parameters:
  - **width** (`int|string`, default: `300`): *the outer container width*
  - **height** (`int`, default: `300`): *the outer container height*

#### Example

```js
// Fixed container
container: {
  width: 500,
  height: 400
}
// responsive container
container: {
  width: '100%',
  height: 400
}
```
### Viewport

- Target: the part that will be cropped.
- Key: `viewport`
- Parameters:
  - **width** (`int`, default: `100`): *the viewport width*
  - **height** (`int`, default: `100`): *the viewport height*
  - **type** (`string`, default: `square`, available: `circle`): *the viewport frame form*
  - **border** (`object`): *the viewport frame border*
    - **enable** (`bool`, default: `true`): *toggle the border*
    - **width** (`int`, default: `2`): *the border width*
    - **color** (`string`, unit: `hex, rgba, hsl`, default: `#fff`): *the border color*

#### Example

```js
viewport: {
  width: 100,
  height: 100,
  type: 'circle',
  border: {
    enable: true,
    width: 2,
    color: '#fff'
  }
}
```

### Zoom

- Target: the image zoom options
- Key: `zoom`,
- Parameters:
  - **min** (`number`, default: `0.01`): *minimum zoom*
  - **max** (`number`, default: `3`): *maximum zoom*
  - **enable** (`bool`, default: `true`): *enable or disable the zoom feature*
  - **mouseWheel** (`bool`, default: `true`): *enable or disable mouse wheel zoom*
  - **slider** (`bool`, default: `false`): *toggle the slider input*

#### Example

```js
zoom: {
  min: 0.01,
  max: 3,
  enable: true,
  mouseWheel: true,
  slider: false
}
```

### Rotation

- Target: the image rotation
- Key: `rotation`
- Parameters:
  - **enable** (`bool`, default: `true`): *enable or disable the rotation*
  - **slider** (`bool`, default: `false`): *toggle the slider input*
  - **position** (`string`, default: `right`, available: `right, left`): *the slider input position*

#### Example

```js
rotation: {
  enable: true,
  slider: false,
  position: 'right'
}
```

### Transform origin

- Target: the image transform origin
- Parameter:
  - **transformOrigin** (`string`, default: `viewport`,available: `image`, `viewport`)\
  *image: the transform origin is the image center*\
  *viewport: the transform origin is the viewport center*

#### Example

```js
{
  transformOrigin: 'viewport'
}
```

### Custom class

- Target: the container class
- Parameter:
  - **customClass** (`string`, default: `null`): *the class of the container*

#### Example

```js
{
  customClass: 'my-custom-class'
}
```

## Methods

### bind()

*Binds an image and return a promise after the image is loaded.*

#### Arguments

The `bind()` method expects an `Object` containing:

- **url** (required)
  - **type**: `String`
  - **description**: The url of the image to bind.
- **position**
  - **x**: (`int`,the x translation coordinate).
  - **y**: (`int`,the y translation coordinate).\
  The image is translated from its origin.\
  If not specified, the image is centered horizontaly and verticaly.
  - **scale**: (`float`,The scale of the image, 1 is the original image size),\
  If not specified, the image will takes the container's height and scale automatically.
  - **angle**: (`int`,The rotation of the image by an angle in degree around its origin).
  - **origin**: (`object`,The x and y coordonate of the image transform origin),\
  if origin is set, the `transformOrigin` option will be override and set to `viewport`,\
  since `image` option means that the transform origin is the center of the image,\
  in that case `origin` is not required.


#### Example

```js
var container = $('#container').cropme();

container.cropme('bind', {
  url: 'images/naruto.jpg',
  position: {
    x: 230,
    y: -30,
    scale: 1.3,
    angle: 35,
    origin: {
      x: 623.26,
      y: 1150
    }
  },
});

// If you want to do some changes directly after binding the image

container.cropme('bind', {
  url: 'images/naruto.jpg',
})
.then(function(){
  //example
  container.cropme('rotate')
});

```

### rotate()

*Rotate the image to the given angle.*

#### Arguments

- **angle**
  - **description**: The angle the image will be rotated to.\
  The rotation is not relative to the current image rotation.
  - **type**: `number`
  - **unit**: `degree`

#### Example

```js
var myImage = $('#myImage').cropme();

myImage.cropme('rotate', 90);
```

### crop()

*Returns a promise with the cropped image.*

#### Arguments

As a parameter, the `crop()` function can receive:

1. An `Object` containing:
 - **type**
    - **type**: `String`
    - **default**: `base64`
    - **possible value**: `base64`, `blob`
    - **description**: The image exportation format
  - **width**
    - **type**: `int`
    - **description**: The width of the output images, the height will be \
    proportional.
  - **scale**
    - **type**: `number`
    - **description**: The size of the ouput, relative to the original image size.\
    If `scale` has a value, the `width` get ignored.
  - **mimetype**
    - **type**: `String`
    - **default**: `image/png`
    - **description**: The output image format.
  - **quality**
    - **type**: `number`
    - **default**: `0.92` (`0.80` for `image/webp` mimetype when output is blob).
    - **description**: A Number between `0` and `1` indicating image quality.\
    Works only with `image/jpeg` or `image/webp` (formats that use lossy
    compression).
2. A `String` specifying the exportation format (`base64` or `blob`)

  *For more information about `mimetype` and `quality` arguments: \
  → [`toBlob()` and `toDataURL()` HTMLCanvasElement documentation](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement).*

Calling `crop()` without parameters returns a **base64** image with the viewport size.

#### Example

```js
var myImage = $('#myImage').cropme();

// string
myImage.cropme('crop', 'blob')
  .then(function(output) {
        // here you can use the blob output
  });

// object
myImage.cropme('crop', {
    type: 'base64',
    width: 800
}).then(function(output) {
        // here you can use the base64 output
});


// no parameter
myImage.cropme('crop')
    .then(function(output) {
        // here you can use the base64 output
    });
```
### position()

*Returns an object specifying the image position*\
When you create a new cropme you can bind the image with this position object.

#### Example

```js
var myImage = $('#myImage').cropme();

var position = myImage.cropme('position');
```

**Output**: `Object`

```js
{
  x: 230,
  y: -30,
  scale: 1.3,
  angle: 35,
  origin: {
    x: 623.26,
    y: 1150
  }
}
```

### reload()

*Reload the cropme instance with a new parameters*

#### Example

```js
var myImage = $('#myImage').cropme({
  container: {
    width: 300,
    height: 200
  }
});

myImage.cropme('reload', {
  container: {
    width: 455,
    height: 600
  },
  viewport: {
    width: 150,
    height: 240,
    border: {
      enable: true,
      width: 5,
      color: '#f00'
    }
  }
});
```

### destroy()

*Destroy the cropme instance*

#### Example

```js
var myImage = $('#myImage').cropme();

myImage.cropme('destroy');
```

## Contributing

Thank you for your contribution to this project.

### Installation

Fork the project then

```
npm install && npm run watch
```
