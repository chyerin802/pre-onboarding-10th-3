import React from 'react';
import TodoItem from './TodoItem';

// TODO: props 타입 지정
function TodoList({ todos, setTodos }: { todos: any[]; setTodos: any }) {
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
