import React from 'react'
import { useNavigate } from 'react-router-dom';

function Card({products,addToCart}) {
  
  let {title,image,price,id} = products;
  let navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${id}`)} className='group relative shadow-lg  overflow-hidden bg-zinc-100 px-2 py-2 cursor-pointer hover:scale-[1.04] transition-all duration-500'>
      <div className='shadow-sm overflow-hidden relative'>
        <img className='w-[100%] h-[300px]  object-cover md:object-fill ' src={image} />
        <div className='bg-transparent group-hover:bg-black/40 duration-700 absolute w-full top-0 z-30 h-full'></div>
      </div>
      <div className='flex flex-col gap-2 pt-2'>
        <h1  className='text-lg font-semibold leading-[1.1]'>{`${title.substring(0,20)}...`}</h1>
        <div className='flex justify-between'>
        <p className='font-bold'>${Number(Math.floor(price))}</p>
        <button className='font-semibold' onClick={(event)=>addToCart(event,products)} >Add to cart</button>
        </div>
      </div> 
    </div>
  )
}

export default Card