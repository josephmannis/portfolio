function showNav() {
    document.getElementById('nav-menu').style.display = 'initial'
}

function hideNav() {
    document.getElementById('nav-menu').style.display = 'none'
}

document.addEventListener('click', function (event) {
    if (event.target.id == 'nav-toggle') {
        showNav()
    }

    if (event.target.id == 'nav-close') {
        hideNav()
    }
}, false);

window.onhashchange = function () {
    hideNav()
}