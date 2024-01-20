"use client";
import AdminHomeView from "@/components/admin-view/home";
import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminProjectsView from "@/components/admin-view/projects";
import { useState } from "react";
import { addData } from "@/services";

export type FormDataTypes = {
    [key: string]: string
}

interface DataMapTypes {
    [key: string]: FormDataTypes
}

const initialHomeViewFormData: FormDataTypes = {
    principal: "",
    descricao: ""
};

const initialAboutViewFormData: FormDataTypes = {
    updates: "",
    projects: "",
    experience: "",
    skills: ""
};

const initialExperienceViewFormData: FormDataTypes = {
    cargo: "",
    empresa: "",
    local: "",
    perfildeemprego: ""
};

const initialEducationViewFormData: FormDataTypes = {
    curso: "",
    ano: "",
    faculdade: ""
};

const initialProjectsViewFormData: FormDataTypes = {
    nome: "",
    tecnologias: "",
    site: "",
    github: ""
};

export default function Admin() {
    const [ currentSelectedTab, setCurrentSelectedTab ] = useState("home");
    const [ homeViewFormData, setHomeViewFormData ] = useState(initialHomeViewFormData);
    const [ aboutViewFormData, setAboutViewFormData ] = useState(initialAboutViewFormData);
    const [ experienceViewFormData, setExperienceViewFormData ] = useState(initialExperienceViewFormData);
    const [ educationViewFormData, setEducationViewFormData ] = useState(initialEducationViewFormData);
    const [ projectsViewFormData, setProjectsViewFormData ] = useState(initialProjectsViewFormData);

    const menuItems = [
        {
            id: "home",
            label: "Home",
            component: (
                <AdminHomeView
                    formData={homeViewFormData}
                    setFormData={setHomeViewFormData}
                    handleSaveData={handleSaveData}
                />
            )
        },
        {
            id: "about",
            label: "About",
            component: (
                <AdminAboutView
                    formData={aboutViewFormData}
                    setFormData={setAboutViewFormData}
                    handleSaveData={handleSaveData}
                />
            )
        },
        {
            id: "experience",
            label: "Experience",
            component: (
                <AdminExperienceView 
                    formData={experienceViewFormData}
                    setFormData={setExperienceViewFormData}
                    handleSaveData={handleSaveData}
                />
            )
        },
        {
            id: "education",
            label: "Education",
            component: (
                <AdminEducationView 
                    formData={educationViewFormData}
                    setFormData={setEducationViewFormData}
                    handleSaveData={handleSaveData}
                />
            )
        },
        {
            id: "projects",
            label: "Projects",
            component: (
                <AdminProjectsView 
                    formData={projectsViewFormData}
                    setFormData={setProjectsViewFormData}
                    handleSaveData={handleSaveData}
                />
            )
        },
        {
            id: "contact",
            label: "Contact",
            component: (
                <AdminContactView />
            )
        }
    ];

    async function handleSaveData(currentTab: string) {
        const dataMap: DataMapTypes = {
            home: homeViewFormData
        };

        const response = await addData(currentTab, dataMap[currentTab]);

        console.log(response);
    }

    return (
        <div className="h-dvh">
            <header className="fixed top-0 w-full z-30">
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><strong>Pedro</strong> Lima</span>
                        </a>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Logout</button>
                            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                                </svg>
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                            <div className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                {menuItems.map((item) => (
                                    <button
                                        key={item.id}
                                        type="button"
                                        className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:dark:text-white hover:text-blue-600"
                                        onClick={() => {
                                            setCurrentSelectedTab(item.id);
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
            
        
            {menuItems && menuItems.map(
                (item) => item.id === currentSelectedTab && (
                    <main key={item.id} className="bg-gray-100">
                        {item.component}
                    </main>
                )
            )}
        </div>
    );
}