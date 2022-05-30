'use strict';

window.addEventListener(`DOMContentLoaded`, () => {

  function playSound() {
    window.addEventListener(`keydown`, e => {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
        key = document.querySelector(`.key[data-key="${e.keyCode}"]`),
        keys = document.querySelectorAll(`.key`);

      if (!audio) return; // if we won't find any audio associated with allowed keycodes written as data-attributes on HTML, this function is about to stop running.
      audio.currentTime = 0; // without that we can't start playing a sound whenever we want. So we need to rewind the sound to the start any time when we hit the button.
      audio.play(); // allows to play media.

      key.classList.add(`playing`);

      function removeTransition(e) {
        if (e.propertyName !== `transform`) return;
        this.classList.remove(`playing`);
      }

      keys.forEach(key => key.addEventListener(`transitionend`, removeTransition));
    });
  }

  playSound();

});