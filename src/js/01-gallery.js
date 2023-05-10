import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const renderGalleryItems = () => {
  let galleryItemsHTML = '';

  galleryItems.forEach(item => {
    galleryItemsHTML += `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}">
        </a>
      </li>
    `;
  });

  galleryContainer.innerHTML = galleryItemsHTML;
};

renderGalleryItems();

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
