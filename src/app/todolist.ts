import { Todo } from './todo';

export class TodoList {
    constructor(
        public listname: string,
        public todos: Todo[]
    ) {}
}

