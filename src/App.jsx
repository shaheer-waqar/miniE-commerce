import './App.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Products />} />
          <Route path="product/:id" element={<SingleProduct />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
