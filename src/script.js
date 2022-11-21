let navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(navLink => {
      navLink.onclick = e => {
        event.target.classList.toggle('open')
      }
    })