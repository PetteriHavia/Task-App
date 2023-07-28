import styled from "styled-components";

//Homme.js styles
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9rem 1rem;
  width: 100%;
`;

//CreateTask.js styles
export const TaskContainer = styled(Container)`
  padding: 0rem;
  flex-direction: row;
  max-width: 700px;
  background: white;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;
  input {
    padding: 1rem 3rem;
    width: 100%;
    border: none;
    :focus {
      outline: none;
    }
  }
`;

export const TaskButton = styled.button`
  padding: 0.7rem 5rem;
  border: none;
  background: none;
  max-width: 100px;
  font-size: 2rem;
  cursor: pointer;
`;

//TaskList styles

export const TabHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  h4 {
    margin: 0rem 1.8rem;
  }
`;

export const TabContent = styled.div`

`;

export const AllTasks = styled.div`

`;

export const ActiveTasks = styled.div`

`;

export const CompletedTasks = styled.div`

`;

export const ListContainer = styled.div`
  margin-top: 2rem;
  padding: 1.5rem 3rem;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  max-width: 700px;
  width: 100%;
  background-color: white;
`;

export const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background: none;
    border: none;
    color: #797979;
    font-weight: 500;
    font-size: 1rem;
  }
`;
