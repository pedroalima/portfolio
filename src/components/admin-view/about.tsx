import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../input/input";

const formSchema = z.object({
    update: z.string(),
    numProjects: z.string(),
    timeExperience: z.string(),
    skills: z.string()
});

type FormData = z.infer<typeof formSchema>

const inputs = [
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

export default function About() {
    const inputsForm = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const { handleSubmit, formState : {errors} } = inputsForm;

    console.log(errors);

    return (
        <div className="min-h-dvh flex justify-center items-center">
            <FormProvider {...inputsForm}>
                <form onSubmit={handleSubmit(data => console.log(data))} className="bg-slate-300 py-10 px-8 w-1/2 flex flex-col items-stretch gap-4">
                    {inputs.map((input, i) => (
                        <div key={i} className="flex flex-col">
                            <Input htmlFor={input.htmlFor} label={input.label} type={input.type} regValue={input.regValue} />
                        </div>
                    ))}
                    <button type="submit" className="bg-blue-500 self-center p-2 rounded-md text-white">Adicionar</button>
                </form>
            </FormProvider>
        </div>
    );
}