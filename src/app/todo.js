"use strict";
var Todo = (function () {
    function Todo(taskname, completed) {
        if (completed === void 0) { completed = false; }
        this.taskname = taskname;
        this.completed = completed;
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map