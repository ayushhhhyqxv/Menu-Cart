const hamburgerIcon = document.querySelector(".hamburger-menu")
const headerContent = document.querySelector(".header-content")
const closeIcon = document.querySelector(".closeIcon")
const moveTop = document.querySelector(".totop")

hamburgerIcon.addEventListener('click',(e)=>{
    
    headerContent.classList.add('menu-open')
})

headerContent.addEventListener('click',(e)=>{
    e.stopPropagation()
})

closeIcon.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open')
})

window.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open')
})

const go_to = document.querySelector('.totop')
const main = document.querySelector('.hide-overflow')

go_to.addEventListener('click',()=>{
    main.scrollTo(0,0)
})