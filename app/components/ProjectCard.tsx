interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
}

export default function ProjectCard({ title, description, slug }: ProjectCardProps) {
  return (
    <a href={`/projects/${slug}`}>
      <div className="p-6 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
}
