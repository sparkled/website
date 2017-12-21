'use strict';

(function () {
  document.querySelector('header section > img').onclick = function () {
    document.querySelector('header nav').classList.toggle('nav-visible');
  }
})();
    