import React from 'react';
import styled from 'styled-components/native';
import MyButton from './MyButton';
import { imageicons } from '../images'

const Contents = styled.Text`
    flex: 1;
    font-size: 24px;
    color: ${({ theme }) => theme.text};
`

const TaskView = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.itemBackground};
    border-radius: 10px;
    padding: 5px;
    margin: 3px 0px;
`;

const Task = ({ text })  => {
    return (
        <TaskView>
            <MyButton type={imageicons.uncompleted} />
            <Contents>{text}</Contents>
            <MyButton type={imageicons.update} />
            <MyButton type={imageicons.delete} />
        </TaskView>
    );
}

export default Task;