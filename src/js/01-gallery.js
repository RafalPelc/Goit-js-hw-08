import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
galleryItems.forEach(el => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const img = document.createElement('img');

  a.classList.add('gallery__link');
  img.classList.add('gallery__image');

  gallery.append(li);
  li.append(a);
  a.append(img);

  a.href = el.original;
  img.src = el.preview;
  img.alt = el.description;
});
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: Text,
  scrollZoom: false,
});

const selectImage = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  lightbox.open(event.target);
};
gallery.addEventListener('click', selectImage);

console.log(galleryItems);
