import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='w-32 h-22 mb-5' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, esse. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, rem.</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-4 h-22 w-32 flex items-center'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 h-22 flex items-center'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>contact@shoponline-estore.com</li>
            </ul>
        </div>

      </div>
        
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ shopeonline-estore.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
