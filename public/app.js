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

        setTimeout(() => {
          document.getElementById('id').addEventListener('click', function(event){
            event.preventDefault();
            console.log('clicked');

            var divs = document.querySelectorAll('div');
            for (var i = 0; i < divs.length; i++) {
              var id = divs[i].getAttribute('id');
              divs[i].parentElement.removeChild(divs[i]);
              fetchService.deleteTodoTask(id);
            }
          });
        },3000);
      });
  });
});
