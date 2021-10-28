import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { MouseEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { projectDeleted } from '../../features/project/projectSlice';
import Link from 'next/link';
import PlaceholderImg from '../../public/tech.jpeg';
import Image from 'next/image';

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useAppDispatch();

  const project = useAppSelector((state) =>
    state.projects.find((el) => el.id === id)
  );

  const handleDelete: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(projectDeleted(id as string));
    router.replace('/');
  };

  return (
    <div className="mt-14">
      <div className="flex gap-4">
        <h2 className="text-3xl font-semibold mr-auto">{project?.title}</h2>
        <button
          title="Delete"
          className="p-3 bg-red-500 rounded-md text-xl"
          onClick={handleDelete}
        >
          🗑️
        </button>
        <Link href={`/project/edit/${id}`}>
          <a
            title="Edit"
            className="text-center p-3 bg-blue-500 rounded-md text-xl"
          >
            ✍️
          </a>
        </Link>
      </div>

      <div className="w-full rounded-md overflow-hidden mt-6">
        <Image
          src={PlaceholderImg}
          alt=""
          height="300px"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <p className="mt-5">{project?.description}</p>
    </div>
  );
};

export default ProjectPage;
