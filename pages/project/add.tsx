import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import ProjectForm, { IProjectPayload } from '../../app/components/ProjectForm';
import { useAppDispatch } from '../../app/hooks';
import { projectAdded } from '../../features/project/projectSlice';

const AddPage: NextPage = () => {
  const { register, handleSubmit } = useForm<IProjectPayload>();

  const router = useRouter();

  const dispatch = useAppDispatch();

  const onSubmit = ({ title, description }: IProjectPayload) => {
    dispatch(projectAdded({ title, description }));
    router.back();
  };

  return (
    <div className="mt-14">
      <h2 className="text-2xl">Add a new Project</h2>
      <ProjectForm
        defaultTitle=""
        defaultDescription=""
        buttonText="Add Project"
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AddPage;
