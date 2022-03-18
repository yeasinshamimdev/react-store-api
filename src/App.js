import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import './App.css';
import AllProducts from './components/All Products/AllProducts';
import Manubar from './components/Manubar/Manubar';

function App() {
  let [count, setCount] = useState(0);

  const addToCart = () => setCount(++count);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="App">
      <div className='bg-info'>
      <Manubar count={count}></Manubar>
      </div>
      <h2>My Store Products</h2>
      <AllProducts setCount={addToCart}></AllProducts>
    </div>
  );
}

export default App;
