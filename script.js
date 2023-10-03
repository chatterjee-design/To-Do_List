let addbtn = document.getElementById('add-btn');

let taskInput = document.getElementById('task-input');

let taskSpace = document.getElementById('task-space');




addbtn.addEventListener('click', function(){

    // using trim for remove extra spaces when the value is empty
   
    let value = taskInput.value.trim(); 

    taskInput.value = '';

    if (value != '') {
        addTask(value); 
    }
});


function addTask(value) {
    // Create a new list item

    let listItem = document.createElement('h4'); 

    // Create a new div for btn and check
    
    let actionContainer = document.createElement('div'); 

    // Create a new delete button
    
    let deleteButton = document.createElement('button'); 

    // Create a new checkbox
    
    let checkbox = document.createElement('input'); 

    checkbox.type = 'checkbox';

    
    // Adding the content
    
    deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    listItem.textContent = value;

    let successMsg = document.createElement('p');

    successMsg.textContent = 'The task has been completed';

    successMsg.style.display = 'none';
    
    // Create classes for styling

    deleteButton.className = 'delete-btn btn';

    listItem.className = 'task-list';

    checkbox.className = 'checkbox';

    actionContainer.className = 'action-container';

    successMsg.className = 'success-msg';
    
    // Append the checkbox, list item, and delete button in the desired order

    listItem.appendChild(actionContainer);

    actionContainer.appendChild(checkbox);

    actionContainer.appendChild(deleteButton);

    listItem.appendChild(successMsg);
   

    // Append the list item to taskSpace

    taskSpace.appendChild(listItem);


    //function for delete button

    deleteButton.addEventListener('click', function(){

        listItem.remove();

    })

    //function for checkbox

    checkbox.addEventListener('change', function(){

        if (checkbox.checked) 
        {

            // Show the success message when the checkbox is checked

            successMsg.style.display = 'block';

        } 
        else
         {
            // Hide the success message when the checkbox is unchecked

            successMsg.style.display = 'none';
        }
       

    })
}


