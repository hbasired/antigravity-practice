import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import StreamView from './pages/StreamView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Home />} /> {/* Reuse Home for demo */}
          <Route path="stream/:id" element={<StreamView />} />
          <Route path="*" element={<div className='p-10 text-center text-textMuted'>Not Implemented Yet</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
