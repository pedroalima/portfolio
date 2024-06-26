import { ControlsItemType, DataTypesAsync, FormDataTypes } from "@/types";
import FormControls from "./form-controls";

const controls: ControlsItemType[] = [
    {
        name: "name",
        type: "text",
        label: "Nome do Projeto",
    },
    {
        name: "technologies",
        type: "text",
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
                    ? data.map((item: FormDataTypes, index: number) => (
                        <div key={index} className="bg-gray-800/50 border border-gray-500/50 rounded-md shadow-xl py-10 px-8 w-1/2 flex flex-col items-stretch gap-4">
                            <p>Nome: {item.name}</p>
                            <p>Tecnologias: {item.technologies}</p>
                            <p>Site: {item.website}</p>
                            <p>Github: {item.github}</p>
                        </div>
                    ))
                    : null
            }
            <div className="bg-gray-800/50 border border-gray-500/50 rounded-md shadow-xl py-10 px-8 w-1/2 flex flex-col items-stretch gap-4">
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