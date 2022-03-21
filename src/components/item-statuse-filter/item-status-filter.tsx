import type { FC } from 'react';
import type { Filter } from '../types';

type Props = {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
};

const ItemStatusFilter: FC<Props> = ({ filter, onFilterChange }) => {
  const buttonsList = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ] as const;
  const buttons = buttonsList.map(({ name, label }) => {
    const isActive = filter === name;
    const buttonClass = isActive ? 'btn-info' : 'btn-outline-secondary';
    return (
      <button
        type="button"
        className={`btn ${buttonClass}`}
        key={name}
        onClick={() => onFilterChange(name)}>
        {label}
      </button>
    );
  });
  return <div className="btn-filter btn-group">{buttons}</div>;
};

export default ItemStatusFilter;
