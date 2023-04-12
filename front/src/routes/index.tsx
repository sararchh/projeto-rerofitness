import { Routes, Route } from 'react-router-dom';

import Login from '../pages/login';
import CreateTraining from '../pages/createTraining';
import Home from '../pages/home';

const NotFound = () => {
  return (
    <p>Não encontrado</p>
  )
}

//TODO tratamento de rotas privadas

function RoutesApp() {
  return (
    <>
      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/createTraining' element={<CreateTraining />} />
        <Route path='/home' element={<Home />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RoutesApp;