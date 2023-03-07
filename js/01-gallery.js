import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryContainer = document.querySelector('.gallery');
// console.log(gallaryContainer);
const cardsMarkup = createGelleryCardsMarkup(galleryItems);
// console.log(cardsMarkup);

gallaryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
gallaryContainer.addEventListener('click', galleryContainerClick);

function createGelleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function galleryContainerClick(event) {
  event.preventDefault();

if (event.target.nodeName !== 'IMG') {
  return;
}
  
  const imageUrl = event.target.dataset.source;
  console.log(imageUrl);
  const instance = basicLightbox.create(`
  <img width="1400" height="900" src="${imageUrl}">`);
  instance.show();

  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}

console.log(galleryItems);
