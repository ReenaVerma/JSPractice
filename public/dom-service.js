
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
    await displayLastTask(res);
  }

  function displayLastTask(res) {
    const lastTask = (res[Object.keys(res).length-1]);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          individualTasks +=
            `<div class="todoStyle" id=${lastTask.id} style="display: flex; justify-content: space-between">
                <div class="text">
                  <p>Date: ${lastTask.date}</p>
                  <p>Task: ${lastTask.todo}</p>
              </div>
              <div class-"icon">
                  <i class="far fa-calendar-times" id="deleteButton"></i>
              </div>
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
