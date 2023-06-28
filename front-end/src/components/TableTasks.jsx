import React, { useContext, useState } from 'react';
import { MdOutlineEdit, MdDelete, MdCheck } from 'react-icons/md';
import ContentContext from '../context/ContentContext';
import { deleteTask, editTask } from '../api/dbInteract';
import formatDate from '../utils/formatDate';

import PropTypes from 'prop-types';

export default function TableTasks({ task }) {
  const { title, status, created_at, id } = task;

  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newStatus, setNewStatus] = useState(status);
  const { loadDbTasks } = useContext(ContentContext);

  const handleEdit = async () => {
    setEditing(!editing);

    if (editing && (title !== newTitle || status !== newStatus)) {
      await editTask(id, newTitle, newStatus);
      await loadDbTasks();
    }
  };

  const handleDelete = async () => {
    await deleteTask(id);
    return await loadDbTasks();
  };

  return (
    <tr>
      <td>
        {editing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 0',
              textAlign: 'center',
              borderRadius: 5,
              border: '1px solid #ddd',
              outline: 'none',
            }}
          />
        ) : (
          title
        )}
      </td>
      <td>{formatDate(created_at)}</td>
      <td>
        <select
          defaultValue={status}
          disabled={!editing}
          onChange={(e) => setNewStatus(e.target.value)}
        >
          <option value="pendente">Pendente</option>
          <option value="iniciado">Iniciado</option>
          <option value="concluido">Concluído</option>
        </select>
      </td>
      <td className="form--actions">
        {!editing ? (
          <button className="btn-action btn-edit" onClick={handleEdit}>
            <MdOutlineEdit />
          </button>
        ) : (
          <button className="btn-action btn-confirm" onClick={handleEdit}>
            <MdCheck />
          </button>
        )}
        <button className="btn-action btn-delete" onClick={handleDelete}>
          <MdDelete />
        </button>
      </td>
    </tr>
  );
}

TableTasks.propTypes = {
  task: PropTypes.shape({}),
}.isRequired;
