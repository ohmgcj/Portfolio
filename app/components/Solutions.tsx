interface Solution {
  title: string;
  description: string;
  stack: string[];
}

export default function Solutions() {
  const solutions: Solution[] = [
    {
      title: "Plataformas Web & SaaS",
      description: "Sistemas web completos com painéis administrativos, dashboards e controle de usuários.",
      stack: ["React", "NestJS", "PostgreSQL"]
    },
    {
      title: "APIs & Integrações",
      description: "APIs REST robustas e integrações com sistemas externos e provedores de terceiros.",
      stack: ["Node.js", "NestJS", "REST", "GraphQL"]
    },
    {
      title: "Aplicativos Mobile",
      description: "Apps iOS e Android com React Native para máxima performance e reutilização de código.",
      stack: ["React Native", "TypeScript", "Firebase"]
    },
    {
      title: "Microserviços & Cloud",
      description: "Arquitetura escalável com microserviços, Docker e deploy na AWS.",
      stack: ["Docker", "AWS", "Microserviços"]
    },
    {
      title: "Sistemas Financeiros",
      description: "Carteiras digitais, conciliação financeira e integrações com gateways de pagamento.",
      stack: ["Node.js", "PostgreSQL", "Stripe"]
    },
    {
      title: "Inovação & DevOps",
      description: "Testes de carga, CI/CD, monitoramento e infraestrutura de alta disponibilidade.",
      stack: ["K6", "Docker", "GitHub Actions"]
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Soluções que Entrego</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {solution.stack.map((tech) => (
                  <span key={tech} className="bg-blue-50 text-blue-800 px-2 py-1 rounded text-xs font-medium">
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
