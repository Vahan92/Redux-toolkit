/* eslint-disable no-unused-vars */
import React from 'react';

import { Form, Input, message, Modal } from 'antd';
import { useDispatch } from 'react-redux';

import { userAPI } from '../../services/userService';
import { attemptToCreateUser, attemptToEditUser } from '../../store/actions/users';


interface ICreateUser {
  isModalVisible: boolean;
  setIsModalVisible(d: boolean): void;
  setEditableUser(d: any): void;
  editableUser: {user: Array<any>, id: number};
}

function CreateUser({ isModalVisible, setIsModalVisible, editableUser, setEditableUser }: ICreateUser) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [createUserQuery, { error : createError }] = userAPI.useCreatePostMutation();
  const [editUserQuery, { error : updateError }] = userAPI.useUpdatePostMutation();

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditableUser({});
    form.resetFields();
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      // dispatch(editableUser.id ? attemptToEditUser({ ...values, id: editableUser.id }) : attemptToCreateUser(values));
      editableUser.id ? editUserQuery({ ...values, id: editableUser.id }) : createUserQuery(values);
      form.resetFields();
      setIsModalVisible(false);
      setEditableUser({});
    });
  };

  createError || updateError && message.error('Something went wrong');

  return (
    <Modal
      visible={isModalVisible}
      title="Create a new user"
      okText={editableUser.id ? 'Update' : 'Create'}
      cancelText="Cancel"
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <Form
        form={form}
        fields={editableUser.user}
        layout="vertical"
        name="user"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input the name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="job"
          label="Job"
          rules={[
            {
              required: true,
              message: 'Please input the job!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CreateUser;