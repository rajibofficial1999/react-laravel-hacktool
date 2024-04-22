import { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import { cn } from '@/lib/utils';
import SidebarLink from '@/Components/SidebarLink';
import NavDropDownLink from '@/Components/NavDropDownLink';

export default function Authenticated({ user, header, children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)


    return (
        <div className='bg-gray-100 flex'>
             <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
            <div className="p-6">
                <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
            </div>
            <nav className="text-white text-base font-semibold pt-3">
                <SidebarLink additionalClasses={'py-4 pl-6'}/>
            </nav>
        </aside>

    <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
        {/* <!-- Desktop Header --> */}
        <div className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div className="w-1/2"></div>
            <div className="relative w-1/2 flex justify-end">
                <button onClick={() => setIsDropDownOpen(!isDropDownOpen)} className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUzn7-qinvq-jbUgQWNL-OfnXUFXfxbtwMs6-Utey3A&s"/>
                </button>

                <button onClick={() => setIsDropDownOpen(false)} className={cn("h-full w-full hidden fixed inset-0 cursor-default", {"show" : isDropDownOpen})}></button>
                        <div
                            className={cn("absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16 hidden",
                                {
                                    "block" : isDropDownOpen
                                }
                            )}
                        >
                    <NavDropDownLink/>
                </div>
            </div>
        </div>

        {/* <!-- Mobile Header & Nav --> */}
        <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
            <div className="flex items-center justify-between">
                <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
                <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl focus:outline-none">
                            {isOpen ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            }
                </button>
            </div>

            {/* <!-- Dropdown Nav --> */}
            <nav className={cn("flex flex-col pt-4", {"hidden": !isOpen})}>
                <SidebarLink additionalClasses={'py-2 pl-4'} isMobile={true}/>
            </nav>
        </header>

        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow p-6">
                <h1 className="text-3xl text-black pb-6">{header}</h1>
                <div>
                    {children}
                </div>
            </main>

            <footer className="w-full bg-white text-right p-4">
                Built by <a target="_blank" href="https://facebook.com/webxpart" className="underline">Rajib Hasan</a>.
            </footer>
        </div>

    </div>
        </div>
    );
}
