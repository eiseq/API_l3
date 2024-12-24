import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './UsersList';
import UserComments from './UserComments';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/user/:id" element={<UserComments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;