export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB"]
    },
    {
      name: "DevOps & Cloud",
      skills: ["AWS", "Docker", "CI/CD", "Linux", "Microserviços"]
    },
    {
      name: "Ferramentas & Outros",
      skills: ["Git", "Figma", "Jest", "GraphQL", "REST APIs"]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Tecnologias que Domino</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-xl font-bold mb-4 text-blue-600">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-50 border border-blue-200 text-blue-900 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {skill}
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
