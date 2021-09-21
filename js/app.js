/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const sectionsAll = Array.from(document.querySelectorAll('section'));
const uList = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function sectionsList() {
  for (section of sectionsAll) {
    // to use the sections names in the sections list
     sectionName = section.getAttribute('data-nav');
     sectionLink = section.getAttribute('id');
    // create the list
     finaList = document.createElement('li');
     finaList.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;
    // adding the list to the ul
    uList.appendChild(finaList)
  }
}
// which section in viewport
function inViewPort (elem) {
   let sectionInViewPort = elem.getBoundingClientRect();
   return (sectionInViewPort.top >= 0)
}
 //style for section in Viewport
function activeSection() {
  for (section of sectionsAll) {
      if (inViewPort(section)) {
        if (!section.classList.contains('your-active-class')) {
          section.classList.add('your-active-class');
        }
      } else {
        section.classList.remove('your-active-class')
      }
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// Build menu

sectionsList();

// Scroll to section on link click

document.addEventListener('scroll', activeSection)
