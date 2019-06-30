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



  function fetchTodoTasks() {
    fetch('http://localhost:3000/tasks')

      .then(res => res.json())
      .then(res => {
        const lastTask = (res[Object.keys(res).length-1]);
        individualTasks +=
          `<div class="todoStyle">
            <p>${lastTask.date}: ${lastTask.todo}</p>
          </div>`;
        tasksContainer.innerHTML = individualTasks;

      })
      .catch(
        error => console.error(error)
      );
  }

  return {
    getFormElement,
    fetchTodoTasks,
    getSearchTerm
  };
}
