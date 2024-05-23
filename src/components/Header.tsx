import React from 'react'
import Link from "next/link";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,

} from '@nextui-org/react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";



import { SearchIcon } from './icons/SearchIcon';
function Header() {
  return (
    <div className='flex justify-center bg-white px-4'>
        <div className='w-full max-w-screen-md'>
            <div className='flex flex-col'>
            <Navbar className='container flex  justify-between items-center'>
            <NavbarBrand >
                <Link href="/" className="font-bold">AskMe</Link>
            </NavbarBrand>
            <NavbarContent>
            <Input 
                placeholder='Search Username'
                size="sm"
                type="email" 
                startContent={
                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            } />

               </NavbarContent>
            <NavbarContent justify="end" className='flex space-x-4'>
                <NavbarItem>
                    <Link href="/"><IoHomeOutline className='text-xl'/></Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/"><FaRegUser className='text-xl'/></Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/inbox"><FaRegMessage className='text-xl'/></Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/notifications"><IoMdNotificationsOutline className='text-xl'/></Link>
                </NavbarItem>
            </NavbarContent>
          
            
        </Navbar>

       
        
            </div>
        </div>
        
    

    </div>

        
        
    
    )


}

export default Header


