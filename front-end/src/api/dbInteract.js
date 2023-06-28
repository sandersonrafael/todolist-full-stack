export const getTasks = async () => {
  const res = await fetch('http://localhost:3333/tasks');
  const tasks = await res.json();
  return tasks;
};

export const setTask = async (newTaskSet) => {
  return await fetch('http://localhost:3333/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: newTaskSet })
  });
};

export const deleteTask = async (id) => {
  return await fetch(`http://localhost:3333/tasks/${id}`, { method: 'DELETE' });
};

export const editTask = async (id, newTitle, newStatus) => {
  return await fetch(`http://localhost:3333/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: newTitle, status: newStatus })
  });
};
