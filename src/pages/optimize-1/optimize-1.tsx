import { memo, useRef, useState } from 'react';
import { CenteredLayout } from '~/components';
import { useRenderHighlight } from '~/utils';
import css from './optimize-1.module.scss';

type TodoItem = {
  id: number;
  text: string;
  done: boolean;
}

interface TodoProps {
  item: TodoItem,
}

const todosData: TodoItem[] = [
  { id: 1, text: 'run a marathon', done: false },
  { id: 2, text: 'ride an elephant', done: false },
  { id: 3, text: 'swim with a fish', done: false },
];

const Todo = memo(({ item }: TodoProps) => {
  const [todoItem, setTodoItem] = useState<TodoItem>(item);
  const ref = useRef<HTMLLIElement>(null);
  useRenderHighlight(css.render, ref.current);

  const handleTodoClick = () => {
      setTodoItem({ ...todoItem, done: !todoItem.done });
    };

  return (
    <li ref={ref} onClick={handleTodoClick} className={css.listItem}>
      {todoItem.done ? '[x]' : '[ ]'} {todoItem.text}
    </li>
  );
});

export const Optimize1 = () => {
  const [todos, setTodos] = useState<TodoItem[]>(todosData);  // left to have ability add more todos

  return (
    <CenteredLayout className='gap-4'>
      <div className='text-3xl'>It re-renders all items! =\</div>
      <div>We need to fix that</div>
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </CenteredLayout>
  );
};
