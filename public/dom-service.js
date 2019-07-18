function DomEvents() {
  const form            = document.getElementById('form');
  const tasksContainer  = document.getElementById('tasksContainer');
  const todoTaskInput   = document.getElementById('task');
  const todoDateInput   = document.getElementById('date');
  const deleteButton    = document.getElementById('id');
  let individualTasks   = '';

  function getFormElement(){
    return form;
  }

  function getSearchTerm() {
    const data = {
      todo: todoTaskInput.value,
      date: todoDateInput.value
    };
    return data;
  }

  function displayLastTask(lastTask) {
    console.log(lastTask);
    individualTasks +=
      `<div class="todoStyle" id=${lastTask.id}>
        <p>Date: ${lastTask.date}: Task: ${lastTask.todo}</p>
        <button class="deleteButton" id="id">Delete</button>
      </div>`;
    tasksContainer.innerHTML = individualTasks;
    return tasksContainer;
  }

  function getDeleteButton() {
    return deleteButton;
  }

  return {
    getFormElement,
    getSearchTerm,
    displayLastTask,
    getDeleteButton
  };
}
