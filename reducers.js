import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
  searchField: ''
}
// predictable state management:
// 1. single source of the truth
// 2. state is read only
// 3. changes using only pure function
export const SearchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      // copies all enumerable own properties from
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
}