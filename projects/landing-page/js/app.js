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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const ulElement = document.querySelector('#navbar__list');

ulElement.addEventListener('mouseover', mouseOverEvent);
ulElement.addEventListener('mouseout', mouseOutEvent);
ulElement.addEventListener('click', clickEvent);
document.addEventListener("scroll", activeNav);

const sectionOneAnchor = "<li class='nav-link'><a href='' class='section1'>Section 1</a></li>";
const sectionTwoAnchor = "<li class='nav-link'><a href='' class='section2'>Section 2</a></li>";
const sectionThreeAnchor = "<li class='nav-link'><a href='' class='section3'>Section 3</a></li>";
ulElement.insertAdjacentHTML('afterbegin', sectionThreeAnchor);
ulElement.insertAdjacentHTML('afterbegin', sectionTwoAnchor);
ulElement.insertAdjacentHTML('afterbegin', sectionOneAnchor);

//Not using forEach for compatability with different browsers
const navLinks = document.querySelectorAll('.nav-link');
for (let i = 0; i < navLinks.length; i++) {
    let elem = navLinks[i];
    elem.style.padding = '10px';
    elem.firstChild.style.cssText = 'color: #000; text-decoration: none; padding: 10px;';
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
function mouseOverEvent(event) {
    if (event.target.nodeName === 'A') {
        event.target.parentElement.style.backgroundColor = '#000';
        event.target.style.color = '#fff';
    }
}
function mouseOutEvent(event) {
    if (event.target.nodeName === 'A') {
        event.target.parentElement.style.backgroundColor = '#fff';
        event.target.style.color = '#000';
    }
}
function clickEvent(event) {
    if (event.target.nodeName === 'A') {
        event.preventDefault();
        document.getElementById(event.target.className).scrollIntoView({ behavior: 'smooth', block: 'center' });

    }
}
function activeNav(event) {
    console.log("event.target.className", event.srcElement.getAttribute('data-nav'))
}

// Build menu 

// Scroll to section on link click

// Set sections as active


