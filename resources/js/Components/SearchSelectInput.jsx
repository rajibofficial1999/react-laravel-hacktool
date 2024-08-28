import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function SelectInput({ children, className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className='flex flex-col'>
            <select
                {...props}
                className={
                    'mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ' +
                    className
                }
                ref={input}>
                {children}
            </select>
        </div>
    );
});
