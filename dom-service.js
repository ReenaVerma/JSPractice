function DomService() {
    this.todoForm = document.getElementById('todo-form');
    this.todoInput = document.getElementById('todo-input');
    this.todoList = document.getElementById('todo-list');
}

DomService.prototype.onTodoFormSubmit = function(callbackFunction) {
    this.todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = {todo: this.todoInput.value};
        callbackFunction(formData);
    });
};

DomService.prototype.resetForm = function() {
    this.todoInput.value = '';
};

DomService.prototype.turnLoadingStateOn = function() {
    this.todoForm.classList.add('loading');
};

DomService.prototype.turnLoadingStateOff = function() {
    this.todoForm.classList.remove('loading');
};

DomService.prototype.onTodoItemClick = function(callbackFunction) {
    this.todoList.addEventListener('click', (event) => {
        if(event.target.tagName = 'LI') {
            callbackFunction({
                id: event.target.dataset.id,
                todo: event.target.innerHTML
            });
        }
    });
};

DomService.prototype.addTodoItem = function(todoItem) {
    const newTodoItem = document.createElement('LI');
    newTodoItem.innerText = todoItem.todo;
    newTodoItem.dataset.id = todoItem.id;
    this.todoList.appendChild(newTodoItem);
};

DomService.prototype.addTodoItems = function(todoItems) {
    todoItems.forEach(todoItem => this.addTodoItem(todoItem));
};

DomService.prototype.removeTodoItem = function(id) {
    const todoItemToRemove = [...this.todoList.children].find((item) => item.dataset.id === id);
    this.todoList.removeChild(todoItemToRemove);
};
