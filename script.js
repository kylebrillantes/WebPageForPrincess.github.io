document.addEventListener("DOMContentLoaded", function() {
  const galleryBtn = document.getElementById("galleryBtn");
  const galleryModal = document.getElementById("galleryModal");
  const closeModal = document.querySelector(".close");
  const nextButton = document.querySelector('.next-button');
  const galleryContent = document.querySelector('.gallery-image');
  const imageUrls = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',

  ];
  let currentIndex = 0;

  galleryBtn.addEventListener("click", function() {
    galleryModal.style.display = "block";
    document.body.style.overflow = "hidden";
    loadGalleryImages();
  });

  closeModal.addEventListener("click", function() {
    galleryModal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  function loadGalleryImages() {
    galleryContent.src = imageUrls[currentIndex];
    galleryContent.classList.remove('flip'); // Remove flip class
  }

  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    galleryContent.classList.add('flip'); // Add flip class
    setTimeout(loadGalleryImages, 500); // Delay image change after flip animation
  });
});






document.addEventListener("DOMContentLoaded", function() {
  const modals = document.querySelectorAll(".modal");
  const nextButtons = document.querySelectorAll(".nextBtn");
  const totalModals = modals.length;
  let currentModalIndex = 0;
  let authenticationCompleted = false;

  function showModal(index) {
    modals[index].style.display = "block";
  }

  function hideModal(index) {
    modals[index].style.display = "none";
  }

  function authenticate(index) {
    if (!authenticationCompleted && index < totalModals - 1) {
      hideModal(index);
      currentModalIndex++;
      showModal(currentModalIndex);
    } else {
      hideModal(index);
      console.log("Authentication completed.");
      authenticationCompleted = true;
      // Add any post-authentication actions here, if needed
    }
  }

  nextButtons.forEach((button, index) => {
    button.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default behavior of the button
      authenticate(index);
    });
  });

  // Show the first authentication modal initially
  showModal(currentModalIndex);
});










document.addEventListener("DOMContentLoaded", function() {
  const backgroundMusic = document.getElementById("backgroundMusic");
  const playButton = document.getElementById("playButton");

  function playBackgroundMusic() {
    backgroundMusic.play();
    playButton.style.display = "none"; // Hide the play button once music starts
  }

  playButton.addEventListener("click", function() {
    playBackgroundMusic();
  });
});










document.addEventListener("DOMContentLoaded", function() {
  const aboutDescription = document.getElementById("aboutDescription");
  const aboutText = "       Hello Steph Good Morning i Created this website cause im bored and i can't sleep hope you like i know its not good looking enough im just learning how to build websites thats why hahahaha para di ka na mang away bleee"; // Replace with your text

  aboutDescription.innerHTML = aboutText.split('').map(
    (char, idx) => `<span style="animation-delay: ${idx * 0.1}s">${char}</span>`
  ).join('');
});
