import { Link } from 'react-router-dom';
import PizzaCard from './PizzaCard';
import { apiService } from '../../main';
import { useState } from 'react';

const PizzaList = () => {

  const [data, setData] = useState([]);

  apiService.pizzas.getAll().then((res) => {
      setData(res.data.pizzas);
  });

  return (
    <div className='p-5'>
      <h1 className='text-2xl mb-4'>
          Liste des pizzas
      </h1>
      <Link to={'/pizzas/create'} className='bg-blue-400 p-1 pr-2 rounded-lg text-xl text-stone-50 hover:bg-blue-600'>Créer une pizza</Link>
      <div className='flex flex-col gap-4 m-4'>
        { 
          data.map((pizza) => (
            <PizzaCard 
              key={pizza._id}
              title={pizza.title}
              ingredients={pizza.ingredients}
              price={pizza.price}
            />
          ))
        }
      </div>
    </div>
    )
}

export default PizzaList;