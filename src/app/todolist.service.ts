import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { TodoList } from './todolist';

@Injectable()
export class TodoListService {
    private lists: TodoList[] = [];
    
    getLists(): TodoList[] {
        return this.lists;
    }

    getList(index: number): TodoList {
        return this.getLists()[index];
    }
    
    addList(newList: TodoList): void {
        this.lists.push(newList);
    }
    
    removeList(index: number): void {
        this.lists.splice(index, 1);
    }

    addTodo(list: TodoList, newTodo: Todo): void {
        list.todos.push(newTodo);
    }

    removeTodo(list: TodoList, todoIndex: number): void {
        list.todos.splice(todoIndex, 1);
    }

    switchTodo(list: TodoList, todoIndex: number) {
        list.todos[todoIndex].completed = !list.todos[todoIndex].completed;
    }
}
