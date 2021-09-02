import axios from 'axios';
import bookTypes from './bookTypes';
import bookActions from './bookActions';
// import bookStoreUrl from '../../utils';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appID = '8BeC6hhtibzqOPHKrDmH';

const initialState = {
  isLoading: false,
  message: '',
  error: '',
};

export const postBookRequest = ({
  title, author, category, id,
}) => (dispatch) => {
  dispatch(bookActions.addBookRequest());
  axios.post(`${BASE_URL}/${appID}/books`, {
    item_id: id,
    title,
    author,
    category,
  }).then((response) => {
    dispatch(bookActions.addBookSuccess(response.data));
    window.location.reload();
  }).catch((error) => {
    dispatch(bookActions.addbookFailure(error));
  });
};

const addBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case bookTypes.ADD_BOOK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case bookTypes.ADD_BOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
        error: '',
      };

    case bookTypes.ADD_BOOK_FAILURE:
      return {
        ...state,
        isLoading: false,
        message: '',
        error: action.payload,
      };

    default:
      return state;
  }
};

export default addBookReducer;
