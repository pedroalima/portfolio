import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    update: z.string(),
    numProjects: z.string(),
    timeExperience: z.string(),
    skills: z.string()
});

type FormData = z.infer<typeof schema>

export default function About() {
    const { handleSubmit, register, formState : {errors} } = useForm<FormData>({
        mode: "onBlur",
        resolver: zodResolver(schema)
    });

    console.log(errors);

    return (
        <div className="min-h-dvh flex justify-center items-center">
            <form onSubmit={handleSubmit(data => console.log(data))} className="bg-slate-300 py-10 px-8 w-1/2 flex flex-col items-stretch gap-4">
                <div className="flex flex-col">
                    <label htmlFor="update" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Texto de atualização</label>
                    <input type="text" {...register("update")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>

                <label htmlFor="projects">Nº de projetos</label>
                <input type="number" {...register("numProjects")} className="rounded-md p-1" />

                <label htmlFor="experience">Quanto tempo de experiência</label>
                <input type="number" {...register("timeExperience")} className="rounded-md p-1" />

                <label htmlFor="skills">Skills</label>
                <input type="text" {...register("skills")} className="rounded-md p-1" />

                <button type="submit" className="bg-blue-500 self-center p-2 rounded-md text-white">Adicionar</button>
            </form>
        </div>
    );
}