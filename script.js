const opener = document.getElementById('openLetter');
const intro = document.getElementById('intro');
const story = document.getElementById('story');
const letter = document.querySelector('.letter');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
let opened = false;

opener.addEventListener('click', () => {
  if (opened) return;

  opened = true;
  opener.setAttribute('aria-expanded', 'true');
  intro.classList.add('opening');

  window.setTimeout(() => {
    intro.hidden = true;
    story.classList.add('visible');
    story.setAttribute('aria-hidden', 'false');

    requestAnimationFrame(() => {
      story.classList.add('reveal');

      window.setTimeout(() => {
        letter.scrollIntoView({
          behavior: reducedMotion ? 'instant' : 'smooth',
          block: 'start',
        });
      }, reducedMotion ? 0 : 420);
    });
  }, reducedMotion ? 30 : 850);
});