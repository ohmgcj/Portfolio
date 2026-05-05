import Link from "next/link";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const projectsData: Record<string, any> = {
  "stella-lolla-ia": {
    title: "Stella / Lolla IA",
    type: "Mobile",
    description: "Aplicativo mobile com integração de inteligência artificial para interação dinâmica com o usuário.",
    problem: "Necessidade de criar uma experiência interativa e fluida com IA dentro de um ambiente mobile, mantendo performance e usabilidade.",
    solution: "Desenvolvimento de uma aplicação utilizando arquitetura baseada em componentes, com navegação estruturada, integração com API de IA e foco em experiência conversacional.",
    technologies: ["React Native", "Expo", "TypeScript", "React Navigation", "AsyncStorage", "Axios", "NativeWind", "Expo Router", "Reanimated", "Haptics"],
    differentials: [
      "Aplicação com arquitetura moderna utilizando Expo Router",
      "Integração com IA para conversas dinâmicas",
      "Foco em experiência conversacional fluida",
      "Microinterações e feedback ao usuário",
      "Renderização de conteúdo dinâmico com markdown"
    ],
    highlights: [
      "Integração com APIs externas",
      "Renderização de conteúdo dinâmico (incluindo markdown)",
      "Animações e interações com Reanimated",
      "Feedback tátil com Haptics",
      "Gerenciamento de arquivos e documentos",
      "Persistência segura de dados"
    ]
  },
  "app-dieta": {
    title: "App de Dieta",
    type: "Mobile",
    description: "Aplicativo para controle de refeições e acompanhamento de dieta.",
    problem: "Dificuldade em organizar e acompanhar hábitos alimentares no dia a dia.",
    solution: "Sistema de registro de refeições com categorização e visualização clara do progresso.",
    technologies: ["React Native", "TypeScript", "AsyncStorage"],
    differentials: [
      "Persistência de dados local",
      "Interface intuitiva e fácil de usar"
    ],
    highlights: [
      "Registro de refeições",
      "Categorização automática",
      "Visualização de progresso",
      "Dados persistentes localmente"
    ]
  },
  "consulta-concorrente": {
    title: "Consulta Concorrente",
    type: "Web",
    description: "Interface web para consulta e análise de concorrentes.",
    problem: "Falta de uma visualização simples e organizada de dados relacionados à concorrência.",
    solution: "Aplicação com foco em exibição clara de informações e navegação eficiente.",
    technologies: ["React", "TypeScript"],
    differentials: [
      "Organização de dados clara",
      "Interface focada em usabilidade"
    ],
    highlights: [
      "Visualização intuitiva de dados",
      "Navegação eficiente",
      "Design responsivo"
    ]
  },
  "turistando": {
    title: "Turistando",
    type: "Web",
    description: "Plataforma web para descoberta de locais e experiências turísticas.",
    problem: "Dificuldade em encontrar informações organizadas sobre pontos turísticos.",
    solution: "Interface com navegação simples e foco em descoberta de locais.",
    technologies: ["React"],
    differentials: [
      "Experiência visual agradável",
      "Organização intuitiva de conteúdo"
    ],
    highlights: [
      "Busca de locais turísticos",
      "Detalhes sobre experiências",
      "Interface visual atrativa"
    ]
  }
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Projeto não encontrado</h1>
          <Link href="/" className="text-white hover:text-gray-400 underline">
            Voltar para home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-black text-white pt-20">
      {/* Header */}
      <div className="bg-gray-950 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/#projects" className="text-gray-400 hover:text-white mb-6 inline-block">
            ← Voltar para projetos
          </Link>
          <div className="bg-gray-900 h-48 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-gray-600">
              {project.type === "Web" ? "🌐" : "📱"} {project.type.toUpperCase()}
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-400">{project.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Problema</h2>
            <p className="text-gray-300 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Solução</h2>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Tecnologias</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {project.technologies.map((tech: string) => (
              <div key={tech} className="bg-gray-800 px-4 py-2 rounded-lg text-sm text-gray-100">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        {project.highlights && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Principais Recursos</h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-white mt-1">✓</span>
                  <span className="text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Differentials */}
        {project.differentials && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Diferenciais</h2>
            <ul className="space-y-3">
              {project.differentials.map((diff: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-white mt-1">⭐</span>
                  <span className="text-gray-300">{diff}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="bg-gray-950 py-12 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Quer criar algo parecido?</h2>
          <a
            href="/#contact"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition font-semibold"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </main>
  );
}
