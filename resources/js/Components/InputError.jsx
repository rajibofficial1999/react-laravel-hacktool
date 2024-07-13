import { cn } from "@/lib/utils";

const InputError = ({ children, className = '', ...props }) => {

    return (
        <p {...props} className={cn('text-red-500 text-sm', className)}>
            {children}
        </p>
    )
}

export default InputError;
