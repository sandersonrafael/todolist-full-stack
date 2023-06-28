import React from 'react';

import './Form.css';

export default function Form() {
  return (
    <form className="add-form">
      <input
        type="text"
        placeholder="Adicionar tarefa"
        className="input-task"
      />
      <button type="submit">+</button>
    </form>
  );
}
