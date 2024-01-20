import { Dispatch, SetStateAction } from "react";
import FormControls from "./form-controls";
import { ControlsItemType } from "./home";
import { FormDataTypes } from "@/app/(private)/admin/page";

const controls: ControlsItemType[] = [
    {
        name: "cargo",
        type: "text",
        label: "Cargo",
    },
    {
        name: "empresa",
        type: "text",
        label: "Empresa",
    },
    {
        name: "duracao",
        type: "text",
        label: "Duração",
    },
    {
        name: "local",
        type: "text",
        label: "Local",
    },
    {
        name: "perfildeemprego",
        type: "text",
        label: "Perfil de Emprego",
    },
];

interface DataTypes {
    formData: FormDataTypes,
    setFormData: Dispatch<SetStateAction<FormDataTypes>>,
    handleSaveData: (data: string) => void,
}

export default function AdminExperienceView({formData, setFormData, handleSaveData} : DataTypes) {
    
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
                    onClick={() => handleSaveData("experience")}
                    className="bg-blue-500 self-center py-1 px-4 rounded-md text-white"
                >Adicionar</button>
            </div>
        </div>
    );
}