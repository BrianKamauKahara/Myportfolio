const initApp = () => {
    const hamburgerBtn = document.getElementById('hb-button')
    const dropdownMenu = document.getElementById('dropdown')

    const toggleMenu = () => {
        hamburgerBtn.classList.toggle('button-anim')
        dropdownMenu.classList.toggle('hidden')
        dropdownMenu.classList.toggle('flex')

    }

    hamburgerBtn.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)