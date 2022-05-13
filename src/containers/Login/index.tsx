import React, { useEffect, useState } from 'react';

import { Button, Form, Input } from 'antd';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { attemptToLogin } from '../../store/actions/login';
import { fetchUsers } from '../../store/reducers/ActionCreators';
import { LoginWrapper } from './styles';

function Login() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const { error, isLoading, data } = useAppSelector(state => state.loginReducer);

  useEffect(() => {
    if (data.token) {
      debugger;
      localStorage.setItem('user', JSON.stringify(data));
      window.location.href = '/';
    }
  }, [data.token]);


  const handleFinish = (values) => {
    setLoading(true);
    // dispatch(attemptToLogin(values));
    dispatch(fetchUsers(values));
  };

  return (
    <LoginWrapper>
      <Form
        layout="vertical"
        name="login"
        onFinish={handleFinish}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              min: 6,
              message: 'Password must have at least 6 letters!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
        >
          <Button
            type="primary"
            // loading={loading}
            loading={isLoading}
            htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </LoginWrapper>
  );
}

export default Login;
