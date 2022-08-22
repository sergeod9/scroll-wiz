const mainTitle = document.getElementById('title')
const mainTitleName = document.getElementById('title-name')
const hero = document.getElementById('hero')

let pageScrollY = window.scrollY



swRun(
    [
    swInit(mainTitle, 0,300,"start-title"),
    swInit(mainTitleName, 0,600,"start-name"),
    swInit(hero, 0,600,"start-hero")
    ]
)



function swInit(el, min, max, cls){
    return {el, min, max, cls}
    
}

function swRun(arr){

    updateElements(arr)

    document.addEventListener('scroll', e =>{
        pageScrollY = window.scrollY
        console.log(pageScrollY)
        window.requestAnimationFrame(()=>{
            updateElements(arr)
        })
    })

    function updateElements(arr){
        for (let item of arr){
            if (item.min <= pageScrollY){
                item.el.classList.add(item.cls)
            } 
            else{
                item.el.classList.remove(item.cls)
            }
        
            if (item.max <= pageScrollY){
                item.el.classList.remove(item.cls)
            }
        }
    }  
}
// updateElements(arr)

// document.addEventListener('scroll', e =>{
//     pageScrollY = window.scrollY
//     console.log(pageScrollY)
//     window.requestAnimationFrame(()=>{
//         updateElements(arr)
//     })
// })

// function updateElements(arr){
//     for (let item of arr){
//         if (item.min <= pageScrollY){
//             item.el.classList.add(item.cls)
//         } 
//         else{
//             item.el.classList.remove(item.cls)
//         }
    
//         if (item.max <= pageScrollY){
//             item.el.classList.remove(item.cls)
//         }
//     }
// }