import { Button, Typography } from "@mui/material";
import DeleteButton from "../atoms/Buttons/DeleteButton";
import CheckboxField from "../atoms/CheckboxField";
import Link from "next/link";

interface Props {
  slug: string;
  title: string;
  isCompleted: boolean;
  handleDeleteTask: () => void;
  handleCompleteTask: () => void;
}

const Task = ({
  slug,
  title,
  isCompleted,
  handleDeleteTask,
  handleCompleteTask,
}: Props) => {
  return (
    <li
      className={`p-4 shadow-md m-2 border-l-8 text-wrap
    bg-white  ${isCompleted ? " border-l-green-400" : " border-l-red-400"}
    flex flex-col gap-2 w-full  place-items-baseline justify-between rounded-xl 
   md:flex-row  lg:flex-row `}
    >
      <div className="flex gap-2">
        <div className="overflow-hidden flex-1">
          <Link
            href={{
              pathname: "task/[slug]",
              query: { slug: slug },
            }}
          >
            <button
              className={`text-wrap hover:animate-pulse ${
                isCompleted ? "active:text-green-400" : "active:text-red-400"
              } `}
            >
              {title}
            </button>
          </Link>
        </div>
        <div
          className={`${
            isCompleted
              ? "bg-green-100 text-green-400 border-l-green-400"
              : "bg-red-100 text-red-400 border-l-red-400"
          } rounded-xl w-fit h-fit text-center font-bold p-1 
          text-sm `}
        >
          {isCompleted ? "Complete" : "Active"}
        </div>
      </div>
      <div className="flex gap-1 justify-end place-items-end flex-2">
        <DeleteButton name="Delete Task" onClick={handleDeleteTask} />
        <CheckboxField checked={isCompleted} onChange={handleCompleteTask} />
      </div>
    </li>
  );
};

export default Task;
