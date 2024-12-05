import express from 'express';
import {
    addBook,
    getAllBooks,
    getBook,
    updateBook,
    deleteBook
} from '../controllers/bookController.js'


const router = express.Router();


// Route to add a Book
router.post('/', addBook);

// Route to get all Books

router.get('/', getAllBooks)

// Route to get a Book

router.get('/:id', getBook)

// Route to update a Book
router.put('/:id', updateBook)

// Route to delete a Book
router.delete('/:id', deleteBook)

export default router;