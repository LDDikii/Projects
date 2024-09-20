import tabs from './modules/tabs';
import modal, { openModal } from './modules/modal';
import cards from './modules/cards';
import timer from './modules/timer';
import forms from './modules/forms';
import slider from './modules/slider';
import calculator from './modules/calculator';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    cards();
    timer('.timer', '2024-09-24');
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    calculator();

});