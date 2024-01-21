// slides
let count = 1;

function startSlider() {
    setInterval(nextImage, 3500);
}

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

document.addEventListener("DOMContentLoaded", startSlider);
// fim slides

// menu
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".menu-button");
  
    menuButton.addEventListener("click", () => {
      navbar.classList.toggle("show-menu");
    });
  });
  
