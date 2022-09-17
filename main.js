// First of all, import the sw methods from the sw.js file
import {swRun, swInit, swCreateAnchor} from './scroll-wiz/sw.js'

// To create scroll links:
// use the swCreateAnchor method
// first argument is the anchor's element id
// second argument is the vertical scroll value
swCreateAnchor('home-link', 499)
swCreateAnchor('intro-link', 505)

const mainTitle = document.querySelector('.title')
const mainTitleName = document.querySelector('.title-name')
const hero = document.querySelector('.hero')
const section2 = document.querySelector('.section-2')

// Run scroll wiz using swRun method
// takes 1 argument, an array of swInit objects
swRun(
    [
    // Initialize each element using swInit method:
    // first argument it the element's object
    // second argument is the beginning of the scroll range
    // third argument is the end of the scroll range
    // fourth argument is the CSS animation class name (the in-range style class)
    swInit(mainTitle, 5,300,"sw-title"),
    swInit(mainTitleName, 50,400,"sw-name"),
    swInit(hero, 0,500,"sw-hero"),
    swInit(section2, 502, 2800, "sw-section-2")
    ]
)




