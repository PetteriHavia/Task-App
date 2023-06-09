import { TaskContainer, TaskButton} from "./styles/style";

const CreateTask = () => {
    return(
        <TaskContainer>
            <input type="text" placeholder="Create a new task..."/>
            <TaskButton>x</TaskButton>
        </TaskContainer>
    )
}

export default CreateTask;
