import { LiHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerType extends LiHTMLAttributes<HTMLLIElement> {
    children: ReactNode
}

export default function Container({ children, ...rest } : ContainerType) {
    return (
        <li className={twMerge("lg:transition-all rounded-lg border-[1px] border-slate-500/10 lg:border-black/0 lg:hover:border-slate-500/5 bg-slate-800/50 lg:bg-slate-800/0 lg:hover:bg-slate-800/30 shadow-md lg:shadow-none lg:hover:shadow-md w-full lg:opacity-60 lg:hover:opacity-100", rest.className)}>
            {children}
        </li>
    );
}