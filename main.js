const listContainer = document.querySelector('.listContainer');
const inputTodo = document.getElementById('inputTodo');
const button1 = document.getElementById('button1');

button1.addEventListener('click', () => {
  if (inputTodo.value) {
    const paragraph = document.createElement('p');
    paragraph.textContent = inputTodo.value;
    listContainer.appendChild(paragraph);
    inputTodo.value = '';
    paragraph.addEventListener('click', () => {
      paragraph.classList.toggle('p-through');
    });

    // paragraph.addEventListener("dblclick", () => {
    //   listContainer.removeChild(paragraph);
    // });
  } else {
    alert('Add Value To The Form!');
  }
});
