/*!
 * Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener('DOMContentLoaded', (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };

  var arrowgoTop = function () {
    const arrowgoTopCollapsible = document.body.querySelector('.arrow-box');
    if (!arrowgoTopCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      arrowgoTopCollapsible.classList.remove('show');
    } else if (window.scrollY > 500) {
      arrowgoTopCollapsible.classList.add('show');
    }
  };

  // Shrink the navbar
  navbarShrink();
  arrowgoTop();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);
  document.addEventListener('scroll', arrowgoTop);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});
