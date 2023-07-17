import React from 'react'


import SearchIcon from '../assets/search-icon.png'

const Search = () => {
  return (
    <div className='max-w-[1200px] w-[100%] flex flex-row items-center bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.3)] my-[25px]'>
        <input type="text" placeholder='Search your products' className='w-full px-[10px] py-[5px]'/>
        <img src={SearchIcon} className='w-[20px] mr-2'/>
    </div>
  )
}

export default Search