# To-Do List Application

This is a simple To-Do List application built using HTML, CSS, and JavaScript. The application allows users to add tasks, mark them with a checkbox, and delete them. The tasks are displayed in a list with buttons for each task to mark it as complete or delete it.

## Features
- Add new tasks to the list
- Mark tasks as complete using a checkbox
- Delete tasks from the list
- The task list is dynamic and updates based on user input

## Technologies Used
- HTML
- CSS
- JavaScript

## How It Works

### HTML Structure

The main structure of the To-Do List consists of the following elements:
- **Input field** (`#task`): Where the user enters a new task.
- **Form** (`#typeTask`): A form that wraps the input field to submit new tasks.
- **Unordered List** (`#todoList`): The container where tasks will be displayed as list items (`<li>`).

Each task (`<li>`) contains:
- **Task text**: A span element that holds the task's content.
- **Checkbox**: An input element of type `checkbox` that allows the user to mark a task as completed.
- **Delete button**: A button that allows the user to delete the task from the list.

### JavaScript Functionality

- **Add Task**: When the user submits the form, a new list item (`<li>`) is created. The task's text is retrieved from the input field, and the task is added to the list.
- **Delete Task**: Each task has a delete button that removes the task from the list when clicked.
- **Mark Task as Complete**: A checkbox is added to each task. While it's not currently linked to any visual feedback, it can be used to mark a task as completed.

### CSS Layout

To style the list items and buttons:
- **Spacing**: Margins are added to create space between the checkbox, task text, and delete button.
- **Task Text Centering**: The task text is centered inside the list item using `text-align: center` and `flex-grow: 1` ensures that the task text takes up the remaining space in the list item.
- **Flexbox**: This approach was implemented later on as Flexbox was not initially studied when building the application.


The main design elements include:
- **Checkbox on the left**
- **Task centered**
- **Delete button on the right**

## License
### This project is open-source and available under the MIT License.
This `README.md` explains how the To-Do List app works, how to run it, and provides an overview of the code. It includes both the HTML, JavaScript, and CSS details. Let me know if you need further adjustments!

