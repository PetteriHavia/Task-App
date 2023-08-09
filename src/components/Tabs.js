import {TabHeader, TabContent, AllTasks, ActiveTasks, CompletedTasks, Box, Inner, DeleteButton} from './styles/style.js'
import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle.js';
import { FiX } from 'react-icons/fi';

const Tabs = ({tasks, setTasks}) => {

    const [toggleState, setToggleState] = useState(1);


    const toggleTab = (index) => {
        setToggleState(index);
    }

    const handleDeleteTask = (value) => {
        console.log(value);
        setTasks(items => {
            return items.filter(tasks => tasks.text !== value);
        })
    }

    const TaskBox = ({task}) => {
        return(
            <Box>
                <Inner>
                    <p>{task.text}</p>
                    <DeleteButton onClick={() => handleDeleteTask(task.text)}>
                        <FiX color="#797979" />
                    </DeleteButton>
                </Inner>
            </Box>
        )
    }

    return(
        <>
        <TabHeader>
            <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}><h4>All</h4></div>
            <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}><h4>Active</h4></div>
            <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}><h4>Completed</h4></div>
        </TabHeader>
        <TabContent>
            <AllTasks className={toggleState === 1 ? "content active-content" : "content"}>
            {tasks.map((item) => (
                <TaskBox key={item.text} task={item}/>
            ))}
            </AllTasks>
            <ActiveTasks className={toggleState === 2 ? "content active-content" : "content"}>
                <p>Active Tasks</p>
            </ActiveTasks>
            <CompletedTasks className={toggleState === 3 ? "content active-content" : "content"}>
                <p>Completed Tasks</p>
            </CompletedTasks>
        </TabContent>
        </>
    )
}

export default Tabs;