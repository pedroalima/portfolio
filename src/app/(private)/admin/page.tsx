"use client";
import About from "@/components/admin-view/about";
import Home from "@/components/admin-view/home";
import { useState } from "react";

const menuItems = [
    {
        id: "home",
        label: "Home",
        component: (
            <Home />
        )
    },
    {
        id: "about",
        label: "About",
        component: (
            <About />
        )
    },
];

export default function Admin() {
    const [ currentSelectedTab, setCurrentSelectedTab ] = useState("home");
    return (
        <div className="h-dvh">
            <header className="fixed top-0 w-full z-30">
                <nav className="container mx-auto p-2 flex justify-start gap-20">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            className="p-4 font-bold text-xl text-black"
                            onClick={() => {
                                setCurrentSelectedTab(item.id);
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </header>
            
            <main>
                {menuItems && menuItems.map(
                    (item) => item.id === currentSelectedTab && item.component
                )}
            </main>
        </div>
    );
}