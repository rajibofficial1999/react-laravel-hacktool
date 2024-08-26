import { Link, usePage } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { AcademicCapIcon, ArrowLeftCircleIcon, BanknotesIcon, Bars3BottomLeftIcon, BuildingLibraryIcon, Cog8ToothIcon, LinkIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { ListBulletIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';

const SidebarLink = ({additionalClasses}) => {
    const { url } = usePage()
    const {user} = usePage().props.auth;

    let linksData = [
        {
            name: "Dashboard",
            icon: <BuildingLibraryIcon/>,
            routeName: "admin.dashboard",
            onlyAdminLink: false
        },
        {
            name: "Users",
            icon: <UserGroupIcon/>,
            routeName: "admin.users.index",
            onlyAdminLink: true
        },
        {
            name: "Accounts",
            icon: <BanknotesIcon/>,
            routeName: "admin.accounts.index",
            onlyAdminLink: false
        },
        {
            name: "Links",
            icon: <LinkIcon/>,
            routeName: "admin.links.index",
            onlyAdminLink: false
        },
        {
            name: "Domains",
            icon: <ListBulletIcon/>,
            routeName: "admin.domains.index",
            onlyAdminLink: true
        },
        {
            name: "Account Types",
            icon: <Bars3BottomLeftIcon/>,
            routeName: "admin.accountTypes.index",
            onlyAdminLink: true
        }
    ];

    const [links, setLinks] = useState(linksData)

    useEffect(() => {
        if(!user.is_admin) {
            setLinks(links.filter(link => link.onlyAdminLink == user.is_admin))
        }
    }, [])

    return (
    <>
        {links.map((link,i) =>
            <Link key={i} href={route(link.routeName)} className={cn("flex items-center opacity-75 hover:opacity-100 text-white nav-item", {"active-nav-link": route(link.routeName).endsWith(url)}, additionalClasses)}>
                <p className='w-6 h-6 mr-2'>{link.icon}</p>
                {link.name}
            </Link>
        )}

            <Link href={route('profile.edit')} className={cn("flex sm:hidden items-center opacity-75 hover:opacity-100 text-white nav-item", {"active-nav-link": route('profile.edit').endsWith(url)}, additionalClasses)}>
                <p className='w-6 h-6 mr-2'><AcademicCapIcon/></p>
                Profile
            </Link>
            <Link as='button' method='post' href={route('logout')} className={cn("flex sm:hidden items-center opacity-75 hover:opacity-100 text-white nav-item", additionalClasses)}>
                <p className='w-6 h-6 mr-2'><ArrowLeftCircleIcon/></p>
                Logout
            </Link>
    </>)

}

export default SidebarLink;
