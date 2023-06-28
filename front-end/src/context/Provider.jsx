import React, { useState } from 'react';
import ContentContext from './ContentContext';
import { getTasks } from '../api/dbInteract';

import PropTypes from 'prop-types';

export default function Provider ({ children }) {
  const [taskList, setTaskList] = useState([]);

  const loadDbTasks = async () => {
    const tasks = await getTasks();
    setTaskList(tasks);
  };

  const value = {
    taskList,
    setTaskList,
    loadDbTasks
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any
}.isRequired;
