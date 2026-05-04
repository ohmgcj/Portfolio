export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Sobre Mim</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Sou um desenvolvedor fullstack apaixonado por código, com mais de 5 anos de experiência 
              em desenvolvimento de software em startups e grandes empresas.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Especializado em construir sistemas de alta performance, com foco em arquitetura escalável 
              e boas práticas de desenvolvimento.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Especialidades</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                <span>Desenvolvimento Fullstack</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                <span>Arquitetura de Microserviços</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                <span>Sistemas Financeiros</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                <span>DevOps & Cloud</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
