import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.css';

import { Account, AddBook, AdminPage, Book, BookDisplay, BooksMenu, EditBook, EditUser, ErrorPage, NavbarDisplay, UpdateAccount, UsersMenu } from './Pages';

const App = () => {
    return (
        <>
            <NavbarDisplay />
            <Routes>
                <Route exact index element={<BookDisplay />} />
                <Route path="book/:id" element={<Book />} />
                <Route path="user/:id">
                    <Route index element={<Account />} />
                    <Route path="update" element={<UpdateAccount />} />
                </Route>
                <Route path="admin">
                    <Route index element={<AdminPage />} />
                    <Route path="books" element={<BooksMenu />} />
                    <Route path="book/add" element={<AddBook />} />
                    <Route path="book/:id" element={<EditBook />} />
                    <Route path="users" element={<UsersMenu />} />
                    <Route path="user/:id" element={<EditUser />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;