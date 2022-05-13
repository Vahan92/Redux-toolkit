import { message } from 'antd';
import { put, takeLatest } from 'redux-saga/effects';

import { client } from '../../modules/request';
import { CATEGORY_ACTIONS, successGetUser, successGetUsers } from '../actions/users';

interface ResponseGenerator {
  data?: any;
}

interface ICreate {
  name: string,
  job: string
}

interface IEdit extends ICreate {
  id: number
}

function* getUsers({ payload }: { payload: number, type: number }) {
  try {
    const data: ResponseGenerator = yield client.get(
      `users?page=${payload}`
    );
    yield put(successGetUsers(data.data));
  } catch (err) {
    message.error('Can not get users');
  }
}

function* deleteUser({ payload }: { payload: number, type: number }) {
  try {
    yield client.delete(`users/${payload}`);
    message.success('User Deleted');
  } catch (err) {
    message.error('Something went wrong');
  }
}

function* editUser({ payload: { id, name, job } }: { payload: IEdit, type: IEdit }) {
  try {
    yield client.post(`users/${id}`, { name, job });
    message.success('User Information Updated');
  } catch (err) {
    message.error('Something went wrong');
  }
}

function* createUser({ payload }: { payload: ICreate, type: ICreate }) {
  try {
    yield client.put('users', payload);
    message.success('User Created');
  } catch (err) {
    message.error('Something went wrong');
  }
}

function* getUser({ payload }: { payload: number, type: number }) {
  try {
    const data: ResponseGenerator = yield client.get(
      `users/${payload}`
    );
    yield put(successGetUser(data.data));
  } catch (err) {
    message.error('Something went wrong');
  }
}

function* UsersCaga() {
  yield takeLatest(CATEGORY_ACTIONS.ATTEMPT_TO_DELETE_USER, deleteUser);
  yield takeLatest(CATEGORY_ACTIONS.ATTEMPT_TO_GET_USERS, getUsers);
  yield takeLatest(CATEGORY_ACTIONS.ATTEMPT_TO_CREATE_USER, createUser);
  yield takeLatest(CATEGORY_ACTIONS.ATTEMPT_TO_EDIT_USER, editUser);
  yield takeLatest(CATEGORY_ACTIONS.ATTEMPT_TO_GET_USER, getUser);
}

export default UsersCaga;
