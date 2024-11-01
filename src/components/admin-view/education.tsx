import { AdminContext } from "@/context/AdminContext";
import { ControlsItemType } from "@/types";
import { useContext } from "react";
import EducationBox from "./education-box";
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

export default function AdminEducationView() {
    const {educationViewFormData, setEducationViewFormData, setIsUpdate, allData, handleSaveData } = useContext(AdminContext);
    
    return (
        <div className="min-h-dvh w-full py-14 mt-10 flex flex-col gap-4 justify-center items-center">
            {
                allData?.education && allData?.education.length
                    ? (
                        <ul className="flex flex-col justify-around items-start gap-3 lg:gap-5 w-full">
                            <EducationBox education={allData?.education} setFormData={setEducationViewFormData} setIsUpdate={setIsUpdate!} />
                        </ul>
                    )
                    : null
            }
            <div className="bg-gray-800/50 border border-gray-500/50 rounded-md shadow-xl mt-8 py-10 px-8 w-full flex flex-col items-center gap-4">
                <FormControls
                    controls={controls}
                    formData={educationViewFormData}
                    setFormData={setEducationViewFormData}
                />

                <button 
                    onClick={() => handleSaveData("education")}
                    className="bg-blue-500 self-center py-1 px-4 rounded-md text-white"
                >Adicionar</button>
            </div>
        </div>
    );
}