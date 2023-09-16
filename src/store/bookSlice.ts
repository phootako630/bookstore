import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Book {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
}

const initialState: Book[] = [
    {
        id: 1,
        name: 'The Great Gatsby',
        price: 10.99,
        category: 'Fiction',
        description: 'A classic novel about the American dream.'
    },
    {
        id: 2,
        name: 'Moby Dick',
        price: 12.99,
        category: 'Adventure',
        description: 'The epic tale of Captain Ahab\'s obsession with the white whale.'
    },
];



const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<Book>) => {
            state.push(action.payload);
        },
        deleteBook: (state, action: PayloadAction<number>) => {
            return state.filter(book => book.id !== action.payload);
        },
        updateBook: (state, action: PayloadAction<Book>) => {
            const index = state.findIndex(book => book.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
