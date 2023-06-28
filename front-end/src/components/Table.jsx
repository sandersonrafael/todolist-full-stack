import React from 'react';
import { MdOutlineEdit, MdDelete } from 'react-icons/md';

import './Table.css';

export default function Table() {
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
        <tr>
          <td>Fazer compras</td>
          <td>27/06/2023</td>
          <td>
            <select>
              <option value="pendente">Pendente</option>
              <option value="iniciada">Iniciado</option>
              <option value="concluido">Concluído</option>
            </select>
          </td>
          <td className="form--actions">
            <button className="btn-action">
              <MdOutlineEdit />
            </button>
            <button className="btn-action">
              <MdDelete />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
