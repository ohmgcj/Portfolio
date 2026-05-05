export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">Caio Alves Godoy</h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-6">Desenvolvedor Front-end e Mobile</p>
        <p className="text-lg text-gray-500 mb-12">Criando experiências modernas com React e React Native</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <span className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-sm">React</span>
          <span className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-sm">React Native</span>
          <span className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-sm">TypeScript</span>
          <span className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-sm">Expo</span>
          <span className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-sm">Styled Components</span>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <a href="#contact" className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition font-semibold">
            Entre em Contato
          </a>
          <a href="#projects" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition font-semibold">
            Ver Projetos
          </a>
        </div>

        <p className="text-gray-500 text-sm">São Paulo, SP 📍</p>
      </div>
    </section>
  );
}
