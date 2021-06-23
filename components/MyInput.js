import React from 'react';
import { useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';

const MyInput = ({ placeholder, value, onChangeText, onSubmitEditing }) => {
    const width = useWindowDimensions().width;  
    return (
        <Input 
            width={width} 
            placeholder={ placeholder } 
            maxLength={50}
            autoCapitalize="none"
            autoCorrect={ false }
            returnKeyType="done"
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
        />
    );
};

//Input 이름 겹쳐서 다르게 설정.
const Input = styled.TextInput`
    width: ${({ width }) => width - 40}px;
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.itemBackground};
    font-size: 25px;
    color: ${({ theme }) => theme.text};
`;

export default MyInput;