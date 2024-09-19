window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs');
    const modal = require('./modules/modal');
    const cards = require('./modules/cards');
    const timer = require('./modules/timer');
    const forms = require('./modules/forms');
    const slider = require('./modules/slider');
    const calculator = require('./modules/calculator');

    tabs();
    modal();
    cards();
    timer();
    forms();
    slider();
    calculator();

});