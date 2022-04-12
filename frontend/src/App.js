import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.css';

import TestBackend from './Components/TestBackend';
import NavbarDisplay from './Components/NavbarDisplay/Navbar';
import BookDisplay from './Components/BooksDisplay/BookDisplay';
import ErrorPage from './Components/Error/ErrorPage';

const App = () => {
    return (
        <>
            <NavbarDisplay />
            <Routes>
                <Route exact index element={<BookDisplay />} />
                <Route path="test" element={<TestBackend />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;