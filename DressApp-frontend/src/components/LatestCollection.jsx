import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(StoreContext)
    const [latestProduct,setLatestProduct] = useState([])
    
    useEffect(()=>{
       setLatestProduct(products.slice(0,8))
    },[products])

  return (
    <div>
    <div className='text-center py-8 my-10 text-3xl'>
      <Title text1={"LATEST"} text2={"COLLECTION"}/>
      <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing lorem It a very parts of the life.</p>
    </div>

  {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
        {latestProduct.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
        ))}
      </div>
    </div>
  )
}

export default LatestCollection

// import React, { useContext, useEffect, useState } from 'react'
// import { StoreContext } from '../context/StoreContext'
// import Title from './Title';
// import ProductItem from './ProductItem';

// const LatestCollection = () => {
//   const {products} = useContext(StoreContext);
//   const [latestProduct,setLatestProduct] = useState([])

//   useEffect(()=>{
//     setLatestProduct(products.slice(0,8))
//   },[])

//   return (
//     <div>
//       <div className='text-center py-8 my-10 text-3xl'>
//          <Title text1={"LATEST"} text2={"COLLECTION"}/>
//          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt distinctio totam minima.</p>
//       </div>
//       {/* Rendering Products */}
//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 items-center'>
//         {latestProduct.map((item,index)=>(
//         <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
//       ))}
//       </div>
//     </div>
//   )
// }

// export default LatestCollection
