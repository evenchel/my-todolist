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
var todolist_1 = require("./todolist");
var todolist_service_1 = require("./todolist.service");
var AppComponent = (function () {
    function AppComponent(todoListService) {
        this.todoListService = todoListService;
        this.lists = [];
        this.currentList = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.lists = this.todoListService.getLists();
    };
    AppComponent.prototype.add = function (listName) {
        this.todoListService.addList(new todolist_1.TodoList(listName, []));
    };
    AppComponent.prototype.choose = function (index) {
        this.currentList = this.todoListService.getList(index);
    };
    AppComponent.prototype.remove = function (index) {
        this.todoListService.removeList(index);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'todo-app',
        templateUrl: './app.component.html',
        providers: [todolist_service_1.TodoListService]
    }),
    __metadata("design:paramtypes", [todolist_service_1.TodoListService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map