window.addEventListener('load', () => {
    const todoService = new TodoService();
    const domService = new DomService();

    function registerEvents() {
        domService.onTodoFormSubmit((todoFormData) => {
            domService.turnLoadingStateOn();
            todoService.addTodo(todoFormData.todo)
                .then(todo => {
                    domService.addTodoItem(todo);
                    domService.turnLoadingStateOff();
                    domService.resetForm();
                });
        });

        domService.onTodoItemClick((todoItem) => {
            domService.turnLoadingStateOn();
            todoService.deleteTodo(todoItem.id)
                .then(deletedTodoId => {
                    domService.removeTodoItem(deletedTodoId);
                    domService.turnLoadingStateOff();
                });
        });
    }

    function init() {
        domService.turnLoadingStateOn();
        todoService.getTodos()
            .then(todos => {
                domService.addTodoItems(todos);
                domService.turnLoadingStateOff();
            });
    }

    init();
    registerEvents();
});
