import { ControlsItemType, DataTypesAsync } from "@/types";
import EducationBox from "../client-view/experience-education/education-box ";
import FormControls from "./form-controls";

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
        <div className="min-h-dvh w-full py-14 mt-10 flex flex-col gap-4 justify-center items-center">
            {
                data && data.length
                    ? (
                        <ul className="flex flex-col justify-around items-start gap-3 lg:gap-5 w-full">
                            <EducationBox education={data} />
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
                    onClick={() => handleSaveData("education")}
                    className="bg-blue-500 self-center py-1 px-4 rounded-md text-white"
                >Adicionar</button>
            </div>
        </div>
    );
}