import { useEffect, useState } from 'react';
import { cn, registerChannels } from '@/lib/utils';
import SidebarLink from '@/Components/SidebarLink';
import NavDropDownLink from '@/Components/NavDropDownLink';
import { Link } from '@inertiajs/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import {usePage} from '@inertiajs/react';
import notification from '../assets/audio/notification.mp3'
import useSound from 'use-sound'

export default function Authenticated({ header, children, linkItem = '' }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const { user } = usePage().props.auth
    const { userIds } = usePage().props
    // const [play] = useSound(notification);


    useEffect(() => {

        let channels = registerChannels(userIds, user, 'account.created');

        channels.forEach(channel => {
            channel.listen("AccountCreatedEvent", (event) => {
                let audio = new Audio(notification);
                audio.play();
            });
        });


        return () => {
            channels.forEach(channel => channel.unsubscribe());
        };

    }, []);

    return (
        <div className='bg-gray-100 flex overflow-hidden'>
            <aside className="relative bg-sidebar h-screen w-[250px] hidden sm:block shadow-xl">
                <div className="p-6">
                    <Link href={route('admin.dashboard')}>
                        <img className="w-36" src="/assets/admin/images/logo-white.png"/>
                    </Link>
                </div>
                <nav className="text-white text-base font-semibold pt-3">
                    <SidebarLink additionalClasses={'py-4 pl-6'}/>
                </nav>
            </aside>

            <div className="relative w-full flex flex-col h-screen">
                {/* <!-- Desktop Header --> */}
                <div className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
                    <div className="w-1/2"></div>
                    <div className="relative w-1/2 flex justify-end">
                        <button onClick={() => setIsDropDownOpen(!isDropDownOpen)} className="relative z-10 w-12 h-12 rounded-full border-4 border-gray-700 focus:outline-none flex">
                            <img src="../assets/admin/images/avatar.png"/>
                        </button>

                        <button onClick={() => setIsDropDownOpen(false)} className={cn("h-full w-full hidden fixed inset-0 cursor-default", {"show" : isDropDownOpen})}></button>
                        <div
                            className={cn("absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16 hidden z-20",
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
                        <Link href={route('admin.dashboard')}>
                            <img className="w-28" src="/assets/admin/images/logo-white.png"/>
                        </Link>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl focus:outline-none">
                            {isOpen ? <XMarkIcon className='w-6 h-6'/> : <Bars3Icon className='w-6 h-6'/> }
                        </button>
                    </div>

                    {/* <!-- Dropdown Nav --> */}
                    <nav className={cn("flex flex-col pt-4", {"hidden": !isOpen})}>
                        <SidebarLink additionalClasses={'py-2 pl-4'} isMobile={true}/>
                    </nav>
                </header>

                <div className="w-full h-screen border-t flex flex-col overflow-y-auto">
                    <main className="w-full flex-grow p-6 bg-gray-100 overflow-x-hidden">
                        <div className='flex justify-between items-center'>
                            <h1 className="text-3xl text-black pb-6">{header}</h1>
                            {linkItem}
                        </div>
                        <div className='overflow-x-auto pb-20'>
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
