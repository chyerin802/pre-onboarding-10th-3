export interface Todo {
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
}

export interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export interface TodoItemProps {
  id: string;
  title: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export interface InputTodoProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
