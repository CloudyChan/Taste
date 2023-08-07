// Links
let contactLink = "https://docs.google.com/forms/d/e/1FAIpQLSexRbpw3hIfdaCZe9JWMjwSAq0QHHC_CXV7GJ9_PchbVAahUA/viewform?usp=sf_link"
// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})

function openContactForm() {
    window.open(contactLink);
}

// Cookies
const cookieBox = document.querySelector(".cookies"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  // if cookie contains Taste it will be returned and below of this code will not run
  if (document.cookie.includes("Taste")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      // if button has acceptBtn id
      if (button.id == "acceptBtn") {
        // set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= Taste; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

// executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);

window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
});
