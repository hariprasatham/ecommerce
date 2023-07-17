import React from 'react'

import { CartProduct, CartPrice } from '../components'




const CartListing = ({cartItems, totalPrice}) => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-[20px] max-w-[1200px] mx-auto'>
          <div className=' w-[100%] md:w-[80%]'>
            {
                cartItems?.map(product => (
                    <CartProduct  key={product.id} data={product} />
                ))
            }
          </div>
          {/* <div className="cartProductDetails p-[25px] w-[100%] md:w-[300px] h-[300px] border-2 shadow-lg">
            <h2>Price Details</h2>
            <Divider style={{margin: "10px 0",}} />
            <div className='w-full flex items-center justify-between'>
              <p>Price {`(${cartItems.length} item)`}</p>
              <p>${totalPrice}</p>
            </div>
          </div> */}
          <CartPrice cartItems={cartItems} totalPrice={totalPrice}/>
        </div>
  )
}

export default CartListing