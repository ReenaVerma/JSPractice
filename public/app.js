document.addEventListener('DOMContentLoaded', function() {
  const domService      = DomService();
  const fetchService    = FetchEvents();

  domService.getFormElement().addEventListener('submit', function(event){
    event.preventDefault();

    const searchTerm = DomService().getSearchTerm();
    fetchService.postTodoTask(searchTerm);

    fetchService.getTodoTasks()
      .then(res => res.json())
      .then(res => {
        domService.turnLoadingStateOn(res);
        // fetchService.deleteTodoTask(res);
      });
  });
});
