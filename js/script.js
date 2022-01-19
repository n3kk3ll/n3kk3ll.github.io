const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElement = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay'),
    sidepanelTitle = document.querySelector('.sidepanel__social-title span'),
    sidepanelLink = document.querySelectorAll('.sidepanel a svg path'),
    sidepanelDivider = document.querySelector('.sidepanel__divider'),
    scrollUpBtn = document.querySelector('.pageup');

function addStyleToSidepanel() {
    sidepanelTitle.style.color = '#000';
    sidepanelDivider.style.backgroundColor = '#000';
    sidepanelLink.forEach((item) => {
        item.style.fill = '#000';
    });
}

function removeStyleFromSidepanel() {
    sidepanelTitle.style.color = '';
    sidepanelDivider.style.backgroundColor = '';
    sidepanelLink.forEach( (item) => {
        item.style.fill = '';
    });
}

function showScrollUpBtn () {
    scrollUpBtn.style.visibility = 'visible';
    scrollUpBtn.style.opacity = 1;
}

function hideScrollUpBtn () {
    scrollUpBtn.style.visibility = 'hidden';
    scrollUpBtn.style.opacity = 0;
    scrollUpBtn.style.transition = "all .5s ease";
}

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElement.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

window.addEventListener('scroll', () => {
    if (scrollY >= 300) {
        addStyleToSidepanel();
        showScrollUpBtn();
    } else if (scrollY <= 300) {
        removeStyleFromSidepanel();
        hideScrollUpBtn();
    }
});