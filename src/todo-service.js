export class TodoService {
    todoList = [];

    getTodoList(){
        return this.todoList;
    }

    addTodo(_todo){
        this.todoList.push(_todo);
        return this.getTodoList();
    }

    removeTodo(_todo){
        this.todoList.splice(this.todoList.indexOf(_todo), 1);
        return this.getTodoList();
    }
}
