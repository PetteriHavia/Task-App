import { useState } from "react";
import { Container } from "../components/styles/style.js";
import CreateTask from "../components/CreateTask.js";
import TaskList from "../components/TaskList.js";

const Home = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <Container>
      <CreateTask
        input={input}
        setInput={setInput}
        setTasks={setTasks}
        tasks={tasks}
      />
      <TaskList
        input={input}
        setInput={setInput}
        setTasks={setTasks}
        tasks={tasks}
      />
    </Container>
  );
};

export default Home;
