import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import ProjectForm, {
  IProjectPayload,
} from '../../../app/components/ProjectForm';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  IProject,
  projectUpdated,
} from '../../../features/project/projectSlice';

const EditPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useAppDispatch();

  const project = useAppSelector((state) =>
    state.projects.find((el) => el.id === id)
  ) as IProject;

  const onSubmit = ({ title, description }: IProjectPayload) => {
    dispatch(projectUpdated({ id: project.id, description, title }));
    router.back();
  };

  return (
    <ProjectForm
      defaultTitle={project?.title}
      defaultDescription={project?.description}
      buttonText="Edit Project"
      onSubmit={onSubmit}
    />
  );
};

export default EditPage;
