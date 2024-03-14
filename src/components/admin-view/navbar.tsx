import Cookie from "js-cookie";
import { NavbarMenuTypes } from "@/types";
import { useRouter } from "next/navigation";
import { navItems } from "@/mock-data/";

export default function NavbarAdmin({ currentSelectedTab, setCurrentSelectedTab, resetFormData, setIsUpdate } : NavbarMenuTypes) {
    const route = useRouter();

    const handleLogout = () => {
        Cookie.remove("auth_token");
        route.push("/");
    };

    return (
        <header className="fixed top-0 w-full z-30">
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><strong>Pedro</strong> Lima</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button 
                            onClick={handleLogout}
                            type="button" 
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        >Logout</button>
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <div className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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