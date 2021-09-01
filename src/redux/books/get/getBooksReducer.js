import getBooksTypes from './getBooksTypes';

const initialState = {
  isLoading: false,
  books: [],
  error: '',
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
