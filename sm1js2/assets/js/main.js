const programs = document.querySelector('.programs')
const menuList = document.querySelector('.menuList')

programs.addEventListener('click', () => {
    menuList.classList.toggle('show')
})