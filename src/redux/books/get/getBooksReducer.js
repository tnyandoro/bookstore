import axios from 'axios';
import getBooksTypes from './getBooksTypes';
import getBooksActions from './getBooksActions';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appID = '8BeC6hhtibzqOPHKrDmH';

const initialState = {
  isLoading: false,
  books: [],
  error: '',
};

export const fetchBooks = () => (dispatch) => {
  dispatch(getBooksActions.getBooksRequest());
  axios.get(`${BASE_URL}/${appID}/books`)
    .then((response) => {
      dispatch(getBooksActions.getBooksSuccess(response.data));
    })
    .catch((error) => {
      dispatch(getBooksActions.getBooksFailure(error));
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
