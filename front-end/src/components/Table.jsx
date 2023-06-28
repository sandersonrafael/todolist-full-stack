import React, { useEffect, useContext } from 'react';
import TableTasks from './TableTasks';
import ContentContext from '../context/ContentContext';

import './Table.css';

export default function Table() {
  const { taskList, loadDbTasks } = useContext(ContentContext);

  useEffect(() => loadDbTasks, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Tarefa</th>
          <th>Criado em</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        { taskList.map((task) => <TableTasks key={task.id} task={task}/>)}
      </tbody>
    </table>
  );
}
