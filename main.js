const mainTitle = document.getElementById('title')
const mainTitleName = document.getElementById('title-name')
const hero = document.getElementById('hero')


let pageScrollY = window.scrollY
let titleMin = 0
let titleMax = 300

let titleNameMin = 0
let titleNameMax = 600

let heroMin = 0
let heroMax = 600

updateElement(mainTitle, titleMin, titleMax, 'start-title')
updateElement(mainTitleName, titleNameMin, titleNameMax, 'start-name')
updateElement(hero, heroMin, heroMax, 'start-hero')

document.addEventListener('scroll', e =>{
    pageScrollY = window.scrollY
    console.log(pageScrollY)
    window.requestAnimationFrame(()=>{
        updateElement(mainTitle, titleMin, titleMax, 'start-title')
        updateElement(mainTitleName, titleNameMin, titleNameMax, 'start-name')
        updateElement(hero, heroMin, heroMax, 'start-hero')
       
    })
})

function updateElement(element, min, max,startClass){
    if (min <= pageScrollY){
        element.classList.add(startClass)
    } 
    else{
        element.classList.remove(startClass)
    }

    if (max <= pageScrollY){
        element.classList.remove(startClass)
    }
}