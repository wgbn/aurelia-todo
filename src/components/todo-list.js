import {inject} from 'aurelia-framework';
import {TodoService} from 'todo-service';

@inject(TodoService)
export class TodoList {
    constructor(todoService){
        this.todoService = todoService;
    }

    get getList(){
        return this.todoService.getTodoList();
    }
}
