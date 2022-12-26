function addInput(container, resultComponent) {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('cmp-input-container');

    const label = document.createElement('label');
    inputContainer.append(label);

    const title = document.createElement('b');
    const input = document.createElement('input');
    input.type = 'number';
    input.defaultValue = 0;
    input.required = true;

    label.append(title);
    label.append(input);

    container.append(inputContainer);

    const nextN = container.querySelectorAll('input[type=number]').length;
    title.innerText = `Number ${nextN}`;


    input.addEventListener('change', () => {
        const inputs = [...container.querySelectorAll('input[type=number]')];
        const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);
            
        resultComponent.value = total;
    });
    
}

document.addEventListener('DOMContentLoaded', () => {
    const inputsContainer = document.querySelector('.cmp-input-container');
    const resultComponent = document.querySelector('output.cmp-result');

    document.querySelector('.cmp-add-input').addEventListener('click', () => {
        addInput(inputsContainer, resultComponent);
    });
    addInput(inputsContainer, resultComponent);
});