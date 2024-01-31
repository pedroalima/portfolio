import FormControls from "./form-controls";
import { ControlsItemType, DataTypesAsync, FormDataTypes } from "@/types";

const controls: ControlsItemType[] = [
    {
        name: "degree",
        type: "text",
        label: "Curso Superior",
    },
    {
        name: "year",
        type: "text",
        label: "Ano",
    },
    {
        name: "college",
        type: "text",
        label: "Faculdade",
    }
];

export default function AdminEducationView({ data, formData, setFormData, handleSaveData} : DataTypesAsync) {
    return (
        <div className="min-h-dvh py-14 mt-10 flex flex-col gap-4 justify-center items-center">
            {
                data && data.length
                    ? data.map((item: FormDataTypes, index: number) => (
                        <div key={index} className="bg-white rounded-md shadow-xl py-10 px-8 w-1/2 flex flex-col items-stretch gap-4">
                            <p>Graduação: {item.degree}</p>
                            <p>Ano: {item.year}</p>
                            <p>Faculdade: {item.college}</p>
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
                    onClick={() => handleSaveData("education")}
                    className="bg-blue-500 self-center py-1 px-4 rounded-md text-white"
                >Adicionar</button>
            </div>
        </div>
    );
}