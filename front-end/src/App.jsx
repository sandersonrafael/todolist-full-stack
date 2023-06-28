import React from 'react';
import Form from './components/Form';
import Table from './components/Table';
import Provider from './context/Provider';

import './App.css';

function App() {
  return (
    <Provider>
      <main>
        <Form />
        <Table />
      </main>
    </Provider>
  );
}

export default App;
