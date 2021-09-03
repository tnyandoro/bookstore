import React, { useState } from 'react';
import PropTypes from 'prop-types';
import deleteBook from '../redux/books/delete/deleteBookReducer';

function Book({
  title, category, id,
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
            <p>
              Book Category:
              {' '}
              {category}
              {' '}
            </p>
            <br />
            Book Title:
            {' '}
            {title}
            {' '}
            <br />
            Book Author: Not Set
            <br />
            <button id={id} type="button" onClick={() => handleDeleteBook(id)}>
              Delete Book
            </button>
          </p>
        </div>
      </div>
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
