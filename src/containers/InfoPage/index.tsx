import React, { useEffect } from 'react';

import { Loading3QuartersOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { attemptToGetUser } from '../../store/actions/users';
import { Fields } from './styles';

function InfoPage() {
  const location = useLocation();
  const id = location.pathname.substring(
    location.pathname.lastIndexOf('/') + 1
  );
  const dispatch = useDispatch();
  const { users } = useSelector((state: any) => state);
  const userFields = users?.currentUser?.data;

  useEffect(() => {
    dispatch(attemptToGetUser(id));
  }, [id]);

  return (
    <Fields>
      {userFields ? (
        <ul>
          {Object.keys(userFields)
            .sort((a, b) => a.localeCompare(b))
            .map((key) => {
              return (
                <li key={key}>
                  <span>{key.replace(/_/g, ' ')}</span>
                  {key === 'avatar' ? (
                    <img src={userFields[key]} alt="logo" />
                  ) : (
                    <span>{userFields[key]}</span>
                  )}
                </li>
              );
            })}
        </ul>
      ) : (
        <Loading3QuartersOutlined
          style={{ fontSize: 50, color: '#359eff' }}
          spin
        />
      )}
    </Fields>
  );
}

export default InfoPage;
