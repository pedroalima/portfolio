import FormControls from "./form-controls";
import { ControlsItemType, DataTypes } from "@/types";

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

export default function AdminHomeView({formData, setFormData, handleSaveData} : DataTypes) {
    return (
        <div className="container-bg rounded-md shadow-xl py-10 px-8 w-1/2 flex flex-col items-stretch gap-4">
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