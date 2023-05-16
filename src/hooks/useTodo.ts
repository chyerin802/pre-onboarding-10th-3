import { useEffect, useState, useCallback } from 'react';
import { getTodoList, deleteTodo, createTodo } from '@api/todo';

import { Todo } from '@type/todo';

function useTodo() {
  const [todoListData, setTodoListData] = useState<Todo[]>([]);

  const addTodo = useCallback(
    async (inputText: string) => {
      const trimmed = inputText.trim();
      if (!trimmed) {
        return alert('Please write something');
      }

      const newItem = { title: trimmed };
      const { data } = await createTodo(newItem);

      if (data) {
        return setTodoListData((prev: Todo[]) => [...prev, data]);
      }
    },
    [setTodoListData]
  );

  const removeTodo = useCallback(
    async (id: string) => {
      await deleteTodo(id);
      setTodoListData((prev: Todo[]) => prev.filter((item: Todo) => item.id !== id));
    },
    [setTodoListData]
  );

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getTodoList();
        setTodoListData(data || []);
      } catch (error) {
        console.error(error);
        alert('Something went wrong.');
      }
    })();
  }, []);

  return { todoListData, addTodo, removeTodo };
}

export default useTodo;
