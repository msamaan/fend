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

const ulElement = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// adding event listners to navigation menu 
ulElement.addEventListener('mouseover', mouseOverEvent);
ulElement.addEventListener('mouseout', mouseOutEvent);
ulElement.addEventListener('click', clickEvent);


// adding menu items
let allSections = "";
for (let s = 0; s < sections.length; s++) {
    let currentSection = sections[s];
    let className = currentSection.getAttribute('data-nav').replace(' ', '').toLocaleLowerCase();
    let sectionAnchor = "<li class='nav-link " + className + "-li'><a href='' class='" + className + "'>" + currentSection.getAttribute('data-nav') + "</a></li>";
    allSections += sectionAnchor;
}
ulElement.insertAdjacentHTML('beforeend', allSections);

const navLinks = document.querySelectorAll('.nav-link');
//Not using forEach for compatability with different browsers
for (let i = 0; i < navLinks.length; i++) {
    let elem = navLinks[i];
    console.log("ELEM", elem)
    elem.style.padding = '10px';
    elem.firstChild.style.cssText = 'color: #000; text-decoration: none; padding: 10px;';
}




// Add class 'active' to section when near top of viewport
let options = {
    threshold: 0.7
}

let observer = new IntersectionObserver(callback, options);
sections.forEach((sec) => {
    observer.observe(sec);
})

function callback(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let className = entry.target.getAttribute('data-nav').replace(' ', '').toLowerCase();
            document.querySelector("." + className + "-li").classList.add('active');
            document.querySelector("#" + className).classList.add('your-active-class');
        }
        else {
            let className = entry.target.getAttribute('data-nav').replace(' ', '').toLowerCase();
            document.querySelector("." + className + "-li").classList.remove('active');
            document.querySelector("#" + className).classList.remove('your-active-class');
            document.querySelector(".scroll-top").style.visibility = 'visible';
        }
    })
}


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
/**
 * End Events
 * 
*/


// scroll to top
document.addEventListener('scroll', function (e) {
    if(window.pageYOffset > document.querySelector(".main__hero h1").clientHeight) {
        document.querySelector(".scroll-top").style.visibility = 'visible';
    }
    else {
        document.querySelector(".scroll-top").style.visibility = 'hidden';
    }
});
document.querySelector(".scroll-top").addEventListener('click', scrollTop);
function scrollTop() {
    window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
    });
}