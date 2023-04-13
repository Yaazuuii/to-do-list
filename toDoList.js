  const taskInput = document.querySelector('#task-input');
  const addTaskBtn = document.querySelector('#add-task-btn');
  const taskList = document.querySelector('#task-list');

  addTaskBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const taskValue = taskInput.value;

    if (!taskValue) return;

    const newTask = document.createElement('li');
    newTask.innerHTML = `
      ${taskValue}
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(newTask);

    taskInput.value = '';
  });

  taskList.addEventListener('click', function(e) {
    if (e.target.className === 'delete-btn') {
      e.target.parentElement.remove();
    }
  });


  
  


  

  


