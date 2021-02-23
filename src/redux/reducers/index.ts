import {combineReducers} from 'redux';

import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import welcomeReducer from './welcome.reducer';

const reducers = {
  authReducer,
  userReducer,
  welcomeReducer,
};

const appReducer = combineReducers(reducers);

export const rootReducer = (state: any, action: any) => {
  if (action.type === 'USER_LOGGED_OUT_SUCCESS') {
    state = {welcomeReducer: {isWelcomeComplete: true}};
  }

  return appReducer(state, action);
};
