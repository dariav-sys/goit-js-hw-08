import galleryItems from "./gallery-images.js";

const listGalleryRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const imageModalRef = document.querySelector(".lightbox__image");
const overlayRef = document.querySelector(".lightbox__overlay");
const closeButtonRef = document.querySelector(
	"button[data-action='close-lightbox']"
);

function createGallery(galleryItems) {
	let template = "";
	galleryItems.forEach(({ preview, original, description }, index) => {
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
  </li>`;
	});
	listGalleryRef.innerHTML = template;
}

createGallery(galleryItems);

listGalleryRef.addEventListener("click", imageClickHandler);

let activeIndex;

function imageClickHandler(event) {
	event.preventDefault();
	closeButtonRef.addEventListener("click", closeModal);
	window.addEventListener("keydown", keyboardInputHandler);
	activeIndex = event.target.dataset.index;
	if (event.target.nodeName !== "IMG") {
		return;
	}
	modalRef.classList.add("is-open");
	imageModalRef.src = event.target.dataset.source;
	imageModalRef.alt = event.target.alt;
	

	overlayRef.addEventListener("click", () => {
	modalRef.classList.remove("is-open");
});
}



function closeModal() {
	modalRef.classList.remove("is-open");
	imageModalRef.src = "";
}


function keyboardInputHandler(event) {
	switch (event.code) {
		case "Escape":
			modalRef.classList.remove("is-open");
			imageModalRef.src = "";
			window.removeEventListener("keydown", keyboardInputHandler);
			break;
			
		case ("ArrowLeft"):
			activeIndex = (parseInt(activeIndex) - 1);
			activeIndex = activeIndex < 0 ? galleryItems.length - 1 : activeIndex;
			//activeIndex > 1 ? activeIndex = parseInt(activeIndex) - 1 : '';
			imageModalRef.src = "";
			imageModalRef.setAttribute('src', galleryItems[activeIndex].original);
			break;

		case ("ArrowRight"):
			activeIndex = (parseInt(activeIndex) + 1)
			activeIndex = activeIndex == galleryItems.length ? 0 : activeIndex;
			//(activeIndex < galleryItems.length - 1) ? activeIndex = parseInt(activeIndex) + 1 : '';
			imageModalRef.src = "";
			imageModalRef.setAttribute('src', galleryItems[activeIndex].original)
			break;
	}
}

//-------------WITH IF

// function keyboardInputHandler(event) {
// 	if (event.code === "Escape") {
// 		modalRef.classList.remove("is-open");
// 		imageModalRef.src = "";
// 		window.removeEventListener("keydown", keyboardInputHandler);
// 	}

// 	if (event.code === "ArrowLeft" && activeIndex > 1) {
// 		activeIndex = parseInt(activeIndex) - 1;
// 		imageModalRef.src = "";
// 		imageModalRef.setAttribute('src',galleryItems[activeIndex].original)
		
// 	}
	
// 	if (event.code === "ArrowRight" && activeIndex < galleryItems.length-1) {		
// 		activeIndex = parseInt(activeIndex) + 1;		
// 		imageModalRef.src = "";
// 		imageModalRef.setAttribute('src',galleryItems[activeIndex].original)
		
// 	}
// }








