import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import Header from './components/header/Header';
import Reviews from './components/reviews/Reviews';
import RestrictedAccess from './components/restricted/RestrictedAccess';

const PrivateRoute = ({ element: Component }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? Component : <RestrictedAccess />;
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/reviews/:movieId"
          element={<PrivateRoute element={<Reviews />} />}
        />
      </Routes>
    </>
  );
}

export default App;
