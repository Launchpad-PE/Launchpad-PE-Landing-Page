export function initCarousel() {
  const track = document.getElementById('proyectoTrack');
  if (!track) return;

  const cards = track.querySelectorAll('.proyecto-card');
  let currentIndex = 0;

  function visibleCount() {
    const w = window.innerWidth;
    if (w >= 1024) return 3;
    if (w >= 640) return 2;
    return 1;
  }

  function getCardWidth() {
    const first = cards[0];
    if (!first) return 0;
    return first.offsetWidth + 24;
  }

  function maxIndex() {
    return Math.max(0, cards.length - visibleCount());
  }

  function updateTrack() {
    const dx = currentIndex * getCardWidth();
    track.style.transform = `translateX(-${dx}px)`;
    track.style.transition = 'transform 0.5s cubic-bezier(.25,.46,.45,.94)';
  }

  document.getElementById('carNext')?.addEventListener('click', () => {
    currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1;
    updateTrack();
  });

  document.getElementById('carPrev')?.addEventListener('click', () => {
    currentIndex = currentIndex <= 0 ? maxIndex() : currentIndex - 1;
    updateTrack();
  });

  window.addEventListener('resize', () => {
    if (currentIndex > maxIndex()) currentIndex = maxIndex();
    updateTrack();
  });

  let interval = setInterval(() => {
    currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1;
    updateTrack();
  }, 3800);

  track.addEventListener('mouseenter', () => clearInterval(interval));
  track.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
      currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1;
      updateTrack();
    }, 3800);
  });
}