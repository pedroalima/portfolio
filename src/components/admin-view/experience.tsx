import FormControls from "./form-controls";
import { ControlsItemType, DataTypesAsync, FormDataTypes } from "@/types";

const controls: ControlsItemType[] = [
    {
        name: "position",
        type: "text",
        label: "Cargo",
    },
    {
        name: "company",
        type: "text",
        label: "Empresa",
    },
    {
        name: "duration",
        type: "text",
        label: "Duração",
    },
    {
        name: "location",
        type: "text",
        label: "Local",
    },
    {
        name: "jobprofile",
        type: "text",
        label: "Perfil de Emprego",
    },
];

export default function AdminExperienceView({ data, formData, setFormData, handleSaveData } : DataTypesAsync) {
    return (
        <div className="min-h-dvh py-14 mt-10 flex flex-col gap-4 justify-center items-center">
            {
                data && data.length
                    ? data.map((item: FormDataTypes, index: number) => (
                        <div key={index} className="bg-white border-2 border-gray-300 rounded-md shadow-xl py-10 px-8 w-1/2 flex flex-col items-stretch gap-2">
                            <p>Cargo: {item.position}</p>
                            <p>Empresa: {item.company}</p>
                            <p>Duração: {item.duration}</p>
                            <p>Local: {item.location}</p>
                            <p>Perfil de Trabalho: {item.jobprofile}</p>
                        </div>
                    ))
                    : null
            }
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