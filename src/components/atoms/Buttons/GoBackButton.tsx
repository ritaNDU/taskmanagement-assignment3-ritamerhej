import React from "react";

interface Props {
  onClick: () => void;
  className?: string;
}

const GoBackButton = ({ onClick, className }: Props) => {
  return (
    <button className={`btn-primary ${className}`} onClick={onClick}>
      Go Back
    </button>
  );
};

export default GoBackButton;
