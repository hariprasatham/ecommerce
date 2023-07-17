import React, { useState } from "react";

import {Rate} from 'antd'

import  { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartSlice'

const ProductCard = ({ data }) => {

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addProduct(data))
    }

  return (
    
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <a href="#" className="w-full flex items-start justify-center">
        <img className="p-8 rounded-t-lg object-contain h-[350px] w-[300px]" src={data.image} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold text-black overflow-ellipsis truncate">{data.title}</h5>
        </a>
        <Rate allowHalf disabled value={data.rating.rate}/>
        <div className="flex items-center justify-between">
            <span className=" text-lg font-bold text-black">${data.price}</span>
            <a href="#" onClick={handleAddToCart} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>

  );
};

export default ProductCard;
