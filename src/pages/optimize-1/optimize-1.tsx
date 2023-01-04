import {  useState } from 'react';
import { CenteredLayout } from '~/components';
import { todosData } from '~/models';
import { TodoItem } from '~/models/type';
import { Todo } from './components/todo';

export const Optimize1 = () => {
  const [todos, setTodos] = useState<TodoItem[]>(todosData); // left to have ability add more todos

  return (
    <CenteredLayout className="gap-4">
      <div className="text-3xl">It re-renders all items! =\</div>
      <div>We need to fix that</div>
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} item={item} />
        ))}
      </ul>
    </CenteredLayout>
  );
};
