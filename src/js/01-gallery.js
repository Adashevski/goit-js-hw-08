import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const renderGalleryItems = items => {
  const galleryItemsHTML = items
    .map(item => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}" data-description="${item.description}">
        </a>
      </li>
    `;
    })
    .join('');

  galleryContainer.innerHTML = galleryItemsHTML;
};

renderGalleryItems(galleryItems);

const galleryLinks = document.querySelectorAll('.gallery__link');
galleryLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const source = link.querySelector('.gallery__image').dataset.source;
    const description =
      link.querySelector('.gallery__image').dataset.description;
    const instance = basicLightbox.create(`
      <img src="${source}" alt="${description}">
    `);
    instance.show();
    document.addEventListener('keydown', handleKeyDown);

    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', handleKeyDown);
      }
    }
  });
});

console.log(galleryItems);
