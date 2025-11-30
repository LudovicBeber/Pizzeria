import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom";
import PizzaCreate from './pages/pizza/PizzaCreate';
import PizzaEdit from './pages/pizza/PizzaEdit';
import PizzaList from './pages/pizza/PizzaList';
import IngredientList from './pages/ingredient/IngredientList';
import IngredientCreate from './pages/ingredient/IngredientCreate';
import IngredientEdit from './pages/ingredient/IngredientEdit';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import Button from './components/Button';
import { useAppStore } from './stores/app.store';
import { apiService } from './main';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(localStorage.getItem('accessToken'));
  const { accessToken, setAccessToken } = useAppStore();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    apiService.updateAccessToken("");
    setAccessToken("");
  };

  useEffect(() => {
    if (accessToken?.length) {
      // Vérifier la validité du token via un appel API
      apiService.updateAccessToken(accessToken);
      setIsLoggedIn(true);

      /**
       * Si jamais le token est invalide ou a expiré alors :
       * setAccessToken("");
       * localStorage.removeItem("accessToken");
       * apiService.updateAccessToken("");
       */
    } else {
      setIsLoggedIn(false);
    }
  }, [accessToken]);

  return (
    <BrowserRouter>
      <div className="h-screen w-screen flex flex-col">
        <header className='h-[100px] flex items-center justify-between px-4 pb-3'>
          <div className='flex items-center h-full'>
            <h1 className='font-bold text-6xl'>Pizzeria</h1>
          </div>
          <nav className='flex gap-6 pr-4'>
            <NavLink to="/pizzas" className='text-4xl font-medium hover:text-blue-600'>Pizzas</NavLink>
            <div className='bg-gray-500 w-[2px]' />
            <NavLink to="/ingredients" className='text-4xl font-medium hover:text-blue-600'>Ingrédients</NavLink>
          </nav>
          {!isLoggedIn ? (
            <Button className={""} type={"button"} link={"/auth/sign-in"}>
              Connexion
            </Button>
          ) : (
            <div className="flex gap-2 items-center">
              <p className="text-white">Vous êtes connecté.</p>
              <Button className={""} type={"button"} link={null} onClick={() => handleLogout()}>
                Se déconnecter
              </Button>
            </div>
          )}
        </header>
        <main className='flex-1 bg-gray-200'>
          <Routes>
            {!isLoggedIn && (
              <Route path="/auth">
                <Route path="sign-up" element={<SignUp />} />
                <Route path="sign-in" element={<SignIn />} />
              </Route>
            )}
            <Route path='/pizzas'>
              <Route index element={<PizzaList />} />
              <Route path='create' element={<PizzaCreate />} />
              <Route path='edit/:id' element={<PizzaEdit />} />
              <Route path='*' element={<Navigate to={'/pizzas'} />} />
            </Route>
            <Route path='/ingredients'>
              <Route index element={<IngredientList />} />
              <Route path='create' element={<IngredientCreate />} />
              <Route path='edit/:id' element={<IngredientEdit />} />
              <Route path='*' element={<Navigate to={'/ingredients'} />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
