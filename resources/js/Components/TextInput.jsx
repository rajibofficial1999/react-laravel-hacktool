import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'w-full px-5 py-2 text-gray-700 bg-gray-200 focus:ring-0 rounded border border-gray-200 ' +
                className
            }
            ref={input}
        />
    );
});
