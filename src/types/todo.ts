export interface Todo {
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
}

export interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: string) => Promise<void>;
}

export interface TodoItemProps {
  id: string;
  title: string;
  removeTodo: (id: string) => Promise<void>;
}

export interface InputTodoProps {
  addTodo: (inputText: string) => Promise<void>;
}
