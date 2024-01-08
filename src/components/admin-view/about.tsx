

export default function About() {
    return (
        <div className="min-h-dvh flex justify-center items-center">
            <form className="bg-slate-300 py-10 px-8 w-1/2 flex flex-col items-stretch gap-4">

                <label htmlFor="update">Texto de atualização</label>
                <input type="text" name="update" id="update" className="rounded-md p-1" />

                <label htmlFor="projects">Nº de projetos</label>
                <input type="number" name="projects" id="projects" className="rounded-md p-1" />

                <label htmlFor="experience">Quanto tempo de experiência</label>
                <input type="number" name="experience" id="experience" className="rounded-md p-1" />

                <label htmlFor="skills">Skills</label>
                <input type="text" name="skills" id="skills" className="rounded-md p-1" />

                <button type="submit" className="bg-blue-500 self-center p-2 rounded-md text-white">Adicionar</button>
            </form>
        </div>
    );
}