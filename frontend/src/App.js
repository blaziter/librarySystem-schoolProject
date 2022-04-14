import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.css';

import TestBackend from './Components/TestBackend';
import ErrorPage from './Components/Error/ErrorPage';
import AdminPage from './Components/AdminDisplay/AdminPage';
import NavbarDisplay from './Components/NavbarDisplay/Navbar';
import BookDisplay from './Components/BooksDisplay/BookDisplay';
import AddBook from './Components/AdminDisplay/ManageBooks/AddBook';
import EditBook from './Components/AdminDisplay/ManageBooks/EditBook';


const App = () => {
    return (
        <>
            <NavbarDisplay />
            <Routes>
                <Route exact index element={<BookDisplay />} />
                <Route path="test" element={<TestBackend />} />
                <Route path="book/add" element={<AddBook />} />
                <Route path="book/edit" element={<EditBook />}/>
                <Route path="*" element={<AdminPage />} />
            </Routes>
        </>
    );
}

export default App;