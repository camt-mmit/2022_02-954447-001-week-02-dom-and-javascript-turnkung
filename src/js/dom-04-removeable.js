function calculateTotal(container, resultComponent) {
    const inputs = [...container.querySelectorAll('input[type=number]')];
    const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);
        
    resultComponent.value = total;
}

function rebuildIndex(inputsContainer) {
    const inputContainers = [
        ...inputsContainer.querySelectorAll('.cmp-input-container'),
    ];

    inputContainers.forEach((elem, i) => {
        [...elem.querySelectorAll('.cmp-input-no')].forEach((elem) => {
          elem.innerText = i + 1;
        });
      });

    [...inputsContainer.querySelectorAll('.cmp-remove-input')].forEach((elem) => {
        elem.disabled = !(inputContainers.length > 1);
    });
}

function addInput(inputsContainer, resultComponent, template) {
    const fragment = template.content.cloneNode(true);

    inputsContainer.append(fragment);

    rebuildIndex(inputsContainer);
    calculateTotal(inputsContainer, resultComponent);
}

function remove(inputsContainer, resultComponent, inputContainer) {
    inputContainer.remove();

    rebuildIndex(inputsContainer);
    calculateTotal(inputsContainer, resultComponent);
}

function assign(inputSection, inputTemplate) {
    const inputsContainer = inputSection.querySelector('.cmp-inputs-container');
    const resultComponent = inputSection.querySelector('.cmp-result');

    inputSection.addEventListener('click', (ev) => {
        if (ev.target.matches('.cmp-add-input')) {
            addInput(inputsContainer, resultComponent, inputTemplate);
        }
    });
    inputSection.addEventListener('change', (ev) => {
        if (ev.target.matches('input[type=number]')) {
            calculateTotal(inputsContainer, resultComponent);
        }
    });
    inputSection.addEventListener('click', (ev) => {
        if (ev.target.matches('.cmp-remove-input')) {
            const inputContainer = ev.target.closest('.cmp-input-container');
            remove(inputsContainer, resultComponent, inputContainer);
        }
    });

    addInput(inputsContainer, resultComponent, inputTemplate);
}

document.addEventListener('DOMContentLoaded', () => {
    const inputSection = document.querySelector('.cmp-input-section');
    const inputTemplate = document.querySelector('template#tmp-input');

    assign(inputSection, inputTemplate);
});