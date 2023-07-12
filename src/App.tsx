import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/common/Header';
import Wrapper from './components/common/Wrapper';

function App() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}

export default App;
