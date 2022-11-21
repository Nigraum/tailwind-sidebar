console.log('Oieeeeeee')
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => {
  navLink.onclick = e => {
    e.target.classList.toogle('open');
  }
})

