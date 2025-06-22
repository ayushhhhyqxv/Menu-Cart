const hamburgerIcon = document.querySelector(".hamburger-menu")
const headerContent = document.querySelector(".header-content")
const closeIcon = document.querySelector(".closeIcon")

hamburgerIcon.addEventListener('click',()=>{
    headerContent.classList.add('menu-open')
})

closeIcon.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open')
})