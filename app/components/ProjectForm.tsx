import { SubmitHandler, useForm } from 'react-hook-form';

export interface IProjectPayload {
  title: string;
  description: string;
}

interface IProjectFormProps {
  defaultTitle?: string;
  defaultDescription?: string;
  onSubmit: SubmitHandler<IProjectPayload>;
  buttonText: string;
}

export default function ProjectForm({
  defaultTitle = '',
  defaultDescription = '',
  onSubmit,
  buttonText,
}: IProjectFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start gap-5 mt-4"
    >
      <label htmlFor="title">Project Title</label>
      <input
        type="text"
        id="title"
        defaultValue={defaultTitle}
        className={`w-1/3 rounded-md ${
          errors.title ? 'bg-red-800' : 'bg-gray-700'
        } focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-transparent`}
        {...register('title', { required: true, minLength: 1 })}
      />
      {errors.title && (
        <span className="p-2 bg-red-700 bg-opacity-50 rounded-md border border-red-700">
          A title is required
        </span>
      )}
      <label htmlFor="title">Project Description</label>
      <textarea
        id="description"
        rows={10}
        defaultValue={defaultDescription}
        className={`rounded-md ${
          errors.description ? 'bg-red-800' : 'bg-gray-700'
        } focus:outline-none w-1/3 focus:ring-1 focus:ring-offset-1 focus:ring-offset-transparent`}
        {...register('description', { required: true, minLength: 150 })}
      />
      {errors.description && (
        <span className="p-2 bg-red-700 bg-opacity-50 rounded-md border border-red-700">
          Description needs to be atleast 150 characters
        </span>
      )}
      <input
        type="submit"
        value={buttonText}
        className="bg-blue-500 cursor-pointer p-4 rounded-md "
      />
    </form>
  );
}
