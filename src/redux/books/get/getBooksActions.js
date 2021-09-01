import axios from 'axios';
import bookStoreUrl from '../../utils';
import getBooksTypes from './getBooksTypes';

const getBooksActions = (() => {
  const getBooksRequest = () => ({
    type: getBooksTypes.GET_BOOKS_REQUEST,
  });

  const getBooksSuccess = (books) => ({
    type: getBooksTypes.GET_BOOKS_SUCCESS,
    payload: books,
  });

  const getBooksFailure = (error) => ({
    type: getBooksTypes.GET_BOOKS_FAILURE,
    payload: error,
  });

  const fetchBooks = () => (dispatch) => {
    dispatch(getBooksRequest());
    axios
      .get(bookStoreUrl)
      .then((response) => {
        dispatch(getBooksSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getBooksFailure(error));
      });
  };

  return fetchBooks;
})();

export default getBooksActions;
