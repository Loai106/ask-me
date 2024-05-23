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
    <div className='flex justify-center px-4'>
        <div className='w-full max-w-screen-md'>
            <div className='flex flex-col space-y-4'>
            <Navbar className='container flex  justify-between items-center'>
            <NavbarBrand >
                <Link href="/" className="font-bold">AskMe</Link>
            </NavbarBrand>
            <div>
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
            </div>
            
        </Navbar>

       <div>
        <Input
            label="Search"
            isClearable
            radius="lg"
            classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
                ],
            }}
            placeholder="Search username"
            startContent={
                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
            />
        </div>
            </div>
        </div>
        
    

    </div>

        
        
    
    )


}

export default Header


