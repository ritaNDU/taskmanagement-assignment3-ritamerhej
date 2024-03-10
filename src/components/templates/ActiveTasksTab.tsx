import TaskStructure from "../../data/tasksStructure";
import CreateTaskForm from "../molecules/CreateTaskForm";
import Tasks from "../organisms/Tasks";

interface Props {
  tasks: TaskStructure[];
}

const ActiveTasksTab = ({ tasks }: Props) => {
  return (
    <div className="tab-layout">
      <CreateTaskForm />
      {tasks.length > 0 ? <Tasks tasks={tasks} /> : <h2>No Active Tasks.</h2>}
    </div>
  );
};

export default ActiveTasksTab;
