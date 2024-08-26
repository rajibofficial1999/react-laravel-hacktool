import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';

const NavDropDownLink = ({auth}) => {
    return (
    <>
        <Link href={route('profile.edit')} className={cn("block px-4 py-2 account-link hover:text-white")}>
            Profile
        </Link>
        {
            auth.is_admin &&

            <Link href={route('settings.edit')} className={cn("block px-4 py-2 account-link hover:text-white")}>
                Settings
            </Link>
        }
        <Link as='button' method='post' href={route('logout')} className={cn("block w-full text-left px-4 py-2 account-link hover:text-white")}>
            Logout
        </Link>
    </>)

}


export default NavDropDownLink;
