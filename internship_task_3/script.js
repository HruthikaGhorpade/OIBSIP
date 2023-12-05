let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const task = {
      text: taskText,
      completed: false,
      createdAt: new Date()
    };
    tasks.push(task);
    displayTasks();
    taskInput.value = '';
  }
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  }
  
  function displayTasks() {
    const pendingTasksList = document.getElementById('pendingTasks');
    const completedTasksList = document.getElementById('completedTasks');
    pendingTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';
  
    tasks.forEach((task, index) => {
      const taskItem = document.createElement('li');
      const taskText = document.createElement('span');
      taskText.textContent = task.text;
      taskItem.appendChild(taskText);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => deleteTask(index);
      taskItem.appendChild(deleteButton);
  
      if (task.completed) {
        completedTasksList.appendChild(taskItem);
      } else {
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = () => completeTask(index);
        taskItem.appendChild(completeButton);
        pendingTasksList.appendChild(taskItem);
        
      }
      const dateTime = document.createElement('span');
      dateTime.textContent = formatDate(task.completed ? task.completedAt : task.createdAt);
      taskItem.appendChild(dateTime);
    });
  }
  
  function completeTask(index) {
    tasks[index].completed = true;
    tasks[index].completedAt = new Date();
    displayTasks();
  }
  
function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

displayTasks();
