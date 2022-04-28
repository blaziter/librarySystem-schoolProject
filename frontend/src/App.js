import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.css';

import { Account, AddBook, AdminPage, Book, BookDisplay, BooksMenu, CartDisplay, Checkout, EditBook, EditUser, ErrorPage, NavbarDisplay, UpdateAccount, UsersMenu } from './Pages';

const App = () => {
    return (
        <>
            <NavbarDisplay />
            <Routes>
                <Route exact index element={<BookDisplay />} />
                <Route path='page/:page' element={<BookDisplay />} />
                <Route path="admin">
                    <Route index element={<AdminPage />} />
                    <Route path="books">
                        <Route index element={<BooksMenu />} />
                        <Route path=":page" element={<BooksMenu />} />
                    </Route>
                    <Route path="book/add" element={<AddBook />} />
                    <Route path="book/:id" element={<EditBook />} />
                    <Route path="users">
                        <Route index element={<UsersMenu />} />
                        <Route path=":page" element={<UsersMenu />} />
                    </Route>
                    <Route path="user/:id" element={<EditUser />} />
                </Route>
                <Route path="book/:id" element={<Book />} />
                <Route path="cart">
                    <Route path=":id">
                        <Route index element={<CartDisplay />} />
                        <Route path="checkout" element={<Checkout />} />
                    </Route>
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