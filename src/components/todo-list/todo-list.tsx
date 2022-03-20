import TodoListItem from '../todo-list-item';
import './todo-list.css';
import type { FC } from 'react';
import type { HandleTodo, Todo } from '../types';

type Props = {
  todos: Todo[];
  onDeleted: HandleTodo;
  onToggleDone: HandleTodo;
  onToggleImportant: HandleTodo;
};
const TodoList: FC<Props> = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
  const elements = todos.map((item) => {
    const { id, label, important, done } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          label={label}
          important={important}
          done={done}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
