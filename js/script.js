let index = 1;

const moveTo = e => {
    showSlide(index = e)
}

const changeSlide = e => {
    showSlide(index += e)
}

const showSlide = e => {

    const images = document.querySelectorAll('img');
    const indicators = document.querySelectorAll('.slider-indicators span');
    const contents = document.querySelectorAll('.slider-content h3');

    (e > images.length) ? (index = 1) : null;
    (e < 1) ? (index = images.length) : null;

    for (let image of images) {
        image.style.opacity = '0';
    }

    for (let indicator of indicators) {
        indicator.style.width = '8px';
        indicator.style.background = '#ffffffaf';
    }

    for (let content of contents) {
        content.style.scale = '0';
        content.style.opacity = '0';
        content.style.transitionDelay = '.2s';
    }

    images[index - 1].style.opacity = '1';
    indicators[index - 1].style.width = '26px';
    indicators[index - 1].style.background = '#fff';
    contents[index - 1].style.scale = '1';
    contents[index - 1].style.opacity = '1';

}

showSlide();
