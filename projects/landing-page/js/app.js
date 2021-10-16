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
const navElement = document.querySelector('#navbar__list');
// navElement.style.cssText = 'position: fixed; width: 100%; margin-top: 20px;';
const sectionOneAnchor = "<li class='nav-link'><a href='#section1'>Section 1</a></li>";
const sectionTwoAnchor = "<li class='nav-link'><a href='#section2'>Section 2</a></li>";
const sectionThreeAnchor = "<li class='nav-link'><a href='#section3'>Section 3</a></li>";
navElement.insertAdjacentHTML('afterbegin', sectionThreeAnchor);
navElement.insertAdjacentHTML('afterbegin', sectionTwoAnchor);
navElement.insertAdjacentHTML('afterbegin', sectionOneAnchor);

//Not using forEach for compatability with different browsers
const navLinks = document.querySelectorAll('.nav-link');
for(let i = 0; i < navLinks.length; i++) {
    let elem = navLinks[i];
    elem.style.padding = '10px';
    elem.firstChild.style.cssText = 'color: #000; text-decoration: none; padding: 10px;';
    elem.addEventListener('mouseenter', function() {
        elem.style.backgroundColor = '#000';
        elem.firstChild.style.color = '#fff';
    })
    elem.addEventListener('mouseleave', function() {
        elem.style.backgroundColor = '#fff';
        elem.firstChild.style.color = '#000';
    })
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


