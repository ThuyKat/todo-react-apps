import { useState } from "react";
import TodoItem from "../TodoItem";
import CommonContainer from "../CommonContainer";

export default function TodoList(){
   const [taskList,setTaskList] = useState([]);
   const [inputValue,setInputValue] = useState('');
   function addTask(task){
    console.log("adding task: " + task);
    setTaskList([...taskList, task]);
    setInputValue('');
    console.log("task list is: " + taskList);
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
    return (
    <div>
   <div style={{margin:"0 auto",width:"80%"}}>
      <h1 style={{textTransform:'capitalize',fontSize:'3rem'}} >To Do List</h1>
      <div style={{width:"90%",margin:"0 auto"}}>
      <input style={{width:"calc(100% - 70px)",height:"30px",borderRadius:"5px",borderColor:"lightgray",fontSize:"1rem"}} value={inputValue} type="text" placeholder="New Task" onChange={handleInput}></input>
      <button style={{marginLeft:"10px",height:"35px",width:"50px",backgroundColor:"#0096C7",color:"white",borderRadius:"5px",fontSize:"1rem",border:"none"}} onClick={() => addTask(inputValue)}>Add</button>
      </div>
   </div>

    <CommonContainer>
      {
         taskList.map((task,index) => (<TodoItem key={index} task={task} deleteTask={()=>deleteTask(index)} id={index}/>))
      }
    </CommonContainer>

    </div>
   ) 
    

}