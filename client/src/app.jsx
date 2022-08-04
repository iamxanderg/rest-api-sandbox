import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthorsList from './components/list';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<AuthorsList />} />
      </Routes>
    </div>
  );
};

export default App;
