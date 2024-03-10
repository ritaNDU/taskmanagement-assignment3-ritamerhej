import GoBackButton from "components/atoms/Buttons/GoBackButton";
import useRouteBack from "hooks/useRouteBack";
import React from "react";

const Error404 = () => {
  const { goBackHome } = useRouteBack();
  return (
    <div className="h-screen flex flex-col justify-center place-items-center">
      <h1 className="text-8xl mb-4">Oops</h1>
      <p className="text-3xl">Error 404</p>
      <p className="text-lg mb-3">We could not find this page.</p>
      <GoBackButton
        onClick={goBackHome}
        className="place-self-center w-1/2 lg:w-1/4"
      />
    </div>
  );
};

export default Error404;
