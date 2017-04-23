import { Component }       from '@angular/core';
import { TodoListService } from './todolist.service';
import { TodoList }        from './todolist';
import { Todo }            from './todo';

@Component({
    selector: 'todolist',
    templateUrl: './todolist.component.html',
    inputs: ['list']
})

export class TodolistComponent {
    list: TodoList = null;

    constructor(private todoListService: TodoListService) {}

    add(taskName: string) {
        this.todoListService.addTodo(this.list, new Todo(taskName));
    }

    remove(index: number) {
        this.todoListService.removeTodo(this.list, index);
    }

    switch(index: number) {
        this.todoListService.switchTodo(this.list, index);
    }

    countDone() {
        return this.list.todos.filter(value => value.completed).length;
    }
}
