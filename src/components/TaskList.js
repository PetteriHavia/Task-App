import {ListContainer, StatusBar} from './styles/style.js'
import Tabs from './Tabs.js';

const TaskList = ({tasks, setTasks}) => {

    return(
        <ListContainer>
            <Tabs tasks={tasks} setTasks={setTasks}/>
            <StatusBar>
                <div className="active-tasks">
                    <h4>0 Active</h4>
                </div>
                <button>Clear Completed</button>
            </StatusBar>
        </ListContainer>
    )
}

export default TaskList;