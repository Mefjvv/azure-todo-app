let tasks = [];

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText !== '') {
    tasks.push(taskText);
    input.value = '';
    updateTaskList();
  }
}

function updateTaskList() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    list.appendChild(li);
  });
}
