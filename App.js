import React, { useState } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native'
import { theme } from './theme';
import { imageicons } from './images';
import MyInput from './components/MyInput';
import Task from './components/Task';

function App () {    
  const [newTask, setNewTask] = useState('');
  
  const [tasks, setTasks] = useState({
    '1' : { id: '1', text: 'Hanbit', completed: false },
    '2' : { id: '2', text: 'asdfa', completed: false },
    '3' : { id: '3', text: 'hello', completed: false },
    '4' : { id: '4', text: 'javascript', completed: false },
  });

  const _addTask = () => {
    const ID = Data.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false }
    };
    setNewTask('');
    setTasks({...tasks, ...newTaskObject})
  };
  
  const _handleTextChange = text => {
    setNewTask(text);
  };

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.background}/>
      <MyView>
        <MainTitle>ToDo List</MainTitle>
        <MyInput 
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
         />
         <List width={width}>
           {Object.values(tasks).reverse().map(item => (<Task key={item.id} text={item.text} />))}
         </List>
      </MyView>
    </ThemeProvider>
  );
}

const width = Dimensions.get('window').width;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`

const MyView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const MainTitle = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;

export default App;

// item은 객채의 Key를 매개변수로 선언함.???