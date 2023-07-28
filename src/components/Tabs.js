import {TabHeader, TabContent, AllTasks, ActiveTasks, CompletedTasks} from './styles/style.js'
import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle.js';

const Tabs = ({tasks}) => {

    const [toggleState, setToggleState] = useState(1);


    const toggleTab = (index) => {
        setToggleState(index);
    }

    const Test = ({task}) => {
        return(
            <div>
                <p>{task.text}</p>
            </div>
        )
    }

    return(
        <>
        <TabHeader>
            <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>All</div>
            <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Active</div>
            <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Completed</div>
        </TabHeader>
        <TabContent>
            <AllTasks className={toggleState === 1 ? "content active-content" : "content"}>
            {tasks.map((item) => (
                <Test key={item.text} task={item}/>
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