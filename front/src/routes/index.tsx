import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/login';
import CreateTraining from '../pages/createTraining';
import Home from '../pages/home';
import useToken from '../hooks/useToken';

const NotFound = () => {
  return (
    <p>Não encontrado</p>
  )
}

const ProtectedRouteGuard = ({ children }: any) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return <>
    {children}
  </>;
}

function RoutesApp() {
  return (
    <>
      <Routes>

        <Route path='/' element={<Login />} />

        <Route path='/home' element={<ProtectedRouteGuard><Home /></ProtectedRouteGuard>} />
        <Route path='/createTraining' element={<ProtectedRouteGuard><CreateTraining /> </ProtectedRouteGuard>} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RoutesApp;