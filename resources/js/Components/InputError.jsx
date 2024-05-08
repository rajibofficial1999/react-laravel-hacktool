import { cn } from "@/lib/utils";

export default function InputError({ message, className = '', ...props }) {
    return (
        <p {...props} className={cn('text-red-500 text-sm', className)}>
            {message}
        </p>
    )
}
