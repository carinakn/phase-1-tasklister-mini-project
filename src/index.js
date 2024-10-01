document.addEventListener("DOMContentLoaded", () => {
 // Select the form and the task list
const form = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get task description and priority
    const taskDescription = document.getElementById('new-task-description').value;
    const taskPriority = document.getElementById('task-priority').value;

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskDescription; // Display the task string
    listItem.classList.add(taskPriority); // Add class for priority styling

    // Create an edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        const newDescription = prompt("Edit task:", taskDescription);
        if (newDescription) {
            listItem.textContent = newDescription; // Update task description
            listItem.classList.remove(taskPriority); // Remove old priority class
            listItem.classList.add(document.getElementById('task-priority').value); // Add new priority class
        }
    });

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem); // Remove task from list
    });

    // Append buttons to list item
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    
    // Append the new task to the task list
    taskList.appendChild(listItem);

    // Clear the input fields
    document.getElementById('new-task-description').value = '';
    document.getElementById('task-priority').value = 'low'; // Reset to default
});
});
