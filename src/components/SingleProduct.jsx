import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import Card from './Card';

function SingleProduct() {
  let {id} = useParams()
  let [singleProduct,setSingleProduct] = useState();
  let [realted,SetRealted] = useState([]);
  let [filteredData,setFilterdData]= useState([]);

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/"+id)
    .then((res)=>setSingleProduct(res.data));
  },[id])

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>SetRealted(res.data))
  },[]);

  useEffect(()=>{
    let filterd = realted.filter((e,i)=>e.category === singleProduct.category && e.id !== singleProduct.id)
    setFilterdData(filterd);
  },[singleProduct])
  return (
   <div className='bg-zinc-200'>
    <div className='pt-10'>
    {singleProduct ?
      <div className="w-full px-2  md:h-auto py-5">
      <div className="max-w-[900px] shadow-md m-auto flex flex-col gap-2 mt-10 md:flex-row">
        <div className="w-full md:w-6/12 ">
          <img
            src={singleProduct.image}
            alt=""
            className="w-full md:max-w-[500px]   md:object-cover"
          />
        </div>

        <div className="w-full md:w-6/12 px-2 flex flex-col gap-3 pb-5">
          <h1 className="bold text-2xl uppercase">{singleProduct.title}</h1>
          <p className="font-bold text-lg ">${singleProduct.price}</p>
          <div>
            <button className="bg-black text-white px-3 py-1 rounded-[5px] hover:bg-black/80 duration-300">
              Buy Now
            </button>
          </div>
          <div>
            <h4 className="mb-1">Description</h4>
            <p className="text-zinc-600">{singleProduct.description}</p>
          </div>
        </div>
      </div>
    </div> 
    :
    <Loader/>


    }

    </div>
    
    {
     filteredData.length > 0 ?   
    <div>
        <h1 className='px-5 text-lg font-bold'>You Might Also Like</h1>

        <div className='grid grid-cols-1 gap-5 px-4 py-5 pb-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                filteredData.map((e,i)=> <Card key={e.id} products={e}/>)
            }
          </div>
    </div>
    : 
    null
    }
   </div>
     )
}

export default SingleProduct