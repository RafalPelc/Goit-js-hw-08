// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');
const images = galleryItems
  .map(
    image =>
      `<div class = "gallery__item">
      <a class = "gallery__link" href = "${image.original}">
      <img class = "gallery__image"
      data-source = "${image.original}"
      src = "${image.preview}"
      alt = "${image.description}"/>
      </a>
      </div>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', images);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(gallery);
