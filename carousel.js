let currentIndex = 0;
const track = document.getElementById("carouselTrack");
const slides = track.children;

function moveSlide(step) {
  currentIndex += step;
  if (currentIndex < 0) currentIndex = slides.length - 1;
  if (currentIndex >= slides.length) currentIndex = 0;

  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Optional: Autoplay
setInterval(() => {
  moveSlide(1);
}, 5000); // 5 detik