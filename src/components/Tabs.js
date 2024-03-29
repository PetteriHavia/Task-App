import {
  TabHeader,
  Page,
  Box,
  Inner,
  DeleteButton,
  BoxInformation,
  CheckCircle,
  Circle,
} from "./styles/style.js";
import { useState } from "react";
import { FiX } from "react-icons/fi";

const Tabs = ({ tasks, setTasks, filterTask, setFilterTask }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleDeleteTask = (value) => {
    setTasks((items) => {
      return items.filter((tasks) => tasks.text !== value);
    });
  };

  const handleFilterTasks = (task) => {
    const updatedTasks = filterTask.includes(task.text)
      ? filterTask.filter((filterTask) => filterTask !== task.text)
      : [...filterTask, task.text];
    setFilterTask(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => filterTask.includes(task.text));
  const activeTasks = tasks.filter((task) => !filterTask.includes(task.text));

  const TaskBox = ({ task }) => {
    const isCompleted = filterTask.includes(task.text);

    return (
      <Box>
        <Inner>
          <BoxInformation>
            <div>
              {isCompleted ? (
                <CheckCircle onClick={() => handleFilterTasks(task)} />
              ) : (
                <Circle onClick={() => handleFilterTasks(task)} />
              )}
            </div>
            <div>
              <p>{task.text}</p>
            </div>
          </BoxInformation>
          <DeleteButton onClick={() => handleDeleteTask(task.text)}>
            <FiX color="#797979" />
          </DeleteButton>
        </Inner>
      </Box>
    );
  };

  return (
    <>
      <TabHeader>
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <h4>All</h4>
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <h4>Active</h4>
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <h4>Completed</h4>
        </div>
      </TabHeader>
      <div>
        <Page
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          {tasks.map((item) => (
            <TaskBox key={item.text} task={item} />
          ))}
        </Page>
        <Page
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          {activeTasks.map((task) => (
            <TaskBox key={task.text} task={task} />
          ))}
        </Page>
        <Page
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          {completedTasks.map((task) => (
            <TaskBox key={task.text} task={task} />
          ))}
        </Page>
      </div>
    </>
  );
};

export default Tabs;
