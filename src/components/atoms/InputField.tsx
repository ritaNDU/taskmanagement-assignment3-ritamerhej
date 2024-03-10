import { ChangeEvent } from "react";

interface Props {
  name: string;
  onChange: (e: ChangeEvent) => void;
  value: string;
  placeholder: string;
}

const InputField = ({ name, onChange, value, placeholder }: Props) => {
  return (
    <input
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type="text"
      className="border rounded-3xl p-1 px-4 w-full lg:w-1/2 border-gray-500"
    />
  );
};

export default InputField;
