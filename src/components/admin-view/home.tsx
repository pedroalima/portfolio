import { Dispatch, SetStateAction } from "react";
import FormControls from "./form-controls";

export type ControlsTypes = [
    ControlsItemType,
    ControlsItemType
]

export interface ControlsItemType {
    name: string,
    type: string,
    label: string,
}

const controls: ControlsTypes = [
    {
        name: "principal",
        type: "text",
        label: "Menssagem Principal",
    },
    {
        name: "descricao",
        type: "text",
        label: "Descrição",
    },
];

interface DataTypes {
    formData: { principal: string; descricao: string },
    setFormData: Dispatch<SetStateAction<{ principal: string; descricao: string }>>,
    handleSaveData: () => void,
}

export default function AdminHomeView({formData, setFormData, handleSaveData} : DataTypes) {
    

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