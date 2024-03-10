import dynamic from "next/dynamic";
import TaskStructure from "../../data/tasksStructure";
import TasksCounter from "../organisms/TasksCounter";
import useManageTasks from "hooks/useManageTasks";

const TabsManager = dynamic(() => import("./TabsManager"));
const TasksManager = () => {
  const { allTasks } = useManageTasks();

  const completedTasks: TaskStructure[] = allTasks.filter(
    (task) => task.isCompleted
  );
  const activeTasks: TaskStructure[] = allTasks.filter(
    (task) => !task.isCompleted
  );

  return (
    <div className="p-10 w-screen">
      <div className="flex gap-3 mb-8">
        <TasksCounter name="Active" tasksCount={activeTasks.length} />
        <TasksCounter name="Complete" tasksCount={completedTasks.length} />
      </div>
      <h2 className="text-xl font-semibold">Tasks Overview</h2>
      <TabsManager completedTasks={completedTasks} activeTasks={activeTasks} />
    </div>
  );
};

export default TasksManager;
