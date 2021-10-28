import type { NextPage } from 'next';
import Link from 'next/link';
import ProjectGrid from '../app/components/ProjectGrid';
import { useAppSelector } from '../app/hooks';

const Home: NextPage = () => {
  const projects = useAppSelector((state) => state.projects);

  return (
    <div className="mt-14 flex flex-col items-start">
      <Link href="/project/add">
        <a className="px-2 py-4 mb-4 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-offset-1">
          + Add Project
        </a>
      </Link>
      <ProjectGrid projects={projects}></ProjectGrid>
    </div>
  );
};

export default Home;
