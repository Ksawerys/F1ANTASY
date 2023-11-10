
(() => {

    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)

    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme()
        if (storedTheme) {
            return storedTheme
        }

        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light'
    }

    const setTheme = theme => {
        if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');

        } else {
            document.documentElement.setAttribute('data-bs-theme', theme);
        }
    }
    setTheme(getPreferredTheme())

    const showActiveTheme = (theme, focus = false) => {
        const themeSwitcher = document.querySelector('#bd-theme')

        if (!themeSwitcher) {
            return
        }

        const themeSwitcherText = document.querySelector('#bd-theme-text')
        const activeThemeIcon = document.querySelector('.theme-icon-active use')
        const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
        const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

        document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
            element.classList.remove('active')
            element.setAttribute('aria-pressed', 'false')
        })

        btnToActive.classList.add('active')
        btnToActive.setAttribute('aria-pressed', 'true')
        activeThemeIcon.setAttribute('href', svgOfActiveBtn)
        const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
        themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

        if (focus) {
            themeSwitcher.focus()
        }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme()
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
            setTheme(getPreferredTheme())
        }
    })

    window.addEventListener('DOMContentLoaded', () => {
        showActiveTheme(getPreferredTheme())

        document.querySelectorAll('[data-bs-theme-value]')
            .forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const theme = toggle.getAttribute('data-bs-theme-value')
                    setStoredTheme(theme)
                    setTheme(theme)
                    showActiveTheme(theme, true)
                })
            })
    })
    window.addEventListener('DOMContentLoaded', () => {
        const lightThemeButton = document.querySelector('[data-bs-theme-value="light"]');
        const darkThemeButton = document.querySelector('[data-bs-theme-value="dark"]');

        showActiveTheme(getPreferredTheme());

        document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const theme = toggle.getAttribute('data-bs-theme-value');
                setStoredTheme(theme);
                setTheme(theme);
                showActiveTheme(theme, true);
            });
        });

        const isLightThemeSelected = lightThemeButton.classList.contains('active');

        const isDarkThemeSelected = darkThemeButton.classList.contains('active');

        if (isLightThemeSelected) {
            adjustNavbarSize()
        } else if (isDarkThemeSelected) {
            readjustNavbarSize()
        } else {
            adjustNavbarSize()
        }
    });
})()




function adjustNavbarSize() {
    const navbar = document.getElementById('container-navbar')
    const links = document.getElementById('links')
    const nav = document.getElementById('nav')
    const icon = document.getElementById('icon')

    links.style.width = '40%'
    navbar.style.position = 'static'
    navbar.style.top = '0'
    navbar.style.width = '100%'
    links.classList.add('col-md-auto')
    icon.style.display = 'none'

}

function readjustNavbarSize() {
    const navbar = document.getElementById('container-navbar')
    const links = document.getElementById('links')
    const nav = document.getElementById('nav')
    const icon = document.getElementById('icon')
    icon.style.display = ''
    navbar.style.position = 'fixed'
    navbar.style.left = '0'
    navbar.style.width = '11%'
    navbar.style.height = '100%'
    nav.style.height = '100%'
    links.style.width = '100%'
    links.classList.remove('col-md-auto')
    icon.classList.remove('navbar-toggler-icon')
    icon.classList.add('btn-close')
    icon.style.position = 'fixed'
    icon.style.marginTop = '1%'
    icon.style.marginLeft = '1%'
    icon.style.position = 'fixed'
    icon.style.position = 'fixed'

}

function abrir() {
    const navbar = document.getElementById('container-navbar')
    const icon = document.getElementById('icon')
    icon.classList.remove('navbar-toggler-icon')
    icon.classList.add('btn-close')
    navbar.style.display = ''
}

function crerrar() {
    const navbar = document.getElementById('container-navbar')
    const icon = document.getElementById('icon')
    icon.classList.remove('btn-close')
    icon.classList.add('navbar-toggler-icon')
    navbar.style.display = 'none'
}


icon.addEventListener('click', function (event) {
    if (icon.classList.contains('navbar-toggler-icon')) {
        abrir();
    } else {
        crerrar();
    }
})

const lightThemeButton = document.querySelector('[data-bs-theme-value="light"]')
const darkThemeButton = document.querySelector('[data-bs-theme-value="dark"]')

lightThemeButton.addEventListener('click', () => {
    const navbar = document.getElementById('container-navbar');
    navbar.style.display = '';
    adjustNavbarSize()
})

darkThemeButton.addEventListener('click', () => {
    readjustNavbarSize()
})
