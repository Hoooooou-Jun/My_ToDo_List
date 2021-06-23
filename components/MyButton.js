import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { imageicons } from '../images';

const Icon = styled.Image`
    tint-color: ${({ theme }) => theme.text};
    width: 30px;
    height: 30px;
    margin: 10px;
`;

const MyButton = ({ type, onPressOut, id }) => {
    const _onPressOut = () => {
        onPressOut(id)
    }
    return(
        <TouchableOpacity onPressOut={_onPressOut}>
            <Icon source={type} />
        </TouchableOpacity>
    );
};

export default MyButton;