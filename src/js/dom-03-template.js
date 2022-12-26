function calculateTotal(container, resultComponent) {
    const inputs = [...container.querySelectorAll('input[type=number]')];
    const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);
        
    resultComponent.value = total;
}

function addInput(container, resultComponent, template) {
    const fragment = template.content.cloneNode(true);
    const title = fragment.querySelector('.cmp-input-title');
    const input = fragment.querySelector('input[type=number]');

    container.append(fragment);

    const nextN = container.querySelectorAll('input[type=number]').length;
    title.innerText = `Number ${nextN}`;

    calculateTotal(container, resultComponent);

    input.addEventListener('change', () => {
        calculateTotal(container, resultComponent);
    });
    
}

document.addEventListener('DOMContentLoaded', () => {
    const inputsContainer = document.querySelector('.cmp-inputs-container');
    const resultComponent = document.querySelector('output.cmp-result');
    const template = document.querySelector('template#tmp-input');

    document.querySelector('.cmp-add-input').addEventListener('click', () => {
        addInput(inputsContainer, resultComponent, template);
    });
    addInput(inputsContainer, resultComponent, template);
});