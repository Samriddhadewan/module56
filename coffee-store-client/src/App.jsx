import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {
  const LoadedCoffees = useLoaderData();
  const [coffees , setCoffees] = useState(LoadedCoffees);
  console.log(coffees)
  return (
    <>
      <h1 className='text-6xl text-purple-600 text-center'>Coffees {coffees.length}</h1>
      <div className='max-w-[1140px] mx-auto grid md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee=> <CoffeeCard coffee={coffee} key={coffee._id} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>) 
      }
      </div>
      
    </>
  )
}

export default App
