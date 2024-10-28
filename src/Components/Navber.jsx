import React, { useState } from 'react'
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";


const Navber = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className='bg-[#2699fb] p-4'>
        <d  iv className='max-w-[1240px] flex items-center py-[10px] justify-between  mx-auto'>
            <div className='text-3xl font-bold text-white'>
                Saylani
            </div>
            {
                // agr khola howa hai to close dekhao warna manu dekhao
                toggle ? 
                <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                :
                <AiOutlineClose  onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
            }
            
            
            <ul className='hidden md:flex text-white gap-5'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            {/* responsive menu */}
            <ul className={`duration-500 md:hidden w-full h-screen text-white fixed bg-black  top-[92px] 
                ${toggle ? "left-[0]" : "left-[-100%]"}
                `}>
                <li className='p-5'>Home</li>
                <li  className='p-5'>Home</li>
                <li  className='p-5'>Home</li>
                <li className='p-5'>Home</li>
                <li className='p-5'>Home</li>
            </ul>

        </d>
    </div>
  )
}

export default Navber