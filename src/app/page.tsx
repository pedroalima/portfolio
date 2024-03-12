"use client";
import ClientHome from "@/components/client-view/home";
import ClientAbout from "@/components/client-view/about";
import ClientExperience from "@/components/client-view/experience-education";
import ClientProjects from "@/components/client-view/projects";
import { getData } from "@/services";
import { useEffect, useState } from "react";

const mockHome = {
    success: false,
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
    success: false,
    data: [
        {
            _id:"",
            about:"",
            projects:"",
            experience:"",
            skills:"",
            createdAt:"",
            updatedAt:"",
        }
    ]
};

const mockExperience = {
    "success":false,
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
    success:false,
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

const mockProjects = {
    "success":false,
    "data":[
        {
            _id:"65ba978e326af45d76c392c6",
            name:"Safeway",
            technologies:"Typescript, Next e Tailwindcss",
            website:"htps://safeway-two.vercel.app/",
            github:"https://github.com/pedroalima/safeway",
            createdAt:"2024-01-31T18:55:10.684Z",
            updatedAt:"2024-01-31T18:55:10.684Z",
        },
        {
            _id:"65ce640bbbe78b75f5695d70",
            name:"News X",
            technologies:"TypeScript, React, Material-UI (MUI), Styled Components, Node e MySQL",
            website:"https://newsx-five.vercel.app/",
            github:"https://github.com/pedroalima/newsx",
            createdAt:"2024-02-15T19:20:43.487Z",
            updatedAt:"2024-02-15T19:20:43.487Z",
        },
        {
            _id:"65ce646ebbe78b75f5695d73",
            name:"Store X",
            technologies:"TypeScript, React, Material-UI (MUI) e Styled Components",
            website:"https://storex-tau.vercel.app/",
            github:"https://github.com/pedroalima/storex",
            createdAt:"2024-02-15T19:22:22.072Z",
            updatedAt:"2024-02-15T19:22:22.072Z",
        },
        {
            _id:"65ce7503bbe78b75f5695dbc",
            name:"Teste 1",
            technologies:"Teste 1, Teste 1, Teste 1",
            website:"https://storex-tau.vercel.app/",
            github:"https://github.com/pedroalima/storex",
            createdAt:"2024-02-15T20:33:07.587Z",
            updatedAt:"2024-02-15T20:33:07.587Z",
        },
        {
            _id:"65ce751dbbe78b75f5695dbf",
            name:"Teste 2",
            technologies:"Teste 2Teste 2Teste 2",
            website:"https://storex-tau.vercel.app/",
            github:"https://github.com/pedroalima/storex",
            createdAt:"2024-02-15T20:33:33.457Z",
            updatedAt:"2024-02-15T20:33:33.457Z",
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
            <main className="lg:w-1/2 lg:flex lg:flex-col gap-36">
                <ClientAbout data={aboutSectionData} />
                <ClientExperience experience={experienceSectionData} education={educationSectionData} />
                <ClientProjects data={projectsSectionData} />
            </main>
        </div>
    );
}