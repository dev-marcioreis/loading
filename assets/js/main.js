// Show and hide navbar menu for tablet and mobile
const openBtn = document.querySelector('.open__btn')
const closeBtn = document.querySelector('.close__btn')
const navbarMenu = document.querySelector('.navbar')

const showNavbarMenu = () => {
    navbarMenu.style.right = '0'
}

openBtn.addEventListener('click', showNavbarMenu)

const hideNavbarMenu = () => {
    navbarMenu.style.right = '-100%'
}

closeBtn.addEventListener('click', hideNavbarMenu)


// Close menu navbar when clicking any option
if(window.innerWidth < 992) {
    document.querySelectorAll('.navabar__list .navbar__item').forEach(navLink => {
        navLink.addEventListener('click', () => {
            hideNavbarMenu()
        })
    })
}


// Change menu navbar color when scrolling
window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolling-header', window.scrollY)
})


// Open menu Register / Login
const openMenuLogin = document.getElementById('openRegister')
const closeMenuLogin = document.getElementById('registerBtn')
const menuLogin = document.querySelector('.register') // used twice

const showMenuLogin = () => {
    menuLogin.style.right = '0'
}

const hideMenuLogin = () => {
    menuLogin.style.right = '-100%'
}

openMenuLogin.addEventListener('click', showMenuLogin)
closeMenuLogin.addEventListener('click', hideMenuLogin)

// Switch from login to signup
const forms = document.querySelector('.forms')
const links = document.querySelectorAll('.link')

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        forms.classList.toggle('show__signup')
    })
})

