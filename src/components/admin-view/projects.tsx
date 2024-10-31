import { ControlsItemType, DataTypesAsync } from "@/types";
import FormControls from "./form-controls";
import ProjectBox from "./project-box";

const controls: ControlsItemType[] = [
    {
        name: "name",
        type: "text",
        label: "Nome do Projeto",
    },
    {
        name: "technologies",
        type: "textarea",
        label: "Tecnologias",
    },
    {
        name: "website",
        type: "text",
        label: "Site",
    },
    {
        name: "github",
        type: "text",
        label: "GitHub",
    }
];

export default function AdminProjectsView({ data, formData, setFormData, handleSaveData, setIsUpdate} : DataTypesAsync) {
    return (
        <div className="min-h-dvh w-full py-14 mt-10 flex flex-col gap-4 justify-center items-center">
            {
                data && data.length
                    ? (
                        <ul className="flex flex-col gap-5">
                            <ProjectBox projects={data} setFormData={setFormData} setIsUpdate={setIsUpdate!} />
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
                    onClick={() => handleSaveData("projects")}
                    className="bg-blue-500 self-center py-1 px-4 rounded-md text-white"
                >Adicionar</button>
            </div>
        </div>
    );
}