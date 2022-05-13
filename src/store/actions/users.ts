export const CATEGORY_ACTIONS = {
  ATTEMPT_TO_DELETE_USER: '@CATEGORY/ATTEMPT_TO_DELETE_USER',
  ATTEMPT_TO_CREATE_USER: '@CATEGORY/ATTEMPT_TO_CREATE_USER',
  ATTEMPT_TO_EDIT_USER: '@CATEGORY/ATTEMPT_TO_EDIT_USER',
  ATTEMPT_TO_GET_USERS: '@CATEGORY/ATTEMPT_TO_GET_USERS',
  ATTEMPT_TO_GET_USER: '@CATEGORY/ATTEMPT_TO_GET_USER',
  SUCCESS_GET_USERS: '@CATEGORY/SUCCESS_GET_USERS',
  SUCCESS_GET_USER: '@CATEGORY/SUCCESS_GET_USER',
};

export const attemptToDeleteUser = (payload: number) => {
  return {
    type: CATEGORY_ACTIONS.ATTEMPT_TO_DELETE_USER,
    payload,
  };
};

export const attemptToGetUsers = (payload: number) => {
  return {
    type: CATEGORY_ACTIONS.ATTEMPT_TO_GET_USERS,
    payload,
  };
};

export const attemptToCreateUser = (payload: number) => {
  return {
    type: CATEGORY_ACTIONS.ATTEMPT_TO_CREATE_USER,
    payload,
  };
};

export const attemptToEditUser = (payload: {name: string, job: string, id: number}) => {
  return {
    type: CATEGORY_ACTIONS.ATTEMPT_TO_EDIT_USER,
    payload,
  };
};

export const successGetUsers = (payload: any) => {
  return {
    type: CATEGORY_ACTIONS.SUCCESS_GET_USERS,
    payload,
  };
};

export const attemptToGetUser = (payload: string) => {
  return {
    type: CATEGORY_ACTIONS.ATTEMPT_TO_GET_USER,
    payload,
  };
};

export const successGetUser = (payload: any) => {
  return {
    type: CATEGORY_ACTIONS.SUCCESS_GET_USER,
    payload,
  };
};
