import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const MyButton = ({ type, onPressOut, id, completed }) => { 
    {/*아이콘 색상 변경을 위해 completed 넘어옴*/}
    const _onPressOut = () => {
        onPressOut(id) // App.js에 할당된 함수들에 id값을 전달 및 호출함.
    }
    return (
        <TouchableOpacity onPressOut={_onPressOut}>
            <Icon source={type} completed={completed} />
        </TouchableOpacity>
    );
};

const Icon = styled.Image`
    tint-color: ${({ theme, completed }) => completed ? theme.done : theme.text};
    width: 30px;
    height: 30px;
    margin: 10px;
`;

export default MyButton;