const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

mainNavToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--mobile-menu-closed')) {
    mainNav.classList.remove('main-nav--mobile-menu-closed');
    mainNav.classList.add('main-nav--mobile-menu-opened');
  } else {
    mainNav.classList.remove('main-nav--mobile-menu-opened');
    mainNav.classList.add('main-nav--mobile-menu-closed');
  }
});


const modalOverlay = document.querySelector('.modal-overlay');
const featuredButton = document.querySelector('.featured__order');
const productCardsButtons = document.querySelectorAll('.product-card__cart');

if (featuredButton) {
  featuredButton.addEventListener('click', function (event) {
    event.preventDefault();

    modalOverlay.classList.add('modal-overlay--open');
  });
};

if (productCardsButtons.length) {
  productCardsButtons.forEach(productCardsButton => {
    productCardsButton.addEventListener('click', function (event) {
      modalOverlay.classList.add('modal-overlay--open');
    });
  });
};

if (modalOverlay) {
  modalOverlay.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal-overlay--open')) {
      modalOverlay.classList.remove('modal-overlay--open');
    }
  });
}


const reviewsItems = document.querySelectorAll('.reviews__item');

if (reviewsItems.length) {
  const sliderButtonPrev = document.querySelector('.reviews__button--prev');
  const sliderButtonNext = document.querySelector('.reviews__button--next');
  let currentReviewNumber;

  for (let i = 0; i < reviewsItems.length; i++) {
    if (reviewsItems[i].classList.contains('reviews__item--current')) {
      currentReviewNumber = i;
    }
  };

  sliderButtonPrev.addEventListener('click', function () {
    if (currentReviewNumber > 0) {
      reviewsItems[currentReviewNumber].classList.remove('reviews__item--current');
      reviewsItems[currentReviewNumber - 1].classList.add('reviews__item--current');
      currentReviewNumber--;
    } else {
      reviewsItems[currentReviewNumber].classList.remove('reviews__item--current');
      reviewsItems[reviewsItems.length - 1].classList.add('reviews__item--current');
      currentReviewNumber = reviewsItems.length - 1;
    }
  });
  sliderButtonNext.addEventListener('click', function () {
    if (currentReviewNumber < reviewsItems.length - 1) {
      reviewsItems[currentReviewNumber].classList.remove('reviews__item--current');
      reviewsItems[currentReviewNumber + 1].classList.add('reviews__item--current');
      currentReviewNumber++;
    } else {
      reviewsItems[currentReviewNumber].classList.remove('reviews__item--current');
      reviewsItems[0].classList.add('reviews__item--current');
      currentReviewNumber = 0;
    }
  });
};
