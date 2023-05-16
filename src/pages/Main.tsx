import React from 'react';

import Header from '@components/Header';
import InputTodo from '@components/InputTodo';
import TodoList from '@components/TodoList';
import useTodo from '@hooks/useTodo';

function Main() {
  const { todoListData, addTodo, removeTodo } = useTodo();

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodo={addTodo} />
        <TodoList todos={todoListData} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default Main;
