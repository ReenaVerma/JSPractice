function FetchEvents() {
  const url = 'http://localhost:3000/tasks';

  function submitTodoTask(searchTerm) {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(searchTerm)
    };
    fetch(url, options)
      .then((response) => response.json);
  }


  return {
    submitTodoTask
  };
}
