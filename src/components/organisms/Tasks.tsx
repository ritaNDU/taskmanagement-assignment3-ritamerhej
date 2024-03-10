import TaskStructure from "data/tasksStructure";
import Task from "../molecules/Task";
import useManageTasks from "hooks/useManageTasks";
import { useRouter } from "next/router";

interface Props {
  tasks: TaskStructure[];
}

const Tasks = ({ tasks }: Props) => {
  const { updateTaskStatus, removeTask } = useManageTasks();
  const router = useRouter();

  const handleCompleteTask = (taskId: string) => {
    updateTaskStatus(taskId);
  };

  const handleDeleteTask = (taskId: string) => {
    removeTask(taskId);
  };

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            slug={task.slug}
            title={task.title}
            isCompleted={task.isCompleted}
            handleCompleteTask={() => {
              handleCompleteTask(task.id);
            }}
            handleDeleteTask={() => {
              handleDeleteTask(task.id);
            }}
          />
        );
      })}
    </ul>
  );
};

export default Tasks;
