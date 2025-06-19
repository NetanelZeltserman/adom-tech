import { HiExternalLink } from 'react-icons/hi'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-[#1E1E1E] rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:border-white/20 hover:scale-[1.02] flex flex-col"
    >
      <div className="relative flex items-center justify-center p-8 bg-black/20 h-[300px] md:h-[400px]">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          decoding="async"
          className="max-w-full h-auto max-h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2 group-hover:text-[#FF1E1E]">
          {project.name}
          <HiExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100" />
        </h3>
        <p className="text-white/80 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-sm bg-white/5 text-white/70 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
} 