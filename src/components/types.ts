export type Todo = {
  label: string;
  important: boolean;
  done: boolean;
  id: number;
};
export type Filter = 'all' | 'active' | 'done';
export type Term = string;
export type HandleTodo = (id: Todo['id']) => void;

export type VF = () => void;
