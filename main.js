const mainTitle = document.querySelector('.title')
const mainTitleName = document.querySelector('.title-name')
const hero = document.querySelector('.hero')
const section2 = document.querySelector('.section-2')

swRun(
    [
    swInit(mainTitle, 5,300,"start-title"),
    swInit(mainTitleName, 50,400,"start-name"),
    swInit(hero, 0,500,"start-hero"),
    swInit(section2, 502, 2000, "start-section-2")
    ]
)