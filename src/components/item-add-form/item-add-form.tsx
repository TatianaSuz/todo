import React, { FC, useState } from 'react';
import './item-add-form.css';

type Props = {
  onItemAdded: (text: string) => void;
};

const ItemAddForm: FC<Props> = ({ onItemAdded }) => {
  const [label, setLabel] = useState<string>('');

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (label) {
      onItemAdded(label);
      setLabel('');
    }
  };

  return (
    <form className="item-add-form d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        onChange={(e): void => {
          setLabel(e.target.value);
        }}
        placeholder="What needs to be done"
        value={label}
      />
      <button type="submit" className="btn btn-outline-secondary">
        Add Item
      </button>
    </form>
  );
};

export default ItemAddForm;
