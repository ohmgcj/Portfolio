export default function Timeline() {
  const experiences = [
    {
      company: "Empresa Atual",
      role: "Desenvolvedor Fullstack",
      period: "2023 - Presente",
      description: "Desenvolvimento de plataformas web e APIs",
      stack: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      company: "Empresa Anterior",
      role: "Desenvolvedor Fullstack",
      period: "2021 - 2023",
      description: "Construção de sistemas completos do zero",
      stack: ["React", "NestJS", "MongoDB"]
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Experiência Profissional</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold">{exp.company}</h3>
                  <p className="text-blue-600 font-semibold">{exp.role}</p>
                </div>
                <span className="text-gray-500 text-sm">{exp.period}</span>
              </div>
              
              <p className="text-gray-700 mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span key={tech} className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
