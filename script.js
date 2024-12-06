const button = document.querySelector('#button');
const parent = document.querySelector('#main');

const rollInput = document.querySelector('#roll-input');
const rollButton = document.querySelector('#roll-button');

function createElement(element, textContent, parentElement) {
  const newElement = document.createElement(element);
  newElement.textContent = textContent;
  parentElement.appendChild(newElement);
}

button.addEventListener('click', function () {
  const list = document.createElement('ul');

  createElement('li', 'Item 1', list);
  createElement('li', 'Item 2', list);
  createElement('li', 'Item 3', list);
  createElement('li', 'Item 4', list);
  createElement('li', 'Item 5', list);

  parent.appendChild(list);
  // const randomNumber = Math.floor(Math.random() * 32) + 1;

  // const element = document.createElement('h2');
  // element.textContent = randomNumber;
  // parent.appendChild(element);

  // const element = document.createElement('p');
  // element.textContent = 'En ny paragraf';
  // parent.appendChild(element);
});

rollButton.addEventListener('click', function () {
  const maxRoll = rollInput.value;

  const randomNumber = Math.floor(Math.random() * maxRoll) + 1;

  createElement('h3', randomNumber, parent);
});


rollInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    const maxRoll = rollInput.value;

    const randomNumber = Math.floor(Math.random() * maxRoll) + 1;

    createElement('h3', randomNumber, parent);
  }
});
