

export default function Navbar() {
    return (
        <nav className="container mx-auto p-8 flex justify-between">
            <h1>Pedro Lima</h1>
            <ul className="flex justify-between gap-10">
                <li>Home</li>
                <li>Projects</li>
                <li>Experience</li>
                <li>About</li>
            </ul>
        </nav>
    );
}