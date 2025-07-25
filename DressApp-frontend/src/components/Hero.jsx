import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center text-[#414141]'>
         <div className=''>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
            <div className='flex items-center gap-2'>
                <p>SHOP NN</p>
                <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
            </div>
         </div>
      </div>
      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero

// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>

//       {/* Hero Left Side */}
//       <div className='w-full sm:w-1/2 flex  items-center justify-center text-[#414141]'>
//         <div>
//           <div className='flex items-center gap-2'>
//           <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//           <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>
//         </div>
//         <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//         <div className='flex items-center gap-2'>
//           <p>SHOP IN</p>
//           <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//         </div>
//         </div>
//       </div>
//       {/* Hero Right Side */}
//       <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
//     </div>
//   )
// }

// export default Hero
