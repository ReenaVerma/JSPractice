function DomEvents() {
  const form            = document.getElementById('form');
  const tasksContainer  = document.getElementById('tasksContainer');
  const todoTaskInput   = document.getElementById('task');
  const todoDateInput   = document.getElementById('date');
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
    individualTasks +=
      `<div class="todoStyle">
        <p>Date: ${lastTask.date}: Task: ${lastTask.todo}</p>
      </div>`;
    tasksContainer.innerHTML = individualTasks;
    return tasksContainer;
  }

  return {
    getFormElement,
    getSearchTerm,
    displayLastTask
  };
}
