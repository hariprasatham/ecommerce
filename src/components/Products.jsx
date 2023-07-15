import React, {useState,useEffect} from 'react'
import { ProductCard } from '../components'

const Products = () => {
    const [data, setData] = useState([])
    useEffect(() =>{
        getProducts()
    }, [])

    const getProducts = async() => {
        const data = await fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => setData(data))
    }
    console.log(data)

  return (
    <div className='grid grid-cols-3'>
        {data.map(product => (
            <ProductCard data={product} key={product.id}/>
        ))}
    </div>
  )
}

export default Products