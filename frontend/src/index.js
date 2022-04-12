import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.css';

import NavbarDisplay from './Components/NavbarDisplay/Navbar';
import TestBackend from './Components/TestBackend';
import BookDisplay from './Components/BooksDisplay/BookDisplay';

const App = () => {
  return (
    <>
      <NavbarDisplay />
      <BookDisplay />
    </>
  );
}
//<NavbarComponent />
//<BookDisplay />
ReactDOM.render(<App />, document.getElementById('root'));