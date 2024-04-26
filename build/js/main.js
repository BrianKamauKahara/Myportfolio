const initApp = () => {
    const hamburgerBtn = document.getElementById('hb-button')
    const dropdownMenu = document.getElementById('dropdown')
    const socialBtn = document.getElementById('social-button')
    const socialMenu = document.getElementById('social-menu')

    const toggleMenu = () => {
        hamburgerBtn.classList.toggle('button-anim')
        dropdownMenu.classList.toggle('hidden')
        dropdownMenu.classList.toggle('flex')

    }
    const toggleSocial = () => {
        socialMenu.classList.toggle('flex')
        socialMenu.classList.toggle('hidden')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    socialBtn.addEventListener('click', toggleSocial)
}

document.addEventListener('DOMContentLoaded', initApp)