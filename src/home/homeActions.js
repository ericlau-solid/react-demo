import { createAction } from 'redux-actions';

export const SET_GRAVATAR_EMAIL = 'HOME__SET_GRAVATAR_EMAIL';
export const SET_FETCHED_STATUS = 'HOME__SET_FETCHED_STATUS';

export const setGravatarEmail = createAction(SET_GRAVATAR_EMAIL);
export const setFetchedStatus = createAction(SET_FETCHED_STATUS);
