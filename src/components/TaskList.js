import { ListContainer, StatusBar } from "./styles/style.js";
import { useState } from "react";
import Tabs from "./Tabs.js";

const TaskList = ({ tasks, setTasks }) => {
  const [filterTask, setFilterTask] = useState([]);

  const activeCount = tasks.length - filterTask.length;

  const handleClearCompleted = () => {
    const activeTasks = tasks.filter((task) => !filterTask.includes(task.text));
    setTasks(activeTasks);
    setFilterTask([]);
  };

  return (
    <ListContainer>
      <Tabs
        tasks={tasks}
        setTasks={setTasks}
        filterTask={filterTask}
        setFilterTask={setFilterTask}
      />
      <StatusBar>
        <div className="active-tasks">
          <h4>{activeCount} Active</h4>
        </div>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </StatusBar>
    </ListContainer>
  );
};

export default TaskList;
