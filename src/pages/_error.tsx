import GoBackButton from "components/atoms/Buttons/GoBackButton";
import useRouteBack from "hooks/useRouteBack";
import NextError from "next/error";

function Error({ statusCode }: { statusCode: string }) {
  const { goBackHome } = useRouteBack();

  return (
    <div className="h-screen flex flex-col justify-center place-items-center">
      <h1 className="text-9xl mb-4">Oops</h1>
      <p className="text-3xl">Error {statusCode}</p>
      <p className="text-lg mb-2">
        {statusCode == "404"
          ? `We couldn't find the page you are asking for.`
          : "An error has occured on our part."}
      </p>
      <GoBackButton
        onClick={goBackHome}
        className="place-self-stretch lg:place-self-center w-1/4"
      />
    </div>
  );
}

Error.getInitialProps = ({
  res,
  err,
}: {
  res: Response & { statusCode: number };
  err: NextError & { statusCode: number };
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
