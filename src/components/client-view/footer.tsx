

export default function Footer() {
    return (
        <footer className="w-full px-8 h-32 flex flex-col justify-between items-center mb-24">
            <p className="text-slate-500 text-sm">Levemente projetado no <strong className="text-gray-400">Figma</strong>. Desenvolvido no <strong className="text-gray-400">Visual Studio Code</strong>, com a linguagem <strong className="text-gray-400">TypeScript</strong>, na biblioteca <strong className="text-gray-400">Next</strong>, <strong className="text-gray-400">TailwindCSS</strong> e <strong className="text-gray-400">MongoDB</strong>. Implementado via <strong className="text-gray-400">Vercel</strong>.</p>
            <span className="text-slate-500 text-sm mt-5">&copy; 2023 - Pedro Lima</span>
        </footer>
    );
}