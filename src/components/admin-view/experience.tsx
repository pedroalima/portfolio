import { ControlsItemType, DataTypesAsync } from "@/types";
import ExperienceBox from "./experience-box";
import FormControls from "./form-controls";

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
        type: "textarea",
        label: "Perfil de Trabalho",
    },
    {
        name: "skills",
        type: "textarea",
        label: "Habilidades",
    },
];

export default function AdminExperienceView({ data, formData, setFormData, handleSaveData, setIsUpdate } : DataTypesAsync) {
    return (
        <div className="min-h-dvh w-full py-14 mt-10 flex flex-col gap-4 justify-center items-center">
            {
                data && data.length
                    ? (
                        <ul className="flex flex-col justify-around items-start gap-5">
                            <ExperienceBox experience={data} setFormData={setFormData} setIsUpdate={setIsUpdate!} />
                        </ul>
                    )
                    : null
            }
            <div className="bg-gray-800/50 border border-gray-500/50 rounded-md shadow-xl mt-8 py-10 px-8 w-full flex flex-col items-center gap-4">
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