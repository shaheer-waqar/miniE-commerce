import './App.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  let [cartData,setCartData] = useState([]);

  const addToCart = (event,data)=>{
    event.stopPropagation();
    let checkData = cartData.some((e)=>e.id == data.id);
    if(!checkData){
      setCartData([data,...cartData]);
    }
  }

  const deleteCartProduct=(data)=>{
    let filterdCartData = cartData.filter(e => e.id !== data.id);
    setCartData(filterdCartData);
  }

  return (

    <>
    <div className="flex flex-col min-h-screen">
      <Header cartData={cartData} deleteHandler={deleteCartProduct}/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart}/>} />
          <Route path="about" element={<About/>} />
          <Route path="product" element={<Products  addToCart={addToCart} />} />
          <Route path="product/:id" element={<SingleProduct addToCart={addToCart} />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
