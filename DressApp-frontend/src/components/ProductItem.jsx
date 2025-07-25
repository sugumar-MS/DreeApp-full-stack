import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

const ProductItem = ({id,name,image,price}) => {

    const {currency} = useContext(StoreContext)

  return (
    <Link className='text-gray-700 cursor-pointer flex flex-col items-center  ' to={`/product/${id}`}>
        <div>
          <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out w-[150px] h-[200px] border-2' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm w-[150px]'>{name}</p>
        <p className='text-sm font-medium '>{currency}{price}</p>
        </div>
    </Link>
  )
}

export default ProductItem
