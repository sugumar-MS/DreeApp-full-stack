import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
     <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
     </div>

     <div className='my-10 flex flex-col md:flex-row gap-16'>
       <img className='w-full object-cover md:max-w-[450px]' src={assets.about_img} alt="" />
       <div className='flex flex-col justify-center gap-6 md:w-2/4  text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta repudiandae placeat error debitis sequi laboriosam esse tenetur dignissimos eligendi nulla.</p>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab earum eos iure iusto dolorem qui. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, amet?</p>
       <b className='text-gary-800'>Our Mission</b>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias doloribus labore sunt tenetur esse soluta suscipit quaerat consequatur repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi porro dicta placeat animi, facilis quos. Explicabo, consequatur doloribus.</p>
       </div>
     </div>

     <div className='text-4xl py-4'>
       <Title text1={'WHY'} text2={'CHOOSE US'} />
     </div>

     <div className='flex flex-col md:flex-row text-sm mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>quality Assurance:</b>
        <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae earum officiis itaque ad sed quod quis fugit quam ex.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae earum officiis itaque ad sed quod quis fugit quam ex.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae earum officiis itaque ad sed quod quis fugit quam ex.</p>
       </div>
     </div>

     <NewsletterBox/>

    </div>
  )
}

export default About
