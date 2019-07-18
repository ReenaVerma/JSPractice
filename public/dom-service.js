function DomService() {
  const form            = document.getElementById('form');
  const tasksContainer  = document.getElementById('tasksContainer');
  const todoTaskInput   = document.getElementById('task');
  const todoDateInput   = document.getElementById('date');
  const deleteButton    = document.getElementById('deleteButton');
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

  function displayLastTask(res) {
    console.log(res);

    const lastTask = (res[Object.keys(res).length-1]);

    individualTasks +=
        `<div class="todoStyle" id=${lastTask.id}>
          <p>
          <p>Date: ${lastTask.date}: Task: ${lastTask.todo}</p>
          <button class="deleteButton" id="deleteButton">Delete</button>
        </div>`;
    tasksContainer.innerHTML = individualTasks;

    return tasksContainer;
  }

  function getDeleteButton() {
    return deleteButton;
  }

  function turnLoadingStateOn() {
    return setTimeout(form.classList.add('loader'), 5000);
  }

  function turnLoadingStateOff() {
    return form.classList.remove('loader');
  }

  return {
    getFormElement,
    getSearchTerm,
    displayLastTask,
    getDeleteButton,
    turnLoadingStateOn,
    turnLoadingStateOff
  };
}
