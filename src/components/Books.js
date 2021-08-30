import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook, removeBook } from '../redux/books/books';

function Books() {
  const dispatch = useDispatch();
  const id = uuid();
  const title = useRef(null);
  const author = useRef(null);

  const submitBookToStore = () => {
    dispatch(addBook(title.current.value, author.current.value, id));
  };

  return (
    <div>
      <input ref={title} type="text" placeholder="Title" />
      <input ref={author} type="text" placeholder="Author " />
      <button type="submit" onClick={submitBookToStore}>Add Book</button>
      <button type="submit" onClick={() => dispatch(removeBook(id))}>Remove Book</button>
    </div>
  );
}

export default Books;
