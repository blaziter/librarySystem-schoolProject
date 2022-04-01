import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.css';

import NavbarComponent from './Components/Navbar';
import TestBackend from './Components/TestBackend';

const App = () => {
  return (
    <>
      <NavbarComponent />
      <TestBackend />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));