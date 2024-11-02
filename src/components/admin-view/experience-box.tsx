import { FormDataTypes } from "@/context/AdminContext";
import { deleteData, getData } from "@/services";
import { Dispatch, SetStateAction } from "react";
import Container from "../client-view/container";

interface ExperienceBox {
    experience: FormDataTypes[], 
    setFormData: Dispatch<SetStateAction<FormDataTypes>>,
    setIsUpdate: Dispatch<SetStateAction<boolean>>
}

export default function ExperienceBox({ experience, setFormData, setIsUpdate } : ExperienceBox) {
    async function getExperience(index:number) {
        const response = getData("experience");

        const data = await response;
        if (data && data.data) {
            setFormData(data.data[index]);
            setIsUpdate(true);
        }
    }

    async function deleteExperience(id: string) {
        try {
            const response = await deleteData("experience", { id });

            if(response) {
                console.log("Deletado com sucesso");
            }
        } catch (error) {
            console.error("Erro ao deletar experiência: ",error);
        }
        
    }

    return (
        <>
            {experience && experience.map((item, i) => (
                <Container key={i} className="relative px-4 lg:px-6 py-4 flex flex-col lg:flex-row justify-between items-start gap-2 lg:gap-4">
                    <div className="lg:p-1 lg:w-1/4">
                        <h4 className="text-xs uppercase font-semibold text-slate-500">{item.duration}</h4>
                        <button 
                            onClick={() => getExperience(i)}
                            className="absolute top-4 right-6 px-3 py-1 rounded-md border border-white text-sm"
                        >Editar</button>
                        <button 
                            onClick={() => deleteExperience(item.id)}
                            className="absolute bottom-4 left-6 px-3 py-1 rounded-md border border-white text-sm"
                        >Delete</button>
                    </div>
                                
                    <div className="lg:w-3/4">
                        <h4 className="text-base p-0 m-0 font-semibold">{item.position} &#183; {item.company}</h4>
                        <p className="text-sm text-slate-500">{item.location}</p>
                        <p className="text-sm font-normal leading-normal my-2 text-gray-400">{item.jobprofile}</p>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {item.skills.split(",").map((skill: string, i: number) => (
                                <div key={i} className="bg-cyan-500/[0.1] shadow-md rounded-2xl px-3 py-1 flex justify-center items-center">
                                    <span  className="text-xs text-cyan-500 font-semibold">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            ))}
        </>
    );
}
