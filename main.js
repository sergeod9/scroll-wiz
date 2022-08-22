const mainTitle = document.querySelector('.title')
const mainTitleName = document.querySelector('.title-name')
const hero = document.querySelector('.hero')
const section2 = document.querySelector('.section-2')

swRun(
    [
    swInit(mainTitle, 0,300,"start-title"),
    swInit(mainTitleName, 0,600,"start-name"),
    swInit(hero, 0,600,"start-hero"),
    swInit(section2, 602, 2000, "start-section-2")
    ]
)