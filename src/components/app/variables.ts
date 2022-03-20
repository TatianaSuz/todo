import { Filter, Term, Todo } from '../types';

export let maxId = 100;

export const createTodoItem = (label: string): Todo => ({
  label,
  important: false,
  done: false,
  id: maxId++,
});

export const filterTodos = (todos: Todo[], filter: Filter): Todo[] => {
  if (filter === 'all') {
    return todos;
  }
  if (filter === 'active') {
    return todos.filter((el) => !el.done);
  }
  return todos.filter((el) => el.done);
};

export const toggleProperty = (arr: Todo[], id: Todo['id'], propName: keyof Todo): Todo[] =>
  arr.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        [propName]: !todo[propName],
      };
    }
    return todo;
  });

export const searchItem = (todos: Todo[], term: Term): Todo[] => {
  if (term.length === 0) {
    return todos;
  }
  return todos.filter((el) => el.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
};
