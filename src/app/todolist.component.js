"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var todolist_service_1 = require("./todolist.service");
var todo_1 = require("./todo");
var TodolistComponent = (function () {
    function TodolistComponent(todoListService) {
        this.todoListService = todoListService;
        this.list = null;
    }
    TodolistComponent.prototype.add = function (taskName) {
        this.todoListService.addTodo(this.list, new todo_1.Todo(taskName));
    };
    TodolistComponent.prototype.remove = function (index) {
        this.todoListService.removeTodo(this.list, index);
    };
    TodolistComponent.prototype.switch = function (index) {
        this.todoListService.switchTodo(this.list, index);
    };
    TodolistComponent.prototype.countDone = function () {
        return this.list.todos.filter(function (value) { return value.completed; }).length;
    };
    return TodolistComponent;
}());
TodolistComponent = __decorate([
    core_1.Component({
        selector: 'todolist',
        templateUrl: './todolist.component.html',
        inputs: ['list']
    }),
    __metadata("design:paramtypes", [todolist_service_1.TodoListService])
], TodolistComponent);
exports.TodolistComponent = TodolistComponent;
//# sourceMappingURL=todolist.component.js.map