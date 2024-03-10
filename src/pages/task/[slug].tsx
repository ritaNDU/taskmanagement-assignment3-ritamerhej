import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { TaskDetails, availableSlugs } from "data/tasksStructure";
import { useEffect } from "react";
import relaxingBackgroundImage from "../../assets/relaxingbackground.jpg";
import useRouteBack from "hooks/useRouteBack";
import GoBackButton from "components/atoms/Buttons/GoBackButton";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("components/molecules/Navbar"));
const Image = dynamic(import("next/image"));

export const getServerSideProps = (async (context) => {
  const res = await fetch(
    "https://dev-api.almashhad.tv/api/videos/detailsElastic/182622880654874"
  ).then((data) => data.json());

  const slug = (context.params?.slug as string) ?? "";

  if (!res || !availableSlugs.includes(slug)) {
    return {
      notFound: true,
    };
  }
  const filteredData = res.data.result.related.find(
    (task: TaskDetails) => task.id == slug
  );

  const taskDetails: TaskDetails = {
    id: filteredData.id,
    title: filteredData.title,
    image: filteredData.image,
  };

  return { props: { taskDetails, slug } };
}) satisfies GetServerSideProps<{ taskDetails: TaskDetails; slug: string }>;

export default function Page({
  taskDetails,
  slug,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { goBackHome } = useRouteBack();

  const taskImageLink =
    taskDetails?.image != "" ? taskDetails?.image : relaxingBackgroundImage;
  const taskTitle = taskDetails?.title ? taskDetails?.title : "Task Overview";
  const altText = taskImageLink
    ? `Image of ${taskTitle}`
    : "An image showing a nice relaxing background.";

  useEffect(() => {
    document.title = taskTitle;
  }, [taskTitle]);

  return (
    <>
      <Navbar />
      <div className="size-full flex flex-col gap-4 p-5 lg:place-items-start">
        <h2 className="text-lg font-semibold">Task Overview</h2>
        <h3 className="text-2xl font-medium">{taskTitle}</h3>
        <Image
          src={taskImageLink}
          alt={altText}
          width={500}
          height={500}
          className="w-full rounded-md shadow-lg  lg:w-fit"
          priority
        />
        <GoBackButton onClick={goBackHome} />
      </div>
    </>
  );
}
