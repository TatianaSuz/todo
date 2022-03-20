import './todo-list-item.css';
import type { FC } from 'react';
import type { VF } from '../types';

type Props = {
  label: string;
  onDeleted: VF;
  onToggleDone: VF;
  onToggleImportant: VF;
  done: boolean;
  important: boolean;
};

const TodoListItem: FC<Props> = ({
  label,
  onDeleted,
  onToggleDone,
  onToggleImportant,
  done,
  important,
}) => {
  let className = 'todo-list-item';
  if (done) {
    className += ' done';
  }
  if (important) {
    className += ' important';
  }

  return (
    <span className={className}>
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}>
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
