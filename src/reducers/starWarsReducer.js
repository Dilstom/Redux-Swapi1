import { SUCCESS, ERROR, FETCHING } from '../actions';
const initialState = {
 characters: [],
 // Array characters, Boolean fetching, null error.
 fetching: false,
 error: '',
};
export const charsReducer = (state = initialState, action) => {
 switch (action.type) {
  // Fill me in with the important reducers
  // action types should be FETCHING, SUCCESS and FAILURE
  // your switch statement should handle all of these cases.
  case FETCHING:
   return { ...state, fetching: true, error: '', characters: [] };
  case SUCCESS:
   return { ...state, fetching: false, error: '', characters: action.payload };
  case ERROR:
   return { ...state, fetching: false, error: action.payload, characters: [] };

  default:
   return state;
 }
};
