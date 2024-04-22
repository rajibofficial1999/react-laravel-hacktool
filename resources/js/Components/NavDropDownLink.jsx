import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { BanknotesIcon } from '@heroicons/react/24/solid'

const dropDownLinks = [
    {
        name: "Users",
        icon: <BanknotesIcon/>,
        routeName: "admin.users",
    },
    {
        name: "Account",
        icon: <BanknotesIcon/>,
        routeName: "admin.account",
    },
    {
        name: "Settings",
        icon: <BanknotesIcon/>,
        routeName: "admin.settings",
    },
];

const NavDropDownLink = () => {
    return (
    <>
        {dropDownLinks.map((link, i) =>
            <Link key={i} href={route(link.routeName)} className={cn("block px-4 py-2 account-link hover:text-white")}>
                {link.name}
            </Link>
        )}
    </>)

}


export default NavDropDownLink;

export {dropDownLinks};
