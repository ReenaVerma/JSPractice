
function DomService() {
  const loader          = document.getElementById('loader');
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

  async function turnLoadingStateOn(res) {
    setTimeout(loader.classList.add('loader'), 2000);
    console.log('calling');
    var result = await displayLastTask(res);
    console.log('result', result);
  }

  function displayLastTask(res) {
    console.log(res);
    const lastTask = (res[Object.keys(res).length-1]);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          individualTasks +=
            `<div class="todoStyle" id=${lastTask.id}>
              <p>
              <p>Date: ${lastTask.date}: Task: ${lastTask.todo}</p>
              <button class="deleteButton" id="deleteButton">Delete</button>
            </div>`
        );
        tasksContainer.innerHTML = individualTasks;
        loader.classList.remove('loader');
        return tasksContainer;

      }, 2000);
    });
  }

  function getDeleteButton() {
    return deleteButton;
  }

  return {
    getFormElement,
    getSearchTerm,
    turnLoadingStateOn,
    getDeleteButton
  };
}
