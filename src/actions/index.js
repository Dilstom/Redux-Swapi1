// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const FETCHING = 'FETCHING';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export function fetchChars() {
 return dispatch => {
  dispatch({ type: FETCHING });
  axios
   .get('https://swapi.co/api/people/')
   .then(res => {
    // console.log('results: ', res.data.results);
    dispatch({ type: SUCCESS, payload: res.data.results });
   })
   .catch(err => {
    dispatch({ type: ERROR, payload: err });
   });
 };
}
