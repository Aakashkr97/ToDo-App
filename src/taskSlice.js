import { createSlice } from '@reduxjs/toolkit';

let taskId = 0;

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: taskId++, text: action.payload });
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
      }
    }
  }
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
