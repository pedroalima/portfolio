import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full px-8 h-32 flex flex-col justify-between items-center mb-24">
            <p className="text-slate-500 text-sm">Levemente projetado no <Link href={"https://www.figma.com/"} className="text-gray-300 font-bold hover:text-cyan-500">Figma</Link>. Desenvolvido no <Link href={"https://code.visualstudio.com/"} className="text-gray-300 font-bold hover:text-cyan-500">Visual Studio Code</Link>, com a linguagem <Link href={"https://www.typescriptlang.org/"} className="text-gray-300 font-bold hover:text-cyan-500">TypeScript</Link>, na biblioteca <Link href={"https://nextjs.org/"} className="text-gray-300 font-bold hover:text-cyan-500">Next</Link>, <Link href={"https://tailwindcss.com/"} className="text-gray-300 font-bold hover:text-cyan-500">TailwindCSS</Link> e <Link href={"https://www.mongodb.com/pt-br"} className="text-gray-300 font-bold hover:text-cyan-500">MongoDB</Link>. Implementado via <Link href={"https://vercel.com/"} className="text-gray-300 font-bold hover:text-cyan-500">Vercel</Link>.</p>
            <span className="text-slate-500 text-sm mt-5">&copy; 2023 - Pedro Lima</span>
        </footer>
    );
}