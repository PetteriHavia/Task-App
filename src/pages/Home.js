import {Container} from '../components/styles/style.js';
import styled from "styled-components";
import CreateTask from '../components/CreateTask.js';
import TaskList from '../components/TaskList.js'


const Home = () => {
    return(
        <Container>
            <CreateTask />
            <TaskList />
        </Container>
    )
}

export default Home;