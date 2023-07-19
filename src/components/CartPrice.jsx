import React from 'react'

import { Divider } from 'antd'

const CartPrice = ({cartItems, totalPrice}) => {
  return (
    <div className="cartProductDetails p-[25px] w-[100%] md:w-[300px] h-[300px] border-2 shadow-lg">
            <h2>Price Details</h2>
            <Divider style={{margin: "10px 0",}} />
            <div className='w-full flex items-center justify-between'>
              <p>Price {`(${cartItems.length} item)`}</p>
              <p>${parseFloat(totalPrice).toFixed(2)}</p>
            </div>
          </div>
  )
}

export default CartPrice