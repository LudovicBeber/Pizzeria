import { Link } from 'react-router-dom';

const PizzaList = () => {
  return (
    <div className='p-5'>
      <h1 className='text-2xl mb-4'>
          Liste des pizzas
      </h1>
      <Link to={'/pizzas/create'} className='bg-blue-400 p-1 pr-2 rounded-lg text-xl text-stone-50 hover:bg-blue-600'>Créer une pizza</Link>
    </div>
    )
}

export default PizzaList;