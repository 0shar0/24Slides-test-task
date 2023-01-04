import { memo, useRef, useState } from 'react';
import { useRenderHighlight } from '~/hooks';
import { TodoItem } from '~/models/type';
import css from '~/pages/optimize-1/optimize-1.module.scss';

interface TodoProps {
  item: TodoItem;
}

export const Todo = memo(({ item }: TodoProps) => {
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
