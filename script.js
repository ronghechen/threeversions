window.addEventListener("load", () => {
    const loading = document.getElementById("loading-screen");
    const carousel = document.getElementById("carousel");
    const slides = [
      {
        handle: "@ronghe.dev",
        bio: "nu cs alum | software engineer | dark mode enthusiast",
        img: "swe.png",
        captions: [
          "I am majoring in computer science with a software engineering concentration, and have held a software engineering internship at a startup.",
          "However, if this project wasn't any indication, I'm not a fan of algorithmic puzzles and enjoy building the user-facing side of the product, like coding a drop shadow on a button or an eye-catching loading animation."
        ]
      },
      {
        handle: "@ronghe.dxsigns",
        bio: "nu cs + segal design alum | product designer 🎨",
        img: "ux.png",
        captions: [
          "I am pursuing a psychology minor and a design certificate, which allow me to understand user needs and practice innovative design thinking.",
          "I also have UX internship experience, and while I enjoy prototyping and testing out how different components of a design system fits together, I realize that designing without code feels incomplete and doesn't challenge my thirst for problem solving enough."
        ]
      },
      {
        handle: "@ronghe.pm",
        bio: "product & growth specialist 📈",
        img: "pm.png",
        captions: [
          "Product Management is something I have less experience with, but still remains an option, maybe later on in my career as I gain more experience with design or coding.",
          "I enjoy trying and testing out new products and love bridging the gap between design and code, and PMs are like the glue that keeps cross-functional teams together."
        ]
      }
    ];
  
    // DOM Elements
    let index = 0;
    const img = document.getElementById("feed-image");
    const handle = document.getElementById("handle");
    const bio = document.getElementById("bio");
    const captionsList = document.getElementById("captions");
    const leftBtn = document.getElementById("left");
    const rightBtn = document.getElementById("right");
  
    function updateSlide(i) {
      const slide = slides[i];
      img.src = slide.img;
      handle.textContent = slide.handle;
      bio.textContent = slide.bio;
  
      captionsList.innerHTML = "";
      slide.captions.forEach((caption) => {
        const li = document.createElement("li");
        li.textContent = caption;
        captionsList.appendChild(li);
      });
    }
  
    // Arrow Click Handlers
    leftBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      updateSlide(index);
    });
  
    rightBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      updateSlide(index);
    });
  
    // Initial slide render
    updateSlide(index);
  
    // Loading/App Transition
    function startApp() {
      // fade out loading
      loading.style.opacity = 0;
  
      loading.addEventListener(
        "transitionend",
        () => {
          loading.style.display = "none";
        },
        { once: true }
      );
  
      // Show carousel & fade it in
      carousel.classList.remove("hidden");
      requestAnimationFrame(() => {
        carousel.classList.add("show");
      });
    }
  
    // Small delay so the loading screen is visible briefly
    setTimeout(startApp, 800);
  });
  