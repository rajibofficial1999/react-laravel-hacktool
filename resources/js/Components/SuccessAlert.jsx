import { ShieldCheckIcon } from '@heroicons/react/20/solid';

export default function SuccessAlert({ className = '', children}) {

    return (
        <div className={`flex items-center gap-1 text-green-600 mb-2 ` + className}>
            {children ? <ShieldCheckIcon className="h-5 w-5"/> : ''}
            <p>{children}</p>
        </div>
    );
}
