import React, { useEffect, useState } from 'react';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Popconfirm, Table, Pagination, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { userAPI } from '../../services/userService';
import {
  attemptToDeleteUser,
  attemptToGetUsers,
} from '../../store/actions/users';
import CreateUser from './createUser';
import { Container, TableInfo, Total, Upper } from './styles';

function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state: any) => state);
  const usersList = users?.result?.data.map((user) => ({
    ...user,
    key: user.email,
  }));
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [editableUser, setEditableUser] = useState<any>({});

  const {
    data: usersQuery,
    error,
    isLoading,
    refetch,
  } = userAPI.useFetchAllPostsQuery(currentPage);

  const usersListQuery = usersQuery?.data.map((user) => ({
    ...user,
    key: user.email,
  }));

  const [deleteUserQuery, { error : deleteError }] = userAPI.useDeletePostMutation();

  useEffect(() => {
    dispatch(attemptToGetUsers(currentPage));
  }, []);

  const editUser = (userData: { name: string; job: string; id: number }) => {
    const user = Object.keys(userData).map((data) => ({
      name: [data],
      value: userData[data],
    }));
    setEditableUser({ user, id: userData.id });
    setIsModalVisible(true);
  };

  const columns: any = [
    {
      title: 'Index',
      dataIndex: 'id',
      key: 'index',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (text, { id, avatar }) => (
        <img onClick={() => navigate(`/user/${id}`)} src={avatar} width="40" height="40" alt="logo" />
      ),
    },
    {
      title: 'Full Name',
      dataIndex: 'full_name',
      key: 'first_name',
      render: (text, { first_name, last_name, id }) => (
        <p
          style={{ cursor: 'pointer' }}
          onClick={() => navigate(`/user/${id}`)}
        >
          {`${first_name} ${last_name}`}</p>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (text, { first_name, id }) => (
        <>
          <EditOutlined
            onClick={() => editUser({ name: first_name, job: '', id })}
            style={{ color: 'yellow', marginRight: '10px' }}
          />
          <Popconfirm
            title="Are you sure you want to delete this user?"
            placement="left"
            onConfirm={() => {
              // dispatch(attemptToDeleteUser(id));
              deleteUserQuery(id);
            }}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined style={{ color: 'red' }} />
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <Container>
      <Upper>
        <Button type="primary" onClick={() => setIsModalVisible(true)}>
          Add user
        </Button>
      </Upper>
      <Table
        columns={columns}
        pagination={false}
        // dataSource={usersList}
        dataSource={usersListQuery}
        key={columns.key}
      />
      <TableInfo>
        <Pagination
          size="small"
          // total={users?.result?.total}
          total={usersQuery?.total}
          current={currentPage}
          onChange={(page) => {
            setCurrentPage(page);
            dispatch(attemptToGetUsers(page));
          }}
        />
        <Total>
          <p>
            {/* Totoal number of users <span>{users?.result?.total}</span> */}
            Totoal number of users <span>{usersQuery?.total}</span>
          </p>
        </Total>
      </TableInfo>
      <CreateUser
        editableUser={editableUser}
        setEditableUser={setEditableUser}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </Container>
  );
}

export default Users;
