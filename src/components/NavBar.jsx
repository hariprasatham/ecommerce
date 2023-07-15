import React from 'react'
import Logo from '../assets/flipkart-plus_logo.png'

const NavBar = () => {
  return (
    <div className='bg-blue-600 flex flex-col items-center justify-center py-[10px] w-full'>
        <div className='container min-w-[80%] flex items-center justify-between px-[30px]'>
            <div className='logo w-32 flex flex-col align-center justify-center text-center'>
                <img src={Logo} alt="flipkart"/>
                <p className='text-white text-xl'>Explore <span className='text-yellow-300'>Plus</span></p>
            </div>
            <button className='bg-white px-[20px] py-[3px] text-blue-600 font-bold' >Login</button>
        </div>
    </div>
  )
}

export default NavBar