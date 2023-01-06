import { useState } from 'react';
import { CenteredLayout } from '~/components';
import { todosData } from '~/models';
import { TodoItem } from '~/models/type';
import { Todo } from './components/todo/todo';

export const Optimize1 = () => {
  const [todos] = useState<TodoItem[]>(todosData);

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
