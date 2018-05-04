const IMAGES = document.querySelectorAll('img');

function generateSrcset(imgSrc) {
  let markup = [];
  let width = 400;

  for (let i = 0; i < 5; i++) {
    markup[i] = `${imgSrc}-${width}.jpg ${width}w`;
    width += 400;
  }

  return markup.join();
}

for (let i = 0; i < IMAGES.length; i++) {
  let imgSrc = IMAGES[i].getAttribute('src').slice(0, -8);
  let srcset = generateSrcset(imgSrc);

  IMAGES[i].setAttribute('srcset', srcset);
}
