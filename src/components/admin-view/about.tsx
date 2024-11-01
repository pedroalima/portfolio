import { AdminContext } from "@/context/AdminContext";
import { ControlsItemType } from "@/types";
import { useContext } from "react";
import FormControls from "./form-controls";

const controls: ControlsItemType[] = [
    {
        name: "about",
        type: "textarea",
        label: "Sobre",
    },
    {
        name: "projects",
        type: "text",
        label: "Nº de Projetos",
    },
    {
        name: "experience",
        type: "text",
        label: "Tempo de Experiência",
    },
    {
        name: "skills",
        type: "textarea",
        label: "Skills",
    },
];

export default function AdminAboutView() {
    const {aboutViewFormData, setAboutViewFormData, handleSaveData } = useContext(AdminContext);

    return (
        <div className="bg-gray-800/50 border border-gray-500/50 rounded-md shadow-xl py-10 px-8 w-full flex flex-col items-center gap-4">
            <FormControls
                controls={controls}
                formData={aboutViewFormData}
                setFormData={setAboutViewFormData}
            />

            <button 
                onClick={() => handleSaveData("about")}
                className="bg-blue-500 self-center py-1 px-4 rounded-md text-white"
            >Adicionar</button>
        </div>
    );
}