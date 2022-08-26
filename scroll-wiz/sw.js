let pageScrollY = window.scrollY

function swInit(el, min, max, cls){
    return {el, min, max, cls}
    
}

function swRun(arr){

    updateElements(arr)

    document.addEventListener('scroll', e =>{
        pageScrollY = window.scrollY
        console.log(pageScrollY) // Debugging
        updateElements(arr)
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

function swCreateAnchor(id, scrollValue){
    document.getElementById(id).addEventListener('click', ()=> window.scrollTo(0, scrollValue))
}

export {swInit, swRun, swCreateAnchor}