// tabs js
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector(".tabs");
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    root: null,
    rootMargin: "100px", // Adjust this margin based on your layout
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        tabs.classList.add("hidden"); // Hide tabs when not intersecting
      } else {
        tabs.classList.remove("hidden"); // Show tabs when intersecting
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// js for slider
/**
  Swiper:
  https://swiperjs.com/
**/
const swiper = new Swiper(".swiperCarousel", {
  slidesPerView: 1, // Initially show 1 slide per view on mobile
  centeredSlides: true,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 2, // Show 2 slides per view on tablets (768px and up)
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3, // Show 3 slides per view on laptops and larger screens (1024px and up)
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const slides = document.getElementsByClassName("swiper-slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    const { className } = slide;
    if (className.includes("swiper-slide-next")) {
      swiper.slideNext();
    } else if (className.includes("swiper-slide-prev")) {
      swiper.slidePrev();
    }
  });
}

// function resizeTextToFit() {
//   const quoteEls = document.getElementsByClassName("quote");
//   for (const el of quoteEls) {
//     el.style.width = el.offsetWidth;
//     el.style.height = el.offsetHeight;
//   }
//   textFit(quoteEls, { maxFontSize: 14 });
// }

// resizeTextToFit();

// addEventListener("resize", (event) => {
//   resizeTextToFit();
// });






// main page js for tabs 

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const faqItems = document.querySelectorAll(".faq-item");

  // Function to show FAQ items of the active tab and hide others
  const updateFAQDisplay = (activeTab) => {
    faqItems.forEach((item) => {
      item.style.display = item.getAttribute("data-tab-content") === activeTab ? "block" : "none";
    });
  };

  // Initial state: Show only the FAQ items of the active tab
  const activeTab = document.querySelector(".tab-button.active").getAttribute("data-tab");
  updateFAQDisplay(activeTab);

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const tab = button.getAttribute("data-tab");
      updateFAQDisplay(tab);
    });
  });

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = answer.classList.contains("open");
      document.querySelectorAll(".faq-answer").forEach((ans) => {
        ans.classList.remove("open");
        // Reset the icons for all answers
        ans.previousElementSibling.querySelector("span:last-child").textContent = "+";
      });
      if (!isOpen) {
        answer.classList.add("open");
        question.querySelector("span:last-child").textContent = "−"; // Open icon
      } else {
        question.querySelector("span:last-child").textContent = "+"; // Close icon
      }
    });
  });
});




// swiper for main page

 //Initialize Swiper 
 document.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.querySelector("swiper-container");
  
  // Check if swiper-container exists before assigning properties
  if (swiperEl) {
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true, // Use 'loop' instead of 'Infinite' for Swiper.js
      pagination: {
        clickable: true,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  } else {
    console.error("swiper-container element not found");
  }
});


  // swiperEl.initialize();


 //swiperE2 










// Wrap every letter in a span
// Wrap every letter in a span
// Wrap each letter in a span
// Ensure 'Best Prices!' is wrapped correctly
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

// Create the animation timeline
anime.timeline({loop: true})
  .add({
    targets: '.ml6 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml6 .line',
    translateX: [0, document.querySelector('.ml6 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  })
  .add({
    targets: '.ml6 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  })
  .add({
    targets: '.ml6 .letters',  // Only fade out the letters, not the whole h1
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


// js for tabs 
  
    // JavaScript to handle icon (tab) clicks
    document.querySelectorAll('.icons-outer-wrapper').forEach(iconWrapper => {
      iconWrapper.addEventListener('click', function () {
        // Remove active class from all icons
        document.querySelectorAll('.icons-outer-wrapper').forEach(wrapper => wrapper.classList.remove('active'));
    
        // Add active class to the clicked icon's wrapper
        this.classList.add('active');
    
        // Update registration placeholder based on clicked icon
        const type = this.querySelector('.icons-bg').getAttribute('data-type'); // Get the data-type attribute from the child element
        const registrationInput = document.getElementById('registrationInput');
    
        // Update the placeholder based on the selected icon
        switch (type) {
          case 'bike':
            registrationInput.placeholder = 'E.g. BIKE1234';
            break;
          case 'car':
            registrationInput.placeholder = 'E.g. CAR1234';
            break;
          case 'health':
            registrationInput.placeholder = 'E.g. HEALTH1234';
            break;
          case 'commercial':
            registrationInput.placeholder = 'E.g. COMM1234';
            break;
          case 'travel':
            registrationInput.placeholder = 'E.g. TRAVEL1234';
            break;
          default:
            registrationInput.placeholder = 'E.g. KGU85559YS';
        }
      });
    });
    

  
  // js for modal
  
  // Get elements
const moreIcon = document.getElementById('moreIcon');
const popupModal = document.getElementById('popupModal');
const closeButton = document.querySelector('.close-btn');

// Function to open the popup
function openPopup() {
  popupModal.style.display = 'block';
  document.body.classList.add('modal-open'); // Disable scrolling
}

// Function to close the popup
function closePopup() {
  popupModal.style.display = 'none';
  document.body.classList.remove('modal-open'); // Enable scrolling
}

// Event listener for "More" icon click
moreIcon.addEventListener('click', openPopup);

// Event listener for close button
closeButton.addEventListener('click', closePopup);

// Close the modal when clicking outside of it
window.addEventListener('click', function (event) {
  if (event.target === popupModal) {
    closePopup();
  }
});

// Event listener for icons inside the popup modal
document.querySelectorAll('.more-options-icons .icons-outer-wrapper').forEach(iconWrapper => {
  iconWrapper.addEventListener('click', function () {
    // Remove active class from all modal icons
    document.querySelectorAll('.more-options-icons .icons-outer-wrapper').forEach(wrapper => wrapper.classList.remove('active'));

    // Add active class to the clicked icon
    this.classList.add('active');

    // Get the type of insurance from clicked icon
    const type = this.querySelector('.icons-bg').getAttribute('data-type');
    const registrationInput = document.getElementById('registrationInput');

    // Update the placeholder based on the selected option
    switch (type) {
      case 'family':
        registrationInput.placeholder = 'E.g. FAMILY1234';
        break;
      case 'home':
        registrationInput.placeholder = 'E.g. HOME1234';
        break;
      case 'pet':
        registrationInput.placeholder = 'E.g. PET1234';
        break;
      case 'term':
        registrationInput.placeholder = 'E.g. TERM1234';
        break;
      default:
        registrationInput.placeholder = 'E.g. KGU85559YS';
    }

    // Close the modal automatically after selection
    closePopup();
  });
});




// testimonial 2nd slider
    const swiperE2 = new Swiper(".mySwiper2", {
      slidesPerView: "auto",
      spaceBetween: 0,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
      },
      breakpoints: {

        750: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    swiperE2.on("init", function () {
      swiperE2.slideToLoop(1); // Ensure the second slide is centered on init
    });

    // swiperE2.initialize();




  