// import TasksWrapperStyles from "./style.module.css";
import styled from "styled-components";
import TodoItem from "../TodoItem";
// export default function CommonContainer(props){
//     return(
//         <div className={TasksWrapperStyles.container}>{props.children}</div>
//     )
// }

const Container = styled.div`
width:80%;
margin: 0 auto;
margin-top:70px;
div{
    border: 1px solid #3d3d3d;
    width : 95%;
    cursor:pointer;
    padding:10px;
    border-radius: 5px;
    margin-bottom:10px;
    display:flex;
    flex-flow:row wrap;
    justify-content: space-between;
    &:hover {
        background-color: #b6d4e8;
    }
        button{
            right:10px; */
            display:block;
            padding:0;
            cursor:pointer;
            border:none; 
            img{
                max-width:26px;
                height: 100%;
                vertical-align: middle;
                background-color: white;
            }
        }
        label{
            display:block;
            padding-left:20px;
            cursor:pointer;
            font-style: italic ;
            font-size:1.2rem;
            width:80%;
        }
        input:checked + label{
            text-decoration:line-through;
        }
        input{
            width:25px;
        }
}

`
export default function ListContainer({taskList,handleDelete,searchValue,handleUpdate}){
   
    
    const totalTaskDone = taskList.reduce((total,task)=>task.isDone?total+1:total,0);
   
    if (!taskList.length) { // length == 0
        return <Container>
            <h4>Please add new task!</h4>
        </Container>
    }

    return(
        <Container>
            <p>Total:{totalTaskDone}/{taskList.length}</p>
            {
                taskList
                .filter((task)=>task.title.toLowerCase().includes(searchValue))
                .sort((a,b) => (a.isDone == b.isDone)? b.id - a.id :a.isDone - b.isDone)
                .map((task,index) => (<TodoItem key={index} task={task} deleteTask={handleDelete} id={index} handleUpdate={handleUpdate}/>))
            }
        </Container>
    )
}