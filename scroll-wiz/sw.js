let pageScrollY = window.scrollY

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

function swGoTo(num){
    window.scrollTo(0,num)
}