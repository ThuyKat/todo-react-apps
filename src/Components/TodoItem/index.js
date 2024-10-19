import ItemStyle from './style.module.css';
import deleteBin from '../../assets/deleteBin.png';
function TodoItem({task,deleteTask,id}){
    return(
        <div className={ItemStyle.checkGroup}>
            <input className={ItemStyle.checkInput}  type='checkbox'  id={id}/>
            <label className = {ItemStyle.label} type='checkbox' htmlFor={id} >{task}</label>
            <button className={ItemStyle.deleteButton} onClick ={deleteTask}><img src={deleteBin} alt='deleteBin'/></button>
        </div>
    )
}
export default TodoItem;