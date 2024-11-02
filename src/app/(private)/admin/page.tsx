"use client";
import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import NavbarAdmin from "@/components/admin-view/navbar";
import AdminProjectsView from "@/components/admin-view/projects";
import { AdminContext } from "@/context/AdminContext";
import { useContext, useEffect } from "react";

export default function Admin() {
    const { currentSelectedTab, extractAllData } = useContext(AdminContext);

    const menuItems = [
        {
            id: "home",
            label: "Home",
            component: (
                <AdminHomeView />
            )
        },
        {
            id: "about",
            label: "About",
            component: (
                <AdminAboutView />
            )
        },
        {
            id: "experience",
            label: "Experience",
            component: (
                <AdminExperienceView />
            )
        },
        {
            id: "education",
            label: "Education",
            component: (
                <AdminEducationView />
            )
        },
        {
            id: "projects",
            label: "Projects",
            component: (
                <AdminProjectsView />
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

    useEffect(()=> {
        extractAllData();
    }, [currentSelectedTab]);

    return (
        <div className="min-h-dvh min-w-full">
            <NavbarAdmin />

            <main className="flex justify-center items-center mt-10 md:mt-12">
                {menuItems && menuItems.map(
                    (item) => item.id === currentSelectedTab && (
                        <div className="text-white min-h-dvh w-full md:w-[80%] flex justify-center items-center" key={item.id}>
                            {item.component}
                        </div>
                    )
                )}
            </main>
        </div>
    );
}