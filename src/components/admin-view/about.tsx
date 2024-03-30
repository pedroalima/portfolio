import FormControls from "./form-controls";
import { DataTypes, ControlsItemType } from "@/types";

const controls: ControlsItemType[] = [
    {
        name: "about",
        type: "text",
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
        type: "text",
        label: "Skills",
    },
];

export default function AdminAboutView({formData, setFormData, handleSaveData} : DataTypes) {
    return (
        <div className="container-bg rounded-md shadow-xl py-10 px-8 w-1/2 flex flex-col items-stretch gap-4">
            <FormControls
                controls={controls}
                formData={formData}
                setFormData={setFormData}
            />

            <button 
                onClick={() => handleSaveData("about")}
                className="bg-blue-500 self-center py-1 px-4 rounded-md text-white"
            >Adicionar</button>
        </div>
    );
}