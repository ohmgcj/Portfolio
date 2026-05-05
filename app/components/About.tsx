export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">Sobre</h2>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Desenvolvedor front-end e mobile com foco em React e React Native, criando aplicações completas 
          com atenção à experiência do usuário, organização de código e interfaces modernas. Atua no 
          desenvolvimento desde o planejamento até a entrega, utilizando TypeScript, Styled Components 
          e soluções voltadas à performance e usabilidade.
        </p>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Stack Principal</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["React Native", "React", "TypeScript", "Expo", "Styled Components", "React Navigation", "AsyncStorage"].map((tech) => (
              <div key={tech} className="bg-gray-800 text-gray-100 px-4 py-2 rounded-lg text-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
