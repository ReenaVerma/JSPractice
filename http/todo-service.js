let currentId = 3;

function TodoService() {
}

TodoService.prototype.addTodo = function(todo) {
    return Promise.resolve({id: currentId++, todo});
};

TodoService.prototype.deleteTodo = function(id) {
    return Promise.resolve(id);
};

TodoService.prototype.getTodos = function() {
    return Promise.resolve([
        {id: 1, todo: 'todo1'},
        {id: 2, todo: 'todo2'}
    ]);
}
