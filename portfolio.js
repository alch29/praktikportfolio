const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

//Modals:

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(div => {
    div.addEventListener('click', () => {
        const modal = document.querySelector(div.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal(modal) {
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

//Slideshow:

function plusSlides(n, slideshowId) {
  let slideIndex = parseInt(document.getElementById(slideshowId).getAttribute("data-slide-index"));
  showSlides(slideIndex += n, slideshowId);
}

function currentSlide(n, slideshowId) {
  showSlides(n, slideshowId);
}

function showSlides(n, slideshowId) {
  let i;
  let slideshow = document.getElementById(slideshowId);
  let slides = slideshow.getElementsByClassName("slides");
  let dots = slideshow.nextElementSibling.getElementsByClassName("dot");
  if (n > slides.length) {n = 1}
  if (n < 1) {n = slides.length}
  slideshow.setAttribute("data-slide-index", n);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[n-1].style.display = "block";
  dots[n-1].className += " active-dot";
}

document.querySelectorAll('.slideshow-container').forEach((slideshow) => {
  slideshow.setAttribute("data-slide-index", 1);
  showSlides(1, slideshow.id);
});
