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
// import {
//     initialAboutViewFormData,
//     initialEducationViewFormData,
//     initialExperienceViewFormData,
//     initialHomeViewFormData,
//     initialProjectsViewFormData
// } from "@/mock-data/";
// import { addData, getData, updateData } from "@/services";
// import { AllDataTypes, DataMapTypes } from "@/types";
// import { useEffect, useState } from "react";

export default function Admin() {
    const { currentSelectedTab, extractAllData } = useContext(AdminContext);

    // const [ currentSelectedTab, setCurrentSelectedTab ] = useState("home");
    // const [ homeViewFormData, setHomeViewFormData ] = useState(initialHomeViewFormData);
    // const [ aboutViewFormData, setAboutViewFormData ] = useState(initialAboutViewFormData);
    // const [ experienceViewFormData, setExperienceViewFormData ] = useState(initialExperienceViewFormData);
    // const [ educationViewFormData, setEducationViewFormData ] = useState(initialEducationViewFormData);
    // const [ projectsViewFormData, setProjectsViewFormData ] = useState(initialProjectsViewFormData);
    
    // const [ allData, setAllData ] = useState<AllDataTypes>({});
    // const [ isUpdate, setIsUpdate ] = useState(false);

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

    // async function extractAllData () {
    //     const response = await getData(currentSelectedTab);

    //     if (currentSelectedTab === "home" && response && response.data && response.data.length) {
    //         setHomeViewFormData(response && response.data[0]);
    //         setIsUpdate(true);
    //     }

    //     if (currentSelectedTab === "about" && response && response.data && response.data.length) {
    //         setAboutViewFormData(response && response.data[0]);
    //         setIsUpdate(true);
    //     }

    //     if (response?.success) {
    //         setAllData({
    //             ...allData,
    //             [currentSelectedTab]: response && response.data,
    //         });
    //     }
    // }

    // async function handleSaveData(currentTab: string) {
    //     const dataMap: DataMapTypes = {
    //         home: homeViewFormData,
    //         about: aboutViewFormData,
    //         experience: experienceViewFormData,
    //         education: educationViewFormData,
    //         projects: projectsViewFormData
    //     };

    //     const response = 
    //         isUpdate 
    //             ? await updateData(currentTab, dataMap[currentTab]) 
    //             : await addData(currentTab, dataMap[currentTab]);
    //     console.log(response, "response");

    //     if (response.success) {
    //         resetFormData();
    //         extractAllData();
    //     }
    // }

    // function resetFormData () {
    //     setHomeViewFormData(initialHomeViewFormData);
    //     setAboutViewFormData(initialAboutViewFormData);
    //     setExperienceViewFormData(initialExperienceViewFormData);
    //     setEducationViewFormData(initialEducationViewFormData);
    //     setProjectsViewFormData(initialProjectsViewFormData);
    // }

    // useEffect(()=> {
    //     extractAllData();
    // }, [currentSelectedTab]);

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