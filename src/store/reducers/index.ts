import { combineReducers } from 'redux';
import { userAPI } from 'src/services/userService';

import loginReducer from './loginSlice';
import users from './users';


const rootReducer = combineReducers({
  users,
  loginReducer,
  [userAPI.reducerPath]: userAPI.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;