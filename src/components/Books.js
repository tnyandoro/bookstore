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

  useEffect(() => {
    (async () => {
      await dispatch(fetchBooks());
    })();
  }, []);

  const submitBookToStore = (e) => {
    e.preventDefault();
    dispatch(postBookRequest({
      id: uuidv4(),
      title,
      author,
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
      <h4>Bookstore CMS</h4>
      <div>
        <ul>
          {booksData.length < 1 ? <li>Loading....</li> : booksData
            && booksData.map((book) => (
              <Book
                key={book.id}
                title={book.title}
                author={book.author}
              />
            ))}
        </ul>
      </div>
      <div>
        <form>
          <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
          <div>
            <label htmlFor="category">Book Catergory: </label>
            <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
              <option value="">Action</option>
              <option value="">Science Fiction</option>
              <option value="">Politics</option>
            </select>
          </div>
          <button type="submit" onClick={submitBookToStore}>Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default Books;
