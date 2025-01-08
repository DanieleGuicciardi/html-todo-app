const form = document.getElementById("typeTask");
const taskElement = document.getElementById("task");
const todoList = document.getElementById("todoList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const newList = document.createElement("li");  //new list is created
    newList.classList.add("elemento");

    const taskContent = document.createElement("span");
    taskContent.textContent = taskElement.value;
    taskContent.classList.add("task");
    newList.appendChild(taskContent);
    
    todoList.appendChild(newList);

    const deleteButton = document.createElement("button");  //delete button
    deleteButton.textContent = "X";
    deleteButton.classList.add("deleteButton");
    newList.appendChild(deleteButton);
    deleteButton.addEventListener("click", function(){
        todoList.removeChild(newList);
    });
    
    const checkBtn = document.createElement("input");   //checkbox
    checkBtn.type = "checkbox";
    checkBtn.classList.add("checkBtn");
    newList.appendChild(checkBtn);

    taskElement.value = "";  //svuoto il form
});
