import { ControlsItemType, DataTypes } from "@/types";
import FormControls from "./form-controls";

const controls: ControlsItemType[] = [
    {
        name: "mainText",
        type: "text",
        label: "Texto Principal",
    },
    {
        name: "description",
        type: "textarea",
        label: "Descrição",
    },
];

export default function AdminHomeView({formData, setFormData, handleSaveData} : DataTypes) {
    return (
        <div className="bg-gray-800/50 border border-gray-500/50 rounded-md shadow-xl py-8 md:py-10 px-6 md:px-8 w-full flex flex-col justify-center items-center gap-4">
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
    );
}