import React, { lazy } from 'react';

import { Navigate } from 'react-router-dom';
const Home = lazy(() => import('./Home'));
const InfoPage = lazy(() => import('./InfoPage'));
const Login = lazy(() => import('./Login'));

export const PRIVATE_ROUTES = [
  {
    path: '/users',
    component: Home,
    key: 'home'
  },
  {
    path: '/user/:id',
    component: InfoPage,
    key: 'info'
  },
  {
    path: '*',
    component: () => <Navigate to="/users" />,
    key: 'matchAll'
  }
];

export const PUBLIC_ROUTES = [
  {
    path: '/login',
    component: Login,
    key: 'login'
  },
  {
    path: '*',
    component: () => <Navigate to="/login" />,
    key: 'matchAll'
  }
];
