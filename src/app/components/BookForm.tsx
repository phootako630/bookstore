import React, { useState } from 'react';
import { Book } from '@/store/bookSlice';
import { generateUUID } from '@/utils/generateUUID';

interface BookFormProps {
    onSubmit: (book: Book) => void;
    initialBook?: Book | null;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, initialBook }) => {
    const [book, setBook] = useState(initialBook || {
        id: generateUUID(),
        name: '',
        price: 0,
        category: '',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBook(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(book);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="name"
                value={book.name}
                onChange={handleChange}
                placeholder="Book Name"
                className="w-full p-2 border rounded"
            />
            <input
                type="number"
                name="price"
                value={book.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full p-2 border rounded"
            />
            <input
                type="text"
                name="category"
                value={book.category}
                onChange={handleChange}
                placeholder="Category"
                className="w-full p-2 border rounded"
            />
            <textarea
                name="description"
                value={book.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full p-2 border rounded"
            />
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                {initialBook ? 'Update' : 'Add'}
            </button>
        </form>

    );
}

export default BookForm;
