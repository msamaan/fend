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
const sections = document.querySelectorAll('section');

ulElement.addEventListener('mouseover', mouseOverEvent);
ulElement.addEventListener('mouseout', mouseOutEvent);
ulElement.addEventListener('click', clickEvent);
// document.addEventListener("scroll", activeNav);

let allSections = "";
for (let s = 0; s < sections.length; s++) {
    let currentSection = sections[s];
    let className = currentSection.getAttribute('data-nav').replace(' ', '').toLocaleLowerCase();
    let sectionAnchor = "<li class='nav-link " + className + "-li'><a href='' class='" + className + "'>" + currentSection.getAttribute('data-nav') + "</a></li>";
    allSections += sectionAnchor;
    // ulElement.insertAdjacentHTML('beforeend', sectionAnchor);
}
ulElement.insertAdjacentHTML('beforeend', allSections);

// const sectionOneAnchor = "<li class='nav-link'><a href='' class='section1'>Section 1</a></li>";
// const sectionTwoAnchor = "<li class='nav-link'><a href='' class='section2'>Section 2</a></li>";
// const sectionThreeAnchor = "<li class='nav-link'><a href='' class='section3'>Section 3</a></li>";
// ulElement.insertAdjacentHTML('afterbegin', sectionThreeAnchor);
// ulElement.insertAdjacentHTML('afterbegin', sectionTwoAnchor);
// ulElement.insertAdjacentHTML('afterbegin', sectionOneAnchor);

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
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }
    if (event.target.nodeName === 'A') {
        event.preventDefault();
        event.target.parentElement.classList.add('active');
        document.getElementById(event.target.className).scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Build menu 

// Scroll to section on link click

// Set sections as active

// function activeNav() {
//     for (let s = 0; s < sections.length; s++) {
//         let currentSection = sections[s];
//         for (var i = 0; i < navLinks.length; i++) {
//             navLinks[i].classList.add('active');
//         }
//         console.log("currentSection.getBoundingClientRect().y", currentSection.getBoundingClientRect().y)
//         if (currentSection.getBoundingClientRect().y <= 0) {
//             document.querySelector("." + currentSection.getAttribute('id') + "-li").classList.add('active');
//         }
//     }
// }
let options = {
    // root: document.querySelector('body')
    // root: null,
    // rootMargin: '0px',
    threshold: 0.5
}

let observer = new IntersectionObserver(callback, options);
sections.forEach((sec) => {
    observer.observe(sec);
})

function callback(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // alert(entry.target.getAttribute('data-nav'))
            let className = entry.target.getAttribute('data-nav').replace(' ', '').toLowerCase();
            document.querySelector("." + className + "-li").classList.add('active');
        }
        else {
            let className = entry.target.getAttribute('data-nav').replace(' ', '').toLowerCase();
            document.querySelector("." + className + "-li").classList.remove('active');
        }
    })
}



// classList.contains classList.add classList.remove