import { Dispatch, SetStateAction } from "react";
import FormControls from "./form-controls";
import { ControlsItemType } from "./home";
import { FormDataTypes } from "@/app/(private)/admin/page";

const controls: ControlsItemType[] = [
    {
        name: "nome",
        type: "text",
        label: "Nome do Projeto",
    },
    {
        name: "tecnologias",
        type: "text",
        label: "Tecnologias",
    },
    {
        name: "site",
        type: "text",
        label: "Site",
    },
    {
        name: "github",
        type: "text",
        label: "GitHub",
    }
];

interface DataTypes {
    formData: FormDataTypes,
    setFormData: Dispatch<SetStateAction<FormDataTypes>>,
    handleSaveData: (data: string) => void,
}

export default function AdminProjectsView({formData, setFormData, handleSaveData} : DataTypes) {
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
                    onClick={() => handleSaveData("projects")}
                    className="bg-blue-500 self-center py-1 px-4 rounded-md text-white"
                >Adicionar</button>
            </div>
        </div>
    );
}