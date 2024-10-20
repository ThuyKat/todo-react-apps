// import ItemStyle from './style.module.css';
import deleteBin from '../../assets/deleteBin.png';
function TodoItem({task,deleteTask,id}){
    return(
        <div >
            <input type='checkbox'  id={id}/>
            <label  type='checkbox' htmlFor={id} >{task}</label>
            <button  onClick ={()=>deleteTask(id)}><img src={deleteBin} alt='deleteBin'/></button>
        </div>
    )
}
export default TodoItem;