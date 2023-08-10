import { FiCheckCircle, FiCircle } from "react-icons/fi";
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
  max-width: 700px;
  background: white;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;
  input {
    width: 100%;
    border: none;
    :focus {
      outline: none;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0.5rem 3rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

export const CreateTaskButton = styled.button`
  padding: 0.7rem 0rem;
  border: none;
  background: none;
  max-width: 100px;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

//TaskList styles
export const TabHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.8rem 3rem;

  h4 {
    margin: 0.7rem 1.8rem;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    justify-content: space-around;

    h4 {
      margin: 0rem 0.5rem;
    }
  }
`;

export const Box = styled.div`
  border-bottom: 1px solid rgba(121, 121, 121, 0.5);
`;

export const Inner = styled.div`
  padding: 0.8rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

export const BoxInformation = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckCircle = styled(FiCheckCircle)`
  font-size: 1.5rem;
  color: #9971dc;
`;

export const Circle = styled(FiCircle)`
  font-size: 1.5rem;
  color: #797979;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

export const Page = styled.div`
  p {
    font-size: 1.2rem;
    padding: 0rem 1rem;
  }
`;

export const ListContainer = styled.div`
  margin-top: 2rem;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  max-width: 700px;
  width: 100%;
  background-color: white;
`;

export const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 3rem;

  button {
    background: none;
    border: none;
    color: #797979;
    font-weight: 500;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
  }
`;
