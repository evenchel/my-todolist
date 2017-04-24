import { Component, OnInit } from '@angular/core';
import { TodoList }          from './todolist';
import { TodoListService }   from './todolist.service';

@Component({
    selector: 'todo-app',
    templateUrl: './app.component.html',
    providers: [TodoListService]
})

export class AppComponent implements OnInit {
    lists: TodoList[] = [];
    currentList: TodoList = null;

    constructor(private todoListService: TodoListService) {}

    ngOnInit(): void {
        this.lists = this.todoListService.getLists();
    }

    add(listName: string) {
        this.todoListService.addList(new TodoList(listName, []));
    }

    choose(index: number) {
        this.currentList = this.todoListService.getList(index);
    }
    
    remove(index: number) {
        if (this.todoListService.getList(index) == this.currentList) {
            this.currentList = null;
        }
        this.todoListService.removeList(index);
    }
}
