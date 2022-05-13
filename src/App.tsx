import React, { Suspense } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './containers/routes';
import store from './store/store';

function Containers() {
  const registered =
    JSON.parse(localStorage.getItem('user'))?.data?.token ||
    JSON.parse(localStorage.getItem('user'))?.token;

  return (
    <Provider store={store}>
      <div className="app">
        <div>
          <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading</p>}>
            <BrowserRouter>
              <Routes>
                {(registered ? PRIVATE_ROUTES : PUBLIC_ROUTES).map((route) => (
                  <Route
                    key={route.key}
                    path={`${route.path}`}
                    element={<route.component />}
                  />
                ))}
              </Routes>
            </BrowserRouter>
          </Suspense>
        </div>
      </div>
    </Provider>
  );
}

export default Containers;
