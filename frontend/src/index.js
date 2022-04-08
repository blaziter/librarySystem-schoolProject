import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.css';

import NavbarComponent from './Components/Navbar';
import TestBackend from './Components/TestBackend';
import Login from './Components/LoginRoutes/Login';
import Register from './Components/LoginRoutes/Register';
import BookDisplay from './Components/BooksDisplay/BookDisplay';

const App = () => {
  return (
    <>
      <NavbarComponent />
      <BookDisplay />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));