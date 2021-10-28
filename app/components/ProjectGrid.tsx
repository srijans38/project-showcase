import { IProject } from '../../features/project/projectSlice';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

interface IProjectGridProps {
  projects: IProject[];
}

export default function ProjectGrid({ projects }: IProjectGridProps) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-6 my-5">
      {projects &&
        projects.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
    </div>
  );
}
