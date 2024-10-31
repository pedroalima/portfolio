import { getData } from "@/services";
import { FormDataTypes } from "@/types";
import { Dispatch, SetStateAction } from "react";
import Container from "../client-view/container";

interface EducationBox {
    education: FormDataTypes[], 
    setFormData: Dispatch<SetStateAction<FormDataTypes>>,
    setIsUpdate: Dispatch<SetStateAction<boolean>>
}

export default function EducationBox({ education, setFormData, setIsUpdate } : EducationBox) {

    async function getEducation(index:number) {
        const response = getData("education");

        const data = await response;
        if (data && data.data) {
            setFormData(data.data[index]);
            setIsUpdate(true);
        }
    }

    return (
        <>
            {education && education.map((item, i) => (
                <Container key={i} className="relative px-4 lg:px-6 py-2 lg:py-4 flex flex-col lg:flex-row justify-between lg:items-center gap-1 lg:gap-4">
                    <div className="lg:w-1/4">
                        <h3 className="text-xs uppercase font-semibold text-slate-500">{item.year}</h3>
                        <button 
                            onClick={() => getEducation(i)}
                            className="absolute top-4 right-6 px-3 py-1 rounded-md border border-white text-sm"
                        >Editar</button>
                    </div>
                    
                    <div className="lg:w-3/4">
                        <h4 className="text-base font-semibold">{item.degree}</h4>
                        <p className="text-sm text-slate-500">{item.college}</p>
                    </div>
                </Container>
            ))}
        </>
    );
}
