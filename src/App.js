import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { HomePage } from 'views/HomePage';
import Layout from 'components/Layout';

const AsyncLoginPage = lazy(() => import('views/Login'));
const AsyncRegistrationPage = lazy(() => import('views/Registration'));
const AsyncContactsPage = lazy(() => import('views/Contacts'));


export default function App() {
  

  return <Suspense
      fallback={
        <Loader
          type="TailSpin"
          color="#f19816"
          height={100}
          width={100}
          timeout={3000} //3 secs
          style={{ textAlign: 'center', padding: '100px' }}
        />
      }
    >
        <Routes>
            <Route path="*" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="register" element={<AsyncRegistrationPage />} />
              <Route path="login" element={<AsyncLoginPage />}/>
              <Route path="contacts" element={<AsyncContactsPage />}/>
              <Route path="*" element={<Navigate to={'/'} />} />
            </Route>
        </Routes>
    </Suspense>
} 



