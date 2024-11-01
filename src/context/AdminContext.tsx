"use client";
import {
    initialAboutViewFormData,
    initialEducationViewFormData,
    initialExperienceViewFormData,
    initialHomeViewFormData,
    initialProjectsViewFormData
} from "@/mock-data/";
import { addData, getData, updateData } from "@/services";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export interface AllDataTypes {
    [key: string]: FormDataTypes[]
}

export interface FormDataTypes {
    [key: string]: string
}

export interface DataMapTypes {
    [key: string]: FormDataTypes
}

type AdminContextType = {
    allData: AllDataTypes;
    setAllData: Dispatch<SetStateAction<AllDataTypes>>;
    isUpdate: boolean;
    setIsUpdate: Dispatch<SetStateAction<boolean>>;
    currentSelectedTab: string;
    setCurrentSelectedTab: Dispatch<SetStateAction<string>>;
    homeViewFormData: FormDataTypes;
    setHomeViewFormData: Dispatch<SetStateAction<FormDataTypes>>;
    aboutViewFormData: FormDataTypes;
    setAboutViewFormData: Dispatch<SetStateAction<FormDataTypes>>;
    experienceViewFormData: FormDataTypes;
    setExperienceViewFormData: Dispatch<SetStateAction<FormDataTypes>>;
    educationViewFormData: FormDataTypes;
    setEducationViewFormData: Dispatch<SetStateAction<FormDataTypes>>;
    projectsViewFormData: FormDataTypes;
    setProjectsViewFormData: Dispatch<SetStateAction<FormDataTypes>>;
    handleSaveData: (currentTab: string) => Promise<void>;
    resetFormData: () => void;
    extractAllData: () => Promise<void>;
};

export const AdminContext = createContext({} as AdminContextType);

export function AdminProvider({ children }: { children: ReactNode }) {
    const [ allData, setAllData ] = useState<AllDataTypes>({});
    const [ isUpdate, setIsUpdate ] = useState(false);

    const [ currentSelectedTab, setCurrentSelectedTab ] = useState("home");
    const [ homeViewFormData, setHomeViewFormData ] = useState(initialHomeViewFormData);
    const [ aboutViewFormData, setAboutViewFormData ] = useState(initialAboutViewFormData);
    const [ experienceViewFormData, setExperienceViewFormData ] = useState(initialExperienceViewFormData);
    const [ educationViewFormData, setEducationViewFormData ] = useState(initialEducationViewFormData);
    const [ projectsViewFormData, setProjectsViewFormData ] = useState(initialProjectsViewFormData);

    async function extractAllData () {
        const response = await getData(currentSelectedTab);

        if (currentSelectedTab === "home" && response && response.data && response.data.length) {
            setHomeViewFormData(response && response.data[0]);
            setIsUpdate(true);
        }

        if (currentSelectedTab === "about" && response && response.data && response.data.length) {
            setAboutViewFormData(response && response.data[0]);
            setIsUpdate(true);
        }

        if (response?.success) {
            setAllData({
                ...allData,
                [currentSelectedTab]: response && response.data,
            });
        }
    }

    async function handleSaveData(currentTab: string) {
        const dataMap: DataMapTypes = {
            home: homeViewFormData,
            about: aboutViewFormData,
            experience: experienceViewFormData,
            education: educationViewFormData,
            projects: projectsViewFormData
        };

        const response = 
            isUpdate 
                ? await updateData(currentTab, dataMap[currentTab]) 
                : await addData(currentTab, dataMap[currentTab]);
        console.log(response, "response");

        if (response.success) {
            resetFormData();
            extractAllData();
        }
    }

    function resetFormData () {
        setHomeViewFormData(initialHomeViewFormData);
        setAboutViewFormData(initialAboutViewFormData);
        setExperienceViewFormData(initialExperienceViewFormData);
        setEducationViewFormData(initialEducationViewFormData);
        setProjectsViewFormData(initialProjectsViewFormData);
    }

    return (
        <AdminContext.Provider value={{ 
            currentSelectedTab, 
            setCurrentSelectedTab, 
            homeViewFormData,
            setHomeViewFormData,
            aboutViewFormData,
            setAboutViewFormData,
            experienceViewFormData,
            setExperienceViewFormData,
            educationViewFormData,
            setEducationViewFormData,
            projectsViewFormData,
            setProjectsViewFormData,
            allData,
            setAllData,
            isUpdate,
            setIsUpdate,
            handleSaveData,
            resetFormData,
            extractAllData
        }}>
            {children}
        </AdminContext.Provider>
    );
}
