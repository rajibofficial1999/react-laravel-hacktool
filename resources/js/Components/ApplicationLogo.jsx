import { cn } from "@/lib/utils";

export default function ApplicationLogo({className = ''}) {
    return (
        <img className={cn("w-44 ", className)} src="/assets/admin/images/logo.png"/>
    );
}
