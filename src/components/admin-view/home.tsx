
export default function Home() {
    return (
        <main className="min-h-dvh flex justify-center items-center">
            <form className="bg-slate-300 py-10 px-8 w-full flex flex-col items-start gap-4">

                <label htmlFor="primary">Texto Principal</label>
                <input type="text" name="primary" id="primary" />

                <label htmlFor="description">Descrição</label>
                <input type="text" name="description" id="description" />

                <button type="submit">Adicionar</button>
            </form>
        </main>
    );
}