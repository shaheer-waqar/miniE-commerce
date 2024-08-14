import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function AddToCart({ deleteHandler, cartData, cartToggle, setCartToggle }) {
  let navigate =useNavigate()
  let totalAmount = cartData.reduce((a,b)=>a + Number(Math.floor(b.price)),0)

  return (
    <div
      className={`w-full md:w-[300px] transition-all duration-300 h-screen 
      fixed z-[100] top-0  flex justify-end bg-white 
      ${
        cartToggle ? "right-0" : "right-[-1220px]"
      } overflow-y-auto no-scrollbar`}
    >
      <div className="text-black w-full px-3 pt-5 flex flex-col gap-5 ">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold">Your Products - {cartData.length}</h3>
          <div className="text-2xl cursor-pointer">
            <IoCloseSharp onClick={() => setCartToggle((prev) => !prev)} />
          </div>
        </div>

        {cartData.map((e, i) => {
          return (
            <div className="flex gap-3 relative border-b pb-2" key={e.id}>
              <div>
                <img className="w-[80px] object-cover" src={e.image} />
              </div>
              <div className="w-[60%] leading-[1.2]">
                <p
                onClick={()=> (navigate(`/product/${e.id}`),setCartToggle((prev)=>!prev))}
                className="cursor-pointer hover:underline"
                >{e.title.slice(0, 20)}...</p>
                <p className="mt-2 font-bold">${Number(Math.floor(e.price))}</p>
              </div>
              <div className="absolute top-0 right-0 cursor-pointer">
                <button>
                <MdDelete onClick={() => deleteHandler(e)} />
                </button>
              </div>
            </div>
          );
        })}
        {
          cartData.length > 0 &&
        <div className="flex justify-between">
          <p className="font-semibold">Total Amount </p>
          <p className="font-bold">${totalAmount} </p>
        </div>
        }
      </div>

    </div>
  );
}

export default AddToCart;
