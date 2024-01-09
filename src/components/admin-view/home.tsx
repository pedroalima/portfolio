import { getData } from "@/services";

export default function Home() {
    const data = getData("projects");

    console.log(data);

    return (
        <div className="min-h-dvh flex justify-center items-center">
            <form className="bg-slate-300 py-10 px-8 w-1/2 flex flex-col items-stretch gap-4">

                <label htmlFor="primary">Texto Principal</label>
                <input type="text" name="primary" id="primary" className="rounded-md p-1" />

                <label htmlFor="description">Descrição</label>
                <input type="text" name="description" id="description" className="rounded-md p-1" />

                <button type="submit" className="bg-blue-500 self-center p-2 rounded-md text-white">Adicionar</button>
            </form>
        </div>
    );
}