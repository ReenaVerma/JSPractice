document.addEventListener('DOMContentLoaded', function() {
  const domService      = DomService();
  const fetchService    = FetchEvents();

  domService.getFormElement().addEventListener('submit', function(event){
    event.preventDefault();

    const searchTerm = DomService().getSearchTerm();
    fetchService.postTodoTask(searchTerm);
    domService.turnLoadingStateOn();

    fetchService.getTodoTasks()
      .then(res => res.json())
      .then(res => {
        domService.turnLoadingStateOff();
        domService.displayLastTask(res);
        fetchService.deleteTodoTask(res);
      });
  });
});
