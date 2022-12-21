import {assign as assignInput} from './input.js';

document.addEventListener('DOMContentLoaded', () => {
    const inputSection = document.querySelector('.cmp-input-section');
    const inputTemplate = document.querySelector('template#tmp-input');

    assignInput(inputSection, inputTemplate);
});