document.addEventListener('DOMContentLoaded', function () {

  fetch("template/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      // --- HAMBURGER ---
      document.addEventListener('click', function (e) {
        if (e.target.closest('#hamburger')) {
          const hamburger = document.getElementById('hamburger');
          const nav = document.querySelector('nav');
          hamburger.classList.toggle('active');
          nav.classList.toggle('open');
        }
        if (!e.target.closest('.dropdown')) {
          const dropdown = document.querySelector('.dropdown');
          if (dropdown) dropdown.classList.remove('open-dropdown');
        }
      });

// --- DROPDOWN MOBILE + DESKTOP CLICK ---
const dropbtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown');
if (dropbtn && dropdown) {
  dropbtn.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      // MOBILE: primo click apre, secondo click va alla pagina
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open-dropdown');
      if (isOpen) {
        window.location = 'servizi.html';
      } else {
        dropdown.classList.add('open-dropdown');
      }
    } else {
      // DESKTOP: click va direttamente alla pagina
      window.location = 'servizi.html';
    }
  });
}

    });

});
