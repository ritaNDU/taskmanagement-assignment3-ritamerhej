import TaskStructure from "data/tasksStructure";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { add, remove, updateName, updateStatus } from "store/tasksSlice";

export default function useManageTasks() {
  const allTasks = useAppSelector((state) => state.tasks.allTasks);
  const newTaskName = useAppSelector((state) => state.tasks.newTask);

  const dispatch = useAppDispatch();

  function addNewTask() {
    dispatch(add());
  }
  function removeTask(taskId: string) {
    dispatch(remove(taskId));
  }
  function updateTaskName(e: ChangeEvent) {
    const target = e.currentTarget as HTMLInputElement;
    dispatch(updateName(target.value));
  }

  function updateTaskStatus(taskId: string) {
    dispatch(updateStatus(taskId));
  }

  return {
    newTaskName,
    allTasks,
    addNewTask,
    removeTask,
    updateTaskName,
    updateTaskStatus,
  };
}
