document.addEventListener('DOMContentLoaded', function() {

  const domEvents   = DomEvents();
  const searchForm  = DomEvents().getFormElement();


  searchForm.addEventListener('submit', function(event){
    event.preventDefault();

    domEvents.submitTodoTask();

  });

});
