import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import TaskStructure, { availableSlugs } from "data/tasksStructure";

interface TasksState {
  allTasks: TaskStructure[];
  newTask: string;
}

const initialState: TasksState = {
  allTasks: [],
  newTask: "",
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state) => {
      state.allTasks = [
        ...state.allTasks,
        {
          id: crypto.randomUUID(),
          title: state.newTask,
          isCompleted: false,
          slug: availableSlugs[
            Math.floor(Math.random() * availableSlugs.length)
          ],
        },
      ];
      console.log(state.allTasks[state.allTasks.length - 1].slug);
      state.newTask = "";
    },
    remove: (state, action: PayloadAction<string>) => {
      state.allTasks = state.allTasks.filter(
        (task) => action.payload != task.id
      );
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.newTask = action.payload;
    },
    updateStatus: (state, action: PayloadAction<string>) => {
      state.allTasks = state.allTasks.map((task) => {
        if (task.id == action.payload) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
    },
  },
});

export const { add, remove, updateName, updateStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
