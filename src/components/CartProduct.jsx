import React, { useState } from "react";
import { deleteProduct } from '../redux/cartSlice'
import { useDispatch } from 'react-redux' 

import { AiOutlineCloseSquare } from "react-icons/ai";


const CartProduct = ({ data }) => {

  const dispatch = useDispatch()

  const handleRemove = (id)=>{
    dispatch(deleteProduct(id))
  }

  return (
    <div className="max-w-[1200px] flex border-2 mx-auto mb-[25px] shadow-md">
      <div className="cartImg h-[120px] w-[120px] m-[10px] p-[10px] border-2 border-gray-400">
        <img src={data.image} className="w-[100%] h-[100%]" alt={data.title} />
      </div>
      <div className="flex justify-between w-full ">
        <div className="flex flex-col justify-between m-[10px]">
          <div>
            <h2 className="text-xl font-semibold">{data.title}</h2>
            <p>Price: ${data.price}</p>
          </div>
          <div className="">
            <button className="border-2 border-gray-500 h-[28px] w-[28px] rounded-full">-</button>
            <input type="number" className="border-2 border-gray-500 w-[50px] mx-[10px]"/>
            <button className="border-2 border-gray-500 h-[28px] w-[28px] rounded-full">+</button>
          </div>
        </div>
        <div>
          <button onClick={() => handleRemove(data.id)} className="m-[10px]">
            <AiOutlineCloseSquare style={{fontSize: "25px"}}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
