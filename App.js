import React, { useState } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native'
import { theme } from './theme';
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
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false }
    };
    setNewTask('');
    setTasks({...tasks, ...newTaskObject}) // 전개연산자로 본래 tasks값과 새로운 Task를 나열
  };

  const _deleteTask = id => {
    const currentTasks = Object.assign({}, tasks); // 첫번쨰 인수에 두번째 인수를 복사
    delete currentTasks[id]; // 자바스크립트 연산자
    setTasks(currentTasks);
  };

  const _toggleTask = id => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]['completed'] = !currentTasks[id]['completed']; //completed 속성값 변경
    setTasks(currentTasks);
  }

  const _updateTask = item => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[item.id] = item;
    setTasks(currentTasks);
  }

  const _handleTextChange = text => {
    setNewTask(text);
  };

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.background}/>
      <MyView>
        {/*타이틀문구*/}
        <MainTitle>ToDo List</MainTitle>
        {/*텍스트 입력 칸*/}
        <MyInput 
          placeholder="+ Add a Task" 
          value={newTask} // MyInput에 newTask를 value라는 이름의 prop으로 보냄, newTask는 _handleTextChange를 반영함
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
         />
         {/*List활용, 역행으로 map, 순회하여 tasks 뽑아냄.*/}
         <List width={width}>
           {Object.values(tasks)
           .reverse()
           .map(item => (
            <Task 
              key={item.id}
              item={item}
              deleteTask={_deleteTask}
              toggleTask={_toggleTask}
              updateTask={_updateTask} />))}
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