const tabs = document.querySelectorAll('.tabcontent')
const  tabItems= document.querySelectorAll('.tabheader__item')


const hideContent=()=>{
    tabs.forEach((item)=>{
        item.style.display ='none'
    })
    tabItems.forEach((item)=>{
        item.classList.remove('tabheader__item_active')
    })
}

const showContent=(i=0)=>{
    tabItems[i].classList.add('tabheader__item_active')
    tabs[i].style.display ='block'
}
hideContent()
showContent()
document.querySelector('.tabheader__items').addEventListener('click',(e)=>{
    if(e.target.classList.contains('tabheader__item')){
        tabItems.forEach((item,i)=>{
          if(e.target===item){
            hideContent()
            showContent(i)
          }
        })
    }
})
let index = 0
setInterval(()=>{
    if(index<3){
        index++
        hideContent()
        showContent(index)
    }else{
        index=0
        hideContent()
        showContent(index)
    }

},1000)



//modal

const btnOpen = document.querySelector('.btn_white')
const modal= document.querySelector('.modal')
let checkOne = 0

function openModal(){
    checkOne++
    modal.classList.add('show')
    document.body.style.overflow ='hidden'
}
btnOpen.addEventListener('click',openModal)

function closeModal(){
    modal.classList.remove('show')
    document.body.style.overflow ='auto'
}

modal.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target.classList.contains('modal') || e.target.classList.contains('modal__close')){
        closeModal()
    }
})

window.addEventListener('scroll', () => {
    // const bottom = scrollTop + pageYoffset
    const documentHeight = document.documentElement.scrollHeight;
    const currentHeight = window.pageYOffset + document.documentElement.clientHeight;
    const isScrollEnd = Math.abs(documentHeight - currentHeight) < 15;
    if(isScrollEnd && checkOne===0){
        openModal()
    }
}
)