import { useState } from "react";
import ListContainer from "../ListContainer";
import InputComponent from "../InputComponent";
import { CommonContainer,CommonInput,InputContainer, LogoutButton, ThemeButton, TodoContainer } from "../CommonComponents";
import Login from "../Login";

export default function TodoList({isLogin,setIsLogin}){



   const [taskList,setTaskList] = useState([]);
   const [inputValue,setInputValue] = useState('');
   const [darkMode, setDarkMode] = useState(false);
   const [searchValue,setSearchValue]=useState('');

   function addTask(){
   const newTaskList =[...taskList];
   if(inputValue) {
      newTaskList.push({
         id:newTaskList.length,
         title:inputValue,
         idDone:false,
      })
      setTaskList(newTaskList);
      setInputValue('');
   }
   }
   function handleInput(event){
      // console.log(event.target.value);
      const {value} = event.target;
      setInputValue(value)
      console.log(inputValue);
   }
   function handleDelete(indexToDelete){
      const updatedTaskList = taskList.filter((_,index) => index !== indexToDelete);
      setTaskList(updatedTaskList);
   }
   const handleDarkMode = () => {
      setDarkMode(!darkMode)
  }
   function handleLogout(){
      setIsLogin(false)
   }
   function handleSearch(event){
      setSearchValue(event.target.value)
   }
   const handleUpdate = (id)=>{
      const newTaskList = [...taskList];
      //find the element in array using its id
      const taskIndex = newTaskList.findIndex((task)=>task.id===id)
      //update that element
      newTaskList[taskIndex].isDone = !newTaskList[taskIndex].isDone;
      // update taskList state
      setTaskList(newTaskList);
   }

   if(!isLogin){
      return <Login/>
   }
    return (
      <CommonContainer darkTheme={darkMode}>
         <LogoutButton style={{position:'fixed',top:10}} onClick={handleLogout}>Logout</LogoutButton>
         <ThemeButton style={{ position: 'fixed', top: 10, right: 10 }} onClick={handleDarkMode}>
                  {darkMode ? 'Light mode' : 'Dark mode'}
         </ThemeButton>
         
         <TodoContainer>
            <InputContainer>
               <h1 >To Do List</h1>
               <InputComponent inputValue={inputValue} handleAddTask={addTask} handleChange={handleInput}/>
               <hr/>
               <CommonInput placeholder="Search" value={searchValue} onChange={handleSearch}/>
               <hr/>
         {/* <div >
         <input  value={inputValue} type="text" placeholder="New Task" onChange={handleInput}></input>
         <button  onClick={() => addTask(inputValue)}>Add</button>
         </div> */}

            </InputContainer>

            <ListContainer taskList={taskList} handleDelete={handleDelete} searchValue={searchValue} handleUpdate={handleUpdate}/>
         </TodoContainer>
    </CommonContainer>
   ) 
}