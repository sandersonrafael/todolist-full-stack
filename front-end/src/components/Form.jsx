import React, { useContext, useState } from 'react';
import ContentContext from '../context/ContentContext';

import { setTask } from '../api/dbInteract';

import './Form.css';

export default function Form() {
  const [newTask, setNewTask] = useState('');
  const { loadDbTasks } = useContext(ContentContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setTask(newTask);
    setNewTask('');
    return await loadDbTasks();
  };

  return (
    <form
      className="add-form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        placeholder="Adicionar tarefa"
        className="input-task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
}
