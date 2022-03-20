import React, { FC, useState } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-pannel';
import ItemStatusFilter from '../item-statuse-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import { createTodoItem, filterTodos, searchItem, toggleProperty } from './variables';
import type { Filter, HandleTodo, Term, Todo } from '../types';

const App: FC = () => {
  const [todoData, setTodoData] = useState<Todo[]>([
    createTodoItem('Drink Coffee'),
    createTodoItem('Make Awesome App'),
    createTodoItem('Have a lunch'),
  ]);
  const [term, setTerm] = useState<Term>('');
  const [filter, setFilter] = useState<Filter>('all');

  const visibleItem = filterTodos(searchItem(todoData, term), filter);
  const doneTodos = todoData.filter((el) => el.done).length;

  const addItem = (text: string): void => {
    setTodoData([...todoData, createTodoItem(text)]);
  };

  const onToggleImportant: HandleTodo = (id) => {
    setTodoData(toggleProperty(todoData, id, 'important'));
  };

  const onToggleDone: HandleTodo = (id) => {
    setTodoData(toggleProperty(todoData, id, 'done'));
  };

  const deleteItem: HandleTodo = (id) => {
    setTodoData(todoData.filter((el) => el.id !== id));
  };

  return (
    <div className="todo-app">
      <AppHeader
        notCompletedTodoCount={todoData.length - doneTodos}
        completedTodoCount={doneTodos}
      />
      <div className="top-panel d-flex">
        <SearchPanel onSearchChange={setTerm} />
        <ItemStatusFilter onFilterChange={setFilter} filter={filter} />
      </div>

      <TodoList
        todos={visibleItem}
        onDeleted={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
      />

      <ItemAddForm onItemAdded={addItem} />
    </div>
  );
};

export default App;
