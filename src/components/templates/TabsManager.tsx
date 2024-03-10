import { SyntheticEvent, useState } from "react";
import ActiveTasksTab from "./ActiveTasksTab";
import CompletedTasksTab from "./CompletedTasksTab";
import TabPanel from "./TabPanel";
import { Tab, Tabs } from "@mui/material";
import TaskStructure from "../../data/tasksStructure";

interface Props {
  completedTasks: TaskStructure[];
  activeTasks: TaskStructure[];
}

const TabsManager = ({ completedTasks, activeTasks }: Props) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (e: SyntheticEvent, newIndex: number) => {
    setCurrentTab(newIndex);
  };

  return (
    <>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <Tab label="Active Tasks" />
        <Tab label="Completed Tasks" />
      </Tabs>
      <TabPanel value={0} index={currentTab}>
        <ActiveTasksTab tasks={activeTasks} />
      </TabPanel>
      <TabPanel value={1} index={currentTab}>
        <CompletedTasksTab tasks={completedTasks} />
      </TabPanel>
    </>
  );
};

export default TabsManager;
