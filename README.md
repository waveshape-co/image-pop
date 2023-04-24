# ImagePop

A kinda cool hover interaction.

## Usage

Import the code

```
<script src="https://cdn.jsdelivr.net/gh/waveshape-co/image-pop@1.0.0/script.min.js"></script>
```

Init

```
const imageDrop = new ImageDrop({
  hoverElement: "hover-text",
  images: [
    "https://your-img-url-here.com",
    "https://your-img-url-here.com",
    "https://your-img-url-here.com",
    "https://your-img-url-here.com",
    "https://your-img-url-here.com",
    "https://your-img-url-here.com",
  ],
  imageSize: 200,
  creationSpeed: 150,
  fadeTime: 2,
});
```

## Options

### hoverElement

A class name of the element that the user is hovering

### images

An array of image URL's

### imageSize

The max-width of the images

### creationSpeed

The speed of new images being created

### fadeTime

The time it takes for the images to fade out
