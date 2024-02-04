"use client";
import { usePathname } from "next/navigation";
import Navbar from "../navbar";
import Footer from "../footer";

export default function Layout({ children } : { children: React.ReactNode}) {
    const pathName = usePathname();

    return (
        <>
            {pathName !== "/login" && pathName !== "/admin" ? <Navbar/> : null}
            {children}
            {pathName !== "/login" && pathName !== "/admin" ? <Footer/> : null}
        </>
    );
}