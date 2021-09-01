/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBookRequest } from '../redux/books/post/bookReducer';
import { fetchBooks } from '../redux/books/get/getBooksReducer';
// import Book from './Book';

// const mapState = ({ books }) => ({
//   books,
// });

function Books() {
  const dispatch = useDispatch();
  const books = useSelector(({ books }) => books.books);
  const [title, setTitle] = useState(' ');
  const [author, setAuthor] = useState(' ');
  const [category, setCategory] = useState(' ');

  useEffect(() => {
    fetchBooks();
  }, []);

  const submitBookToStore = (e) => {
    e.preventDefault();
    dispatch(postBookRequest({
      title,
      author,
      id: uuidv4(),
      category,
    }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  // const removeBookFromStore = (e) => {
  //   dispatch(removeBook({ id: e.target.id }));
  // };

  return (
    <div>
      <h4>ADD A NEW BOOK</h4>
      <div>
        <ul>
          {/* { books && books.map((book) => (
            <Book
              title={book.title}
              author={book.author}
              id={book.id}
              key={book.id}
              // removeBookFromStore={removeBookFromStore}
            />
          ))} */}

          {JSON.stringify(books)}
        </ul>
      </div>
      <div>
        <form>
          <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
          <div>
            <label htmlFor="category">Book Catergory: </label>
            <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
              <option value="">Catergory One</option>
              <option value="">Catergory Two</option>
              <option value="">Catergory Three</option>
            </select>
          </div>
          <button type="submit" onClick={submitBookToStore}>Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default Books;
