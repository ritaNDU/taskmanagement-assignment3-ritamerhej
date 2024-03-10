import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  value: number;
  index: number;
}

const TabPanel = ({ children, value, index }: Props) => {
  return (
    <div>
      <div hidden={index !== value}>{children}</div>
    </div>
  );
};

export default TabPanel;
