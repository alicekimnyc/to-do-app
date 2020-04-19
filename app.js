function onReady () {
  let toDos = [];
  let doDoId = 1;
const addToDoForm = document.getElementById('addToDoForm');
const newToDoText = document.getElementById('newToDoText');
const toDoList = document.getElementById('toDoList');
const deleteList = document.getElementById('deleteList');
addToDoForm.addEventListener('submit', () => {
  event.preventDefault();

  // get the text
  let title = newToDoText.value;


  toDos.push(title);
  console.log(toDos);

  // create a new li
  let newLi = document.createElement('li');

  // create a new input
  let checkbox = document.createElement('input');
  // set the input's type to checkbox
  checkbox.type = "checkbox";

  // create a delete button
  let deleteBtn = document.createElement('button');
deleteBtn.textContent = "Delete";

deleteBtn.addEventListener('click', function(event){
  let buttonLiText = this.parentElement.childNodes[0].textContent;
  toDoList.removeChild(this.parentElement);

  toDos.forEach(function(currentToDo, index){
    if(currentToDo === buttonLiText){
      // remove from array
      toDos.splice(index, 1);
    }
    console.log(toDos);
  });
})

  // set the title
  newLi.textContent = title;
  // attach the checkbox to the li
  newLi.appendChild(checkbox);
  // attach a delete button to the li
  newLi.appendChild(deleteBtn);
  //attach the li to the ul
  toDoList.appendChild(newLi);

  //empty the input after submit
  newToDoText.value = '';

});
}


window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
