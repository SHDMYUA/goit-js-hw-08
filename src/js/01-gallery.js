// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";

const placeGalleryRef = document.querySelector(".gallery");

//Make one element of gallery from backend data
const makeGalleryEl = ({preview, original, description}) => {
  return galleryItems.map(({preview , original, description}) => {
    const listEl = `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
      </div>
    `;

    return listEl;
  }).join("");
};

//Make all elements of gallery
const imagesELadd = makeGalleryEl(galleryItems);

// Add the gallery to the html file
placeGalleryRef.insertAdjacentHTML("afterbegin", imagesELadd);

//Prepare pictures for SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'title',
  captionDelay: 250,
});