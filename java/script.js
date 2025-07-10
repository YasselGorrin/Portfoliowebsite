// JavaScript code for the carousel
document.addEventListener("DOMContentLoaded", function () {
    const imagesContainer = document.querySelector(".carousel-images");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    let index = 0; // Current slide index
    let autoScroll; // Variable to store the interval ID
  
    // Function to update the carousel position
    function updateCarousel() {
      const width = carouselItems[0].clientWidth; // Get the width of a single carousel item
      imagesContainer.style.transform = `translateX(${-index * width}px)`; // Move the carousel
  
      // Remove the 'active' class from all carousel items
      carouselItems.forEach((item) => item.classList.remove("active"));
  
      // Add the 'active' class to the current carousel item
      carouselItems[index].classList.add("active");
    }
  
    // Function to move to the next slide
    function moveToNextSlide() {
      index = (index + 1) % carouselItems.length; // Loop back to the first slide
      updateCarousel();
    }
  
    // Function to move to the previous slide
    function moveToPrevSlide() {
      index = (index - 1 + carouselItems.length) % carouselItems.length; // Loop back to the last slide
      updateCarousel();
    }
  
    // Function to start auto-scrolling
    function startAutoScroll() {
      autoScroll = setInterval(moveToNextSlide, 7000); // Set interval to 7 seconds
    }
  
    // Function to stop auto-scrolling
    function stopAutoScroll() {
      clearInterval(autoScroll); // Clear the interval
    }
  
    // Event listeners for manual navigation
    if (prevBtn && nextBtn) {
      nextBtn.addEventListener("click", function () {
        stopAutoScroll(); // Stop auto-scrolling when manually navigating
        moveToNextSlide();
        startAutoScroll(); // Restart auto-scrolling
      });
  
      prevBtn.addEventListener("click", function () {
        stopAutoScroll(); // Stop auto-scrolling when manually navigating
        moveToPrevSlide();
        startAutoScroll(); // Restart auto-scrolling
      });
    } else {
      console.error("Navigation buttons not found in the DOM.");
    }
  
    // Pause auto-scrolling on hover
    if (imagesContainer) {
      imagesContainer.addEventListener("mouseenter", stopAutoScroll);
      imagesContainer.addEventListener("mouseleave", startAutoScroll);
    } else {
      console.error("Carousel container not found in the DOM.");
    }
  
    // Update carousel on window resize
    window.addEventListener("resize", updateCarousel);
  
    // Initialize the carousel and start auto-scrolling
    updateCarousel();
    startAutoScroll();
  });

// Javascript code for Navbar

// JavaScript code for the hamburger menu
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Check if hamburger exists before adding the event listener
    if (hamburger) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Hamburger menu not found in the DOM.");
    }
});
// JavaScript code for Navbar
  document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById("navbar");

    // Fetch the navbar.html file and insert it into the #navbar div
    fetch("navbar.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to load navbar.html");
            }
            return response.text();
        })
        .then((html) => {
            navbarContainer.innerHTML = html;

            // Reinitialize any JavaScript functionality for the navbar (e.g., hamburger menu)
            const hamburger = document.getElementById("hamburger");
            const navLinks = document.getElementById("nav-links");

            if (hamburger) {
                hamburger.addEventListener("click", function () {
                    navLinks.classList.toggle("active");
                });
            } else {
                console.error("Hamburger menu not found in the dynamically loaded navbar.");
            }
        })
        .catch((error) => {
            console.error("Error loading navbar:", error);
        });
});
// JavaScript code for Navbar hide on scroll
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  let lastScrollY = window.scrollY; // Track the last scroll position

  if (!navbar) {
      console.error("Navbar element not found in the DOM.");
      return;
  }

  window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.offsetHeight;

      // Always show the navbar when at the top of the page
      if (currentScrollY === 0) {
          navbar.classList.remove("hidden");
          return; // Exit early to avoid further checks
      }

      // Always hide the navbar when at the bottom of the page
      if (currentScrollY + windowHeight >= documentHeight) {
          navbar.classList.add("hidden");
          return; // Exit early to avoid further checks
      }

      // Check if scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
          navbar.classList.add("hidden"); // Hide navbar
      } 
      // Check if scrolling up
      else if (currentScrollY < lastScrollY) {
          navbar.classList.remove("hidden"); // Show navbar
      }

      lastScrollY = currentScrollY; // Update the last scroll position
  });
});

    // JavaScript code for Porfolio Tabs

