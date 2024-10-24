import { useState } from "react";
import ListContainer from "../ListContainer";
import InputComponent from "../InputComponent";
import { CommonContainer,InputContainer, LogoutButton, ThemeButton, TodoContainer } from "../CommonComponents";
import Login from "../Login";

export default function TodoList({isLogin,setIsLogin}){
   const [taskList,setTaskList] = useState([]);
   const [inputValue,setInputValue] = useState('');
   const [darkMode, setDarkMode] = useState(false);
   function addTask(){
   if(inputValue) {setTaskList([...taskList, inputValue])};
    setInputValue('');
   }
   function handleInput(event){
      // console.log(event.target.value);
      const {value} = event.target;
      setInputValue(value)
      console.log(inputValue);
   }
   function deleteTask(indexToDelete){
      const updatedTaskList = taskList.filter((_,index) => index !== indexToDelete);
      setTaskList(updatedTaskList);
   }
   const handleDarkMode = () => {
      setDarkMode(!darkMode)
  }
   function Logout(){
      setIsLogin(false)
   }
   if(!isLogin){
      return <Login/>
   }
    return (
      <CommonContainer darkTheme={darkMode}>
         <LogoutButton style={{position:'fixed',top:10}} onClick={Logout}>Logout</LogoutButton>
         <ThemeButton style={{ position: 'fixed', top: 10, right: 10 }} onClick={handleDarkMode}>
                  {darkMode ? 'Light mode' : 'Dark mode'}
         </ThemeButton>
         
         <TodoContainer>
            <InputContainer>
               <h1 >To Do List</h1>
         
               <InputComponent inputValue={inputValue} handleAddTask={addTask} handleChange={handleInput}/>
         {/* <div >
         <input  value={inputValue} type="text" placeholder="New Task" onChange={handleInput}></input>
         <button  onClick={() => addTask(inputValue)}>Add</button>
         </div> */}

            </InputContainer>

            <ListContainer taskList={taskList} deleteTask={deleteTask}/>
         </TodoContainer>
    </CommonContainer>
   ) 
}