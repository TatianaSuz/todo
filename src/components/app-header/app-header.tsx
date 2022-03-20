import './app-header.css';
import type { FC } from 'react';

type Props = {
  notCompletedTodoCount: number;
  completedTodoCount: number;
};

const AppHeader: FC<Props> = ({ notCompletedTodoCount, completedTodoCount }) => (
  <div className="app-header d-flex">
    <h1>Todo List</h1>
    <h2>
      {notCompletedTodoCount} more to do, {completedTodoCount} done
    </h2>
  </div>
);

export default AppHeader;
