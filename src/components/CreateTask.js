import { TaskContainer, TaskButton} from "./styles/style";
import { useState } from "react";

const CreateTask = ({input, setInput, tasks, setTasks}) => {

    const [message, setMessage] = useState("Create a new task...");

    const handleInputValue = (e) => {
        const value = e.target.value;
        setInput(value);
    }

    const handleCreateTask = () => {
        setTasks((prevTasks) => [...prevTasks, {text: input}]);
    }

    return(
        <TaskContainer>
            <input type="text" onChange={handleInputValue} placeholder={message}/>
            <TaskButton onClick={handleCreateTask}>x</TaskButton>
        </TaskContainer>
    )
}

export default CreateTask;
