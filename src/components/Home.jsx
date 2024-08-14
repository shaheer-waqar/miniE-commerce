import React from "react";
import AllProudcts from "./AllProudcts";
import { useNavigate } from "react-router-dom";

function Home({ addToCart }) {
  let navigate = useNavigate();
  return (
    <div className="bg-zinc-200">
      <div className="bgImg  h-screen bg-cover gap-2 bg-no-repeat  flex flex-col justify-center px-5 ">
        <h1 className="text-2xl md:text-[4vw] font-[200] leading-[1]">
          Don't be slow! <br />
          <span className="font-[200]">Check Out New Arrivals</span>
        </h1>

        <div className="mt-2">
          <button
            onClick={() => navigate("/product")}
            className=" relative overflow-hidden border border-black  transition-all before:absolute 
            before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0
            before:bg-black before:transition-all before:duration-500 hover:text-white
            hover:before:w-full px-12 py-2"
          >
            <span className="relative z-10">Our Collection</span>
          </button>
        </div>
      </div>
      <h1 className="text-center text-2xl font-semibold mt-5">
        Featured Products
      </h1>
      <AllProudcts addToCart={addToCart} />
    </div>
  );
}

export default Home;
