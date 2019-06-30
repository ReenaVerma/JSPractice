document.addEventListener('DOMContentLoaded', function() {

  const domEvents     = DomEvents();
  const searchForm    = DomEvents().getFormElement();
  const fetchService  = FetchEvents();


  searchForm.addEventListener('submit', function(event){
    event.preventDefault();

    const searchTerm = DomEvents().getSearchTerm();
    fetchService.submitTodoTask(searchTerm);
    domEvents.fetchTodoTasks();
  });

});
