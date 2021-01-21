import galleryItems from "./gallery-images.js";

const listGalleryRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const imageModalRef = document.querySelector(".lightbox__image");
const overlayRef = document.querySelector(".lightbox__overlay");
const closeButtonRef = document.querySelector("button[data-action='close-lightbox']")

// console.log(image)

// console.log(gallery)

function createGallery(galleryItems) {
  let template = '';

  

  galleryItems.forEach(({preview,original,description},index) => {
    template += ` <li class="gallery__item">
  <a
    class="gallery__link"
    href=${original};
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-index="${index}"
      alt="${description}"
    />
  </a>
  </li>`
    
  });

  listGalleryRef.innerHTML = template;
	
}

createGallery(galleryItems)



listGalleryRef.addEventListener("click", openModal);
closeButtonRef.addEventListener('click', closeModal);

function openModal(event) {   
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
  };

  modalRef.classList.add("is-open");
  imageModalRef.src = event.target.dataset.source;
  imageModalRef.alt = event.target.alt;
  console.log(imageModalRef.alt)
}


function closeModal(event) {  
  event.preventDefault();
  if (event.target.nodeName === "BUTTON") {
		modalRef.classList.remove("is-open");
  };
  
}
