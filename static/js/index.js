/*** CAROUSEL ***/
let swiper = new Swiper('.mySwiper', {
  // slidesPerView: 3,
  // spaceBetween: 30,
  autoHeight: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});


/*** PRODUCTS ***/
// PRODUCT MAIN IMG SRC CHANGE
let mainImg = document.getElementById('product-main-img');
let thumbnails = document.getElementsByClassName('thumbnail');
let activeImages = document.getElementsByClassName('thumbnail-active');

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('mouseover', function () {

    if (activeImages.length > 0) {
      activeImages[0].classList.remove('thumbnail-active');
    }

    this.classList.add('thumbnail-active');
    mainImg.src = this.src;
    mainImg.alt = this.alt;
  })
}


// DESCRIPTION SHOW ON CLICK
document.getElementById("description-toggle").addEventListener("click", toggleDescription);

function toggleDescription() {
  let description = document.getElementById("description");
  if (description.style.display === "none") {
    description.style.display = "block";
  } else {
    description.style.display = "none";
  }
}

// SHIPPING SHOW ON CLICK
document.getElementById("shipping-toggle").addEventListener("click", toggleShipping);

function toggleShipping() {
  let shipping = document.getElementById("shipping");
  if (shipping.style.display === "none") {
    shipping.style.display = "block";
  } else {
    shipping.style.display = "none";
  }
}


