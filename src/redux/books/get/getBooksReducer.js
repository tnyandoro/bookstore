import axios from 'axios';
import getBooksTypes from './getBooksTypes';
import {
  getBooksRequest,
  getBooksSuccess,
  getBooksFailure,
} from './getBooksActions';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appID = '8BeC6hhtibzqOPHKrDmH';

const initialState = {
  isLoading: false,
  books: [],
  error: '',
};

export const fetchBooks = () => async (dispatch) => {
  dispatch(getBooksRequest());
  axios.get(`${BASE_URL}/${appID}/books`, { mode: 'cors' })
    .then((response) => {
      const books = Object.keys(response.data).map((propertyName) => {
        const incomingbook = response.data[propertyName][0];
        return {
          item_id: propertyName,
          title: incomingbook.title,
          category: incomingbook.category,
        };
      });
      dispatch(getBooksSuccess(books));
    }).catch((error) => {
      dispatch(getBooksFailure(error));
    });
};

const getBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case getBooksTypes.GET_BOOKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case getBooksTypes.GET_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        books: action.payload,
        error: '',
      };

    case getBooksTypes.GET_BOOKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        books: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default getBooksReducer;
