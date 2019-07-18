document.addEventListener('DOMContentLoaded', function() {
  const domEvents       = DomEvents();
  const searchForm      = DomEvents().getFormElement();
  const fetchService    = FetchEvents();


  searchForm.addEventListener('submit', function(event){
    event.preventDefault();

    const searchTerm = DomEvents().getSearchTerm();
    fetchService.postTodoTask(searchTerm);

    fetchService.getTodoTasks()
      .then(res => res.json())
      .then(res => {
        const lastTask = (res[Object.keys(res).length-1]);
        domEvents.displayLastTask(lastTask);

        document.getElementById('deleteButton').addEventListener('click', function(event){
          event.preventDefault();
          console.log('clicked');

          var divs = document.querySelectorAll('div');
          for (var i = 0; i < divs.length; i++) {
            var id = divs[i].getAttribute('id');
            fetchService.deleteTodoTask(id);
          }
        });

      });
  });

});
