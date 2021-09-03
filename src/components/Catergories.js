// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { fetchBooks } from '../redux/books/get/getBooksReducer';

// function Catergories() {
//   const books = useSelector(({ books }) => books.books);

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   return (
//     <div>
//       <h1>Under Construction!!</h1>
//       {JSON.stringify(books)}
//     </div>
//   );
// }

// export default Catergories;

import React from 'react';

const Catergories = () => (
  <p className="under-construction">Under construction</p>
);

export default Catergories;
