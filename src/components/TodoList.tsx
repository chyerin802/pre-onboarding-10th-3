import React from 'react';
import { TodoListProps } from '@type/todo';
import TodoItem from './TodoItem';

// TODO: props 타입 지정
function TodoList({ todos, setTodos }: TodoListProps) {
  return todos.length ? (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} setTodos={setTodos} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
}
export default TodoList;
