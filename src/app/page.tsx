"use client";
import ClientHome from "@/components/client-view/home";
import ClientAbout from "@/components/client-view/about";
import ClientExperience from "@/components/client-view/experience-education";
import ClientProjects from "@/components/client-view/projects";
import { getData } from "@/services";
import { useEffect, useState } from "react";

const mockHome = {
    success: true,
    data: [
        {
            _id: "",
            mainText: "",
            description: "",
            createdAt: "",
            updatedAt: ""
        }
    ]
};

const mockAbout ={
    success: true,
    data: [
        {
            _id:"65b69b682622e85f51718202",
            about:"test 3",
            projects:"35",
            experience:"1 ano",
            skills:"TypeScript, React, Node, C#, JavaScript, TailwindCSS, CSS, HTML",
            createdAt:"2024-01-28T18:22:32.497Z",
            updatedAt:"2024-02-13T23:01:19.161Z",
        }
    ]
};

const mockExperience = {
    "success":true,
    "data":[
        {
            _id:"65ba98db326af45d76c392d3",
            position:"Desenvolvedor Front-end",
            company:"Skill Labs",
            duration:"11/2023 - Atual",
            location:"Curitiba, Paraná, Brasil",
            jobprofile:"Desenvolvimento da Jobster, uma plataforma SaaS voltada para recrutamento e seleção, que oferece um programa de triagem capaz de identificar as necessidades para a criação de um plano de desenvolvimento individual. Ferramentas e tecnologias: React, Styled Component, MUI, Redux, Axios, Figma, Github",
            createdAt:"2024-01-31T19:00:43.885Z",
            updatedAt:"2024-01-31T19:00:43.885Z",
        },
        {
            _id:"65baa792326af45d76c39337",
            position:"Desenvolvedor Front-end",
            company:"Skill Labs",
            duration:"11/2023 - Atual",
            location:"Curitiba, Paraná, Brasil",
            jobprofile:"Desenvolvimento da Jobster, uma plataforma SaaS voltada para recrutamento e seleção, que oferece um programa de triagem capaz de identificar as necessidades para a criação de um plano de desenvolvimento individual. Ferramentas e tecnologias: React, Styled Component, MUI, Redux, Axios, Figma, Github",
            createdAt:"2024-01-31T20:03:30.951Z",
            updatedAt:"2024-01-31T20:03:30.951Z",
        }
    ]
};

const mockEducation = {
    success:true,
    data:[
        {
            _id:"65ba8eab326af45d76c3928b",
            degree:"Análise e Desenvolvimento de Sistemas",
            year:"2023 - 2025",
            college:"Fanor Wyden",
            createdAt:"2024-01-31T18:17:15.738Z",
            updatedAt:"2024-01-31T18:17:15.738Z",
        }
    ]
};

export default function Home() {
    const [homeSectionData, setHomeSectionData] = useState(mockHome);
    const [aboutSectionData, setAboutSectionData] = useState(mockAbout);
    const [experienceSectionData, setExperienceSectionData] = useState(mockExperience);
    const [educationSectionData, setEducationSectionData] = useState(mockEducation);
    const [projectsSectionData, setProjectsSectionData] = useState(mockProjects);

    async function extractAllData() {
        const homeData = await getData("home");
        const aboutData = await getData("about");
        const experienceData = await getData("experience");
        const educationData = await getData("education");
        const projectsData = await getData("projects");

        setHomeSectionData(homeData);
        setAboutSectionData(aboutData);
        setExperienceSectionData(experienceData);
        setEducationSectionData(educationData);
        setProjectsSectionData(projectsData);
    }

    useEffect(() => {
        extractAllData();
    },[]);
    
    return (
        <div className="text-white flex justify-between gap-4 mx-20">
            <header className="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:py-24">
                <ClientHome data={homeSectionData} />
            </header>
            <main className="lg:pt-24 lg:w-1/2 lg:py-24 lg:flex lg:flex-col lg: gap-16">
                <ClientAbout data={aboutSectionData} />
                <ClientExperience experience={experienceSectionData} education={educationSectionData} />
                <ClientProjects data={projectsSectionData} />
            </main>
        </div>
    );
}