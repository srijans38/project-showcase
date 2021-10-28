import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { IProjectPayload } from '../../app/components/ProjectForm';
import { dummyData } from './initialDummyState';

export interface IProject {
  id: string;
  title: string;
  description: string;
}

const projectSlice = createSlice({
  name: 'projects',
  initialState: dummyData,
  reducers: {
    projectAdded: {
      reducer: (state, action: PayloadAction<IProject>) => {
        state.push(action.payload);
      },
      prepare: ({ title, description }: IProjectPayload) => {
        return {
          payload: {
            id: uuidv4(),
            title,
            description,
          },
        };
      },
    },
    projectDeleted: (state, action: PayloadAction<string>) => {
      state.splice(
        state.findIndex((el) => el.id === action.payload),
        1
      );
    },
    projectUpdated: (state, action: PayloadAction<IProject>) => {
      const { id, title, description } = action.payload;
      state[state.findIndex((el) => el.id === action.payload.id)] = {
        id,
        title,
        description,
      };
    },
  },
});

export const { projectAdded, projectDeleted, projectUpdated } =
  projectSlice.actions;

export default projectSlice.reducer;
