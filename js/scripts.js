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

  // 서비스 구상도 자세히 보기 클릭시 구상도 펼쳐지는 기능
  const serveseFlowbtn = document.body.querySelector('.servese-view-btn');
  const serveseFlowclose = document.body.querySelector('.servese-view-close');
  const serveseViewflow = document.body.querySelector('.servese-view-flow');

  serveseFlowbtn.addEventListener('click', () => {
    if (window.getComputedStyle(serveseViewflow).display === 'none') {
      serveseViewflow.style.display = 'block';
      serveseFlowbtn.style.display = 'none';
      serveseViewflow.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  });
  serveseFlowclose.addEventListener('click', () => {
    if (window.getComputedStyle(serveseViewflow).display !== 'none') {
      serveseViewflow.style.display = 'none';
      serveseFlowbtn.style.display = 'block';
      document.body.querySelector('#modeSolution').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  });
});
