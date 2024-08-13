import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";

function Products({ addToCart }) {
  let categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  let [categoryVal, setCategoryVal] = useState([]);
  let [productData, setProductData] = useState([]);
  let [option, setOption] = useState("all Products");

  const getProduct = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProductData(res.data);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    let filteredData = productData.filter((e, i) => e.category === option);
    setCategoryVal(filteredData);
  }, [option]);

  return (
    <div className="py-20 bg-zinc-200">
      <div className="w-full flex px-5 justify-between  gap-5 flex-col md:flex-row ">
        <h1 className="text-2xl font-[400] capitalize">{option}</h1>

        <div className="flex-col gap-2 ">
          <span className="hidden md:inline-block">Sort by :</span>
          <select
            onChange={(e) => setOption(e.target.value)}
            value={option}
            className="bg-transparent text-sm  py-1 outline-none w-full md:w-auto"
          >
            <option value="all Products">All Products</option>
            {categories.map((e, i) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <div className="px-5 py-5">
          {productData.length > 0 ? (
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
              {option == "all Products"
                ? productData.map((e, i) => (
                    <Card addToCart={addToCart} key={e.id} products={e} />
                  ))
                : categoryVal.map((e, i) => (
                    <Card addToCart={addToCart} key={e.id} products={e} />
                  ))}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
