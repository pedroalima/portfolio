import { ControlsItemType, DataTypesAsync } from "@/types";
import ProjectBox from "../client-view/projects/project-box";
import FormControls from "./form-controls";

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

export default function AdminProjectsView({ data, formData, setFormData, handleSaveData} : DataTypesAsync) {
    return (
        <div className="min-h-dvh w-full py-14 mt-10 flex flex-col gap-4 justify-center items-center">
            {
                data && data.length
                    ? (
                        <ul className="flex flex-col gap-5">
                            <ProjectBox data={data} />
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