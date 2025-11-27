import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom";
import PizzaCreate from './pages/pizza/PizzaCreate';
import PizzaEdit from './pages/pizza/PizzaEdit';
import PizzaList from './pages/pizza/PizzaList';
import IngredientList from './pages/ingredient/IngredientList';
import IngredientCreate from './pages/ingredient/IngredientCreate';
import IngredientEdit from './pages/ingredient/IngredientEdit';

function App() {
  const [count, setCount] = useState(0)

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
        </header>
        <main className='flex-1 bg-gray-200'>
          <Routes>
            <Route path='/pizzas'>
              <Route path='' element={<PizzaList />} />
              <Route path='create' element={<PizzaCreate />} />
              <Route path='edit/:id' element={<PizzaEdit />} />
              <Route path='*' element={<Navigate to={'/pizzas'} />} />
            </Route>
            <Route path='/ingredients'>
              <Route path='' element={<IngredientList />} />
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
