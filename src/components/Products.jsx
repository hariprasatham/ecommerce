import React, { useState, useEffect } from "react";
import { ProductCard } from "../components";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  // console.log(data)

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto max-w-[1500px] justify-center justify-items-center gap-[20px] px-[20px]">
      {data.map((product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
