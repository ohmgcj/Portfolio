export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold mb-4">Seu Nome</h1>
        <p className="text-2xl text-gray-600 mb-6">Desenvolvedor Fullstack</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">AWS</span>
        </div>

        <div className="flex justify-center gap-4">
          <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Enviar Mensagem
          </a>
          <a href="https://linkedin.com" target="_blank" className="border-2 border-gray-300 px-8 py-3 rounded-lg hover:border-gray-400 transition">
            LinkedIn
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600">5+</p>
            <p className="text-gray-600">Anos de Exp.</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">10+</p>
            <p className="text-gray-600">Projetos</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">6</p>
            <p className="text-gray-600">Empresas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
