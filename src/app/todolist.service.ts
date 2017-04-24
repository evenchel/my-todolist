import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { TodoList } from './todolist';

@Injectable()
export class TodoListService {
    private lists: TodoList[] = [];
    private storageName: string = 'myTodoList';
    private isSynchronized: boolean = false;
    
    retrieveStorageData(): void {
        let retrievedJSON = localStorage.getItem(this.storageName);
        this.lists = (retrievedJSON)? JSON.parse(retrievedJSON) : [];
        this.isSynchronized = true;
    }

    getLists(): TodoList[] {
        if (!this.isSynchronized) {
            this.retrieveStorageData();
        }
        return this.lists;
    }

    getList(index: number): TodoList {
        return this.getLists()[index];
    }
    
    addList(newList: TodoList): void {
        this.lists.push(newList);
        this.updateStorageData();
    }
    
    removeList(index: number): void {
        this.lists.splice(index, 1);
        this.updateStorageData();
    }

    addTodo(list: TodoList, newTodo: Todo): void {
        list.todos.push(newTodo);
        this.updateStorageData();
    }

    removeTodo(list: TodoList, todoIndex: number): void {
        list.todos.splice(todoIndex, 1);
        this.updateStorageData();
    }

    switchTodo(list: TodoList, todoIndex: number) {
        list.todos[todoIndex].completed = !list.todos[todoIndex].completed;
        this.updateStorageData();
    }

    updateStorageData() {
        localStorage.setItem(this.storageName, JSON.stringify(this.lists));
    }
}
