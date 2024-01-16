import { Dispatch, SetStateAction } from "react";
import FormControls from "./form-controls";

type ControlsTypes = [
    ControlsItemType,
    ControlsItemType,
    ControlsItemType,
    ControlsItemType
]

interface ControlsItemType {
    name: string,
    type: string,
    label: string,
}

const controls: ControlsTypes = [
    {
        name: "updates",
        type: "text",
        label: "Texto de atualização",
    },
    {
        name: "projects",
        type: "number",
        label: "Nº de projetos",
    },
    {
        name: "experience",
        type: "number",
        label: "Tempo de experiência",
    },
    {
        name: "skills",
        type: "text",
        label: "Skills",
    },
];

interface DataTypes {
    formData: { principal: string; descricao: string },
    setFormData: Dispatch<SetStateAction<{ principal: string; descricao: string }>>,
    handleSaveData: () => void,
}

export default function AdminAboutView({formData, setFormData, handleSaveData} : DataTypes) {
    
    console.log(formData);

    return (
        <div className="min-h-dvh flex justify-center items-center">
            <div className="bg-white rounded-md shadow-xl py-10 px-8 w-1/2 flex flex-col items-stretch gap-4">
                <FormControls
                    controls={controls}
                    formData={formData}
                    setFormData={setFormData}
                />

                <button 
                    onClick={handleSaveData}
                    className="bg-blue-500 self-center py-1 px-4 rounded-md text-white"
                >Adicionar</button>
            </div>
        </div>
    );
}