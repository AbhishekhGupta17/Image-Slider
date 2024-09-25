const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelectorAll('.carousel .item');
const totalImages = images.length;
let index = 0;
let intervalId;

// Event listeners for navigation buttons
prev.addEventListener('click', () => {
  nextImage('prev');
  resetInterval(); // Restart the auto-slide on manual navigation
});
next.addEventListener('click', () => {
  nextImage('next');
  resetInterval(); // Restart the auto-slide on manual navigation
});

// Function to move to the next or previous image
function nextImage(direction) {
  images[index].classList.remove('main'); // Hide current image
  if (direction === 'next') {
    index = (index + 1) % totalImages; // Loop back to the first image
  } else {
    index = (index - 1 + totalImages) % totalImages; // Loop back to the last image
  }
  images[index].classList.add('main'); // Show new image
}

// Function to auto-slide every 3 seconds
function startAutoSlide() {
  intervalId = setInterval(() => {
    nextImage('next');
  }, 3000); // 3 seconds
}

// Function to reset the interval on manual clicks
function resetInterval() {
  clearInterval(intervalId);
  startAutoSlide();
}

// Start the auto-slide initially
startAutoSlide();
