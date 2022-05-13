import { ACTION_STATUSES } from '../../utils/constants';
import { CATEGORY_ACTIONS } from '../actions/users';

const SUCCESS_GET_USERS = (state: any, { payload }: any) => {
  return {
    ...state,
    status: ACTION_STATUSES.SUCCEED,
    result: payload,
  };
};

const SUCCESS_GET_USER = (state: any, { payload }: any) => {
  return {
    ...state,
    status: ACTION_STATUSES.SUCCEED,
    currentUser: payload,
  };
};

export default (state: any = [], action: any) => {
  switch (action.type) {
  case CATEGORY_ACTIONS.SUCCESS_GET_USERS:
    return SUCCESS_GET_USERS(state, action);
  case CATEGORY_ACTIONS.SUCCESS_GET_USER:
    return SUCCESS_GET_USER(state, action);
  default:
    return state;
  }
};