// JavaScript code for Tabs
  const tabButtons = document.querySelectorAll('.main-tabs button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active from all
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(tab => tab.classList.remove('active'));

      // Add active to clicked
      button.classList.add('active');
      const target = button.getAttribute('data-tab');
      document.getElementById(target).classList.add('active');
    });
  });

// JavaScript code for the grid image display
  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-content");
    const links = document.querySelectorAll(".grid a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior

            // Get the image URL from the data-image attribute
            const imageUrl = link.getAttribute("data-image");

            // Find the closest work-display container and update the image
            const workDisplay = link.closest(".tab-content").querySelector(".work-display img");
            workDisplay.src = imageUrl;
        });
    });
  });
// JavaScript code for the Logos tab image display
  document.addEventListener("DOMContentLoaded", () => {
    const logoLinks = document.querySelectorAll("#logos .grid a"); // Select all links in the "Logos" tab
    const workDisplay = document.getElementById("work-display"); // Select the work display container

    logoLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior

            // Get the images from the data-images attribute
            const images = link.getAttribute("data-images").split(",");

            // Clear the current work display
            workDisplay.innerHTML = "";

            // Add each image to the work display
            images.forEach(imageUrl => {
                const img = document.createElement("img");
                img.src = imageUrl;
                img.alt = "Selected Work";
                img.style.margin = "10px"; // Optional: Add spacing between images
                img.style.maxWidth = "200px"; // Optional: Set a max width for images
                workDisplay.appendChild(img);
            });
        });
    });
});
// Select all buttons in the "Logo Projects" section
const logoButtons = document.querySelectorAll('#logos .grid a');

// Select the container where images are displayed
const logoWorkDisplay = document.querySelector('.logo-work-display');

// Add click event listeners to each button
logoButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the data-images attribute of the clicked button
        const images = this.getAttribute('data-images').split(',');

        // Clear the current images in the display
        logoWorkDisplay.innerHTML = '';

        // Add new images to the display
        images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = 'Selected Work';
            img.id = 'work-image';
            logoWorkDisplay.appendChild(img);
        });
    });
});

// JavaScript code for project display in Layout tab
document.addEventListener("DOMContentLoaded", () => {
    const projectLinks = document.querySelectorAll("#Layout .grid a");
    const projectContainers = document.querySelectorAll(".project-container");

    projectLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetProject = link.getAttribute("data-project");

            projectContainers.forEach(container => {
                container.style.display = "none";
            });

            const targetContainer = document.getElementById(targetProject);
            if (targetContainer) {
                targetContainer.style.display = "block";
            }
        });
    });
});
// JavaScript code for project container display
document.querySelectorAll('.grid a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default link behavior

      // Get the target project ID from the data attribute
      const targetId = this.getAttribute('data-project');

      // Hide all project containers
      document.querySelectorAll('.project-container').forEach(container => {
          container.classList.remove('active');
      });

      // Show the selected project container
      const targetContainer = document.getElementById(targetId);
      if (targetContainer) {
          targetContainer.classList.add('active');
      }
  });
});
// JavaScript code for project display in Web tab
document.addEventListener("DOMContentLoaded", () => {
  const webProjectLinks = document.querySelectorAll("#web .grid a"); // Select links in the "Web" tab
  const webProjectContainers = document.querySelectorAll("#web .project-container"); // Select containers in the "Web" tab

  webProjectLinks.forEach(link => {
      link.addEventListener("click", (e) => {
          e.preventDefault();

          const targetProject = link.getAttribute("data-project");

          // Hide all project containers in the "Web" tab
          webProjectContainers.forEach(container => {
              container.style.display = "none";
          });

          // Show the selected project container
          const targetContainer = document.getElementById(targetProject);
          if (targetContainer) {
              targetContainer.style.display = "block";
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Get the modal elements
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  // Add click event to all images in the portfolio-nav
  const images = document.querySelectorAll("#portfolio-nav img");
  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src; // Set the modal image source
      captionText.textContent = img.alt; // Set the caption text
    });
  });

  // Close the modal when the close button is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close the modal when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});