import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

document.addEventListener('DOMContentLoaded', () => {
    const galleryList = document.querySelector('.gallery');
    const pictures = galleryItems.map((picture) => ({
        href: picture.original,
        caption: picture.description,
        src: picture.preview,
        alt: picture.description,
    }));

    let isModalOpen = false;

    function createGalleryItem({ href, caption, src, alt }) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');

        li.classList.add('gallery__item');
        a.classList.add('gallery__link');
        img.classList.add('gallery__image');

        a.href = href;
        a.setAttribute('data-caption', caption);
        img.src = src;
        img.alt = alt;

        a.appendChild(img);
        li.appendChild(a);
        galleryList.appendChild(li);

        a.addEventListener('click', function (evt) {
            evt.preventDefault();

            const lightbox = new SimpleLightbox('.gallery__link', {elements: [this], captionsData: 'alt', captionDelay: 250},)

            isModalOpen = true;

            function keyDownEsc(event) {
                if (event.key === 'Escape') {
                    lightbox.close();
                }
            }

            function removeKeyDownListener() {
                document.removeEventListener('keydown', keyDownEsc);
            }

            lightbox.on('shown.simplelightbox', () => {
                document.addEventListener('keydown', keyDownEsc);
            });

            lightbox.on('closed.simplelightbox', () => {
                isModalOpen = false;
                removeKeyDownListener();
            });
        });
    }

    pictures.forEach(createGalleryItem);
});