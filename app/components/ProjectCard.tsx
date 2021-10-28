import { IProject } from '../../features/project/projectSlice';
import Link from 'next/link';
import Image from 'next/image';
import PlaceholderImg from '../../public/tech.jpeg';

interface IProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: IProjectCardProps) {
  return (
    <div
      tabIndex={0}
      className="bg-gray-700 w-full rounded-lg flex flex-col relative overflow-hidden"
    >
      <Image
        src={PlaceholderImg}
        alt={`Image for ${project.title}`}
        width={640}
        height={300}
        objectFit="cover"
        placeholder="blur"
      ></Image>
      <div className="p-4">
        <Link key={project.id} href={`/project/${project.id}`}>
          <a className="text-2xl font-semibold">{project.title}</a>
        </Link>
        <p className="text-sm mt-4 overflow-ellipsis overflow-hidden">
          {project.description}
        </p>
      </div>
    </div>
  );
}
