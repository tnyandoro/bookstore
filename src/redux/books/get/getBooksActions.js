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

  return {
    getBooksRequest,
    getBooksSuccess,
    getBooksFailure,
  };
})();

export default getBooksActions;
