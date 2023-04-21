class ImageDrop {
  constructor({
    hoverElement,
    images,
    imageSize = 200,
    creationSpeed = 50,
    fadeTime = 1,
  }) {
    if (!hoverElement || !images) {
      throw new Error(
        "A hoverable element (class) and an array of images are required"
      );
    }

    this.hoverElement = document.querySelector(`.${hoverElement}`);
    this.hoverElementPosition = this.hoverElement.getBoundingClientRect();
    this.images = images;
    this.imageSize = imageSize;
    this.creationSpeed = creationSpeed;
    this.fadeTime = fadeTime;

    this.createImageStyles();
    this.init();
  }

  init() {
    this.hoverElement.addEventListener(
      "mousemove",
      this.throttle(this.createImage, this.creationSpeed)
    );
  }

  throttle(func, delay) {
    let lastCall = 0;

    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }

      lastCall = now;
      return func.apply(this, args);
    };
  }

  createImage = (e) => {
    const randomImage = Math.floor(Math.random() * this.images.length);
    const image = document.createElement("img");

    image.className = "ws__img";
    image.src = this.images[randomImage];

    const offsetX = this.imageSize - this.imageSize / 2;
    const offsetY = this.imageSize - this.imageSize / 2;

    const top = e.clientY + window.scrollY - offsetY;
    const left = e.clientX + window.scrollX - offsetX;

    image.style.top = `${top}px`;
    image.style.left = `${left}px`;

    this.hoverElement.appendChild(image);

    setTimeout(() => {
      image.remove();
    }, this.fadeTime * 1000);
  };

  createImageStyles() {
    const imageClass = `
    .ws__img {
      position: absolute;
      top: 0;
      left: 0;
      max-width: ${this.imageSize}px;
      animation: ws__imageDrop ${this.fadeTime}s linear infinite;
      pointer-events: none;
    }`;

    const imageAnimation = `
    @keyframes ws__imageDrop {
      0% {
        transform: scale(1.1);
        opacity: 1;
      }

      75% {
        opacity: 0.5;
      }

      100% {
        transform: scale(1);
        opacity: 0;
      }
    }`;

    const style = document.createElement("style");
    style.innerHTML = `${imageAnimation} ${imageClass}`;
    document.head.appendChild(style);
  }
}
