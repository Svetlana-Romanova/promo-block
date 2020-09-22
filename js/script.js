"use strict";

let wrappers = document.querySelectorAll('.feed__wrapper');
let buyLinks = document.querySelectorAll('.feed__link');

function chooseFeed(item) {
  item.forEach((elem, i) => {
      elem.addEventListener('click', (event) => {
        event.preventDefault();
        if (!elem.classList.contains('feed__wrapper--unavailable')) {
          wrappers[i].classList.toggle('active');
        }
      });
  });
}

chooseFeed(wrappers);
chooseFeed(buyLinks);




