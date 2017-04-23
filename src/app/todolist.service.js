"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TodoListService = (function () {
    function TodoListService() {
        this.lists = [];
    }
    TodoListService.prototype.getLists = function () {
        return this.lists;
    };
    TodoListService.prototype.getList = function (index) {
        return this.getLists()[index];
    };
    TodoListService.prototype.addList = function (newList) {
        this.lists.push(newList);
    };
    TodoListService.prototype.removeList = function (index) {
        this.lists.splice(index, 1);
    };
    TodoListService.prototype.addTodo = function (list, newTodo) {
        list.todos.push(newTodo);
    };
    TodoListService.prototype.removeTodo = function (list, todoIndex) {
        list.todos.splice(todoIndex, 1);
    };
    TodoListService.prototype.switchTodo = function (list, todoIndex) {
        list.todos[todoIndex].completed = !list.todos[todoIndex].completed;
    };
    return TodoListService;
}());
TodoListService = __decorate([
    core_1.Injectable()
], TodoListService);
exports.TodoListService = TodoListService;
//# sourceMappingURL=todolist.service.js.map