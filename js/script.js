const form = document.getElementById("typeTask");
const taskElement = document.getElementById("task");
const todoList = document.getElementById("todoList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const newList = document.createElement("li");   //new list is created
    newList.textContent = taskElement.value;    
    todoList.appendChild(newList);

    const deleteButton = document.createElement("button");  //delete button
    deleteButton.textContent = "🗑️";
    deleteButton.classList.add("deleteButton")
    newList.appendChild(deleteButton);
    deleteButton.addEventListener("click", function(){
        todoList.removeChild(newList);
    });

    newList.addEventListener("click", function() {
        newList.classList.toggle("completed");
    });

    taskElement.value = "";  //svuoto il form
});