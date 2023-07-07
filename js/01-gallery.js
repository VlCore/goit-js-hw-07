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

const picClicked = (event) => {
  event.preventDefault()

  const {target: { dataset }} = event

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const lightbox = basicLightbox.create(`<img src=${dataset.source}>`);
  lightbox.show()

  const keyDownEsc = (event) => {
    if (event.key === "Escape") {
      lightbox.close(() => {
        document.removeEventListener("keydown", keyDownEsc)
      });
    }
  };
  document.addEventListener("keydown", keyDownEsc);
};

gallery.addEventListener("click", picClicked);