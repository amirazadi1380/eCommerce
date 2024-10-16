import React, { useContext, useEffect, useState } from 'react'
import { SlBasket } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa6";
import ShopBasket from './ShopBasket';
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { AppContext } from '../contextApi/Context';
gsap.registerPlugin(useGSAP);
export default function Navbar() {
    const {basketItems} = useContext(AppContext)
        const storedBasketItems = JSON.parse(localStorage.getItem('basketItem')) || [];
    useGSAP(() => {
        gsap.to('#navItems', { opacity: 1, y: 5, stagger: 0.2})
    })
    const [isOpen, setIsOpen] = useState(false)
    const [openBasket, setOpenBasket] = useState(false)
    let path = window.location.pathname
    const navItems = [
        { title: 'خانه', path: '/' },
        { title: 'محصولات', path: '/products' },
        { title: 'درباره ما', path: '/products' }
    ]
    return (
        <header className=" absolute top-0 z-50 w-full">
            <ShopBasket openBasket={openBasket} setOpenBasket={setOpenBasket} />
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">
                <div className={`flex lg:flex-1  gap-x-5 text-xl ${path == '/products' ? 'text-gray-700' : 'text-white'} z-50`}>
                    <div id='navItems' onClick={() => setOpenBasket(true)} className={`relative ${path == '/' ? ' text-gray-700 lg:hover:bg-stone-200 lg:text-gray-200 lg:hover:text-gray-600' : 'text-gray-700 hover:bg-gray-600 hover:text-gray-200'}  p-2 rounded-full cursor-pointer duration-200 ease-linear opacity-0`}>
                        <SlBasket />
                        <p className={`absolute bottom-0  p-1 rounded-full w-4 text-[8px] h-4 flex justify-center items-center right-0  ${path == '/' ? 'bg-slate-500 ' : 'text-white bg-slate-500'}`}>{basketItems?.length}</p>
                    </div>
                    <div id='navItems' className={`${path == '/' ? ' text-gray-800 lg:hover:bg-stone-200 lg:text-gray-200 lg:hover:text-gray-600' : 'text-gray-700 hover:bg-gray-600 hover:text-gray-200'}  p-2 rounded-full  cursor-pointer duration-200 ease-linear opacity-0`}>
                        <FaRegUser />
                    </div>
                </div>
                <div className="flex lg:hidden">
                    {isOpen
                        ?
                        <button onClick={() => setIsOpen(false)} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-200  z-20">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        :
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500 z-20">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>}
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navItems.map((item, index) => <a id='navItems' className={`-mx-3 opacity-0  block rounded-lg px-3 py-2 text-base font-medium leading-7 ${path == '/' ? 'text-gray-100' : 'text-gray-700'} `} key={index} href={item.path}>{item.title}</a>)}
                </div>
                <div id='navItems' className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center opacity-0">
                    <a href="/auth" className={`px-5  py-1 hover:bg-white hover:text-black duration-150 ease-linear border  ${path == '/' ? ' text-gray-100   border-white' : 'text-gray-700 border-gray-700/30'}   `}>ثبت نام</a>
                </div>
            </nav>
            <div className={`lg:hidden ${isOpen ? 'opacity-100 overflow-hidden' : 'opacity-0 duration-1000 ease-linear'}`} role="dialog" aria-modal="true">
                {/* <div className="fixed inset-0 z-10 bg-red-950"></div> */}
                <div className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-hidden ${isOpen ? ' h-80 ease-linear duration-300 rounded-b-3xl' : 'opacity-0 h-0 duration-500 ease-linear'} bg-slate-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>

                    <div className={`mt-14 flow-root`} >
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6  text-center mt-2">
                                {navItems.map((item, index) => <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 " key={index} href={item.path}>{item.title}</a>)}
                            </div>
                            <div className="py-0 text-center">
                                <a href="/auth" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-200 ">ثبت نام</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}
