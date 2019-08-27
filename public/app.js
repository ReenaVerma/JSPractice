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
      });

    const list = document.querySelector('.js-todo-list');
    list.addEventListener('click', event => {

      if (event.target.classList.contains('js-delete-todo')) {
        const id = event.target.parentElement.dataset.key;;
        var elem = document.getElementById(id);
        elem.parentNode.removeChild(elem);
        fetchService.deleteTodoTask(id);
      }
    });
  });
});
