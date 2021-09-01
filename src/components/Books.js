/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBookRequest } from '../redux/books/post/bookReducer';
// import Book from './Book';

function Books() {
  const dispatch = useDispatch();
  // const books = useSelector(allBooks);
  const [title, addTitle] = useState(' ');
  const [author, addAuthor] = useState(' ');
  const [category, setCategory] = useState(' ');

  const addBookTitle = (e) => {
    addTitle(e.target.value);
  };

  const addBookAuthor = (e) => {
    addAuthor(e.target.value);
  };

  const addBookCategory = (e) => {
    setCategory(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    dispatch(postBookRequest({
      title, author, id: uuidv4(), category,
    }));
    addTitle('');
    addAuthor('');
    setCategory('');
  };

  // const removeBookFromStore = (e) => {
  //   dispatch(removeBook({ id: e.target.id }));
  // };

  return (
    <div>
      <h4>ADD A NEW BOOK</h4>
      <div>
        {/* <ul>
          { books && books.map((book) => (
            <Book
              title={book.title}
              author={book.author}
              id={book.id}
              key={book.id}
              removeBookFromStore={removeBookFromStore}
            />
          ))}
        </ul> */}
      </div>
      <div>
        <form>
          <input type="text" placeholder="Title" onChange={addBookTitle} />
          <input type="text" placeholder="Author" onChange={addBookAuthor} />
          <div>
            <label htmlFor="category">Book Catergory: </label>
            <select name="category" id="category" onChange={addBookCategory}>
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
