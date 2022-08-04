import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ServiceList from './components/list';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<ServiceList />} />
      </Routes>
    </div>
  );
};

export default App;
