import { FormEvent } from "react";

interface Props {
  name: string;
  disabled: boolean;
  onClick: (e: FormEvent) => void;
}

const CreateButton = ({ name, disabled, onClick }: Props) => {
  return (
    <button
      className="btn-primary"
      role="submit"
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default CreateButton;
