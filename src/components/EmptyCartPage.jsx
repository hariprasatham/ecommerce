import React from 'react'

import EmptyCart from '../assets/empty-cart-page-image.webp'

const EmptyCartPage = () => {
  return (
    <div className='max-w-[1200px] flex flex-col items-center py-[50px] border-2 mx-auto'>
        <img src={EmptyCart} className='w-[300px] mb-[20px]' alt="cart empty" />
        <h2 className='text-lg font-semibold'>Missing Cart Items?</h2>
        <p className='my-[5px] font-medium text-sm'>Login to see the items you added previously</p>
        <button className='px-[70px] py-[7px] mt-[10px] bg-orange-600 text-white'>Login</button>
    </div>
  )
}

export default EmptyCartPage