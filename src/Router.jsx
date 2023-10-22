import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { useSession } from './stores/useSession';

import DetailView from './components/Ejercicio 14/DetailView';
import HomeView from './components/Ejercicio 14/HomeView';
import LoginView from './components/Ejercicio 14/LoginView';
import RegisterView from './components/Ejercicio 14/RegisterView';
import AdminView from './components/Ejercicio 14/AdminView';
import ErrorView from './components/Ejercicio 14/ErrorView';


import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';

const Router = () => {
  const { user, isLoggedIn } = useSession();

  return (
    <BrowserRouter>
      <Navbar />
      <main className='container py-5'>
        <Routes>
          <Route exact path='/' element={<HomeView />} />
          <Route exact path='/detail/:id' element={<DetailView />} />
          <Route
            exact path='/login'
            element={isLoggedIn ? <Navigate to='/' /> : <LoginView />}
          />
          <Route
            path='/register'
            element={isLoggedIn ? <Navigate to='/' /> : <RegisterView />}
          />
          <Route
            exact path='/admin'
            element={user?.isAdmin ? <AdminView /> : <Navigate to='/' />}
          />
          <Route exact path='*' element={<ErrorView />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;