import { navItems } from "@/mock-data/";
import { NavbarMenuTypes } from "@/types";
import Cookie from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavbarAdmin({ currentSelectedTab, setCurrentSelectedTab, resetFormData, setIsUpdate } : NavbarMenuTypes) {
    const route = useRouter();

    const handleLogout = () => {
        Cookie.remove("auth_token");
        route.push("/");
    };

    return (
        <header className="fixed top-0 w-full z-30 bg-gray-800/50 border-b border-gray-500/50">
            <nav>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
                    <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"><strong>Pedro</strong> Lima</span>
                    </Link>

                    <div className="flex order-2 space-x-0 rtl:space-x-reverse">
                        <button 
                            onClick={handleLogout}
                            type="button" 
                            className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center bg-red-600 hover:bg-red-700 focus:ring-red-800"
                        >Logout</button>
                    </div>

                    <div className="flex w-auto order-1" id="navbar-cta">
                        <div className="p-0 rounded-lg space-x-8 rtl:space-x-reverse flex mt-0 border-0">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    className={`block py-6 px-3 md:px-0 text-white hover:text-cyan-400 ${currentSelectedTab == item.id ? "border-b-4 border-cyan-400" : ""}`}
                                    onClick={() => {
                                        setCurrentSelectedTab(item.id);
                                        resetFormData();
                                        setIsUpdate(false);
                                    }}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}