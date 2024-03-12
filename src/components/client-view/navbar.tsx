"use client";
import { navItemsClient } from "@/mock-data/admin";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 50 && rect.bottom >= 50) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeSection]);

    return (
        <header>
            <nav>
                <ul className="flex flex-col items-start gap-3">
                    {navItemsClient.map((item) => (
                        <li
                            key={item.id}
                            className={`flex items-center gap-3 py-2 px-3 md:p-1 bg-transparent hover:text-cyan-400 transition-all border-b-2 border-gray-900 hover:border-b-2 ${activeSection == item.id ? "font-bold text-cyan-400 border-b-2 border-cyan-400" : "text-gray-500"}`}
                        >
                            <div className={`border-1 border-white transition-all rounded-md h-1 ${activeSection == item.id ? "bg-cyan-400 w-20": "bg-gray-500 w-10"}`}></div>
                            <Link href={`#${item.id}`}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}