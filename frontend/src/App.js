import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.css';

import { AddBook, AdminPage, Book, BookDisplay, BooksMenu, EditBook, EditUser, ErrorPage, NavbarDisplay, TestBackend, UpdateAccount, UsersMenu } from './Pages';

const App = () => {
    return (
        <>
            <NavbarDisplay />
            <Routes>
                <Route exact index element={<BookDisplay />} />
                <Route path="test" element={<TestBackend />} />
                <Route path="book/:id" element={<Book />} />
                <Route path="user/update/:id" element={<UpdateAccount />} />
                <Route path="admin" element={<AdminPage />} />
                <Route path="admin/books" element={<BooksMenu />} />
                <Route path="admin/book/add" element={<AddBook />} />
                <Route path="admin/book/:id" element={<EditBook />} />
                <Route path="admin/users" element={<UsersMenu />} />
                <Route path="admin/user/:id" element={<EditUser />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;