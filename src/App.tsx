import React from 'react';
import './App.css';
import router from './routers/Router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
