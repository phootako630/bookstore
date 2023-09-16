"use client";

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { addBook, deleteBook, updateBook, Book } from '@/store/bookSlice';
import Modal from './components/Modal';
import BookItem from './components/BookItem';
import BookForm from './components/BookForm';

const MainPage: React.FC = () => {
    const dispatch = useDispatch();
    const books = useSelector((state: RootState) => state.books);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [currentBook, setCurrentBook] = useState<Book | null>(null);

    const handleAddOrUpdateBook = (book: Book) => {
        if (currentBook) {
            dispatch(updateBook(book));
        } else {
            dispatch(addBook(book));
        }
        setIsFormOpen(false);
        setCurrentBook(null);
    };

    const handleEditBook = (book: Book) => {
        setCurrentBook(book);
        setIsFormOpen(true);
    };

    const handleDeleteBook = (id: string) => {
        dispatch(deleteBook(id));
    };


    return (
        <div className="container mx-auto p-8">
            <button onClick={() => setIsFormOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mb-4 rounded">
                Add Book
            </button>
            {isFormOpen && (
                <Modal onClose={() => setIsFormOpen(false)}>
                    <BookForm
                        onSubmit={handleAddOrUpdateBook}
                        initialBook={currentBook}
                    />
                </Modal>
            )}
            {books.map(book => (
                <BookItem
                    key={book.id}
                    book={book}
                    onDelete={handleDeleteBook}
                    onEdit={handleEditBook}
                />
            ))}
        </div>

    );
}

export default MainPage;
