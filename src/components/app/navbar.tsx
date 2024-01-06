import Link from "next/link";

const navItems = [
    "Home",
    "About",
    "Products",
    "Experience",
    "Education",
    "Contact"
];

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-30">
            <nav className="container mx-auto p-8 flex justify-start gap-20">
                <h1><strong>Pedro</strong> Lima</h1>

                <ul  className="flex justify-between gap-10">
                    {navItems.map((item: string) => (
                        <Link href={`#${item}`} key={item}>{item}</Link>
                    ))}
                </ul>
            </nav>
        </header>
    );
}