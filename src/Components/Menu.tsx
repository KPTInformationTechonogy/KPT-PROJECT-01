"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import menu from "@/images/menu.png"



const Menu = () => {
    const [open,setOpen] = useState(false)

    return(
        <div className="block md:hidden ">
            <Image src={menu} width={28} height={28} alt="menu" className="cursor-pointer" onClick={() => setOpen((prev) => !prev)} />
        {
            open && (
                <div className="absolute top-20 right-0 w-1/3 bg-white text-yellow-700 border-b-2 border-yellow-800 shadow-md rounded-md py-4 flex flex-col items-center justify-center gap-8 z-10 transition-colors">
                    <Link href="/" className="hover:tracking-wider" >Home</Link>
                    <Link href="/" className="hover:tracking-wider">Services</Link>
                    <Link href="/" className="hover:tracking-wider">Products</Link>
                    <Link href="/" className="hover:tracking-wider">Deals</Link>
                    <Link href="/" className="hover:tracking-wider">Logout</Link>
                    <Link href="/" className="hover:tracking-wider">About</Link>
                    <Link href="/" className="hover:tracking-wider">Contact</Link>
                    <Link href="/" className="hover:tracking-wider">Cart(1)</Link>
                </div>
            )
        }
        </div>
    )
}
export default Menu