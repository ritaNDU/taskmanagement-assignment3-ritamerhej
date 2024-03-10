import TaskStructure from "../../data/tasksStructure";
import Tasks from "../organisms/Tasks";

interface Props {
  tasks: TaskStructure[];
}

const CompletedTasksTab = ({ tasks }: Props) => {
  return (
    <div className="tab-layout">
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} />
      ) : (
        <h2>No Completed Tasks.</h2>
      )}
    </div>
  );
};

export default CompletedTasksTab;
