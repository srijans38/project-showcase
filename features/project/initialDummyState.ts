import { v4 as uuidv4 } from 'uuid';
import { IProject } from './projectSlice';

const dummyDesc =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit lectus. Fusce porttitor accumsan cursus. Maecenas auctor, justo sed integer.';

export const dummyData: IProject[] = [
  {
    id: uuidv4(),
    title: 'Project 1',
    description: dummyDesc,
  },
  {
    id: uuidv4(),
    title: 'Project 2',
    description: dummyDesc,
  },
  {
    id: uuidv4(),
    title: 'Project 3',
    description: dummyDesc,
  },
  {
    id: uuidv4(),
    title: 'Project 4',
    description: dummyDesc,
  },
  {
    id: uuidv4(),
    title: 'Project 5',
    description: dummyDesc,
  },
  {
    id: uuidv4(),
    title: 'Project 6',
    description: dummyDesc,
  },
  {
    id: uuidv4(),
    title: 'Project 7',
    description: dummyDesc,
  },
  {
    id: uuidv4(),
    title: 'Project 8',
    description: dummyDesc,
  },
  {
    id: uuidv4(),
    title: 'Project 9',
    description: dummyDesc,
  },
  {
    id: uuidv4(),
    title: 'Project 10',
    description: dummyDesc,
  },
  {
    id: uuidv4(),
    title: 'Project 11',
    description: dummyDesc,
  },
  {
    id: uuidv4(),
    title: 'Project 12',
    description: dummyDesc,
  },
  {
    id: uuidv4(),
    title: 'Project 13',
    description: dummyDesc,
  },
];
