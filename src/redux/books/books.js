import axios from 'axios';

// const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const ADD_BOOK_REQUEST = 'bookStore/books/ADD_BOOK_REQUEST';
const ADD_BOOK_SUCCESS = 'bookStore/books/ADD_BOOK_SUCCESS';
const ADD_BOOK_FAILURE = 'bookStore/books/ADD_BOOK_FAILURE';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

const initialState = [];

const addBookRequest = () => ({
  type: ADD_BOOK_REQUEST,
});

const addBookSuccess = (payload) => ({
  type: ADD_BOOK_SUCCESS,
  payload,
});

const addbookFailure = (payload) => ({
  type: ADD_BOOK_FAILURE,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const postBookRequest = ({
  title, author, category, id,
}) => (dispatch) => {
  dispatch(addBookRequest());
  axios.post(`${BASE_URL}/0zliRxTHnwjiUZLnAPLz/books`, {
    item_id: id,
    title,
    author,
    category,
  }).then((response) => {
    dispatch(addBookSuccess(response.data));
  }).catch((error) => {
    dispatch(addbookFailure(error));
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_SUCCESS:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export const allBooks = (state) => state.booksReducer;
export default reducer;
