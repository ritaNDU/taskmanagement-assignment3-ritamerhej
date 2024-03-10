import { ChangeEvent } from "react";
import CreateButton from "../atoms/Buttons/CreateButton";
import InputField from "../atoms/InputField";
import useManageTasks from "hooks/useManageTasks";

const CreateTaskForm = () => {
  const { newTaskName, updateTaskName, addNewTask } = useManageTasks();

  const handleInputChange = (e: ChangeEvent) => {
    updateTaskName(e);
  };
  const handleCreateTask = () => {
    addNewTask();
  };

  return (
    <form className="flex flex-col gap-2 lg:flex-row" method="post">
      <InputField
        name="create-task-field"
        placeholder="Create a task..."
        value={newTaskName}
        onChange={handleInputChange}
      />
      <CreateButton
        name="Create"
        disabled={newTaskName.length == 0}
        onClick={handleCreateTask}
      />
    </form>
  );
};

export default CreateTaskForm;
