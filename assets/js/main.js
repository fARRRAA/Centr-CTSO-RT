'use strict';
const titles = document.querySelectorAll('.sidebar_title');
const contents = document.querySelectorAll('.sidebar_content');
const tim = document.querySelector('.tim');
const isup = document.querySelector('.isup');
const footerLinks = document.querySelectorAll('.footer_nav-link');
titles[0].classList.add('active');
contents[0].classList.add('active');

titles.forEach(title => {
    title.addEventListener('click', () => {
        for (let elem of contents) {
            elem.classList.remove('active');
        }
        for (let title of titles) {
            title.classList.remove('active');
        }
        const content = document.querySelector('#' + title.dataset.tab);
        if (content != null) {
            content.classList.add('active');


        } else {
            contents[0].classList.add('active');
            title.classList.remove('active');


        }
        title.classList.add('active');

    });
})

const accTitles = document.querySelectorAll('.accordion__title');
const accContents = document.querySelectorAll('.accordion__content');

accTitles.forEach(item => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.acc);

    if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.maxHeight = 0;
    } else {
        accContents.forEach(element => {
            element.classList.remove('active');
            element.style.maxHeight = 0;
        });

        accTitles.forEach(element => element.classList.remove('active'));

        item.classList.add('active');
        activeContent.classList.add('active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
}))