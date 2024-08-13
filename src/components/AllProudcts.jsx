import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import Loader from './Loader';

function AllProudcts({addToCart}) {
    let [productData,setProductData] = useState([]);
    const [first, setfirst] = useState()
    const getPrdouct= ()=>{
       axios.get("https://fakestoreapi.com/products")
       .then((res)=>setProductData(res.data))
       .catch((err)=>{
        console.log(err)
    })
}

    useEffect(()=>{
        getPrdouct()
    },[])
  return (
    <>
    {
        productData.length > 0 ?

          <div className='grid grid-cols-1 gap-5 px-4 py-5  md:grid-cols-3 lg:grid-cols-4'>
            {
                productData.map((e,i)=> <Card  addToCart={addToCart} key={e.id} products={e}/>)
            }
          </div>
        :
        <Loader/> 
    }
    
    </>
  )
}

export default AllProudcts