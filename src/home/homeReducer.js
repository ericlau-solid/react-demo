import { handleActions } from 'redux-actions';
import { SET_GRAVATAR_EMAIL, SET_FETCHED_STATUS } from './homeActions';

const initialState = {
  gravatarEmail: '',
  fetched: false,
};

export default handleActions({
  [SET_GRAVATAR_EMAIL]: (state, action) => ({
    ...state, gravatarEmail: action.payload,
  }),

  [SET_FETCHED_STATUS]: (state, action) => ({
    ...state, fetched: action.payload,
  }),
}, initialState);
