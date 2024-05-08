import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function SelectInput({ children, className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            className={
                'w-full px-5 py-2 text-gray-700 bg-gray-200 focus:ring-0 rounded border border-gray-200 ' +
                className
            }
            ref={input}>
                {children}
            </select>
    );
});
