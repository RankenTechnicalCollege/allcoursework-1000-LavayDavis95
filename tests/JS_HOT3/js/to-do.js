const prepopulatedTasks = [
  "Finish homework",
  "Clean the house",
  "Go grocery shopping",
  "Read a book",
  "Walk the dog"
];


let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


prepopulatedTasks.forEach(task => {
  addTask(task);
});
addToDoButton.addEventListener('click', function () {
  const taskText = inputField.value.trim();
  if (taskText === "") {
    return;
  }
  addTask(taskText);
  inputField.value = "";
});

function addTask(taskText) {
  const paragraph = document.createElement('p');
  paragraph.classList.add('task-item', 'p-2', 'border', 'rounded', 'mb-2');
  paragraph.innerText = taskText;
  toDoContainer.appendChild(paragraph);
  paragraph.addEventListener('click', function () {
    paragraph.classList.toggle('completed'); 
  });
  paragraph.addEventListener('dblclick', function () {
    paragraph.remove();
  });
}