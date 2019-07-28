function FetchEvents() {
  const url = 'http://localhost:3000/tasks';

  function postTodoTask(searchTerm) {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(searchTerm)
    };
    fetch(url, options)
      .then((response) => response.json);
  }

  function getTodoTasks() {
    return fetch(url);
  }

  function deleteTodoTask(res) {
    const options = {
      method: 'DELETE'
    };
    console.log('res from dom', res);

    res.forEach(elem => {
      document.getElementById('deleteButton').addEventListener('click', function(event){
        event.preventDefault();
        console.log('clicked', elem.id);
        return fetch(`${url}/${elem.id}`, options);
      });
    });
  }


  return {
    postTodoTask,
    getTodoTasks,
    deleteTodoTask
  };
}
