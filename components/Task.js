import React, { useState } from 'react';
import styled from 'styled-components/native';
import MyButton from './MyButton';
import { imageicons } from '../images'
import MyInput from './MyInput';

const Task = ({ item, deleteTask, toggleTask, updateTask })  => {
    {/*Edit 알고리즘*/}
    const [isEditing, setIsEditing] = useState(false);

    const [text, setText] = useState(item.text);

    const _handleUpdateButtonPress = () => {
        setIsEditing(true);
    };

    const _onSubmitEditing = () => {
        if (isEditing) {
            const editedTask = Object.assign({}, item, { text }); // 두번째, 세번째를 나열하여 빈칸에 복사
            setIsEditing(false);
            updateTask(editedTask); // App.js의 _updateTask로 보냄
        }
    };

    return (
        /*isEditing의 boolean값에 따라 수정 시 코드 전환(MyInput을 가져와서 출력)*/
        isEditing ? (
            <MyInput value={text} onChangeText={text => setText(text)} onSubmitEditing={_onSubmitEditing} />
        ) : (
        <TaskView>
            {/*Toggle 버튼*/}
            <MyButton 
                type={item.completed ? imageicons.completed : imageicons.uncompleted} 
                id={item.id} 
                onPressOut={toggleTask} 
                completed={item.completed} />
            {/*Task 내용*/}
            <Contents completed={item.completed}>{item.text}</Contents>
            {/*Edit 버튼(completed가 false일 시 뒷 문구 실행)*/}
            {item.completed || <MyButton type={imageicons.update} onPressOut={_handleUpdateButtonPress} />}
            {/*Delete 버튼*/}
            <MyButton 
                type={imageicons.delete} 
                id={item.id} 
                onPressOut={deleteTask} 
                completed={item.completed} />
        </TaskView>
        )
    );
}

const Contents = styled.Text`
    flex: 1;
    font-size: 24px;
    color: ${({ theme, completed }) => (completed ? theme.done : theme.text)}; 
    text-decoration-line: ${({ completed }) => completed ? 'line-through' : 'none'};
` // completed의 boolean 값에 따라 색 및 라인처리 변경

const TaskView = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.itemBackground};
    border-radius: 10px;
    padding: 5px;
    margin: 3px 0px;
`;

export default Task;