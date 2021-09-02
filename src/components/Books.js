/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBookRequest } from '../redux/books/post/bookReducer';
import { fetchBooks } from '../redux/books/get/getBooksReducer';
import Book from './Book';

function Books() {
  const dispatch = useDispatch();
  const booksData = useSelector(({ booksData }) => booksData.books);
  const [title, setTitle] = useState(' ');
  const [author, setAuthor] = useState(' ');
  const [category, setCategory] = useState(' ');
  const [errorMessage, setErrorMessage] = useState(' ');

  useEffect(() => {
    (async () => {
      await dispatch(fetchBooks());
    })();
  }, []);

  const submitBookToStore = (e) => {
    e.preventDefault();

    if (title && author && category) {
      dispatch(
        postBookRequest({
          id: uuidv4(),
          title,
          author,
          category,
        }),
      );
      setTitle('');
      setAuthor('');
      setCategory('');
    } else {
      setErrorMessage('Please fill all fields');
    }
  };

  return (
    <div>
      <h4>Bookstore CMS</h4>
      <div>
        {booksData.length < 1 ? (
          <p>No books found, please add some...</p>
        ) : (
          booksData
          && booksData.map((book) => (
            <Book
              key={book.item_id}
              id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          ))
        )}
      </div>
      <div>
        <form>
          <div>
            {errorMessage && <p className="errorMessage">{errorMessage}</p>}
          </div>
          <div>
            <input
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              value={author}
              placeholder="Author"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <select
              name="category"
              value={category}
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category:</option>
              <option value="action">Action</option>
              <option value="science fiction">Science Fiction</option>
              <option value="politics">Politics</option>
            </select>
          </div>
          <button type="submit" onClick={submitBookToStore}>
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default Books;
