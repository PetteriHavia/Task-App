import {Tabs, ListContainer, StatusBar} from './styles/style.js'

const TaskList = () => {
    return(
        <ListContainer>
            <Tabs>
                <h4>All</h4>
                <h4>Active</h4>
                <h4>Completed</h4>
            </Tabs>
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