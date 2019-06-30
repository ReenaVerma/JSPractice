document.addEventListener('DOMContentLoaded', function() {
  const domEvents       = DomEvents();
  const searchForm      = DomEvents().getFormElement();
  const fetchService    = FetchEvents();

  searchForm.addEventListener('submit', function(event){
    event.preventDefault();

    const searchTerm = DomEvents().getSearchTerm();
    fetchService.postTodoTask(searchTerm);

    fetchService.getTodoTask()
      .then(res => res.json())
      .then(res => {
        const lastTask = (res[Object.keys(res).length-1]);
        domEvents.displayLastTask(lastTask);
      });
  });
});
