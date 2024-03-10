import { Typography } from "@mui/material";

interface Props {
  tasksCount: number;
  name: string;
}
const TasksCounter = ({ tasksCount, name }: Props) => {
  return (
    <div
      className={`flex flex-col place-items-center w-1/2 ${
        name.toLowerCase() == "active" ? "bg-red-500" : "bg-green-500"
      } rounded-xl shadow-sm lg:w-1/3`}
    >
      <Typography variant="h2" component="p" color="white">
        {tasksCount < 10 && "0"}
        {tasksCount}
      </Typography>
      <div
        className={`w-full px-3 py-1 rounded-bl-xl rounded-br-xl flex place-items-center justify-center ${
          name.toLowerCase() == "active" ? "bg-red-400" : "bg-green-400"
        } h-1/2 text-center`}
      >
        <Typography variant="h6" color="white">
          {name} Tasks
        </Typography>
      </div>
    </div>
  );
};

export default TasksCounter;
