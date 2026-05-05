"use client";

import { useState } from "react";
import Link from "next/link";

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: "web" | "mobile";
  image?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: "1",
    slug: "stella-lolla-ia",
    title: "Stella / Lolla IA",
    description: "Aplicativo mobile com integração de inteligência artificial para interação dinâmica com o usuário.",
    type: "mobile",
    technologies: ["React Native", "Expo", "TypeScript", "React Navigation", "AsyncStorage"],
  },
  {
    id: "2",
    slug: "app-dieta",
    title: "App de Dieta",
    description: "Aplicativo para controle de refeições e acompanhamento de dieta com persistência local.",
    type: "mobile",
    technologies: ["React Native", "TypeScript", "AsyncStorage"],
  },
  {
    id: "3",
    slug: "consulta-concorrente",
    title: "Consulta Concorrente",
    description: "Interface web para consulta e análise de concorrentes com visualização organizada de dados.",
    type: "web",
    technologies: ["React", "TypeScript"],
  },
  {
    id: "4",
    slug: "turistando",
    title: "Turistando",
    description: "Plataforma web para descoberta de locais e experiências turísticas.",
    type: "web",
    technologies: ["React"],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "web" | "mobile">("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">Projetos</h2>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-lg transition font-semibold ${
              filter === "all"
                ? "bg-white text-black"
                : "bg-gray-900 text-white border border-gray-800 hover:border-white"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`px-6 py-2 rounded-lg transition font-semibold ${
              filter === "web"
                ? "bg-white text-black"
                : "bg-gray-900 text-white border border-gray-800 hover:border-white"
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setFilter("mobile")}
            className={`px-6 py-2 rounded-lg transition font-semibold ${
              filter === "mobile"
                ? "bg-white text-black"
                : "bg-gray-900 text-white border border-gray-800 hover:border-white"
            }`}
          >
            Mobile
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-white transition cursor-pointer h-full">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">
                    {project.type === "web" ? "🌐" : "📱"} {project.type.toUpperCase()}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
