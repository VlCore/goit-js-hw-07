import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

document.addEventListener('DOMContentLoaded', () => {

    const galleryList = document.querySelector('.gallery')

    galleryItems.forEach(picture => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        const img = document.createElement('img')

        li.classList.add('gallery__item');
        a.classList.add('gallery__link');
        img.classList.add('gallery__image');

        a.href = picture.original
        a.setAttribute('data-caption', picture.description)
        img.src = picture.preview
        img.alt = picture.description

        a.appendChild(img)
        li.appendChild(a)

        galleryList.appendChild(li)

        a.addEventListener('click', function (evt) {
            evt.preventDefault()
            const imageSource = this.getAttribute('href')
            const caption = this.getAttribute('data-caption')
            const instance = basicLightbox.create(`<img src="${imageSource}" alt="${caption}" />`)
            instance.show()
        

            const keyDownEsc = (event) => {
                if (event.key === 'Escape') {
                    instance.close();
                }
            };

            const removeKeyDownListener = () => {
                document.removeEventListener('keydown', keyDownEsc);
            };

            instance.element().addEventListener('hidden', removeKeyDownListener);
            document.addEventListener('keydown', keyDownEsc);
        });
    })
})