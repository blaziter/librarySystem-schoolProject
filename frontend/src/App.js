import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.css';

import { Account, AddBook, AdminPage, Book, BookDisplay, BooksMenu, CartDisplay, EditBook, EditUser, ErrorPage, NavbarDisplay, UpdateAccount, UsersMenu } from './Pages';

const App = () => {
    return (
        <>
            <NavbarDisplay />
            <Routes>
                <Route exact index element={<BookDisplay />} />
                <Route path='page/:page' element={<BookDisplay />} />
                <Route path="admin">
                    <Route index element={<AdminPage />} />
                    <Route path="books" element={<BooksMenu />} />
                    <Route path="book/add" element={<AddBook />} />
                    <Route path="book/:id" element={<EditBook />} />
                    <Route path="users" element={<UsersMenu />} />
                    <Route path="user/:id" element={<EditUser />} />
                </Route>
                <Route path="book/:id" element={<Book />} />
                <Route path="cart">
                    <Route path=":id" element={<CartDisplay />} />
                    <Route path="checkout" element={<CartDisplay />} />
                </Route>
                <Route path="user/:id">
                    <Route index element={<Account />} />
                    <Route path="update" element={<UpdateAccount />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;