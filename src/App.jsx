import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrincipalPage from './pages/principal.jsx';
import AdminPage from './pages/admin.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrincipalPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;