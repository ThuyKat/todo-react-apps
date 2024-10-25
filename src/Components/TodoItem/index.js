// import ItemStyle from './style.module.css';
import deleteBin from '../../assets/deleteBin.png';
function TodoItem({task,deleteTask,id,handleUpdate}){
    return(
        <div >
            <input type='checkbox' checked={task.isDone}  id={id} onClick={()=>handleUpdate(task.id)}/>
            <label  type='checkbox' htmlFor={id} >{task.title}</label>
            <button  onClick ={()=>deleteTask(id)}><img src={deleteBin} alt='deleteBin'/></button>
        </div>
    )
}
export default TodoItem;