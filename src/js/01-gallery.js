// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const galleryList = createGalleryList(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryList);
galleryContainer.addEventListener('click', clickOnImage)

function createGalleryList(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `<a class="gallery__link" href = "${original}" >
                <img 
                    class="gallery__image"
                    src='${preview}'
                    data-source="${original}"
                    alt="${description}"
                />
            </a>`).join('')
};
            
function clickOnImage(e) {
    e.preventDefault();
    let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {});
};
