export const LOGIN_ACTION = {
  ATTEMPT_TO_LOGIN: '@LOGIN/ATTEMPT_TO_LOGIN',
};

export const attemptToLogin = (payload: {email: string, password: string}) => {
  return {
    type: LOGIN_ACTION.ATTEMPT_TO_LOGIN,
    payload,
  };
};

