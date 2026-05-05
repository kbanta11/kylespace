import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { LinksPage } from './pages/LinksPage';

// Re-export so existing section components that import from '../../App' keep working
export { themeState } from './state';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/links' element={<LinksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
