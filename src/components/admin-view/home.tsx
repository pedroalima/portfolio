import { Dispatch, SetStateAction } from "react";
import FormControls from "./form-controls";
import { FormDataTypes } from "@/app/(private)/admin/page";

export interface ControlsItemType {
    name: string,
    type: string,
    label: string,
}

const controls: ControlsItemType[] = [
    {
        name: "mainText",
        type: "text",
        label: "Texto Principal",
    },
    {
        name: "description",
        type: "text",
        label: "Descrição",
    },
];

interface DataTypes {
    formData: FormDataTypes,
    setFormData: Dispatch<SetStateAction<FormDataTypes>>,
    handleSaveData: (data: string) => void,
}

export default function AdminHomeView({formData, setFormData, handleSaveData} : DataTypes) {
    return (
        <div className="min-h-dvh flex justify-center items-center">
            <div className="bg-white rounded-md shadow-xl py-10 px-8 w-1/2 flex flex-col items-stretch gap-4">
                <FormControls
                    controls={controls}
                    formData={formData}
                    setFormData={setFormData}
                />

                <button 
                    onClick={() => handleSaveData("home")}
                    className="bg-blue-500 self-center py-1 px-4 rounded-md text-white"
                >Adicionar</button>
            </div>
        </div>
    );
}