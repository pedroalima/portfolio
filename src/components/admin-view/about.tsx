import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type InputsTypes = [
    ItemInputTypes,
    ItemInputTypes,
    ItemInputTypes,
    ItemInputTypes
]

interface ItemInputTypes {
    htmlFor: string,
    label: string,
    type: string,
    placeholder: string,
    regValue: "numProjects" | "timeExperience" | "skills" | "updates"
}

const inputs: InputsTypes = [
    {
        htmlFor: "updates",
        label: "Texto de atualização",
        type: "text",
        placeholder: "",
        regValue: "updates"
    },
    {
        htmlFor: "projects",
        label: "Nº de projetos",
        type: "number",
        placeholder: "",
        regValue: "numProjects"
    },
    {
        htmlFor: "experience",
        label: "Tempo de experiência",
        type: "number",
        placeholder: "",
        regValue: "timeExperience"
    },
    {
        htmlFor: "skills",
        label: "Skills",
        type: "text",
        placeholder: "",
        regValue: "skills"
    },
];

const aboutSchema = z.object({
    update: z.string(),
    numProjects: z.string(),
    timeExperience: z.string(),
    skills: z.string()
});

type AboutFormData = z.infer<typeof aboutSchema>

export default function About() {
    const { handleSubmit, register, formState : {errors} } = useForm<AboutFormData>({
        mode: "onBlur",
        resolver: zodResolver(aboutSchema)
    });

    console.log(errors);

    return (
        <div className="min-h-dvh flex justify-center items-center">
            <form onSubmit={handleSubmit(data => console.log(data))} className="bg-slate-300 py-10 px-8 w-1/2 flex flex-col items-stretch gap-4">
                {inputs.map((input: ItemInputTypes) => (
                    <div key={input.htmlFor} className="flex flex-col">
                        <label 
                            htmlFor={input.htmlFor}
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >{input.label}</label>
                        <input 
                            type={input.type} 
                            {...register(input.regValue as keyof AboutFormData, {required: true})}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                ))}
                <div className="flex flex-col">
                    <label 
                        htmlFor="skills"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Skills</label>
                    <input 
                        type="text" 
                        {...register("skills")}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <button type="submit" className="bg-blue-500 self-center p-2 rounded-md text-white">Adicionar</button>
            </form>
        </div>
    );
}