
import './App.css';
import Manubar from './components/Manubar/Manubar';
import 'bootstrap/dist/css/bootstrap.min.css'
import AllProduct from './components/AllProducts/AllProduct';
import { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import  AOS  from 'aos';
function App() {
  const [count, setCount] = useState(0);

  const setCartCount = () => {
    setCount(count + 1);
  };

  useEffect(()=>{
    AOS.init()
    },[])


  return (
    <div className="App"> 
      <Manubar count = {count}></Manubar>
      <AllProduct setCartCount = {setCartCount}></AllProduct>
    </div>
  );
}

export default App;
