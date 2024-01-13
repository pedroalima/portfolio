// import { getData } from "@/services";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const homeSchema = z.object({
    mainText: z.string(),
    description: z.string()
});

type HomeFormData = z.infer<typeof homeSchema>

export default function Home() {
    const { handleSubmit, register, formState : {errors} } = useForm<HomeFormData>({
        mode: "onBlur",
        resolver: zodResolver(homeSchema)
    });

    console.log(errors);

    return (
        <div className="min-h-dvh flex justify-center items-center">
            <form onSubmit={handleSubmit((data) => console.log(data))} className="bg-slate-300 py-10 px-8 w-1/2 flex flex-col items-stretch gap-4">

                <label htmlFor="mainText">Texto Principal</label>
                <input type="text" {...register("mainText")} className="rounded-md p-1" />

                <label htmlFor="description">Descrição</label>
                <input type="text" {...register("description")} className="rounded-md p-1" />

                <button type="submit" className="bg-blue-500 self-center p-2 rounded-md text-white">Adicionar</button>
            </form>
        </div>
    );
}