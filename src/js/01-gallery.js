// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
}

const galleryElement = galleryItems.map(({ preview, original, description }) => {
   return `<li>       
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image"
                    src="${preview}" 
                    alt="${description}" />
                </a>
                </li>`;
}).join('');

refs.gallery.insertAdjacentHTML('beforeend', galleryElement);

var lightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
lightBox.on("show.simplelightbox");


console.log(galleryItems);


