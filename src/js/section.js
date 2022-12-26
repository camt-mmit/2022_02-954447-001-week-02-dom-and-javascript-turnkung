import { assign as assignInput } from "./input.js";

function add(sectionsContainer, sectionTemplate, inputTemplate) {
    const fragment = sectionTemplate.content.cloneNode(true);
    const inputSection = fragment.querySelector('.cmp-input-section');

    sectionsContainer.append(fragment);

    rebuildSectionIndex(sectionsContainer);
    assignInput(inputSection, inputTemplate);
}

function remove(sectionsContainer, inputSection) {
    inputSection.remove();

    rebuildSectionIndex(sectionsContainer);
}

function rebuildSectionIndex(sectionsContainer) {
    const inputSections = [...document.querySelectorAll('.cmp-input-section'), ];

    inputSections.forEach((elem, i) => {
        [...elem.querySelectorAll('.cmp-section-no')].forEach((elem) => {
            elem.innerText = i + 1;
        });
    });

    [...sectionsContainer.querySelectorAll('.cmp-remove-section')].forEach((elem) => {
        elem.disabled = !(inputSections.length > 1);
    });
}

export function assign(container, sectionTemplate, inputTemplate) {
    const sectionsContainer = container.querySelector('.cmp-sections-container');
    container.addEventListener('click', (ev) => {
        if (ev.target.matches('.cmp-add-section')) {
            add(sectionsContainer, sectionTemplate, inputTemplate);
        }
        if (ev.target.matches('.cmp-remove-section')) {
            const inputSection = ev.target.closest('.cmp-input-section');
            remove(sectionsContainer, inputSection);
        }
    });

    add(sectionsContainer, sectionTemplate, inputTemplate);
}