import {inject} from 'aurelia-framework';
import {TodoService} from 'todo-service';

@inject(TodoService)
export class FormTodo {
    constructor(todoService){
        this.todoText = '';
        this.todoService = todoService;
    }

    todoClick() {
        if (this.todoText){
            let _todoList = this.todoService.addTodo({task: this.todoText});
            console.log(_todoList);
        }
    }
}
