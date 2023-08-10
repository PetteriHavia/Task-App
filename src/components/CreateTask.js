import {
  TaskContainer,
  CreateTaskButton,
  InputContainer,
} from "./styles/style";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const CreateTask = ({ input, setInput, tasks, setTasks }) => {
  const [message, setMessage] = useState("Create a new task...");

  const handleInputValue = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handlekeyDown = (e) => {
    if (e.key == "Enter") {
      handleCreateTask();
    }
  };

  const handleCreateTask = () => {
    const taskExist = tasks.some((task) => task.text === input);
    if (taskExist) {
      setInput("");
      setMessage("Task already exists!");
    } else if (input.length <= 0) {
      setMessage("Input is empty");
    } else {
      setTasks((prevTasks) => [...prevTasks, { text: input }]);
      setMessage("Create a new task...");
    }
  };

  return (
    <TaskContainer>
      <InputContainer>
        <input
          type="text"
          value={input}
          onChange={handleInputValue}
          onKeyDown={handlekeyDown}
          placeholder={message}
        />
        <CreateTaskButton onClick={handleCreateTask}>
          <FiPlus color="#9971DC" />
        </CreateTaskButton>
      </InputContainer>
    </TaskContainer>
  );
};

export default CreateTask;
