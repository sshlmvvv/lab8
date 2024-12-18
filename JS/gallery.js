
// Масив зображень
const images = [
  {
    preview: './images/image1.jpg',
    original: './images/image1.jpg',
    description: 'Гірський краєвид 1',
  },
  {
    preview: './images/image2.jpg',
    original: './images/image2.jpg',
    description: 'Гірський краєвид 2',
  },
  {
    preview: './images/image3.jpg',
    original: './images/image3.jpg',
    description: 'Гірський краєвид 3',
  },
  {
    preview: './images/image4.jpg',
    original: './images/image4.jpg',
    description: 'Гірський краєвид 4 (великий)',
  },
  {
    preview: './images/image5.jpg',
    original: './images/image5.jpg',
    description: 'Гірський краєвид 5',
  },
  {
    preview: './images/image6.jpg',
    original: './images/image6.jpg',
    description: 'Гірський краєвид 6',
  },
];

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
    <li>
      <img class="gallery-image" 
           src="${preview}" 
           data-source="${original}" 
           alt="${description}">
    </li>`
  )
  .join('');

galleryContainer.innerHTML = galleryMarkup;

// Делегування подій
galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const clickedImage = event.target;

  if (clickedImage.nodeName !== 'IMG') {
    return; 
  }

  const largeImageURL = clickedImage.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" alt="${clickedImage.alt}">
  `);
  instance.show();
}
