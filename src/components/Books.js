import React, { useDispatch, useRef } from 'react-redux';
import uuid from 'react-uuid';
import { addBook, removeBook } from './redux/books/books';

function Books() {
  const dispatch = useDispatch();
  const id = uuid();
  const title = useRef(null);
  const author = useRef(null);

  const submitBookToStore = () => {
    const newBook = {
      id,
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  return (
    <div>
      <input ref={title} type="text" placeholder="Title" />
      <input ref={author} type="text" placeholder="Author " />
      <button type="submit" onClick={submitBookToStore}>Add Book</button>
    </div>
  );
}

export default Books;
