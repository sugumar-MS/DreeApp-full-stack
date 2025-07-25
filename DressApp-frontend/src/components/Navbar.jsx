import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(StoreContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img
          src={assets.logo}
          className="h-[90px] w-40 cursor-pointer"
          alt=""
        />
      </Link>

      <ul className="hidden gap-5 text-sm text-gray-700 sm:flex">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <assets.search_icon
          onClick={() => setShowSearch(true)}
          className="w-5 cursor-pointer"
        />

        <div className="group relative">
          <Link to="/login">
            <assets.profile_icon className="w-5 cursor-pointer" />
          </Link>
          {token &&
          <div className="dropdown-menu absolute right-0 hidden pt-4 group-hover:block">
            <div className="flex w-30 flex-col gap-2 rounded bg-slate-100 px-5 py-3 text-gray-500">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={logout} className="cursor-pointer hover:text-black">
                Logout
              </p>
            </div>
          </div>}
        </div>
        <Link to="/cart" className="relative">
          <assets.cart_icon className="w-5" />
          <p className="absolute right-[-6px] bottom-[-6px] aspect-square w-4 rounded-full bg-black text-center text-[8px] leading-4 text-white">
            {getCartCount()}
          </p>
        </Link>
        <assets.menu_icon
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* side menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex cursor-pointer items-center gap-4 p-3"
          >
            <assets.dropdown_icon className="h-7 w-7 rotate-90" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="border-b py-2 pl-6"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border-b py-2 pl-6"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="border-b py-2 pl-6"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from 'react'
// import { assets } from '../assets/assets'
// import { Link, NavLink } from 'react-router-dom'

// const Navbar = () => {
//   const [visible,setVisible] = useState(false);
//   // console.log(visible);

//   return (
//     <div className='flex items-center justify-between py-5 font-medium'>
//       <img src={assets.logo} className='w-36' alt="" />

//       <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
//         <NavLink className='flex flex-col items-center gap-1'>
//            <p>HOME</p>
//            <hr className='w-2/4 bg-gray-700 border-none h-[1.5px]'/>
//         </NavLink>
//         <NavLink className='flex flex-col items-center gap-1'>
//            <p>COLLECTION</p>
//            <hr className='w-2/4 bg-gray-700 border-none h-[1.5px]'/>
//         </NavLink>
//         <NavLink className='flex flex-col items-center gap-1'>
//            <p>ABOUT</p>
//            <hr className='w-2/4 bg-gray-700 border-none h-[1.5px]'/>
//         </NavLink>
//         <NavLink className='flex flex-col items-center gap-1'>
//            <p>CONTACT</p>
//            <hr className='w-2/4 bg-gray-700 border-none h-[1.5px]'/>
//         </NavLink>
//       </ul>

//       <div className='flex gap-4'>
//         <assets.search_icon className='w-5 cursor-pointer'/>
//         <div className='group relative'>
//           <assets.profile_icon className='w-5 cursor-pointer'/>
//           <div className='absolute hidden group-hover:block right-0 pt-4 w-30 px-2 py-5 bg-slate-100 text-gray-600 rounded mt-4'>
//             <div className='flex flex-col gap-2'>
//             <p className='hover:text-black cursor-pointer'>MY Profile</p>
//             <p className='hover:text-black cursor-pointer'>Orders</p>
//             <p className='hover:text-black cursor-pointer'>Logout</p>
//             </div>
//           </div>
//         </div>
//         <Link to='/cart' className='relative'>
//           <assets.cart_icon className='w-5 cursor-pointer'/>
//           <p className='absolute w-4 right-[-6px] bottom-[-6px] leading-4 bg-black rounded-full text-white text-[10px] text-center'>10</p>
//         </Link>

//             <assets.menu_icon onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden' />
//       </div>

//        {/* side menu for small screen */}
//        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
//          <div className='flex flex-col text-gray-600'>
//           <div onClick={()=>setVisible(false)} className='py-4 flex items-center gap-2 cursor-pointer'>
//            <assets.dropdown_icon className='h-6 rotate-90 text-3xl'/>
//            <p>Back</p>
//          </div>
//           <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6' to='/'>HOME</NavLink>
//           <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6' to='/collection'>COLLECTION</NavLink>
//           <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6' to='/about'>ABOUT</NavLink>
//           <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6' to='/contact'>CONTACT</NavLink>
//          </div>
//        </div>
//     </div>
//   )
// }

// export default Navbar
