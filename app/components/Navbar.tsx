export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-white">
          godoy.js
        </a>
        <ul className="flex gap-8 text-gray-300">
          <li><a href="#home" className="hover:text-white transition">Home</a></li>
          <li><a href="#projects" className="hover:text-white transition">Projetos</a></li>
          <li><a href="#about" className="hover:text-white transition">Sobre</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}
