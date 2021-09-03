import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BookProgress from './BookProgress';
import deleteBook from '../redux/books/delete/deleteBookReducer';

function Book({
  title, category, id, progress,
}) {
  const [message, setMessage] = useState(' ');

  const handleDeleteBook = async () => {
    const data = await deleteBook(id);
    setMessage(data);
  };

  return (
    <li className="book-list">
      <div className="book-info">
        <p>{ message && message }</p>
        <div>
          <p>
            <p className="book-category">{category}</p>
            <h4 className="book-title">{title}</h4>
            <p className="book-author">Book Author: Not Set</p>
            <button id={id} type="button" onClick={() => handleDeleteBook(id)}>
              Delete Book
            </button>
          </p>
        </div>
      </div>
      <BookProgress progress={progress} />
    </li>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progress: BookProgress.propTypes.progress.isRequired,
};

export default Book;
