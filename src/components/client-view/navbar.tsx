"use client";
import { navItemsClient } from "@/mock-data/admin";
import { useState } from "react";

export default function Navbar() {
    const [ active, setActive ] = useState("about");

    return (
        <header>
            <nav>
                <ul className="flex flex-col items-start gap-3">
                    {navItemsClient.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className={`block py-2 px-3 md:p-1 bg-transparent hover:text-cyan-400 transition-all border-b-2 border-gray-900 hover:border-b-2 hover:border-cyan-400 ${active == item.id ? "font-bold text-cyan-400 border-b-2 border-cyan-400" : "text-gray-500"}`}
                        >
                            <a href={`#${item.id}`}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}