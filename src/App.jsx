import React, { useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './App.css'
import Login from './components/Login';

function App() {
 return (
   <Router>
      <Routes>
          <Route path='/' element={<Navigate to='/login' replace />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<h1>Wellcome to dashboard</h1>} />
          <Route path='/operator' element={<h1>Wellcome to operator page</h1>} />
      </Routes>
   </Router>
 )
}

export default App
