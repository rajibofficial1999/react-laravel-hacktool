import { Link, usePage } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { BanknotesIcon, BuildingLibraryIcon, Cog8ToothIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { dropDownLinks } from './NavDropDownLink';

const SidebarLink = ({additionalClasses, isMobile = false}) => {
    const { url } = usePage()


    let links = [
        {
            name: "Dashboard",
            icon: <BuildingLibraryIcon/>,
            routeName: "admin.dashboard",
        },
        {
            name: "Users",
            icon: <UserGroupIcon/>,
            routeName: "admin.users",
        },
        {
            name: "Account",
            icon: <BanknotesIcon/>,
            routeName: "admin.account",
        },
        {
            name: "Settings",
            icon: <Cog8ToothIcon/>,
            routeName: "admin.settings",
        },
    ];

    if(isMobile){
        links = [...links, ...dropDownLinks]
    }

    return (
    <>
        {links.map((link,i) =>
            <Link key={i} href={route(link.routeName)} className={cn("flex items-center opacity-75 hover:opacity-100 text-white nav-item", {"active-nav-link": route(link.routeName).endsWith(url)}, additionalClasses)}>
                <p className='w-6 h-6 mr-2'>{link.icon}</p>
                {link.name}
            </Link>
        )}
    </>)

}

export default SidebarLink;
