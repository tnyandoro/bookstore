import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const ADD_BOOK_REQUEST = 'bookStore/books/ADD_BOOK_REQUEST';
const ADD_BOOK_SUCCESS = 'bookStore/books/ADD_BOOK_SUCCESS';
const ADD_BOOK_FAILURE = 'bookStore/books/ADD_BOOK_FAILURE';

const initialState = [];

const addBookRequest = () => ({
  type: ADD_BOOK_REQUEST,
});

export const addBookSuccess = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const AddBookRequest = ({
  title, author, catergory, id,
}) => (dispatch) => {
  dispatch(addBook({
    title, author, catergory, id,
  }));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export const allBooks = (state) => state.booksReducer;
export default reducer;
