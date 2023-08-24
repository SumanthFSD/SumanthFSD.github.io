
// Unhides the add button when user types something in the input text area to add task
function showBtn(){
    const addTaskbtn = document.getElementById("add-task");
    // Show the add task button only when the user types atleast one character in the input text area
    if(document.getElementById('task').value != ''){
        addTaskbtn.style.display = 'block';
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});

// function to add the task given by user to the list and update the web page
function add_task(){
    let todoList = document.getElementById("todo-list");
    let task = document.getElementById("task");
    
    // create a new li element and append it to the ul with id "todo-list"
    var input = task.value;
    task.value = ''; // Clear the text area once the text or value is saved in a variable
    // Hide the add button if the test content of the input area is empty
    const addTaskbtn = document.getElementById("add-task");
    addTaskbtn.style.display = 'none'; 
    if(input!=''){
        const li = document.createElement("li");
        li.className = "list-item";
        const textSpan = document.createElement("span");
        textSpan.textContent = input;
        li.appendChild(textSpan);
        // Add the delete button which deletes the corresponding task when clicked
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-task';
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.onclick = function() {
            delete_task(this);
        };
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    }
    else{
        alert('Please add a task, adding a task increases chances of completing it!!!');
    }
    updateTasksCount();
}

// Deletes the corresponding task when clicked on delete butoon
function delete_task(listItem){
    listItem.parentNode.remove();
    updateTasksCount();
}

// Update the no.of tasks left when task added or deleted
function updateTasksCount(){
    let todoList = document.getElementById("todo-list");
    const totalCountSpan = document.getElementById('totalCount');
    const totalItems = todoList.children.length; // Get the total no.of elements in the list
    totalCountSpan.textContent = totalItems; // Update the count in the text area of the span element
}


