import './search-panel.css';
import React, { FC, useState } from 'react';
import type { Term } from '../types';

type Props = {
  onSearchChange: (term: Term) => void;
};

const SearchPanel: FC<Props> = ({ onSearchChange }) => {
  const [term, setTerm] = useState<Term>('');

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
    onSearchChange(term);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      onChange={onHandleChange}
      value={term}
      placeholder="Type to search"
    />
  );
};

export default SearchPanel;
