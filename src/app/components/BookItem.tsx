import React from 'react';
import { Book } from '@/store/bookSlice';

interface BookItemProps {
    book: Book;
    onDelete: (id: number | string) => void;
    onEdit: (book: Book) => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, onDelete, onEdit }) => {
    return (
        <div className="border bg-white p-6 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-3 text-blue-600">{book.name}</h2>
            <p className="text-gray-700 mb-2">
                <span className="font-medium">Price:</span> ${book.price}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-medium">Category:</span> {book.category}
            </p>
            <p className="text-gray-600 italic mb-4">{book.description}</p>
            <div className="flex justify-between">
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors duration-300" onClick={() => onDelete(book.id)}>Delete</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-300" onClick={() => onEdit(book)}>Edit</button>
            </div>
        </div>
    );
}

export default BookItem;
