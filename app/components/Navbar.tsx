export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          Portfolio
        </a>
        <ul className="flex gap-8">
          <li><a href="#about" className="hover:text-blue-600 transition">Sobre</a></li>
          <li><a href="#timeline" className="hover:text-blue-600 transition">Experiência</a></li>
          <li><a href="#skills" className="hover:text-blue-600 transition">Skills</a></li>
          <li><a href="#solutions" className="hover:text-blue-600 transition">Soluções</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}
