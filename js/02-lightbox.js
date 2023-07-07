import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery")

const galleryList = galleryItems.map((picture) => {
    return `<li class="gallery__item">
                <a class="gallery__link" href="${picture.original}">
                    <img 
                        class="gallery__image" 
                        src="${picture.preview}" 
                        data-source="${picture.original}" 
                        alt="${picture.description}"
                    />
                </a>
            </li>`
  }).join("")

gallery.insertAdjacentHTML("afterbegin", galleryList)

const lightbox = new SimpleLightbox('.gallery__item a', {
    captionsData: 'alt',
    captionDelay: 250,
});
